import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    appContainer:{
        backgroundColor: 'white',
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    appImage:{
        height: 'auto',
        width: 'auto'
    },
    welcomeContainer:{
        backgroundColor: 'white',
        flex:1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    welcomeTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    loginContainer:{
        backgroundColor: 'white',
        flex:1,
        display:'flex',
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems:'center',
        paddingTop: '30%',
    },
    button:{
        height: 40,
        width: 150,
        borderRadius: 50,
        margin: 24,
    },
    input: {
        height: 40,
        width: 200,
        margin: 6,
        borderWidth: 1,
        padding:10,
      },
      loginButton:{
        height: 40,
        width: 150,
        borderRadius: 50,
        margin: 24,
    },
  });

export default styles