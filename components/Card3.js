import React  from "react"; 
import { Text ,View, StyleSheet } from 'react-native'; 
import {Card, Button , Title ,Paragraph } from 'react-native-paper'; 
  
const Card3 = () => { 
      
    return( 
         
        <Card style={Styles.container}> 
            <Card.Content> 
                <Title style={{fontSize:20, textAlign:"center", fontWeight:"bold"}}>Decode and Conquer, Fourth Edition</Title>
                <Paragraph></Paragraph>
            </Card.Content> 
            <Card.Cover source={{ uri: 'https://file-uploads.teachablecdn.com/ac35096373094d479ddf10ab02fecdf1/4eaf776a5c9c4b35aebcd40e91e90bd0' }} /> 
            <Card.Content> 
                <Paragraph></Paragraph>
                <Paragraph>This best-selling book serves as a comprehensive guide to help you ace PM interviews, with plenty of examples and strategies to help you do your best!</Paragraph>
                <Paragraph></Paragraph>
                <Button>Learn More / Purchase</Button>  
            </Card.Content> 
        </Card> 
         
    ) 
} 
export default Card3; 
  
const Styles = StyleSheet.create({ 
    container :{ 
        alignContent:'center', 
        margin:35 
    } 
})