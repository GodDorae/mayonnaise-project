import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import commonButton from '../../components/commonButton';
import {IObjPreference} from '../../types/preferenceType';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../../types/introScreenPropsType';
import {RouteProp} from '@react-navigation/native';

interface Props {
  navigation: IntroStackNavigationProps<'ObjPreference'>;
  route: RouteProp<IntroStackParamList, 'ObjPreference'>;
}

const ObjPreference = ({navigation}: Props) => {
  const [obj, setObj] = useState<IObjPreference>({
    PersonalStudy: false,
    Laptop: false,
    Non_face_to_face: false,
    Face_to_face: false,
  });
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (
      !obj.PersonalStudy &&
      !obj.Laptop &&
      !obj.Non_face_to_face &&
      !obj.Face_to_face
    ) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  }, [obj.Face_to_face, obj.Laptop, obj.Non_face_to_face, obj.PersonalStudy]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          어떤 업무 목적으로 워크 스페이스를
        </Text>
        <Text style={styles.headerText}>찾고 있나요?</Text>
      </View>
      <View style={styles.objContainer}>
        <View style={styles.row}>
          <Pressable
            style={
              obj.PersonalStudy
                ? styles.activeObjElement
                : styles.inactiveObjElement
            }
            onPress={() => {
              setObj(prev => {
                let newObj = {...prev};
                newObj = {...newObj, PersonalStudy: !newObj.PersonalStudy};
                return newObj;
              });
            }}>
            <Text
              style={
                obj.PersonalStudy
                  ? styles.activeObjText
                  : styles.inactiveObjText
              }>
              개인 공부
            </Text>
          </Pressable>
          <Pressable
            style={
              obj.Laptop ? styles.activeObjElement : styles.inactiveObjElement
            }
            onPress={() => {
              setObj(prev => {
                let newObj = {...prev};
                newObj = {...newObj, Laptop: !newObj.Laptop};
                return newObj;
              });
            }}>
            <Text
              style={
                obj.Laptop ? styles.activeObjText : styles.inactiveObjText
              }>
              노트북
            </Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable
            style={
              obj.Non_face_to_face
                ? styles.activeObjElement
                : styles.inactiveObjElement
            }
            onPress={() => {
              setObj(prev => {
                let newObj = {...prev};
                newObj = {
                  ...newObj,
                  Non_face_to_face: !newObj.Non_face_to_face,
                };
                return newObj;
              });
            }}>
            <Text
              style={
                obj.Non_face_to_face
                  ? styles.activeObjText
                  : styles.inactiveObjText
              }>
              비대면 회의
            </Text>
          </Pressable>
          <Pressable
            style={
              obj.Face_to_face
                ? styles.activeObjElement
                : styles.inactiveObjElement
            }
            onPress={() => {
              setObj(prev => {
                let newObj = {...prev};
                newObj = {...newObj, Face_to_face: !newObj.Face_to_face};
                return newObj;
              });
            }}>
            <Text
              style={
                obj.Face_to_face ? styles.activeObjText : styles.inactiveObjText
              }>
              대면 회의
            </Text>
          </Pressable>
        </View>
      </View>
      {commonButton(
        isSelected,
        '다음',
        () => {
          navigation.navigate('WorkspacePreference');
        },
        false,
      )}
    </View>
  );
};

export default ObjPreference;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flex: 1.5,
    gap: 5,
  },
  headerText: {
    fonsSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  objContainer: {
    flex: 5.5,
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  activeObjElement: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#FFCF54',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeObjText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  inactiveObjElement: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  inactiveObjText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
