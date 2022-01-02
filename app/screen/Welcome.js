import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
} from 'react-native';
import styles from './atom';
import appIcon from '../assets/img/TurboMovie_Icon.png'
import {  Button} from 'native-base';

const Welcome = ({navigation}) => {
  console.log('Welcome',navigation)
  return (
    <SafeAreaView style={styles.welcomeContainer}>
      <View style={styles.appImage}>
        <Image source={appIcon}></Image>
      </View>
      <View >
        <Text style={styles.welcomeTitle}>WELCOME</Text>
      </View>
      <View>
        <Button style={styles.button} onPress={() => {
          console.log('onPress')
          navigation.navigate('Login')
          }}>GETTING START</Button>
      </View>
    </SafeAreaView>
  );
};
export default Welcome;
