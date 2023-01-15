
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState,useMemo } from 'react';
import {View, ScrollView, ActivityIndicator,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { Calendar } from 'react-native-calendars';
import map from '../components/universal/map.jpg'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function FRHSDCalendar() {
	const [date, setDate] = useState(new Date().toLocaleDateString());

	function CustomCalendar(props) {
		const initDate = '2023-01-01';
		const [selected, setSelected] = useState(initDate);
		const dayoff = {key:dayoff, color:'red'}
		const shrtday = {key:shrtday, color:'#32CD32'}
		const navigation = useNavigation();
		const marked = useMemo(() => ({
		
			'2023-01-16':{
				dots:[dayoff]
			},
			'2023-02-20':{
				dots:[dayoff]
			},
			'2023-04-05':{
				dots:[shrtday]
			},
			'2023-04-06':{
				dots:[dayoff]
			},
			'2023-04-07':{
				dots:[dayoff]
			},
			'2023-04-10':{
				dots:[dayoff]
			},
			'2023-04-11':{
				dots:[dayoff]
			},
			'2023-04-12':{
				dots:[dayoff]
			},
			'2023-04-13':{
				dots:[dayoff]
			},
			'2023-04-14':{
				dots:[dayoff]
			},
			'2023-05-19':{
				dots:[shrtday]
			},
			'2023-05-29':{
				dots:[dayoff]
			},
			'2023-06-15':{
				dots:[shrtday]
			},
			'2023-06-16':{
				dots:[shrtday]
			},
			'2023-06-19':{
				dots:[dayoff]
			},
			'2023-06-20':{
				dots:[shrtday]
			},
			'2023-06-21':{
				dots:[shrtday]
			},

		}), [selected]);
		return (
		  <Calendar
			initialDate={initDate}
			markingType='multi-dot'
			markedDates={marked}
			onDayPress={(day) => {
			  setSelected(day.dateString);
			  props.onDaySelect && props.onDaySelect(day);
			}}
			{...props}
		  />
		);
	  }
    
  return (
		<View style = {{backgroundColor:'#cc0000', alignItems:'center'}}>
    	<ScrollView style = {{backgroundColor:'#094275'}} >
		

		<Text style={{ color: 'white', fontSize: 24, padding: 20 }}>Welcome to FRHSD High School Calander</Text>
      	<Text style={{ color: 'red', fontSize: 18, padding: 10 }}>Today's date: {date}</Text>
		  <View style = {{backgroundColor:'red'}}> 
		  <Image source={map} style={{width:350,height:300,margin:10}}/>
			</View>
			<Text style={{ color: 'red', fontSize: 18, padding: 10, alignItems:'center' }}>The FRHSD calander</Text>
		 <CustomCalendar onDaySelect={(day) => console.log(`Date selected: ${day.dateString}`)}/>

		</ScrollView>
		</View>
		
  )
}