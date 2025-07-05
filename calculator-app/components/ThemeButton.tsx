import { Text, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';

import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/globals-styles';

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  onPress: () => void;
  doubleSize?: boolean;
}

export const ThemeButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  onPress,
  doubleSize = false,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.calculatorButton,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={async () => {
        onPress();
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      }}
    >
      <Text
        style={{
          ...globalStyles.calculatorButtonText,
          color: blackText ? 'black' : 'white',
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
