//https://reactnavigation.org/docs/en/tab-based-navigation.html
import React, {Component} from 'react';
import { ScrollView, 
  Button, StyleSheet, Text, View , Image,TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import {Feather, Entypo} from '@expo/vector-icons'
import {createMaterialTopTabNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'
import ChatList from './ChatsList';
import StatusList from './StatusList';
import {Badge } from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons'
import CallList from './CallsList';




//Classes OR Screens
class HomeScreen extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                 <Text style={{fontSize: 30}}>This Is Status Section</Text>
            </View>
         
        )
    }
}


class FirstYear extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                 <Text style={{fontSize: 30}}>This Is Chats Section</Text>
            </View>
         
        )
    }
}


class SecondYear extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                 <Text style={{fontSize: 30}}>This Is Calls Section</Text>
            </View>
         
        )
    }
}

//TabNavigator
const TabNavigator = createMaterialTopTabNavigator(
{
    //ROUTESSS
   


    Status : {
        screen: StatusList,
        
        navigationOptions: {

                
            
                tabBarIcon: ()=> <Badge  status="success"
                badgeStyle={{backgroundColor:'white',}}
                badgeSize={8}
                containerStyle={{ position: 'absolute', top: 38, right: -30 }}
            />
            
            
           
        }
        // navigationOptions: {
        //     tabBarIcon: ()=> <Feather name="home" size={20} color='blue'/>,
        //     tabBarLabel: "Fish Off"
        // }
    },
    Chats : {
        screen: ChatList,
        navigationOptions: {
            tabBarIcon: ()=> <Badge  status="success" value={<Text style={{color: '#065E55', fontSize:10}}>1</Text>} 
            badgeStyle={{backgroundColor:'white',}}
            badgeSize={16}
            containerStyle={{ position: 'absolute', top: 33, right: -34 }}
        />
            //tabBarIcon: ()=> <Entypo name="chat" size={20} color='blue'/>,
        }
    },
    Calls : {
        screen: CallList,
        // navigationOptions: {
        //     tabBarIcon: ()=> <Feather name="mail" size={20} color='blue'/>,
        // }
    },

},
{


    // if (navigation.state === "Status"){
        // Do not render badge
    // }
   





    //STYLINGGG
    initialRouteName : "Chats",
    tabBarPosition: "top",
    tabBarOptions: {
        activeTintColor: 'yellow',
        inactiveTintColor: 'blue',
        showIcon: 'true',
        labelStyle:{
            fontSize: 15,
            color: 'white'
        },
        tabStyle: {
            // width: 200
            height: 60
        },
        style: {
            backgroundColor: "#065E55",
            // borderRadius: 8
        },
        indicatorStyle: {
            backgroundColor: 'white'
        }



      },
      order: ["Chats", "Status", 'Calls']
  
}
);






export default MyTabNavigation = createAppContainer(TabNavigator);