//initial flow
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {Platform, SafeAreaView, View, Text, ScrollView, Image, TextInput, StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './src/screens/routes.js';
import Home from './src/screens/home.js';
import Shop from './src/screens/shop.js';
const Tab=createBottomTabNavigator();

import { Fragment } from 'react/cjs/react.development';
const MyTabs=()=>{
    
    
    return(
		<Tab.Navigator  initialRouteName="Profile"
        screenOptions={{
            headerShown:false,
        }}
        
        >
            
        <Tab.Screen name="Home" component={Home}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={20} />
                )
            }}
        />
        <Tab.Screen name="Shop" component={Shop}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="grid-outline" color={color} size={20} />
                )
            }}
        />
        



    </Tab.Navigator>
    )
    
}


const MyTheme = {
	...DefaultTheme,
	colors: {
	  ...DefaultTheme.colors,
	  background: '#ffffff'
	},
  };
export default function App() {
  return (
    
    <Fragment>
      <Routes>
    

<SafeAreaView style={[s.fl1,Platform.OS === 'android' && s.mgtp30]}>

    <NavigationContainer theme={MyTheme} >
        <MyTabs />
        
	</NavigationContainer>
    
		<StatusBar style="auto" />
        
	</SafeAreaView>
    </Routes>
    </Fragment>
  );
}

const s=StyleSheet.create({
	fl1:{flex:1},
	mgtp30:{marginTop:30}
})


{/* <SafeAreaView style={[s.fl1]}>
		<Text>Hekki</Text>
      <StatusBar style="auto" />
	</SafeAreaView> */}