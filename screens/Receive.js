import React  from "react"; 
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
const users = [
    {
        name: 'Sora Yamamoto - $10',
        avatar: 'https://images.pexels.com/photos/7507786/pexels-photo-7507786.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Kwame Nnamani - $5',
        avatar: 'https://images.pexels.com/photos/6626882/pexels-photo-6626882.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Imani Achebe - $7',
        avatar: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];
export default function Receive() {
    return (
      <>
        <ScrollView>
          <View style={styles.container}>
            <Card>
              {users.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: u.avatar }}
                    />
                    <Text style={styles.name}>{u.name}</Text>
                  </View>
                );
              })}
            </Card>
          </View>
        </ScrollView>
      </>
    );
}
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        fonts: {
          marginBottom: 8,
        },
        user: {
          flexDirection: 'row',
          marginBottom: 40,
        },
        image: {
          width: 50,
          height: 50,
          marginRight: 10,
        },
        name: {
          fontSize: 20,
          marginTop: 12,
        },
        });