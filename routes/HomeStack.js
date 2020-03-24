import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgetPassword from '../screens/ForgetPassword';
import Welcome from '../screens/Welcome';

const screens = {
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
  ForgetPassword: {
    screen: ForgetPassword,
  },
  Welcome: {
    screen: Welcome,
  },
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
