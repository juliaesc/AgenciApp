import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Profile');
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.container}>

          <Text style={styles.header}> Inicio de sesión </Text>

          <TextInput
            style={styles.textInput}
            placeholder='Nombre de usuario'
            placeHoldertextColor='#292929'
            underlineColorAndroid={'transparent'}
            onChangeText={ (username) => this.setState({username}) }
          />

          <TextInput
            style={styles.textInput}
            placeholder='Contraseña'
            placeHoldertextColor='#292929'
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}
            onChangeText={ (password) => this.setState({password}) }
          />

        </View>

        <TouchableOpacity style={styles.button}
          onPress = {this.login}>
          <Text style={styles.btntext}> Iniciar sesión </Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    );
  }

  login = () => {
    alert('text');
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#2896d3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 80,
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 20,
  },
  button: {
    alignSelf: 'stretch',
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    padding: 20,
  },
  btntext: {
    color: '#fff',
    fontSize: 18,
  }
});
