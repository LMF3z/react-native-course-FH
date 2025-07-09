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
        name='user/index'
        options={{
          drawerLabel: 'Users',
          title: 'User',
          drawerIcon: ({ size, color }) => (
            <Ionicons name='person-circle-outline' size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name='schedule/index'
        options={{
          drawerLabel: 'Schedule',
          title: 'Hours',
          drawerIcon: ({ size, color }) => (
            <Ionicons name='calendar-outline' size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name='(tabs)'
        options={{
          drawerLabel: 'Tabs + stack',
          title: 'Tabs + stack',
          drawerIcon: ({ size, color }) => (
            <Ionicons name='albums-outline' size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
