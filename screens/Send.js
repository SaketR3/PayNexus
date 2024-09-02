import React  from "react"; 
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
const users = [
    {
      name: 'Add Someone',
      avatar: 'https://t4.ftcdn.net/jpg/00/70/16/29/360_F_70162903_5mFpUbO3ZfRyD4gslH8j2c5VxjGMKU9G.jpg',
    },
    {
        name: 'Ayaan Owusu',
        avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Lucia Alvarez',
      avatar:
        'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Ben Johnson',
      avatar:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Sora Yamamoto',
        avatar: 'https://images.pexels.com/photos/7507786/pexels-photo-7507786.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Emma Smith',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Kwame Nnamani',
        avatar: 'https://images.pexels.com/photos/6626882/pexels-photo-6626882.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Kai Huang',
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Omar Ayad',
        avatar: 'https://images.pexels.com/photos/6475046/pexels-photo-6475046.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Imani Achebe',
        avatar: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Alejandra Garcia',
        avatar: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];
export default function Send() {
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