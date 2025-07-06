import { View, Text, Pressable, PressableProps } from 'react-native';

interface Props extends PressableProps {
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'outline' | 'solid';
}

export const CustomButton = ({
  children,
  color = 'primary',
  variant = 'solid',
  className,
  onPress,
  onLongPress,
  ...rest
}: Props) => {
  const btnBgColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color];

  const btnTextColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
  }[color];

  if (variant === 'outline')
    return (
      <Pressable
        className={`p-3 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
        {...rest}
      >
        <Text className={`text-center ${btnTextColor} font-work-medium`}>
          {children}
        </Text>
      </Pressable>
    );

  return (
    <Pressable
      className={`p-3 rounded-md ${btnBgColor} active:opacity-90 ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}
      {...rest}
    >
      <Text className='text-white text-center font-work-medium'>
        {children}
      </Text>
    </Pressable>
  );
};
