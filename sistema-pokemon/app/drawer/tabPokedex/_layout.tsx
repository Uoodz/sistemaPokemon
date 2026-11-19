import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function TabsLayout () {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name='index' options={{title: 'Pokédex', tabBarIcon: () => <Ionicons name='book-outline' size={20}/>}}/>
            <Tabs.Screen name='time' options={{title: 'Time', tabBarIcon: () => <Ionicons name='sparkles-outline' size={20}/>}}/>
            <Tabs.Screen name='elementos' options={{title: 'Elementos', tabBarIcon: () => <Ionicons name='flame-outline' size={20}/>}}/>
        </Tabs>
    )
}