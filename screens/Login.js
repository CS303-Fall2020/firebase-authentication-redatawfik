import React, {useState} from 'react';
import {
  Button,
  Container,
  Form,
  Input,
  Item,
  Label,
  Spinner,
} from 'native-base';
import {
  StyleSheet,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import firebase from 'firebase';
import Welcome from './Welcome';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const clear = () => {
    setEmail('');
    setPassword('');
  };

  const signUpUser = () => {
    navigation.navigate('SignUp');
    clear();
  };

  const forgetPassword = () => {
    navigation.navigate('ForgetPassword');
    clear();
  };

  const loginUser = () => {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(user) {
        setLoading(false);
        navigation.navigate('Welcome', {email: email});
        clear();
      })
      .catch(function(error) {
        setLoading(false);
        alert(error.message);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container style={styles.container}>
        <Form>
          {loading ? <Spinner /> : null}
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              value={email}
              autocorrect={false}
              autoCapitalize="none"
              onChangeText={e => setEmail(e)}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              value={password}
              secureTextEntry
              autocorrect={false}
              autoCapitalize="none"
              onChangeText={p => setPassword(p)}
            />
          </Item>

          <Button
            style={{marginTop: 10}}
            full
            rounded
            success
            onPress={loginUser}>
            <Text style={{color: 'white'}}>Login</Text>
          </Button>

          <Button
            style={{marginTop: 20}}
            full
            rounded
            primary
            onPress={signUpUser}>
            <Text style={{color: 'white'}}>Sign up</Text>
          </Button>

          <Button
            style={{marginTop: 20}}
            full
            rounded
            Warning
            onPress={forgetPassword}>
            <Text style={{color: 'white'}}>Forget Password</Text>
          </Button>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
});

export default Login;
