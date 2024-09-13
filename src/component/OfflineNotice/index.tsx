import React, { FC, useEffect, useState } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const { width } = Dimensions.get('window');

interface OfflineNoticeProps {
  color?: string;                              // Background color for offline banner
  message?: string;                            // Message to display
  customStyles?: ViewStyle;                    // Custom styles for the container
  customTextStyles?: TextStyle;                // Custom styles for the text
  height?: number;                             // Custom height for the container
  position?: 'top' | 'bottom';                 // Position of the banner
}

const OfflineBanner: FC<OfflineNoticeProps> = ({
  color = '#D22B2B',
  message = 'Please check your network connection.',
  customStyles,
  customTextStyles,
  height = Platform.OS === 'android' ? 65 : 80,
  position = 'top',
}) => {
  return (
    <View
      style={[
        styles.offlineContainer,
        {
          backgroundColor: color,
          height,
          top: position === 'top' ? 0 : undefined,
          bottom: position === 'bottom' ? 0 : undefined,
        },
        customStyles,
      ]}
    >
      <Text style={[styles.offlineText, customTextStyles]}>{message}</Text>
    </View>
  );
};

const OfflineNotice: FC<OfflineNoticeProps> = (props) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected ?? true);
    });

    return () => unsubscribe(); // Clean up the event listener
  }, []);

  return !isConnected ? <OfflineBanner {...props} /> : null;
};

const styles = StyleSheet.create({
  offlineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    paddingBottom: 20,
    position: 'absolute',
    zIndex: 99999,
  },
  offlineText: {
    color: '#ffffff',
    fontSize: 14,
  },
});

export default OfflineNotice;
