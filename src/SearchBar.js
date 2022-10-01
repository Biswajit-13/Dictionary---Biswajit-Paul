import { View, TextInput, Text, StyleSheet } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import { 
  AverageSans_400Regular ,useFonts
} from '@expo-google-fonts/average-sans';
const SearchBar = (props) => {
  let [fontsloaded, error] = useFonts({
    AverageSans_400Regular,
  });
  if(!fontsloaded){
    return <AppLoading/>
  }
  else{
     return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={props.SearchText}
        onChangeText={(text) => props.setSearchText(text)}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  );
  }
 
};
export default SearchBar;
const styles = StyleSheet.create({
  container: {
    margin: 10,
    width:'60%',
    alignSelf:'center'
  },
  input: {
    padding: 3,
    borderRadius: 40,
    color: "black",
    borderWidth: 3,
    // fontWeight:'bold',
    borderColor:'#05445E',
    backgroundColor:'#D4F1F4',
    // textAlign:10
    paddingLeft:15,
    fontFamily:'AverageSans_400Regular',
  },
});
