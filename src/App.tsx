import {useAppSelector} from '@redux/hooks';
import {Text, View} from 'react-native';

function App() {
  const colors = useAppSelector(state => state.colors);
  const configs = useAppSelector(state => state.configs);

  console.log('colors:', colors);
  console.log('configs:', configs);
  return (
    <View>
      <Text>Sample App</Text>
      <Text>
        To change the package name use:
        https://www.npmjs.com/package/react-native-rename
      </Text>
      <Text>
        Please remember not to use spaces in new_name. If using spaces then
        remove them manually from app.json name.
      </Text>
      <Text>
        Android/MainActivity.kt - override fun getMainComponentName(): String =
        "new_name"
      </Text>
      <Text>Ios/AppDeligate.mm - self.moduleName = @"new_name";</Text>
    </View>
  );
}

export default App;
