import { useEffect } from 'react';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { View, Text } from 'react-native';

import { products } from '@/store/products.store';

const ProductDetailScreen = () => {
  const { id: productId } = useLocalSearchParams();
  const navigation = useNavigation();

  const product = products.find((product) => product.id === productId);

  if (!product) return <Redirect href={'/'} />;

  useEffect(() => {
    if (product) {
      navigation.setOptions({ title: product?.title || 'Producto' });
    }
  }, [product]);

  return (
    <View className='px-5 mt-2'>
      <Text className='font-work-black text-2xl'>{product?.title}</Text>
      <Text>{product?.description}</Text>
      <Text className='font-work-black'>{product?.price}</Text>
    </View>
  );
};

export default ProductDetailScreen;
