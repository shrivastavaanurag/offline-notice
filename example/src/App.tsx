import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { OfflineNotice } from 'react-native-offline-notice';

export default function App() {
  const [result, setResult] = useState<number | undefined>();

  useEffect(() => {
    
  }, []);

  return (
    <View style={styles.container}>
        <OfflineNotice />
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
