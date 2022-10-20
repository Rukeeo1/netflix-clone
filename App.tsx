import React, { FC } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Home } from './screens/Home/Home';
import { SignUp } from './screens/SignUp/SignUp';

const App: FC = () => {
  return (
      <SafeAreaView style={styles.container}>
      {/* <SignUp /> */}
      <Home />
    </SafeAreaView>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

});

export default App;
