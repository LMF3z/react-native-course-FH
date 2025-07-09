import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useNavigation } from 'expo-router';

import { CustomButton } from '@/components';
import { DrawerActions } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView className='px-10'>
      <View>
        <CustomButton onPress={() => router.push('/products')} className='mb-5'>
          Products
        </CustomButton>

        <CustomButton
          color='secondary'
          onPress={() => router.push('/profile')}
          className='mb-5'
        >
          Profile
        </CustomButton>

        <CustomButton
          color='tertiary'
          onPress={() => router.push('/settings')}
          className='mb-5'
        >
          Settings
        </CustomButton>

        <CustomButton
          variant='outline'
          onPress={() => router.push('/products')}
          className='mb-5'
        >
          Products
        </CustomButton>

        <CustomButton onPress={onToggleDrawer} className='mb-5'>
          Show Drawer
        </CustomButton>

        {/*

        <Link href={'/products'} asChild>
          <CustomButton>Products</CustomButton>
        </Link>
        
        <Link className='mb-5' href={'/products'}>
          Products
        </Link>
        <Link className='mb-5' href={'/profile'}>
          Profile
        </Link>
        <Link className='mb-5' href={'/settings'}>
          Settings
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
