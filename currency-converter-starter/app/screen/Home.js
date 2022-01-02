import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { InputWithButton } from '../components/TextInput';
import { Logo } from '../components/Logo';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency, changeCurrencyAmount, getInitialConversion } from '../action/currencies';
import { connectAlert } from '../components/Alert';

class Home extends Component {
    static propTypes = {
      navigation: PropTypes.object,
      dispatch: PropTypes.func,
      baseCurrency: PropTypes.string,
      quoteCurrency: PropTypes.string,
      amount: PropTypes.number,
      conversionRate: PropTypes.number,
      isFetching: PropTypes.bool,
      lastConvertedDate: PropTypes.object,
      primaryColor: PropTypes.string,
      currencyError: PropTypes.string,
      alertWithType: PropTypes.func,
    }

    componentWillMount() {
      const { dispatch } = this.props;
      dispatch(getInitialConversion());
    }

    componentWillReceiveProps(nextProps) {
      const { currencyError } = this.props;
      const { alertWithType } = this.props;
      if (nextProps.currencyError && nextProps.currencyError !== currencyError) {
        alertWithType('error', 'Error', nextProps.currencyError);
        console.log(nextProps.currencyError);
      }
    }

    handlePressBaseCurrency = () => {
      const { navigation } = this.props;
      navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
    }

    handlePressQuoteCurrency = () => {
      const { navigation } = this.props;
      navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
    }

    handleChangeText = (text) => {
      // TODO: Make this action work with this.props.dispatch()
      const { dispatch } = this.props;
      dispatch(changeCurrencyAmount(text));
    }

    handleSwapCurrency = () => {
      const { dispatch } = this.props;
      dispatch(swapCurrency());
    }

    handleOptionsPress = () => {
      const { navigation } = this.props;
      navigation.navigate('Options', { title: 'Options' });
    }

    render() {
      const { baseCurrency } = this.props;
      const { quoteCurrency } = this.props;
      const { amount } = this.props;
      const { conversionRate } = this.props;
      const { isFetching } = this.props;
      const { lastConvertedDate } = this.props;
      let quotePrice = (conversionRate * amount).toFixed(2);
      if (isFetching) {
        quotePrice = '...';
      }
      const { primaryColor } = this.props;
      return (
        <Container
          backgroundColor={primaryColor}
          StatusBar
          barStyle="light-content"
        >
          <Header onPress={this.handleOptionsPress} />
          <KeyboardAvoidingView behavior="padding">
            <Logo tintColor={primaryColor} />
            <InputWithButton
              buttonText={baseCurrency}
              onPress={this.handlePressBaseCurrency}
              defaultValue={amount.toString()}
              keyboardType="numeric"
              onChangeText={this.handleChangeText}
              textColor={primaryColor}
            />
            <InputWithButton
              editable={false}
              buttonText={quoteCurrency}
              onPress={this.handlePressQuoteCurrency}
              value={quotePrice}
              textColor={primaryColor}
            />
            <LastConverted
              date={lastConvertedDate}
              base={baseCurrency}
              quote={quoteCurrency}
              conversionRate={conversionRate}
            />
            <ClearButton
              onPress={this.handleSwapCurrency}
              text="Reverse Currencies"
            />
          </KeyboardAvoidingView>
        </Container>
      );
    }
}

const mapStateToProps = (state) => {
  const { baseCurrency } = state.currencies;
  const { quoteCurrency } = state.currencies;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const { isFetching } = conversionSelector;
  const lastConvertedDate = conversionSelector.date
    ? new Date(conversionSelector.date) : new Date();
  const { primaryColor } = state.theme;
  const { error } = state.currencies;
  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching,
    lastConvertedDate,
    primaryColor,
    currencyError: error,
  };
};
export default connect(mapStateToProps)(connectAlert(Home));
