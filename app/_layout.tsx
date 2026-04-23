import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'

export default function RootLayout() {
  return <Tabs>
    <Tabs.Screen name='index' options={{tabBarLabel:"Accueil",title: "TrustBarber", tabBarIcon: ({color}) => <Ionicons name = "home" size={24} color={color} />}} />
    <Tabs.Screen name='map' options={{tabBarLabel:"Map", title: "Cherchez un barber",tabBarIcon: ({color}) => <Ionicons name = "map" size={24} color={color} />}} />
    <Tabs.Screen name='mobile' options={{tabBarLabel:"Mobile", title: "Barber",tabBarIcon: ({color}) => <Ionicons name = "walk" size={24} color={color} />}} />
    <Tabs.Screen name='booking' options={{tabBarLabel:"Booking",title: "Vos rendez-vous",tabBarIcon: ({color}) => <Ionicons name = "calendar" size={24} color={color} />}} />
    <Tabs.Screen name='profile' options={{tabBarLabel:"Profile", title: "Votre profile",tabBarIcon: ({color}) => <Ionicons name = "person" size={24} color={color} />}} />
  </Tabs>;
}
