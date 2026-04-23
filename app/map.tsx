import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";


export default function Map(){
    const coiffeur = [
        { nom: "Hitl'Hair", latitude: 48.9, longitude:2.4},
        { nom: "Pach'Hair", latitude: 48.8, longitude:2.51},
        { nom: "On'Hair", latitude: 48.7, longitude:2.3}
    ]
    const [selectedCoiffeur, setSelectedCoiffeur] = useState(null);
    return (
        <GestureHandlerRootView style={{
            flex: 1
        }}
        >
            <MapView 
                style={{ 
                    flex: 1
                }}
                initialRegion={{
                    latitude: 48.8566,
                    longitude:2.3522,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }} 
            >
                {coiffeur.map((item)=>(
                    <Marker key={item.nom}
                        coordinate={{ latitude: item.latitude, longitude: item.longitude}} 
                        title={item.nom}
                        tracksViewChanges={false}
                        onPress={() => setSelectedCoiffeur(item)}
                    >
                        <View>
                            <Ionicons name="location-sharp" size={19} color="black"/>
                        </View>
                    </Marker>
                ))}
            </MapView>
        </GestureHandlerRootView>
    )
}