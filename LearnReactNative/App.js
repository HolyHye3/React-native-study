import React from 'react';
import {SafeAreaView} from 'react-native';
import Box from './components/Box';

const App = () => {
  return (
    <SafeAreaView>
      {/* 주석을 작성해봅시다. */}

      {/* <Box /> */}
      <Box rounded size="large" color="pink" />
      {/* <Box rounded={true} /> 기본형 */}
    </SafeAreaView>
  );
};

export default App;
