import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {login} from '@react-native-seoul/kakao-login';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../../types/introScreenPropsType';
import {RouteProp} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

interface Props {
  navigation: IntroStackNavigationProps<'OnBoarding'>;
  route: RouteProp<IntroStackParamList, 'OnBoarding'>;
}

const OnBoarding = ({navigation}: Props) => {
  const signInWithKakao = async (): Promise<void> => {
    try {
      await login();
      navigation.navigate('CheckboxForAgreement');
    } catch (err) {
      console.error('login err', err);
    }
  };

  const siginInWithGoogle = async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.navigate('CheckboxForAgreement');
    } catch (err) {
      console.error('login err', err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://makeus-challenge.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F786ee020-bbf1-4ed9-9f1e-cb5a2d18fd70%2Fworkus_%25EB%25A1%259C%25EA%25B3%25A0.png?table=block&id=81cbe8c9-5737-4d45-bddf-30d63e8271f4&spaceId=f1912130-0409-4e90-a90f-6091ae253e73&width=250&userId=&cache=v2',
          }}
        />
      </View>
      <View style={styles.loginContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            signInWithKakao();
          }}>
          <Text style={styles.text}>카카오 로그인</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            siginInWithGoogle();
          }}>
          <Text style={styles.text}>구글 로그인</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCF54',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  loginContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
  },
  button: {
    backgroundColor: '#eeeeee',
    borderRadius: 40,
    borderWidth: 1,
    width: 250,
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
  },
});
