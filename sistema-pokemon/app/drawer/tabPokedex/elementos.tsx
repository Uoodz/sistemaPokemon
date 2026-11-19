import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
            <Text>Teste3</Text>
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
