import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.titulo}>O que é o mundo pokemon ?</Text>
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
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
