import React from 'react';
import {View, Pressable, Text, StyleSheet, Dimensions} from 'react-native';

const commonButton = (
  isActive: boolean,
  text: string,
  onPress: () => void,
  radius: boolean,
) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={
          isActive
            ? radius
              ? styles.activeButtonWithRadius
              : styles.activeButton
            : radius
            ? styles.inactiveButtonWithRadius
            : styles.inactiveButton
        }
        onPress={onPress}
        disabled={!radius ? (!isActive ? true : false) : false}>
        <Text style={isActive ? styles.activeText : styles.inactiveText}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default commonButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  activeButton: {
    width: Dimensions.get('window').width - 150,
    height: 40,
    backgroundColor: '#FFCF54',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButtonWithRadius: {
    width: Dimensions.get('window').width - 150,
    height: 40,
    backgroundColor: '#FFCF54',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  inactiveButton: {
    width: Dimensions.get('window').width - 150,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveButtonWithRadius: {
    width: Dimensions.get('window').width - 150,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  activeText: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  inactiveText: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
