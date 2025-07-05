import { globalStyles } from '@/styles/globals-styles';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
  variant?: 'h1' | 'h2';
}

export const ThemeText = ({ children, variant = 'h1', ...props }: Props) => {
  return (
    <Text
      {...props}
      style={[
        { color: 'white', fontFamily: 'SpaceMono' },
        variant === 'h1' && globalStyles.mainResult,
        variant === 'h2' && globalStyles.softResult,
      ]}
      numberOfLines={1}
    >
      {children}
    </Text>
  );
};
