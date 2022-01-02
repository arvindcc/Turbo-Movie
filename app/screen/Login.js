import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,

} from 'react-native';
import { connect } from 'react-redux';
import { Button, Input, Stack,   FormControl,
  WarningOutlineIcon, } from 'native-base';
import styles from './atom';
import appIcon from '../assets/img/TurboMovie_Icon.png'
import {login, setLoding, unsetLoding} from '../redux/action'

const Login = ({navigation, user, login}) => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(false)
  useEffect(() => {
    console.log(user)
  }, [])
  return (
    <SafeAreaView style={styles.loginContainer}>
        <View style={styles.appImage}>
            <Image source={appIcon}></Image>
        </View>
          <FormControl isInvalid={!!error}>
          <Stack space={2} w="100%" alignItems="center">

            <Input
                variant="rounded"
                placeholder="User name"
                style={styles.input}
                onChangeText={value => setUsername(value)}
            />
            <Input
                variant="rounded"
                placeholder="Password"
                style={styles.input}
                type={"password"}
                onChangeText={value => setPassword(value)}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Please enter a username and passwords.
            </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        <View>
            <Button 
              style={styles.loginButton}
              onPress={() =>{ 
                if(!username || !password){
                  setError(true)
                  return
                }
                login(username)
                navigation.navigate('MovieList')}}
            >
              Login
            </Button>
        </View>
    </SafeAreaView>
  );
};

export default connect(
  (store) => (store.movieReducer), 
  {login, setLoding, unsetLoding}
  )(Login)

