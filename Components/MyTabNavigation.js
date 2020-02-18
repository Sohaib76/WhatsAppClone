//https://reactnavigation.org/docs/en/tab-based-navigation.html
import React, {Component} from 'react';
import { ScrollView, 
  Button, StyleSheet, Text, View , Image,TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import {Feather, Entypo} from '@expo/vector-icons'
import {createMaterialTopTabNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'
import ChatList from './ChatsList';
import StatusList from './StatusList';
import {Badge } from 'react-native-elements';

import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import CallList from './CallsList';
import MyCamera from './MyCamera';




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

    //Uncomment...
    // Camera: {
    //     screen : MyCamera,

      
    //     // tabBarOptions: {
            
    //     //   },
        
   
    //     navigationOptions: {

    //       tabBarLabel: () =>   <MaterialIcons name='photo-camera' color="black" size={20} />,
            
    //       

    //        tabStyle: { 
    //         width:1
    //       } 
           
    //         //tabBarIcon: () =>    <MaterialIcons name='photo-camera' color="black" size={20}/> 
            
    //      }
    //  }
    

},
{



    // if (navigation.state === "Status"){
        // Do not render badge
    // }

    


    
    //STYLINGGG
    initialRouteName : "Chats",

    
    
    // tabStyle: {
    //     height: 40
    // },
    defaultNavigationOptions: ({ navigation }) => ({
        tabStyle: ({ width }) => {
        let value;
        const routeName = navigation.state;
   
        if (routeName === 'Camera') {
            //iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            alert("afsaf");
            width = 5;
            
            // Sometimes we want to add badges to some icons. 
            // You can check the implementation below.
            //IconComponent = HomeIconWithBadge; 
          }

            return {width: width};
        }

    }),

    
   
    Camera: {
        screen : MyCamera,
        tabBarOptions: {
            tabStyle: {
                width: 5
            }
        }
    },

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
            //width: (navigation.state === "Camera") ? 5 : 20,
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
      //Camera
      order: [ "Chats", "Status", 'Calls']
  
}
);





export default MyTabNavigation = createAppContainer(TabNavigator);