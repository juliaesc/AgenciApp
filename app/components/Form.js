import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Form extends Component<Props> {
  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
          placeholder='Nombre de usuario'
          placeHoldertextColor='#292929'
          style={styles.textInput}
          underlineColorAndroid={'transparent'}/>

        <TextInput
            placeholder='Contraseña'
            placeHoldertextColor='#292929'
            secureTextEntry={true}
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
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
