
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState,useMemo } from 'react';
import {View, ScrollView, ActivityIndicator,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import map from '../components/universal/map.jpg'


export default function Maps() {
	const navigation = useNavigation();
	const [date, setDate] = useState(new Date().toLocaleDateString());

  return (
		<View style = {{backgroundColor:'#cc0000', alignItems:'center'}}>
    	<ScrollView style = {{backgroundColor:'#094275'}} >
		

		<Text style={{ color: 'white', fontSize: 24, padding: 20 }}>Welcome to Manalapan High School</Text>
      	<Text style={{ color: 'red', fontSize: 18, padding: 10 }}>Today's date: {date}</Text>
		  <View style = {{backgroundColor:'red'}}> 
		  <Image source={map} style={{width:350,height:300,margin:10}}/>
			</View>
		
		
		
		</ScrollView>
		</View>
		
  )
}