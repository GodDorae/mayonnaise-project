import React, {useState} from 'react';
import {View, Text, Pressable, TextInput, StyleSheet} from 'react-native';
import commonButton from '../../components/commonButton';
import {NicknameProps} from '../../types/screenPropsType';

const Nickname = ({navigation}: NicknameProps) => {
  const [nickname, setNickname] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>닉네임을 설정해 주세요.</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="10자 이내 닉네임 설정"
          value={nickname}
          onChangeText={setNickname}
        />
        <Pressable
          style={styles.xButton}
          onPress={() =>
            setNickname(() => {
              return '';
            })
          }>
          <Text>X</Text>
        </Pressable>
      </View>
      {commonButton(
        nickname.length ? true : false,
        '다음',
        () => {
          navigation.navigate('RegionPreference');
        },
        false,
      )}
    </View>
  );
};

export default Nickname;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  textInputContainer: {
    flex: 5,
    position: 'relative',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    height: 50,
    padding: 10,
  },
  xButton: {
    position: 'absolute',
    top: 15,
    right: 20,
  },
});
