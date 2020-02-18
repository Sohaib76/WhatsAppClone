import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight ,TouchableOpacity, Image, Picker} from 'react-native';
import MyStatusBar from './Components/MyStatusBar';
import MyTitleBar from './Components/MyTitleBar';
import MyTabNavigation from './Components/MyTabNavigation';
import {MaterialIcons} from '@expo/vector-icons';
import ChatList from './Components/ChatsList';
import {Overlay} from 'react-native-elements';



export default class App extends React.Component {

  


   

  render() {
    return (
      <View style={{flex: 1}}>
        
          <MyStatusBar/>
          <MyTitleBar/>
          <View style={{flex: 16 , flexDirection:"row" ,}}>
       
          {/* <View style={{flexDirection:'row',
            flex:2, justifyContent:'center', alignItems:'center', height:52, backgroundColor:'#065E55'}}>
          <TouchableOpacity>
            <MaterialIcons name='photo-camera' color="black" size={20} /> 
          </TouchableOpacity>
          </View> */}
         
          
           <MyTabNavigation/>
          
         
             
           

          </View>
          
          
         
        
       
        
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
