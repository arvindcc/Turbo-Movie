/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { NativeBaseProvider} from 'native-base';
import { Provider } from 'react-redux'
import { App, Welcome, Login, MovieList} from './app/screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import configureStore from './store'

const store = configureStore()
const Stack = createNativeStackNavigator();

const AppContainer = () => (
    <NavigationContainer>
        <NativeBaseProvider>
        <Provider store={store}>

            <Stack.Navigator initialRouteName="App">
            <Stack.Screen name="App" component={App}/>
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen 
                name="MovieList" 
                component={MovieList} 
                options={{ 
                    title: 'Movie Turbo' 
                }}/>
            </Stack.Navigator>
            </Provider>
        </NativeBaseProvider>
    </NavigationContainer>
  )
  
const Root = () => {
  return (
        <NativeBaseProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </NativeBaseProvider>    
  );
}

AppRegistry.registerComponent(appName, () => AppContainer);
