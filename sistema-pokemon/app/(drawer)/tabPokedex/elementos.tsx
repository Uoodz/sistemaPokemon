import { StyleSheet, View, ScrollView, Image, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import Card from "../../../components/Card";

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Card imagem={require('../../../assets/elementospoke.png')} titulo='Elementos' texto='No universo Pokémon, os elementos, também chamados de tipos, são características que definem as habilidades, os ataques, as resistências e as fraquezas de cada espécie. Atualmente, existem 18 tipos diferentes: Normal, Fogo, Água, Planta, Elétrico, Gelo, Lutador, Venenoso, Terrestre, Voador, Psíquico, Inseto, Pedra, Fantasma, Dragão, Sombrio, Aço e Fada. Cada tipo possui vantagens e desvantagens em relação aos demais, influenciando diretamente o resultado das batalhas. Alguns Pokémon possuem apenas um tipo, enquanto outros combinam dois, criando diferentes possibilidades de estratégias e combinações.'/>
            <Card imagem={require('../../../assets/buffdebuff.jpg')} titulo='Forças e fraquezas' texto='No universo Pokémon, cada elemento possui vantagens e desvantagens em relação aos outros, formando um sistema de forças e fraquezas que influencia diretamente o resultado das batalhas. Quando um Pokémon utiliza um ataque contra um adversário que possui fraqueza àquele tipo, o dano causado é maior; já contra tipos resistentes, o dano é reduzido. Existem também imunidades, nas quais determinados tipos de Pokémon não recebem dano de certos ataques. Conhecer essas relações é fundamental para montar equipes equilibradas e desenvolver boas estratégias de combate.'/>
            <View style={styles.cardHome}>
              <Image style={styles.imagem} source={require('../../../assets/multielemen.jpg')}/>
              <Text style={styles.titulo}>Forcas e fraquezas</Text>
              <Text style={[styles.texto, { textAlign: 'left' }]}>      
              {`Normal:   Não é super eficaz contra nenhum tipo
Fogo:   Planta, Gelo, Inseto, Aço (2x)
Água:   Fogo, Terrestre, Pedra (2x)
Planta:   Água, Terrestre, Pedra (2x)
Elétrico:   Água, Voador (2x)
Gelo:   Planta, Terrestre, Voador, Dragão (2x)
Lutador:   Normal, Gelo, Pedra, Sombrio, Aço (2x)
Venenoso:   Planta, Fada (2x)
Terrestre:   Fogo, Elétrico, Venenoso, Pedra, Aço (2x)
Voador:   Planta, Lutador, Inseto (2x)
Psíquico:   Lutador, Venenoso (2x)
Inseto:   Planta, Psíquico, Sombrio (2x)
Pedra:   Fogo, Gelo, Voador, Inseto (2x)
Fantasma:   Psíquico, Fantasma (2x)
Dragão:   Dragão (2x)
Sombrio:   Psíquico, Fantasma (2x)
Aço:   Gelo, Pedra, Fada (2x)
Fada:   Lutador, Dragão, Sombrio (2x)`}              
              </Text>
            </View>
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
  titulo: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  imagem: {
    height: '250',
    width: '335',
    alignSelf: 'center',
    borderRadius: 8,
  },
  texto: {
    fontSize: 14,
    paddingHorizontal: 20,
    marginTop: 7,
    textAlign: 'justify',
    marginBottom: 30,
  },
  cardHome: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 25,
    marginHorizontal: 25,
  },
});
