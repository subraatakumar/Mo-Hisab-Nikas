import {useAppSelector} from '@redux/hooks';
import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  const colors = useAppSelector(state => state.colors);
  const configs = useAppSelector(state => state.configs);

  console.log('colors:', colors);
  console.log('configs:', configs);
  return (
    <View>
      <Text>This is a sample App</Text>
    </View>
  );
};

export default App;
