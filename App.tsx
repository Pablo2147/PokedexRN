import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import {Navigation} from './src/navigation/Navigation';
import {Tabs} from './src/navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigation /> */}
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
