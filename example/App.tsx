import { StyleSheet, Text, View } from 'react-native';
import { ExpoMultiModuleDemoView } from 'expo-multi-module-demo';

export default function App() {
  return (
    <ExpoMultiModuleDemoView
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
