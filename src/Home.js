{
  /*contains the search and title and meaning*/
}
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Meaning from "./Meaning";
import SearchBar from "./SearchBar";
import axios from "axios";
const Home = () => {
  const q = "river";
  const [searchText, setSearchText] = useState("");
  const [definition, setDefinition] = useState([]);
  const [example,setExample] = useState([]);
  const getMeaning = () => {
  
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+searchText;

    return fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        var def = response[0].meanings[0].definitions[0].definition;
        console.log(def);
        setDefinition(def);

        var eg = response[0].meanings[0].definitions[0].example;
        setExample(eg);
      });
  
  };
 

  return (
    <SafeAreaView>
      <View>
        <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={getMeaning}/>
        {/* <Text>{searchText}</Text> */}
      </View>
    
      <Meaning definition={definition} setDefinition={setDefinition} example={example} setExample={example}/>

    </SafeAreaView>
  );
};

export default Home;
