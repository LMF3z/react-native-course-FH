import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globalStyles } from '@/styles/globals-styles';
import { ThemeButton, ThemeText } from '@/components';
import { Colors } from '@/constants/Colors';
import { useCalculator } from '@/hooks';

const CalculatorApp = () => {
  const insets = useSafeAreaInsets();

  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    addOperation,
    subOperation,
    mulOperation,
    divideOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View
      style={{
        ...globalStyles.calculatorContainer,
        paddingBottom: insets.bottom,
      }}
    >
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText style={globalStyles.mainResult} variant='h1'>
          {formula}
        </ThemeText>

        {formula === prevNumber ? (
          <ThemeText style={globalStyles.softResult} variant='h2' />
        ) : (
          <ThemeText style={globalStyles.softResult} variant='h2'>
            {prevNumber}
          </ThemeText>
        )}
      </View>

      <View style={globalStyles.row}>
        <ThemeButton
          color={Colors.lightGray}
          label='C'
          blackText
          onPress={clean}
        />
        <ThemeButton
          color={Colors.lightGray}
          label='+/-'
          blackText
          onPress={toggleSign}
        />
        <ThemeButton
          color={Colors.lightGray}
          label='del'
          blackText
          onPress={deleteLast}
        />
        <ThemeButton
          label='/'
          onPress={divideOperation}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <ThemeButton
          color={Colors.lightGray}
          label='7'
          blackText
          onPress={() => buildNumber('7')}
        />
        <ThemeButton
          color={Colors.lightGray}
          label='8'
          blackText
          onPress={() => buildNumber('8')}
        />
        <ThemeButton
          color={Colors.lightGray}
          label='9'
          blackText
          onPress={() => buildNumber('9')}
        />
        <ThemeButton label='x' onPress={mulOperation} color={Colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <ThemeButton
          color={Colors.lightGray}
          label='4'
          blackText
          onPress={() => buildNumber('4')}
        />
        <ThemeButton
          color={Colors.lightGray}
          label='5'
          blackText
          onPress={() => buildNumber('5')}
        />
        <ThemeButton
          color={Colors.lightGray}
          label='6'
          blackText
          onPress={() => buildNumber('6')}
        />
        <ThemeButton label='-' onPress={subOperation} color={Colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <ThemeButton
          color={Colors.lightGray}
          label='1'
          blackText
          onPress={() => buildNumber('1')}
        />
        <ThemeButton
          color={Colors.lightGray}
          label='2'
          blackText
          onPress={() => buildNumber('2')}
        />
        <ThemeButton
          color={Colors.lightGray}
          label='3'
          blackText
          onPress={() => buildNumber('3')}
        />
        <ThemeButton label='+' onPress={addOperation} color={Colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <ThemeButton
          color={Colors.lightGray}
          label='0'
          blackText
          onPress={() => buildNumber('0')}
          doubleSize
        />
        <ThemeButton
          color={Colors.lightGray}
          label='.'
          blackText
          onPress={() => buildNumber('.')}
        />

        <ThemeButton
          label='='
          onPress={calculateResult}
          color={Colors.orange}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
