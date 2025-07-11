import { View, Text, FlatList } from 'react-native';

import { products } from '@/store/products.store';
import { Link } from 'expo-router';

const ProductsScreen = () => {
  return (
    <View className='flex-1 px-4'>
      <FlatList
        data={products}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View className='mb-10'>
            <Text className='text-2xl font-work-black'>{item.title}</Text>
            <Text>{item.description}</Text>

            <View className='flex flex-row justify-between mt-2'>
              <Text className='font-work-black'>{item.price}</Text>
              <Link href={`/products/${item.id}`} className='text-primary'>
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
