import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import Card from "../../components/Card";

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
              <Card imagem={require('../../assets/pokemonmap.jpg')} titulo="Mundo Pokemon" texto="O mundo Pokémon é vasto e diversificado, composto por diversas regiões, cidades, rotas, florestas, cavernas, oceanos e outros ambientes que abrigam diferentes espécies de Pokémon. Cada região possui características próprias, culturas, desafios, treinadores e locais importantes, como ginásios, centros Pokémon e áreas selvagens. O mapa permite que os jogadores explorem livremente esses ambientes, descubram novos Pokémon, enfrentem adversários, encontrem itens e avancem em suas jornadas, tornando a exploração uma das principais partes da experiência Pokémon."/>
              <Card imagem={require('../../assets/pokemons.avif')} titulo="Pokemons" texto="Os Pokémon são criaturas que possuem diferentes características, habilidades, atributos e tipos, que determinam seu comportamento, suas vantagens e desvantagens em combate. Existem diversos tipos, como Fogo, Água, Planta, Elétrico, Psíquico, Dragão e outros, cada um com interações específicas entre si, criando um sistema de fraquezas e resistências. Além disso, os Pokémon possuem atributos como HP, ataque, defesa, velocidade e habilidades especiais, podendo evoluir, aprender novos movimentos e, em alguns casos, mudar de forma ou adquirir novas características. Essa diversidade permite diferentes estratégias de batalha, incentivando os jogadores a montar equipes equilibradas e explorar as particularidades de cada Pokémon."/>
              <Card imagem={require('../../assets/satoshitajiri.jpeg')} titulo="O criador" texto="O universo Pokémon foi criado por Satoshi Tajiri, um desenvolvedor e designer japonês apaixonado por colecionar insetos durante sua infância, hobby que serviu de inspiração para a ideia de capturar, colecionar e trocar criaturas. Junto à equipe da Game Freak e com o apoio da Nintendo, ele desenvolveu o conceito que deu origem a Pokémon, lançado inicialmente em 1996 com os jogos Pokémon Red e Green para o Game Boy. A franquia rapidamente se tornou um fenômeno mundial, expandindo-se para jogos, animes, filmes, cartas colecionáveis e diversos outros produtos, tornando-se uma das maiores marcas de entretenimento do mundo."/>
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
