import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

const pokemons = 'https://pokeapi.co/api/v2/pokemon'

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
            <Text>TesteTab</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
