import React from 'react';
import {
  SafeAreaView,
  View,
  Image,TouchableHighlight
} from 'react-native';
import styles from './atom';
import appIcon from '../assets/img/TurboMovie_Icon.png'
import { Welcome, Login, MovieList} from '../screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate('Welcome')}
      >
        <View style={styles.appImage}>
          <Image source={appIcon}></Image>
        </View>
      </TouchableHighlight>
     
    </SafeAreaView>
  );
};
const AppContainer = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="App">
      <Stack.Screen name="App"  component={App} options={{header: false}}/>
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen 
        name="MovieList" 
        component={MovieList} 
        options={{ 
          title: 'Movie Turbo' 
        }}/>
    </Stack.Navigator>
  </NavigationContainer>
)

export default App;
