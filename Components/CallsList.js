import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight , Image} from 'react-native';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons'
import { Badge } from 'react-native-elements';

//import { GiftedChat } from "react-native-gifted-chat";
//import {send, subscribe} from 'react-native-training-chat-server';


class CallList extends React.Component {

 
  names = [
    { color:"#FF5252",name : "abdul malik", des: 'March 15, 12:21 PM', src:"https://i.postimg.cc/ZYDj2mg0/pp-Abdul-Malik.jpg"},
     {color:"#00E676",name : "Mama Italy",  des: 'March 15, 12:21 PM', src:"https://i.postimg.cc/gkZy7Z8B/pp-Mama-Italy.jpg"},
     { color:"#00E676", name : "Daniel Radcliff",  des: 'January 17, 8:22 PM', src:"https://i.postimg.cc/Bt9F3mH7/harry-potter-and-the-deathly-hallows-harry-potter-daniel-radclif.jpg"}, 
     { color:"#00E676",name : "Emma Watson", des: '8/27/17', src:"https://i.postimg.cc/pXfCTjr5/img23.jpg"},
     {color:"#FF5252", name : "Smeagol",  des: '8/11/17', src:"https://i.postimg.cc/VN6WDHRX/kino-the-lord-of-the-rings-vlastelin-kolec-29714.jpg"},
     { color:"#00E676", name : "Agent 25",  des: '3/14/17', src:"https://i.postimg.cc/rs6GyyL9/Socom-Confrontation-HDGames-Desktop-Background-HQMwallpapers-com-37.jpg"},
     { color:"#00E676", name : "Agent 47",  des: '1/20/16', src:"https://i.postimg.cc/KjnP1XGh/Screenshot-20170830-160349.png"},  
    
    
     
   ]
  

  render() {

   
     
    return (



      //FlatView >>   RecyclerView
      //ScrollView   >>  ListView
      //SectionView >> Extended Version of Flat view
     <View >

      
      <FlatList
          data={this.names} 
          keyExtractor = {(item,index) => index.toString()}
          renderItem={({item}) =>
          <View>
             <View style={{flexDirection: 'row'}}>
              
               <Image 
                style = {{width: 55, height: 55, borderRadius:80, margin:10}} 
                source={{uri: item.src}}/>
                <View style={{margin: 10, width: 190}}>
                  <Text style={{fontSize: 18, fontWeight:'bold'}}>{item.name}</Text>
                  <View style={{flexDirection:"row"}}>
                      <MaterialCommunityIcons name="arrow-bottom-left" size={20} color={item.color}/>
                    <Text style={{fontSize: 15, fontFamily:'sans-serif-medium' ,color:'grey'}}>{item.des}</Text>
                  </View>
                 
                </View>
                <View style={{marginLeft:10, marginTop:24}}>
                  <MaterialIcons name="call" size={25} color="#00897B"/>
                </View>
                
              
             </View>
              <View style={{backgroundColor: 'silver', height:1, width: 250, marginLeft:90, opacity: 0.5}}>

              </View>
          </View> 
            }
          
        />
         <View style={{position:'absolute', top: 420, right: 22, borderRadius:40, backgroundColor:'#02e075'
        
            ,width:55, height:55, justifyContent:'center', alignItems: 'center' }}>
            
            
                <MaterialCommunityIcons name="phone-plus" size={25} color='white' />
            
            
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
export default CallList;