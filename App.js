import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight , Image, Picker} from 'react-native';
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
          <View style={{flex: 16 , flexDirection:"column" ,}}>
          {/* <View style={{alignItems:"flex-end", backgroundColor:'blue'}}>

            
          </View> */}
         
           <MyTabNavigation/>
           <MaterialIcons name='photo-camera' color="white" size={20}/>         
           
             
           

          </View>
          
          
          {/* Delete */}
          {/* <View style={{flex:  2, alignItems:'center',}}>
         
          

          </View> */}
        
       
        
     
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
