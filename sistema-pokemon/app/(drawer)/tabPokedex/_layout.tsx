import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabsLayout () {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name='index' options={{title: 'Pokédex', tabBarIcon: () => <Image style={{ width: 20, height: 20 }} source={require('../../../assets/pokedexTab.jpg')}/>}}/>
            <Tabs.Screen name='time' options={{title: 'Time', tabBarIcon: () => <Image style={{ width: 20, height: 20 }} source={require('../../../assets/timeTab.jpg')}/>}}/>
            <Tabs.Screen name='elementos' options={{title: 'Elementos', tabBarIcon: () => <Image style={{ width: 20, height: 20 }} source={require('../../../assets/elementosTab.jpg')}/>}}/>
        </Tabs>
    )
}