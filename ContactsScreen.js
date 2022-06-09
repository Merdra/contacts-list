import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Contacts from './components/Contacts';

export default function ContactsScreen() {
    const contacts = [
        {name:"Sam Bob", number:"024-246-3512", image:require("./assets/pix.jpg")},
        {name:"Gayuvi Samuel", number:"020-875-6248", image:require("./assets/pix (1).jpg")},
        {name:"Bibini Kopey", number:"059-874-8897", image:require("./assets/pix (1).png")},
        {name:"Eddie Garfield", number:"021-245-8795", image:require("./assets/pix (2).jpg")},
        {name:"Zuphoriah Friend", number:"095-879-9832", image:require("./assets/pix (3).jpg")},
        {name:"Nii Kpakpo", number:"008-879-1123", image:require("./assets/pix (4).jpg")},
        {name:"Sammy Forson", number:"28-547-9874", image:require("./assets/pix (5).jpg")},
    ]
  return (
    <View>
        <FlatList
        data={contacts}
        renderItem={({item}) => {
          return <Contacts name={item.name} phone={item.number} image={item.image} />
        }}
        keyExtractor={(item)=>item.number}
        />
    </View>
  )
}
