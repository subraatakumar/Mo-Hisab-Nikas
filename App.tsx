/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {getUniqueId} from 'react-native-device-info';

function App(): React.JSX.Element {
  const [uniqueId, setUniqueId] = useState('');

  useEffect(() => {
    getUniqueId().then(id => setUniqueId(id));
  }, []);

  const myVariable = 'hello'; // No semicolon here!

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>
          Sample App: {uniqueId} {myVariable}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
