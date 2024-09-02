import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
const Home = () => { 
    return( 
        <ScrollView>
            <View style={styles.container}>
                <Text style={{fontSize:25, marginTop:-5}}>Welcome!</Text>
                <Text style={{fontSize:75, marginTop:10}}>$100.00</Text>
                <Text style={{fontSize:20}}>Your Balance</Text>
                <Text style={{fontSize:25, marginTop:50}}>Sponsored Products</Text>
                <Card1 />
                <Card2 />
                <Card3 />
            </View>
        </ScrollView>
    ) 
} 
export default Home; 
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });