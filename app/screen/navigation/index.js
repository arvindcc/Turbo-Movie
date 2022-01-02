/**
 * @format
 */
import React, {useEffect, useState} from 'react'
import { App, Welcome, Login, MovieList} from '../../screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {connect} from 'react-redux'
import {logout} from '../../redux/action'
import { Button, CloseIcon, Icon } from 'native-base'

const Stack = createNativeStackNavigator();
 
const AppContainer = ({navigation, logout}) => {

    const MovieListScreenOptions = {
        title: 'Movie Turbo',
        headerStyle:{
            backgroundColor: 'light-grey'
        },
        headerTitleAlign: 'center',
        headerTintColor: 'blue',
        // headerRight: () => (
        //     <Button
        //       onPress={() => {
        //           logout()
        //         }}
        //       variant="outline"
        //       colorScheme="blue"
        //       leftIcon={<CloseIcon size="4" />}
        //     />
        //   ),
    
    }
    return(
     <NavigationContainer>
         <Stack.Navigator>
                <Stack.Screen name="App" component={App} options={{headerShown: false}}/>
                <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="MovieList" component={MovieList} 
                    options={MovieListScreenOptions}
                />
         </Stack.Navigator>
     </NavigationContainer>
   )}
export default connect(
    (store) => (store.movieReducer),
     {logout}
    )(AppContainer)
 