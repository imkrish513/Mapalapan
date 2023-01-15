import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home';
import FRHSDCalendar from './Calander';
import Shop from './shop';

const AppStack = createStackNavigator();
export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ 
                                                headerShown: false,
                                                cardStyle: { backgroundColor: "#FFFFFF" }
                                              }}>
                 <AppStack.Screen name='Home' component={Home}/>
                <AppStack.Screen name='FRHSDCalander' component={FRHSDCalendar}/>
                <AppStack.Screen name='Shop' component={Shop}/>
        </AppStack.Navigator>
        </NavigationContainer>
    );
} 
