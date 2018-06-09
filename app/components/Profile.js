import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Profile extends React.Component {

  static navigationOptions = {
      title: 'Profile',
  };

  render() {

    const { goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.text}> Bienvenido a su perfil, { this.props.navigation.state.params } </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3'
  },
  text: {
    color: '#fff'
  }
});
