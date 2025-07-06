import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

const ProductDetailScreen = () => {
  const { id: productId } = useLocalSearchParams();

  const product = products.find((product) => product.id === productId);

  if (!product) return <Redirect href={'/'} />;

  return (
    <View className='px-5 mt-2'>
      <Text className='font-work-black text-2xl'>{product?.title}</Text>
      <Text>{product?.description}</Text>
      <Text className='font-work-black'>{product?.price}</Text>
    </View>
  );
};

export default ProductDetailScreen;
