# react-native-offline-notice

Notify the user is offline.

## Installation

```sh
npm install react-native-offline-notice
```

```sh
yarn add react-native-offline-notice
```

## Usage


```js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { OfflineNotice } from 'react-native-offline-notice';

// ...

export default function App() {
 
  return (
    <View style={styles.container}>
      <OfflineNotice />
      {/* other code */}
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
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
