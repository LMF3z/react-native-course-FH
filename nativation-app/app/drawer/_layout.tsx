import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

import CustomDrawer from '@/components/shared/CustomDrawer';

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false,
        drawerContentStyle: {
          backgroundColor: 'white',
        },
      }}
      drawerContent={CustomDrawer}
    >
      <Drawer.Screen
        name='user/index' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Users',
          title: 'User',
          drawerIcon: ({ size, color }) => (
            <Ionicons name='person-circle-outline' size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name='schedule/index' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Schedule',
          title: 'Hours',
          drawerIcon: ({ size, color }) => (
            <Ionicons name='calendar-outline' size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
