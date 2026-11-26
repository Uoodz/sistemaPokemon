import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Card from "../../src/components/Card";

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Card imagem={require('../../assets/pokemon.png')} titulo="Biblioteca Pokémon" texto="Nosso aplicativo busca ensinar tudo sobre o mundo Pokemon para você e isso inclui seus nomes, seus identificadores, elementos, tipagens, evoluções, habilidades e suas artes oficiais. E você pode conferir tudo isso através da Pokédex! Fora tudo isso você também conseguirá montar seu próprio time de pokemons e verifica-lo, será calculado um sistema de força para sua equipe onde irá análisar seus pokemons (Ataque, Vida, Defesa, Ataque Especial, Defesa Especial) e também suas diferentes tipagens para definir se sua equipe é completa."/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
});
