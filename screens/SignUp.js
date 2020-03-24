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
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import firebase from 'firebase';

function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const clear = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const signUpUser = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(e) {
        setLoading(false);
        clear();
        navigation.navigate('Welcome', {email: email});
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
              autocorrect={false}
              autoCapitalize="none"
              onChangeText={e => setEmail(e)}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry
              autocorrect={false}
              autoCapitalize="none"
              onChangeText={p => setPassword(p)}
            />
          </Item>

          <Item floatingLabel>
            <Label>Confirm Password</Label>
            <Input
              secureTextEntry
              autocorrect={false}
              autoCapitalize="none"
              onChangeText={p => setConfirmPassword(p)}
            />
          </Item>

          <Button
            style={{marginTop: 10}}
            full
            rounded
            primary
            onPress={signUpUser}>
            <Text style={{color: 'white'}}>Sign up</Text>
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

export default SignUp;
