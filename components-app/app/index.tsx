import { View } from 'react-native';

import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes,
} from '@/constants/Routes';
import { MenuItem, ThemedView } from '@/presentation';

const ComponentsApp = () => {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.name}
          title={route.title}
          name={route.name}
          icon={route.icon}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}

      <View className='my-5' />

      {uiMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.name}
          title={route.title}
          name={route.name}
          icon={route.icon}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}

      <View className='my-5' />

      {menuRoutes.map((route, index) => (
        <MenuItem
          key={route.name}
          title={route.title}
          name={route.name}
          icon={route.icon}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}
    </ThemedView>
  );
};

export default ComponentsApp;
