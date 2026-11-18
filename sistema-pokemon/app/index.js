import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <View>
            <Image style={styles.imagem} source={require('../assets/pokemon.png')}/>
            <Text style={styles.titulo}>Biblioteca Pokémon</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titulo: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  imagem: {
    height: '60%',
    width: '100%',
    alignSelf: 'center',
  },
});
