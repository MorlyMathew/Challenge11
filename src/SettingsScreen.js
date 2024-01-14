// SettingsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

class SettingsScreen extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen</Text>
        <Button title="Go to Details" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }
}

export default SettingsScreen;
