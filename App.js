
import React, {useEffect} from 'react';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Config from 'react-native-config';
import SignIn from './src/screens/auth/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from './src/utils/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/app/Home';
import Task from './src/screens/app/Task';
import Client from './src/screens/app/Client';
import Profile from './src/screens/app/Profile';
import { Image } from 'react-native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator 
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused
          ? require('./src/assets/tabs/home_active.png')
          : require('./src/assets/tabs/home.png');
      } else if (route.name === 'Profile') {
        iconName = focused 
        ? require('./src/assets/tabs/profile_active.png') 
        : require('./src/assets/tabs/profile.png');
      }
      else if (route.name === 'Task') {
        iconName = focused 
        ? require('./src/assets/tabs/tasks_active.png') 
        : require('./src/assets/tabs/tasks.png');
      }
      else if (route.name === 'Clients') {
        iconName = focused 
        ? require('./src/assets/tabs/client_active.png') 
        : require('./src/assets/tabs/clients.png');
      }

      // You can return any component that you like here!
      return <Image style={{width: 24, height: 24}} source={iconName}/>;
    },
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: { borderTopColor: Colors.lightGrey}
  })}
  >
  <Tab.Screen name="Home" component={Home} />
  <Tab.Screen name="Task" component={Task} />
  <Tab.Screen name="Clients" component={Client} />
  <Tab.Screen name="Profile" component={Profile} />
</Tab.Navigator>
)

const App = () => {
  const isSignedIn = true;
  useEffect(()=> {
    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      });
  },[]) 
  
  const theme = {
    colors: {
      background: Colors.white,
    }
  }
  
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {isSignedIn? 
        (
            <>
            <Stack.Screen name="Splash" component={Tabs} options={{headerShown: false}}/>
            </>
        ) : 
        (
          <>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
          </>
        )}
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}
export default App;
