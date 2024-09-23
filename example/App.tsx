import { StyleSheet, Text, View } from 'react-native';

import * as ExpoMultiModuleDemo from 'expo-multi-module-demo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoMultiModuleDemo.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
