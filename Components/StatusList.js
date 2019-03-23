import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight ,ScrollView, Image, ImageBackground} from 'react-native';
import {Avatar, Badge} from 'react-native-elements'
import {Entypo, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons'


//import { GiftedChat } from "react-native-gifted-chat";
//import {send, subscribe} from 'react-native-training-chat-server';


class StatusList extends React.Component {

 
  namesR = [
    {  name : "Darren Sammy", des: '43 minutes ago', src:"https://www.buyon.pk/image/cache/data/members/zohraj/cushion-16-500x500.jpg"},
     
    
    
     
   ]
   namesV = [
    { name : "Hassan Ned",  des: 'Today, 7:42 PM', src:"https://i.postimg.cc/FKJjNg3L/pp-Hassan-Status.png"},
    {  name : "X-Men",  des: 'Today 6:30 PM', src:"https://www.ienglishstatus.com/wp-content/uploads/2017/02/Cool-Status-for-Whatsapp.jpg"}, 
    { name : "Harry Potter", des: 'Today, 5:53 AM', src:"https://i0.wp.com/www.bms.co.in/wp-content/uploads/2014/06/383.jpg"},
   ]
  

  render() {

   
     
    return (



      //FlatView >>   RecyclerView
      //ScrollView   >>  ListView
      //SectionView >> Extended Version of Flat view

      <View>
     <ScrollView >


      <View style={{flexDirection:'row', margin: 10}}>
      
          <Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/men/41.jpg',
            }}
            size="large"
            
          />

          <Badge
            status="success" value={<Entypo name="plus" size={20} color='white'/>}
            containerStyle={{ position: 'absolute', top: 55, right: 250, minWidth:55 , minHeight:55}}
          />
        

        <View style={{margin: 6, width: 190}}>
           <Text style={{fontSize: 18, fontWeight:'bold'}}>My Status</Text>
           <Text style={{fontSize: 15, fontFamily:'sans-serif-medium' ,color:'grey'}}>Tap to add status update</Text>
        </View>
                
      </View>

     


      
      <View style={{backgroundColor: '#F5F5F5', width: 360, height: 31, justifyContent:"center"}}>
              <Text style={{color:'#757575', marginLeft:10 , fontWeight:'400'}}>Recent Updates</Text>
      </View>
              
      
      <FlatList
          data={this.namesR} 
          keyExtractor = {(item,index) => index.toString()}
          renderItem={({item}) =>
          <View>


             <View style={{flexDirection: 'row'}}>
              
             

                  <View style={{width: 60, height: 60,borderRadius:80, margin:10, borderWidth:1.5 , padding:2, borderColor:'#26A69A'}}>
                    <Image style = {{flex:1, flexWrap:"wrap",borderRadius:80, }} 
                        source={{uri: item.src}}/>
                  </View>

                

                <View style={{margin: 6, width: 190}}>
                  <Text style={{fontSize: 18, fontWeight:'bold'}}>{item.name}</Text>
                  <Text style={{fontSize: 15, fontFamily:'sans-serif-medium' ,color:'grey'}}>{item.des}</Text>
                </View>
                
                
              
             </View>
              <View style={{backgroundColor: 'silver', height:1, width: 250, marginLeft:90, opacity: 0.5}}>

              </View>
          </View> 
            }
          
        />

      <View style={{backgroundColor: '#F5F5F5', width: 360, height: 31, justifyContent:"center"}}>
              <Text style={{color:'#757575' , marginLeft: 10, fontWeight:'400'}}>Viewed Updates</Text>
      </View>
              

      <FlatList
          data={this.namesV} 
          keyExtractor = {(item,index) => index.toString()}
          renderItem={({item}) =>
          <View>


             <View style={{flexDirection: 'row'}}>
  
                  <View style={{width: 60, height: 60,borderRadius:80, margin:10, borderWidth:1.5 , padding:2, borderColor:'silver'}}>
                    <Image style = {{flex:1, flexWrap:"wrap",borderRadius:80, }} 
                        source={{uri: item.src}}/>
                  </View>

                

                <View style={{margin: 6, width: 190}}>
                  <Text style={{fontSize: 18, fontWeight:'bold'}}>{item.name}</Text>
                  <Text style={{fontSize: 15, fontFamily:'sans-serif-medium' ,color:'grey'}}>{item.des}</Text>
                </View>
                
                
              
             </View>
              <View style={{backgroundColor: 'silver', height:1, width: 250, marginLeft:90, opacity: 0.5}}>

              </View>
          </View> 
            }
          
        />

            
    


      </ScrollView>



      <View style={{position:'absolute', top: 360, right: 22, borderRadius:40, backgroundColor:'#ECEFF1'
              
              ,width:55, height:55, justifyContent:'center', alignItems: 'center' }}>
              
        
            <MaterialCommunityIcons name="pencil" size={25} color='#546E7A' />
        
        
      </View>


      <View style={{position:'absolute', top: 420, right: 22, borderRadius:40, backgroundColor:'#02e075'
              
              ,width:55, height:55, justifyContent:'center', alignItems: 'center' }}>
              
        
            <MaterialIcons name="add-a-photo" size={25} color='white' />
        
        
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
export default StatusList;