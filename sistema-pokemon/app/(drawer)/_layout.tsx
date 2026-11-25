import { Drawer } from 'expo-router/drawer';
import { Image } from 'react-native';

export default function DrawerLayout () {
    return (
        <Drawer screenOptions={{ headerShown: true, drawerStyle: { height: '100%', width: '65%'}, drawerActiveBackgroundColor: 'white'}}>
            <Drawer.Screen name='index' options={{title: 'Início', drawerIcon: () => <Image style={{ width: 20, height: 20 }} source={require('../../assets/homeDrawer.jpg')}/>}}/>
            <Drawer.Screen name='tabPokedex' options={{title: 'Pokédex', drawerIcon: () => <Image style={{ width: 20, height: 20 }} source={require('../../assets/pokedex.jpg')}/>}}/>
            <Drawer.Screen name='sobre' options={{title: 'Sobre', drawerIcon: () => <Image style={{ width: 20, height: 20 }} source={require('../../assets/sobreDrawer.jpg')}/>}}/>          
        </Drawer>
    )
}