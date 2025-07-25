import { Text, TextProps } from 'react-native';

type TextType = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link';

interface Props extends TextProps {
  className?: string;
  type?: TextType;
}

export const ThemedText = ({ className, type, children, ...rest }: Props) => {
  return (
    <Text
      className={[
        'text-light-text dark:text-dark-text',
        type === 'normal'
          ? 'font-normal'
          : type === 'h1'
            ? 'text-3xl'
            : type === 'h2'
              ? 'text-xl'
              : type === 'semi-bold'
                ? 'font-semibold'
                : type === 'link'
                  ? 'font-normal underline'
                  : undefined,
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </Text>
  );
};
