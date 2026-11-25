import { StyleSheet, Text, View, Image } from "react-native";

export default function Page() {
  return (
        <View style={styles.container}>
            <View style={styles.cardHome}>
              <Image style={styles.imagem} source={require('../../assets/pokemon.png')}/>
              <Text style={styles.titulo}>Biblioteca Pokémon</Text>
              <Text style={styles.texto}>Nosso aplicativo busca ensinar tudo sobre o mundo Pokemon para você e isso inclui seus nomes, seus identificadores, elementos, tipagens, evoluções, habilidades e suas artes oficiais. E você pode conferir tudo isso através da Pokédex !</Text>
              <Text style={styles.texto}>Fora tudo isso você também conseguirá montar seu próprio time de pokemons e verifica-lo, será calculado um sistema de força para sua equipe onde irá análisar seus pokemons (Ataque, Vida, Defesa, Ataque Especial, Defesa Especial) e também suas diferentes tipagens para definir se sua equipe é completa.</Text>
            </View>
          </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },

  titulo: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },

  imagem: {
    height: 180,
    width: 325,
    alignSelf: 'center',
    borderRadius: 8,
  },

  texto: {
    fontSize: 14,
    paddingHorizontal: 20,
    marginTop: 7,
    textAlign: 'justify',
  },
  cardHome: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 14,
    marginHorizontal: 18,
    padding: 14,
  },
});
