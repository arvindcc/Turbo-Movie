import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const styles = EStyleSheet.create({
  $underlayColor: '$border',
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$white',
  },
  text: {
    fontSize: 16,
    color: '$darkText',
  },
  separator: {
    marginLeft: 20,
    backgroundColor: '$border',
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  icon: {
    backgroundColor: 'transparent',
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconVisible: {
    backgroundColor: '$primaryBule',
  },
  checkIcon: {
    width: 18,
  },
});

export default styles;
