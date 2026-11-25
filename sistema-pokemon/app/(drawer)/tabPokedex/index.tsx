import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image,TouchableOpacity,Modal, } from "react-native";
const pokemons = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'

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
  abilities: {
    ability: { name: string };
    is_hidden: boolean;
  }[];
  stats: {
    base_stat: number;
    stat: { name: string };
  }[];
};

export default function Page() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

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

  return (

      <View style={styles.container}>
        <FlatList
          data={pokemons}
          keyExtractor={(p) => String(p.id)}
          renderItem={({ item }) => (
            <TouchableOpacity>
            <View style={styles.cardPokedex}>
              <Image
                source={{ uri: item.sprites.front_default }}
                style={{ width: 90, height: 90 }}
              />
              <Text style={{ fontSize: 16 }}>{item.id}  - {item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
              
            </View>
            </TouchableOpacity>
          )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
