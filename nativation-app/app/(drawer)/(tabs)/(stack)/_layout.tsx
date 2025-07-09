import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Stack, useNavigation, router } from 'expo-router';

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftPress = (canGoBack?: boolean) => {
    if (canGoBack) {
      // !Falla navigation.dispatch(StackActions.pop());
      // !Falla navigation.goBack();
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        // headerShadowVisible: false,
        contentStyle: { backgroundColor: 'white' },
        // headerLeft: () => <Text>Hola</Text>,
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
            size={20}
            className='mr-5'
            color={tintColor}
            onPress={() => onHeaderLeftPress(canGoBack)}
          />
        ),
      }}
    >
      <Stack.Screen
        name='home/index'
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen name='products/index' options={{ title: 'Products' }} />
      <Stack.Screen name='profile/index' options={{ title: 'Profile' }} />
      <Stack.Screen name='settings/index' options={{ title: 'Settings' }} />
    </Stack>
  );
};

export default StackLayout;
