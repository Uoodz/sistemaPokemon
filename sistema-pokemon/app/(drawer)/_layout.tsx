import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerLayout () {
    return (
        <Drawer screenOptions={{ headerShown: true}}>
            <Drawer.Screen name='index' options={{title: 'Início', drawerIcon: () => <Ionicons name='home-outline' size={20}/>}}/>
            <Drawer.Screen name='tabPokedex' options={{title: 'Pokédex', drawerIcon: () => <Ionicons name='book-outline' size={20}/>}}/>
            <Drawer.Screen name='sobre' options={{title: 'Sobre', drawerIcon: () => <Ionicons name='information-circle-outline' size={20}/>}}/>          
        </Drawer>
    )
}