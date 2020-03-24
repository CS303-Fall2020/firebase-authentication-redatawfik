import React from 'react';
import {Button, Container, Form, Label} from 'native-base';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import firebase from 'firebase';
import Login from './Login';

function Welcome({navigation}) {
  const email = navigation.getParam('email');
  Keyboard.dismiss();

  const signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        navigation.navigate('Login');
      })
      .catch(function(error) {
        alert(error.message);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container style={styles.container}>
        <Form>
          <Label>Welcome {email}</Label>

          <Button
            style={{marginTop: 20}}
            full
            rounded
            Warning
            onPress={signOutUser}>
            <Text style={{color: 'white'}}>Sign out!</Text>
          </Button>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}

Welcome.navigationOptions = screenProps => ({
  title: 'Welcome',
  headerLeft: () => null,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
});

export default Welcome;
