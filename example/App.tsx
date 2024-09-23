import { StyleSheet, Text, View } from 'react-native';
import { ExpoMultiModuleDemoView } from 'expo-multi-module-demo';

export default function App() {
  return (
    <ExpoMultiModuleDemoView
      style={styles.container}
      data={[
        {
          color: '#ff0000',
          percentage: 0.5,
        },
        {
          color: '#00ff00',
          percentage: 0.2,
        },
        {
          color: '#0000ff',
          percentage: 0.3,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
