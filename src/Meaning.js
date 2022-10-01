import { View, Text } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import { 
  AverageSans_400Regular ,useFonts
} from '@expo-google-fonts/average-sans';
import { 
  Aclonica_400Regular 
} from '@expo-google-fonts/aclonica'
const Meaning = (props) => {
  let [fontsloaded, error] = useFonts({
    AverageSans_400Regular,
    Aclonica_400Regular, 
  });
  if(!fontsloaded){
    return <AppLoading/>
  }
  else{
    return (
    <View
      style={{
        alignSelf:"center",
        height: 400,
        backgroundColor: "#D4F1F4",
        width: "90%",
        padding: 10,
        borderRadius: 30,
        marginTop: 50,
        borderWidth: 3,
        borderColor: "#05445E",
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          marginBottom: 20,
          fontFamily:'Aclonica_400Regular',
          fontSize:25
        }}
      >
        Meaning
      </Text>
      <Text style={{ alignSelf: "center",fontFamily:'AverageSans_400Regular',fontSize:20 }}>
     {props.definition}
      </Text>
      <Text style={{marginTop:10,alignSelf: "center",fontFamily:'AverageSans_400Regular',fontSize:20}}>
        {props.example}
      </Text>
    </View>
  );
  }
  
};

export default Meaning;
