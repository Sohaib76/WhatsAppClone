import React, {Component} from 'react';
import { Text, View, StatusBar, TouchableOpacity} from 'react-native';

//For Height and Width COnstants
import {Constants} from 'expo'



//State less function
function DummyStatusBar(props) {

    return(
    <View
        style={{
            height: Constants.statusBarHeight,
            backgroundColor: props.backgroundColor,
           
        }}
    >
        <StatusBar translucent={false} {...props} /> 
    </View>
    )
  }


class MyStatusBar extends React.Component {

 state = {
     bgColor: StatusBar.backgroundColor
 }

  
  handleClick =  (color) =>{
      this.setState({bgColor: color})
  }

  render() {

    

    
     
    return (




     

        <View style={{flex:0}}>
           <DummyStatusBar
                backgroundColor = {'#004D40'} barStyle='light-content'
           />


        </View>
     

      
    






   
    )  
  }
}
const styles = {

  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
},

button: {
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    margin: 20
   //Here Style Has More Priority
}

}
export default MyStatusBar;