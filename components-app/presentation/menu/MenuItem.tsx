import { Href, router } from 'expo-router';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '../shared/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export const MenuItem = ({
  title,
  icon,
  name,
  isFirst = false,
  isLast = false,
}: Props) => {
  const routeName = name.split('/')[0];
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <Pressable
      onPress={() => router.push(routeName as Href)}
      className='bg-white dark:bg-black/15 px5 py-2'
      style={{
        ...(isFirst && {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 10,
        }),

        ...(isLast && {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingBottom: 10,
        }),
      }}
    >
      <View className='flex-row items-center'>
        <Ionicons
          name={icon}
          size={30}
          color={primaryColor}
          className='mr-10'
        />
        <ThemedText type='h2'>{title}</ThemedText>
      </View>
    </Pressable>
  );
};
