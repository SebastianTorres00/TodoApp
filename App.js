import * as React from 'react';
import Home from './src/feature/Home/Home';
import Navigation from './src/navigation';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import store from './src/app/store';
// import store from './store';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
/* ... */
// Wrap your app with the new GestureHandler
// {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
/* your app */
// {/* </GestureHandlerRootView> */}

function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
