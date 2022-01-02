import React, { Component } from 'react';
import {
  View,
  FlatList,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../action/currencies';

// const TEMP_CURRENT_CURRENCY = 'CAD';
class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string,
  }

  handlePress = (currency) => {
    const { dispatch } = this.props;
    const { navigation } = this.props;
    const { type } = navigation.state.params;
    if (type === 'base') {
      dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      dispatch(changeQuoteCurrency(currency));
    }
    navigation.goBack(null);
  };

  isCurrencySelected = (currency) => {
    const { navigation } = this.props;
    const { type } = navigation.state.params;
    const { baseCurrency } = this.props;
    const { quoteCurrency } = this.props;
    if (type === 'base') {
      return (currency === baseCurrency);
    } if (type === 'quote') {
      return (currency === quoteCurrency);
    }
    return false;
  };

  render() {
    const { primaryColor } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={this.isCurrencySelected(item)}
              onPress={() => this.handlePress(item)}
              iconBackground={primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { baseCurrency } = state.currencies;
  const { quoteCurrency } = state.currencies;
  const { primaryColor } = state.theme;
  return {
    baseCurrency,
    quoteCurrency,
    primaryColor,
  };
};
export default connect(mapStateToProps)(CurrencyList);
