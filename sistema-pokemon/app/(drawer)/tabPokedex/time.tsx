import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ActivityIndicator, StyleSheet, FlatList, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { favoritaEvents } from '../../../src/events/favoritaEvent';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { duelarPorStatus, calcularMediaStatus } from '../../../src/utils/batalha';


const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

export const favoritarTime = 'idsTime';

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
  stats: {
    base_stat: number;
  }[];
};

export default function FavoritosScreen() {
  const listarPokemons = () => {
    setIsLoading(true);
    setError(null);
    AsyncStorage.getItem(favoritarTime)
      .then((res: any) => {
        const idsFavoritos: number[] = res ? JSON.parse(res) : [];

        if (idsFavoritos.length === 0) {
          setPokemons([]);
          setIsLoading(false);
          return;
        }

        fetch(URL)
          .then((data) => data.json())
          .then(async (lista) => {
            const detalhes: Pokemon[] = await Promise.all(
              lista.results.map(async (item: { url: string }) => {
                const r = await fetch(item.url);
                return r.json();
              })
            );
            const filtrados = detalhes.filter((p) => idsFavoritos.includes(p.id));
            setPokemons(filtrados);
          })
          .catch((err) => setError(err.message))
          .finally(() => setIsLoading(false));
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setIsLoading(false);
      });
  };

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [resultados, setResultados] = useState<string[]>([]);
  const [placar, setPlacar] = useState<string>('');
  const [carregandoLuta, setCarregandoLuta] = useState<boolean>(false);
  const [corPlacar, setCorPlacar] = useState("black");

  useEffect(() => {
    listarPokemons();
  }, []);

  useEffect(() => {
    const subscription = favoritaEvents.addListener('favoritos:changed', listarPokemons);

    return () => subscription.remove();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Carregando pokémons...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Falha ao carregar pokémons.</Text>
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }

    const removerDoTime = async (id: number) => {
    const res = await AsyncStorage.getItem(favoritarTime);
    const idsAtuais: number[] = res ? JSON.parse(res) : [];
    const novosIds = idsAtuais.filter((itemId) => itemId !== id);

    await AsyncStorage.setItem(favoritarTime, JSON.stringify(novosIds));
    favoritaEvents.emit('favoritos:changed');
  };

  async function batalhar() {
    if (pokemons.length === 0) 
      return;

    setCarregandoLuta(true);
    setResultados([]);
    setPlacar('');

    const rivais: Pokemon[] = [];
    for (let i = 0; i < pokemons.length; i++) {
      const idAleatorio = Math.floor(Math.random() * 151) + 1;
      const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${idAleatorio}`);
      const dados = await resposta.json();
      rivais.push(dados);
    }

    let minhasVitorias = 0;
    let vitoriasRival = 0;
    const frasesRounds: string[] = [];

    for (let i = 0; i < pokemons.length; i++) {
      const resultadoDuelo = duelarPorStatus(pokemons[i], rivais[i]);

      if (resultadoDuelo === 'Parabéns! Você venceu o duelo!') {
        minhasVitorias++;
        frasesRounds.push(`Round ${i + 1}: ${pokemons[i].name.charAt(0).toUpperCase() + pokemons[i].name.slice(1) } (${calcularMediaStatus(pokemons[i]).toFixed(1)}) venceu ${rivais[i].name.charAt(0).toUpperCase() + rivais[i].name.slice(1) } (${calcularMediaStatus(rivais[i]).toFixed(1)})`);
      } 
      else
        if (resultadoDuelo === 'Você perdeu o duelo.') {
          vitoriasRival++;
          frasesRounds.push(`Round ${i + 1}: ${pokemons[i].name.charAt(0).toUpperCase() + pokemons[i].name.slice(1) } (${calcularMediaStatus(pokemons[i]).toFixed(1)}) perdeu para ${rivais[i].name.charAt(0).toUpperCase() + rivais[i].name.slice(1) } (${calcularMediaStatus(rivais[i]).toFixed(1)})`);
      } 
      else {
        frasesRounds.push(`Round ${i + 1}: ${pokemons[i].name.charAt(0).toUpperCase() + pokemons[i].name.slice(1) } (${calcularMediaStatus(pokemons[i]).toFixed(1)}) empatou com ${rivais[i].name.charAt(0).toUpperCase() + rivais[i].name.slice(1) } (${calcularMediaStatus(rivais[i]).toFixed(1)})`);
      }
    }

    setResultados(frasesRounds);

    if (minhasVitorias > vitoriasRival) {
      setPlacar(`Você venceu! (${minhasVitorias} x ${vitoriasRival})`);
      setCorPlacar("green");
    } 
    else
      if (vitoriasRival > minhasVitorias) {
        setPlacar(`Você perdeu! (${minhasVitorias} x ${vitoriasRival})`);
        setCorPlacar("red");
    } 
    else {
      setPlacar(`Empate! (${minhasVitorias} x ${vitoriasRival})`);
      setCorPlacar("orange");
    }

    setCarregandoLuta(false);
  }

  function renderResultado() {
    if (!placar) {
      return null;
    }
    return (
      <View style={{ backgroundColor: 'white', margin: 12, padding: 10, borderRadius: 8 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, color: corPlacar }}>{placar}</Text>
        {resultados.map((texto, i) => (
          <Text key={i}>{texto}</Text>
        ))}
      </View>
    );
  }


  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
      <Text style={styles.titulo}>Meu Time ({pokemons.length}/6)</Text>
      <FlatList style={styles.flatList} data={pokemons} keyExtractor={(item) => String(item.id)}  ListEmptyComponent={() => (
          <Text style={styles.titulo}>Nenhum pokémon adicionado ao time.</Text>)} renderItem={({ item }) => (
          <View style={styles.cardPokedex}>
            <Image source={{ uri: item.sprites.front_default }} style={{ width: 90, height: 90 }}/>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.id} - {item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
              <Text>Tipagem: {item.types.map((t) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)).join(' / ')}</Text>
            </View>
            <TouchableOpacity style={{ justifyContent: 'center', paddingHorizontal: 8 }} onPress={() => removerDoTime(item.id)}>
              <MaterialCommunityIcons name="pokeball" size={26} color="#f80000"/>
            </TouchableOpacity>
          </View>
      )}/>
      <TouchableOpacity style={styles.botaoBatalhar} onPress={batalhar}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{carregandoLuta ? 'Lutando...' : 'Batalhar!'}</Text>
      </TouchableOpacity>
      <View>{renderResultado()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
    flex: 1,
  },

  cardPokedex: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 4,
    color: 'blue',
  },

  botaoBatalhar: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});