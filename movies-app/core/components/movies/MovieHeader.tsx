import {
  View,
  useWindowDimensions,
  Image,
  Text,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

export const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  const { height: dimensionsHeight } = useWindowDimensions();

  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.7, y: 0.7 }}
        style={{
          height: dimensionsHeight * 0.4,
          position: 'absolute',
          zIndex: 1,
          width: '100%',
        }}
      />

      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          elevation: 9,
          top: 60,
          left: 25,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Ionicons
            name='arrow-back'
            size={30}
            color='white'
            className='shadow'
          />
        </Pressable>
      </View>

      <View
        style={{ height: dimensionsHeight * 0.7 }}
        className='shadow-xl shadow-black/20'
      >
        <View className='flex-1 rounded-b-[25px] overflow-hidden'>
          <Image
            source={{ uri: poster }}
            resizeMode='cover'
            className='flex-1'
          />
        </View>

        <View className='px-5 mt-5'>
          <Text className='font-normal'>{originalTitle}</Text>
          <Text className='font-semibold text-2xl'>{title}</Text>
        </View>
      </View>
    </>
  );
};
