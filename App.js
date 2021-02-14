import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-native-tabs';
import {createAppContainer} from 'react-navigation';
import facebook from './screens/facebook';
import instagram from './screens/instagram';

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}
}
const TabNavigator=createBottomTabNavigator({
  facebook:{screens:facebook},
  instagram:{screens:instagram}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName;
      if(routeName === "facebook")
      {
        return(
          <Image source={require("./assets/facebook.jpg")} style={{width:40,height:40}}/>
        );
      }
      else if(routeName === "instagram")
      {
        return(
          <Image source={require("./assets/instagram.jpeg")} style={{width:40,height:40}}/>
        )
      }
    }
  })
}
)
const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
