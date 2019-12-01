import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ScrollView,
  StatusBar,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';
import { changeThemeColor } from '../action/theme';

const styles = EStyleSheet.create({
  $blue: '$primaryBule',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
  $orange: '$primaryOrange',
});

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    primaryColor: PropTypes.string,
    dispatch: PropTypes.func,
  }

  handlePressThemes = (color) => {
    const { navigation } = this.props;
    const { dispatch } = this.props;
    dispatch(changeThemeColor(color));
    navigation.goBack(null);
    console.log('Theme Press color is ', color);
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={() => this.handlePressThemes(styles.$blue)}
          selected
          checked
          iconBackground={styles.$blue}
        />
        <Separator />

        <ListItem
          text="Orange"
          onPress={() => this.handlePressThemes(styles.$orange)}
          selected
          checked
          iconBackground={styles.$orange}
        />
        <Separator />

        <ListItem
          text="Green"
          onPress={() => this.handlePressThemes(styles.$green)}
          selected
          checked
          iconBackground={styles.$green}
        />
        <Separator />

        <ListItem
          text="Purple"
          onPress={() => this.handlePressThemes(styles.$purple)}
          selected
          checked
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { primaryColor } = state.theme;
  return {
    primaryColor,
  };
};

export default connect(mapStateToProps)(Themes);
