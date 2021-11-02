import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Home';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import {AppLoading} from 'expo';
import Header from './Header';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded]=useFonts({

    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });
  

  if (!fontsLoaded){
    return <AppLoading/>;
  } else {
    return (
      <NavigationContainer>
        style={{paddingTop:Platform.OS=='android' ? StatusBar.currentHeight:0}}
      <Stack.Navigator
      initialRouteName='Globomantics'
      headerMode="screen">
        <Stack.Screen name='Globomantics' 
        component={Homepage}
        options={{
          header:()=> <Header headerDisplay="Globomantics"></Header>
        }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
  }


  /*
    )
    
  }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Globomantics">
        <Stack.Screen name="Globomantics" component={Homepage}>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/