import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { favoritaEvents } from '../../../src/events/favoritaEvent';
import { favoritarTime } from './time';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: { name: string };
  }[];
};

export default function Page() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [favoritosIds, setFavoritosIds] = useState<number[]>([]);


  useEffect(() => {
    async function carregar() {
      const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
      const lista = await resposta.json();

      const detalhes: Pokemon[] = await Promise.all(
        lista.results.map(async (item: { url: string }) => {
          const r = await fetch(item.url);
          return r.json();
        })
      );
      setPokemons(detalhes);
    }
    carregar();
  }, []);



  useEffect(() => {
    const carregarFavoritos = async () => {
      const res = await AsyncStorage.getItem(favoritarTime);
      setFavoritosIds(res ? JSON.parse(res) : []);
    };

    carregarFavoritos();

    const subscription = favoritaEvents.addListener('favoritos:changed', carregarFavoritos);
    return () => subscription.remove();
  }, []);

  const toggleFavorito = async (id: number) => {
    const res = await AsyncStorage.getItem(favoritarTime);
    const idsAtuais: number[] = res ? JSON.parse(res) : [];

    let novosIds: number[];

    if (idsAtuais.includes(id)) {
      novosIds = idsAtuais.filter((itemId) => itemId !== id);
    } else {
      if (idsAtuais.length >= 6) {
        return;
      }
      novosIds = [...idsAtuais, id];
    }

    await AsyncStorage.setItem(favoritarTime, JSON.stringify(novosIds));
    setFavoritosIds(novosIds);
    favoritaEvents.emit('favoritos:changed');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList data={pokemons} keyExtractor={(p) => String(p.id)} renderItem={({ item }) => (
            <View style={styles.cardPokedex}>
              <Image source={{ uri: item.sprites.front_default }} style={{ width: 90, height: 90 }}/>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 12 }}>{item.id} - {item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                <Text style={{ marginLeft: 12 }}>Tipagem: {item.types.map((t) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)).join(' / ')}</Text>
              </View>
              <TouchableOpacity style={{ justifyContent: 'center', paddingHorizontal: 8 }} onPress={() => toggleFavorito(item.id)}>
                  <MaterialCommunityIcons name="pokeball" size={26} color={favoritosIds.includes(item.id) ? '#f80000' : '#b8b8b8'}/>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
  },
  cardPokedex: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});