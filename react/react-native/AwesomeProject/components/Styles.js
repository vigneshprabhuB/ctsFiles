import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    top: {
        flex: 1,
    },
    bottom: {
        flex: 2
    },
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: 'gray',
    },

    loginForm: {
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#a8caff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center'
    },
    loginFormContent: {
        padding: 20,
        backgroundColor: 'red'
    },
    loginTextInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 20,
        padding: 5
        // textAlign: 'center',
        // padding: 10,
        // marginBottom: 10
    },
    loginTitle: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 10
    },

    loginButton: {
        marginTop: 25,
        width: '30%',

    },
    loginButtonIn: {
        color: 'red'
    },
    homeScreen: {
        width: '100%',
        height: '100%',
        backgroundColor: 'green',
        display: 'flex'
    },
    homeHeader: {
        flex: 1,
        alignItems: 'flex-end',
        marginEnd: 20,
        marginTop: 30,
        padding: 10,

    },
    center:{
        flex: 1 ,
        alignItems: 'center',
        justifyContent:'center'
    }
});