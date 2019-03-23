import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight , TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import {EvilIcons} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default class MyTitleBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      
        <View style={{flex:6}}>
            <Text style={styles.title}>WhatsApp</Text>
        </View>
        
        <View style={{flex:2 , justifyContent: 'space-between',  flexDirection:'row', alignItems:'center', marginTop:8, marginRight: 8 }}>
            <TouchableNativeFeedback onPress={() => alert('Seach Pressed')} 
              background={TouchableNativeFeedback.Ripple('black')}  >

                 <EvilIcons name="search" color="white" size={27}/>
   
            </TouchableNativeFeedback>

            <TouchableOpacity onPress={() => alert('Pressed')}>
                 <MaterialCommunityIcons name="dots-vertical" color="white" size={25} />
            </TouchableOpacity>
            

            {/* <EvilIcons name="search" color="white" size={27}/>
            <MaterialCommunityIcons name="dots-vertical" color="white" size={25} onPress={() => alert('Pressed')}/> */}
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#065E55',
    // alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  title: {
    margin: 20,
    color: 'white',
    fontSize: 20,
    marginTop: 20
  }
});
