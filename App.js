import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';

import Form from './app/components/Form';

export default class App extends Component<Props> {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <ImageBackground style={styles.container} source={require('./app/img/bg.jpg')}>
          <Text style={styles.header}> Inicio de sesión </Text>
          <Form/>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 80,
  }
});
