import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GifScreen} from './src/screens/GifScreen/GifScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {FeedbackScreen} from './src/screens/FeedbackScreen/FeedbackScreen';
import {HomeScreen} from './src/screens/Home/HomeScreen';
import {ToastProvider} from 'react-native-toast-notifications';

type Props = {};

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export const App: React.FC<Props> = () => {
  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  title: 'Home',
                }}
              />
              <Stack.Screen
                name="GifScreen"
                component={GifScreen}
                options={{
                  title: 'Gifs',
                }}
              />
              <Stack.Screen
                name="FeedbackScreen"
                component={FeedbackScreen}
                options={{
                  title: 'Feedback',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    </ToastProvider>
  );
};
