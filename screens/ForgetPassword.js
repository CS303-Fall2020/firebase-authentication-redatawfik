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
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import firebase from 'firebase';

function ForgetPassword({navigation}) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const clear = () => {
    setEmail('');
  };
  const sendResetEmail = () => {
    setLoading(true);
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function() {
        // Password reset email sent.
        setLoading(false);
        setSent(true);
      })
      .catch(function(error) {
        setLoading(false);
        Alert.alert('Error', error.message);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container style={styles.container}>
        <Form>
          {loading ? <Spinner /> : null}
          <Label>
            Please provide the email address you used when you signed up for
            your account.
          </Label>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autocorrect={false}
              autoCapitalize="none"
              onChangeText={e => setEmail(e)}
            />
          </Item>

          {sent ? (
            <Button bordered danger>
              <Text>
                An email with password reset instructions has been sent to your
                email address
              </Text>
            </Button>
          ) : null}

          <Button
            style={{marginTop: 10}}
            full
            rounded
            primary
            onPress={sendResetEmail}>
            <Text style={{color: 'white'}}>Send reset email</Text>
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

export default ForgetPassword;
