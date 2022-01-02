import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StatusBar,
  ScrollView,
  Platform,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';


const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  }

  handleThemePress = () => {
    const { navigation } = this.props;
    navigation.navigate('Themes', { title: 'Themes' });
  };

  handleSitePress = () => {
    const { alertWithType } = this.props;
    Linking.openURL('htttps://fixer.io').catch(() => alertWithType('error', 'Sorry!', "Fixer.io can't be opened right now"));
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Theme"
          onPress={this.handleThemePress}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
            // <Ionicons name="ios-arrow-forward" color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}
export default connectAlert(Options);
