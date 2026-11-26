import { StyleSheet, View, Text, Image } from 'react-native'




export default function Card (props: any) {
    return (
        <View style={styles.cardHome}>
            <Image style={styles.imagens} source={props.imagem}/>
            <Text style={styles.titulos}>{props.titulo}</Text>
            <Text style={styles.textos}>{props.texto}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
  cardHome: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 25,
    marginHorizontal: 25,
    marginBottom: 30,
    padding: 10,
  },

  titulos: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },

  imagens: {
    height: '250',
    width: '335',
    alignSelf: 'center',
    borderRadius: 8,
  },

  textos: {
    fontSize: 14,
    paddingHorizontal: 10,
    marginTop: 7,
    textAlign: 'justify',
    marginBottom: 30,
  },
});
