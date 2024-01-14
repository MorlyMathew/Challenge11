import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class CustomBottomNavigation extends React.Component {
  render() {
    const { navigation, activeTab } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Home' && styles.activeTab]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'Profile' && styles.activeTab]}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'Settings' && styles.activeTab]}
          onPress={() => navigation.navigate('ProfileScreen')}
        >
          <Text style={styles.tabText}>Settings</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding:20,
    backgroundColor: '#fff', // Background color
    elevation: 8, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    backgroundColor: '#007BFF', // Active tab color
  },
  tabText: {
    color: '#333', // Tab text color
  },
});

export default CustomBottomNavigation;
