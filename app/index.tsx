import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View, ScrollView, Image } from "react-native";


export default function Index() {
  const categories = [
          { nom: "Dégradé", image: "https://www.barbededarwin.com/wp-content/uploads/2020/11/degrade-progressif-2.jpg" },
          { nom: "Taper", image: "https://i.pinimg.com/originals/5f/71/2a/5f712a241080b54e13224a6a58f118e5.jpg" },
          { nom: "Tresses", image: "https://i.pinimg.com/736x/d7/5f/f1/d75ff16569755c97fecc4c906ab8d76b.jpg" },
          { nom: "Locks", image: "https://static.wixstatic.com/media/c93c1e_98d1b37814a34f4dac87d47d3edfd36e~mv2.jpg/v1/fill/w_568,h_568,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c93c1e_98d1b37814a34f4dac87d47d3edfd36e~mv2.jpg" },
          { nom: "RnBoi", image: "https://cloudfront-eu-central-1.images.arcpublishing.com/lepoint/H6JJWMBZIZMFTHM27N67UKLWTY.jpg"}
        ]

  const bestbarber = [
          { nom: "Coiffeur1", image: "https://i.pinimg.com/736x/76/21/bb/7621bb6087ee02d1c51a38663c88e6b0.jpg" },
          { nom: "Coiffeur2", image: "https://cdn1.treatwell.net/images/view/v2.i9437819.w1080.h720.xE0A2734B/" },
        ]

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 10,
        alignItems: "center",
      }}
    >

      <View
        style={{
            borderWidth:1,
            borderRadius: 10,
            width: "90%",
            padding: 10,
            marginTop: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
      >
        <TextInput 
          placeholder="Rechercher un coiffeur"
          placeholderTextColor="gray"
          style={{
            flex: 1
          }}
        />
        <Ionicons name = "search" size={24} color="black"/>
      </View>



      <ScrollView horizontal={true}
        style={{
            padding: 10,
            maxHeight:200
        }}
      >
        {categories.map((categorie)=>(
          <View key={categorie.nom}
            style={{
              padding: 10,
              alignItems: "center"
            }}
          >
            <Image
              source={{ uri: categorie.image }}
              style={{ width: 150, height: 150, borderRadius: 10 }}
            />
            <Text>{categorie.nom}</Text>
          </View>
        ))}
      </ScrollView>
      

      <View
        style={{
            width: "90%",
            padding: 10,
            marginTop:20,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
      >
        <Text 
          style={{ 
            fontSize: 18
          }}
        >Les meilleurs coiffeurs :</Text>
      </View>

      <ScrollView horizontal={true}
        style={{
            padding: 10,
            maxHeight:200
        }}
      >
        {bestbarber.map((bestbarber)=>(
          <View key={bestbarber.nom}
            style={{
              padding: 10,
              alignItems: "center"
            }}
          >
            <Image
              source={{ uri: bestbarber.image }}
              style={{ width: 250, height: 150, borderRadius: 10 }}
            />
            <Text>{bestbarber.nom}</Text>
          </View>
        ))}
      </ScrollView>


    </View>
  );
}
