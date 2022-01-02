import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux'
import styles from './atom';
import appIcon from '../assets/img/TurboMovie_Icon.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setLoding, unsetLoding} from '../redux/action'

const App = ({navigation, route, isLoading, setLoding, unsetLoding, ...rest}) => {
  const [isAuthorize,  setIsAuthorized] = useState(false)
  useEffect(() => {
      const checkAuthentication = async() => {
          try{
              setLoding()
              const token = await AsyncStorage.getItem('token')
              if(token)
                  setIsAuthorized(!!token)
              unsetLoding()
          }catch (e){
              unsetLoding()
      }
    }
    checkAuthentication()
    // setTimeout(() => {navigation.navigate(!isAuthorize ? 'Welcome' : 'MovieList')}, 5000)
  },[])

  return (
    <SafeAreaView style={styles.appContainer}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate(!isAuthorize ? 'Welcome' : 'MovieList')}
      >
        <View style={styles.appImage}>
          <Image source={appIcon}></Image>
        </View>
      </TouchableHighlight>
     
    </SafeAreaView>
  );
};
export default connect(
  (store) => (store.movieReducer),
  {setLoding, unsetLoding}
)(App);
