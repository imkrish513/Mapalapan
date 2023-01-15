
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState,useMemo } from 'react';
import {View, ScrollView, ActivityIndicator,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Preview from '../components/universal/horizontalPreview.js';
import Tabs from '../components/universal/tab.js';
import s from '../../styles/mainStyle';
import getApi from '../../api/getApi';
import Banner from '../components/universal/banner';
import Header from '../components/universal/header.js';
import { Calendar } from 'react-native-calendars';
import { Agenda } from 'react-native-calendars';
import logo from '../components/universal/logo.jpg'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Routes from './routes.js';



export default function Home() {
	const navigation = useNavigation();
	function navigate(destination){
		navigation.navigate(destination);
	}
	
  return (
		// <View style = {{backgroundColor:'#cc0000', alignItems:'center'}}>
    	// <ScrollView style = {{backgroundColor:'#094275'}} >
		

		// <Text style={{ color: 'white', fontSize: 24, padding: 20 }}>Welcome to Manalapan High School</Text>
      	// <Text style={{ color: 'red', fontSize: 18, padding: 10 }}>Today's date: {date}</Text>
		//   <View style = {{backgroundColor:'red'}}> 
		//   <Image source={map} style={{width:350,height:300,margin:10}}/>
		// 	</View>
		// 	<Text style={{ color: 'red', fontSize: 18, padding: 10, alignItems:'center' }}>The FRHSD calander</Text>
		//  <CustomCalendar onDaySelect={(day) => console.log(`Date selected: ${day.dateString}`)}/>

		
		
		// </ScrollView>
		// </View>
		<View style={styles.container}>
			
            <View style={styles.header}>
                <Text style={styles.subtitle}>Welcome to</Text>
                <Text style={styles.title}>MAPalapan!</Text>
                <Text style={styles.titleInfo}>Everything Manalapan Anywhere, Anytime!  </Text>
            </View>

            <View style={styles.btnContainer}>
                
                <TouchableOpacity onPress={() => navigate('FRHSDCalander')}>
                    <LinearGradient style={styles.btnCreate} 
                                    colors={['#dc1c13', '#ba3030']}
                                    start={{x:0,y:1}}
                                    end={{x:3,y:1}}>

                        <View style={styles.btnTextBox}>
                            <Text style={styles.btnDescript}>To the map and calander</Text>
                            <Text style={styles.btnTextHome}>MAPalapan</Text>
                        </View>

                    </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
                    <LinearGradient style={styles.btnLoad} 
                                    colors={['#0c1559', '#0c1559']}
                                    start={{x:-1,y:1}}
                                    end={{x:1.5,y:1}}>

                        <View style={styles.btnTextBox}>
                            <Text style={styles.btnDescript}>          To online school store</Text>
                            <Text style={styles.btnTextHome}>Brave Bazaar</Text>
                        </View>

                    </LinearGradient>

                </TouchableOpacity>

             
               
                  <Image source={logo} style={{width:100,height:100,margin:10}}/>
               
            </View>
        </View>
  )
}