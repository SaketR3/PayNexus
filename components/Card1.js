import React  from "react"; 
import { Text ,View, StyleSheet } from 'react-native'; 
import {Card, Button , Title ,Paragraph } from 'react-native-paper'; 
  
const Card1 = () => { 
      
    return( 
         
        <Card style={Styles.container}> 
            <Card.Content> 
                <Title style={{fontSize:20, textAlign:"center", fontWeight:"bold"}}>Nintendo Switch OLED</Title>
            </Card.Content> 
            <Card.Cover source={{ uri: 'https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/4709f4e5925590e2003d78a7a1e77edb/5/1/51tn0lvh78l._sl1000_1024x1024_2x.jpg' }} /> 
            <Card.Content> 
                <Paragraph></Paragraph>
                <Paragraph>The hybrid video game console that you can enjoy both at home and on-the-go, now with new features such as an OLED screen and improved stand!</Paragraph>
                <Paragraph></Paragraph>
                <Button>Learn More / Purchase</Button>  
            </Card.Content> 
        </Card> 
         
    ) 
} 
export default Card1; 
  
const Styles = StyleSheet.create({ 
    container :{ 
        alignContent:'center', 
        margin:35 
    } 
})