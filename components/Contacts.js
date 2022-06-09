import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {MaterialIcons, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';

export default function Contacts({name, phone, image}) {
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.infoContainer}>
            <Text style={styles.name} numberOfLines={1}>{name}</Text>
            <Text>{phone}</Text>
        </View>    
        <View style={styles.icons}>
            <MaterialIcons name='local-phone' size={24} color="#009cf5" />
        </View>
        <View style={styles.icons}>
            <MaterialCommunityIcons name='message-processing' size={24} color="#009cf5" />
        </View>
        <View style={styles.icons}>
            <SimpleLineIcons name='options-vertical' size={24} color="#a8a8a8" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginTop: 30,
        marginHorizontal: 20,
        alignItems: "center", 
        marginVertical: 10,
    }, 
    image:{
        width: 50, 
        height:50,
        borderRadius: 25,
    },
    infoContainer: {
        justifyContent: "center",
        marginHorizontal: 15,
        flex: 4,
    },
    name: {
        fontWeight: "bold",
        fontSize: 17,
    },
    icons:{
        flex: 1,
    }
})
