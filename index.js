/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { NativeBaseProvider} from 'native-base';
import { Provider } from 'react-redux'
import AppContainer from './app/screen/navigation';

import configureStore from './store'

const store = configureStore()
  
const Root = () => {
  return (
        <NativeBaseProvider>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </NativeBaseProvider>    
  );
}

AppRegistry.registerComponent(appName, () => Root);
