import React  from "react"; 
import { Text ,View, StyleSheet } from 'react-native'; 
import {Card, Button , Title ,Paragraph } from 'react-native-paper'; 
  
const Card2 = () => { 
      
    return( 
         
        <Card style={Styles.container}> 
            <Card.Content> 
                <Title style={{fontSize:20, textAlign:"center", fontWeight:"bold"}}>TVÄRFOT Table Lamp</Title>
                <Paragraph></Paragraph>
            </Card.Content> 
            <Card.Cover source={{ uri: 'https://www.ikea.com/us/en/images/products/tvaerfot-table-lamp-black-white__0772756_pe756088_s5.jpg?f=s' }} /> 
            <Card.Content> 
                <Paragraph></Paragraph>
                <Paragraph>This minimalist lamp blends in with any setting. It's perfect for any use, whether it's providing ambient lighting, serving as a reading light, or anything in-between.</Paragraph>
                <Paragraph></Paragraph>
                <Button>Learn More / Purchase</Button>  
            </Card.Content> 
        </Card> 
         
    ) 
} 
export default Card2; 
  
const Styles = StyleSheet.create({ 
    container :{ 
        alignContent:'center', 
        margin:35 
    } 
})