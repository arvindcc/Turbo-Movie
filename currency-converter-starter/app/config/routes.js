import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from '../screen/Home';
import CurrencyList from '../screen/CurrencyList';
import Options from '../screen/Options';
import Themes from '../screen/Themes';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  Options: {
    screen: Options,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
  Themes: {
    screen: Themes,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
},
{
  headerMode: 'screen',
});

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

export default createStackNavigator({
  Home: {
    screen: HomeStack,
  },
  CurrencyList: {
    screen: CurrencyListStack,
  },
},
{
  mode: 'modal',
  cardStyle: { paddingTop: StatusBar.currentHeight },
  headerMode: 'none',
});
