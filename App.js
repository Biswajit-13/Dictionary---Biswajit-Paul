
import { StyleSheet, StatusBar,Text, View ,SafeAreaView} from 'react-native';
import Home from './src/Home';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#189AB4',
    marginTop: StatusBar.currentHeight,
    height:"100%",
  },
});
