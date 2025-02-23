/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {persistor, store} from '@redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import App from './src/App';
import {name as appName} from './app.json';

function MyApp() {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => MyApp);
