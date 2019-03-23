import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight , Image, ScrollView} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import {Badge} from 'react-native-elements';

//import { GiftedChat } from "react-native-gifted-chat";
//import {send, subscribe} from 'react-native-training-chat-server';


class ChatList extends React.Component {

 
  newChats = [
    { time: '11:02 PM' ,name : "Sarfaz Ahmed", des: 'We will also win the world cup.', src:"https://images.gulfnews.com/201903/190316%20quetta_resources1.jpg"},
  ]


  names = [

    
   
    { time: '10:02 PM' ,name : "Group Pubg", des: 'Ubadah: Pubg ajaow', src:"https://i.postimg.cc/k5DXfXR1/ppPubg.jpg"},
     { time: '09:44 PM' ,name : "Ned-Biomedical",  des: 'CosmicRoy: Or mere paas..', src:"https://i.postimg.cc/x1RybZHh/ppNed.jpg"},
     { time: '09:05 PM' , name : "Adeel",  des: 'Adeel: Han', src:"https://i.postimg.cc/htZ3xNbh/ppAdeel.jpg"}, 
     { time: '07:35 PM' ,name : "ProtoDrop", des: 'Adeel: https://youtu.be/r..', src:"https://i.postimg.cc/DyC95QQh/pp-Proto-Drop.jpg"},
     { time: '06:26 PM' ,name : "PIAIC Group",  des: 'Dr: thank u bhai', src:"https://i.postimg.cc/2yNZsB48/pp-Piaic-Group.jpg"},
     { time: '05:44 PM' , name : "Karachi_Update",  des: '+92 3003484241 changed ..', src:"https://i.postimg.cc/KjQtt8MG/pp-Karachi-Update.jpg"}, 
    
    
     
   ]
  

  render() {

   
     
    return (

      //FlatView >>   RecyclerView
      //ScrollView   >>  ListView
      //SectionView >> Extended Version of Flat view

      <View>

      
     <ScrollView >

      <FlatList
          data={this.newChats} 
          keyExtractor = {(item,index) => index.toString()}
          renderItem={({item}) =>
          <View>
             <View style={{flexDirection: 'row'}}>
              
               <Image 
                style = {{width: 70, height: 70, borderRadius:80, margin:10}} 
                source={{uri: item.src}}/>
                <View style={{margin: 10, width: 245}}>
                  <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={{fontSize: 18, fontWeight:'bold'}}>{item.name}{'\n'}</Text>
                    <Text style={{fontSize: 10, fontFamily:'sans-serif-medium' ,color:'grey'}}>{item.time}</Text>
                  </View>
                  <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{fontSize: 15, fontFamily:'sans-serif-medium' ,color:'grey'}}>{item.des}{'\n'}</Text>
                    
                    <Badge
                      status="success" value="2"
                      badgeStyle={{backgroundColor:'#00E676', width:25, height:25, borderRadius:80}}
                      
                     // containerStyle={{ position: 'absolute', top: 55, right: 250, minWidth:55 , minHeight:55}}
                    />
                    
                    
                  </View>
                 
                </View>
                <View style={{marginLeft:10, marginTop:20}}>
                  
                </View>
                
              
             </View>
              <View style={{backgroundColor: 'silver', height:1, width: 250, marginLeft:90, opacity: 0.5}}>

              </View>
          </View> 
            }
          
        />


      <FlatList
          data={this.names} 
          keyExtractor = {(item,index) => index.toString()}
          renderItem={({item}) =>
          <View>
             <View style={{flexDirection: 'row'}}>
              
               <Image 
                style = {{width: 70, height: 70, borderRadius:80, margin:10}} 
                source={{uri: item.src}}/>
                <View style={{margin: 10, width: 190}}>
                  <Text style={{fontSize: 18, fontWeight:'bold'}}>{item.name}{'\n'}</Text>
                  <Text style={{fontSize: 15, fontFamily:'sans-serif-medium' ,color:'grey'}}>{item.des}{'\n'}</Text>
                </View>
                <View style={{marginLeft:10, marginTop:20}}>
                  <Text style={{fontSize: 10, fontFamily:'sans-serif-medium' ,color:'grey'}}>{item.time}</Text>
                </View>
                
              
             </View>
              <View style={{backgroundColor: 'silver', height:1, width: 250, marginLeft:90, opacity: 0.5}}>

              </View>
          </View> 
            }
          
        />

      

      </ScrollView>

      <View style={{position:'absolute', top: 420, right: 22, borderRadius:40, backgroundColor:'#02e075' ,width:55, height:55, justifyContent:'center', alignItems: 'center' }}>
            

          <MaterialIcons name="message" size={25} color='white' />


      </View>

    </View>
    )  
  }
}
const styles = {

 
  txtStyle: {
    fontSize : 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  }

}
export default ChatList;