import { useFonts } from 'expo-font';
import { Platform, View } from 'react-native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

import { globalStyles } from '@/styles/globals-styles';

if (Platform.OS === 'android') {
  NavigationBar.setBackgroundColorAsync('black');
}

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <View style={globalStyles.background}>
      <StatusBar style='auto' />
      <Slot />
    </View>
  );
};

export default RootLayout;
