import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <View>
            <Image style={styles.imagem} source={require('../../assets/pokemon.png')}/>
            <Text style={styles.titulo}>Biblioteca Pokémon</Text>
            <Text style={styles.texto}>Nosso aplicativo busca ensinar tudo sobre o mundo Pokemon para você e isso inclui seus nomes, seus identificadores, elementos, tipagens, evoluções, habilidades e suas artes oficiais. E você pode conferir tudo isso através da Pokédex !</Text>
            <Text style={styles.texto}>Fora tudo isso você também conseguirá montar seu próprio time de pokemons e verifica-lo, será calculado um sistema de força para sua equipe onde irá análisar seus pokemons (Ataque, Vida, Defesa, Ataque Especial, Defesa Especial) e também suas diferentes tipagens para definir se sua equipe é completa.</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  titulo: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },

  imagem: {
    height: '200',
    width: '450',
    alignSelf: 'center',
  },

  texto: {
    fontSize: 14,
    paddingHorizontal: 20,
    marginTop: 7,
    textAlign: 'justify',
  }
});
