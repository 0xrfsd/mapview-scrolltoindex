import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MessageScreen from './components/Notification/message';
import NotificationsScreen from './screens/Notifications';
import HomeScreen from './screens/Home';
import HouseScreen from './screens/House';
import UberScreen from './screens/Uber/test';

import * as Font from 'expo-font';

const Stack = createNativeStackNavigator();

const colors = {
  a: '#3F3F37',
  b: '#D6D6B1',
  c: '#494331',
  d: '#878472',
  e: '#DE541E'
}

function App() {
  const [loaded, setLoaded] = React.useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'A': require('./assets/fonts/a.ttf'),
      'B': require('./assets/fonts/b.ttf'),
      'extra-light': require('./assets/fonts/extra-light.ttf'),
      'light': require('./assets/fonts/light.ttf'),
      'regular': require('./assets/fonts/regular.ttf'),
    });
    setLoaded(true);
  };
  React.useEffect(() => {
    loadFonts();
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
        <Stack.Screen name="Uber" component={UberScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false }} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Message" component={MessageScreen} options={{ headerShown: false }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;