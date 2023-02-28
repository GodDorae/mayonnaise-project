import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonButton from '../../components/commonButton';
import buttonWithLogic from '../../components/commonButtonForMax3';
import {IWorkspacePreference} from '../../types/preferenceType';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../../types/introScreenPropsType';
import {RouteProp} from '@react-navigation/native';

interface Props {
  navigation: IntroStackNavigationProps<'WorkspacePreference'>;
  route: RouteProp<IntroStackParamList, 'WorkspacePreference'>;
}

const WorkspacePreference = ({navigation}: Props) => {
  const [workspace, setWorkspace] = useState<IWorkspacePreference>({
    Cafe: false,
    Studyroom: false,
    Studycafe: false,
    Meetingroom: false,
    SharedOffice: false,
    Library: false,
    Bookcafe: false,
    Lounge: false,
  });
  const [totalChecked, setTotalChecked] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (
      !workspace.Cafe &&
      !workspace.Studyroom &&
      !workspace.Studycafe &&
      !workspace.Meetingroom &&
      !workspace.SharedOffice &&
      !workspace.Library &&
      !workspace.Bookcafe &&
      !workspace.Lounge
    ) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  }, [
    workspace.Cafe,
    workspace.Studyroom,
    workspace.Studycafe,
    workspace.Meetingroom,
    workspace.SharedOffice,
    workspace.Library,
    workspace.Bookcafe,
    workspace.Lounge,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerMainText}>
          어떤 워크 스페이스를 선호하나요?
        </Text>
        <Text style={styles.headerSubText}>
          최대 3개까지 선택할 수 있습니다.
        </Text>
      </View>
      {buttonWithLogic(
        workspace.Cafe,
        ['카페', 'Cafe'],
        totalChecked,
        setTotalChecked,
        setWorkspace,
      )}
      {buttonWithLogic(
        workspace.Studyroom,
        ['스터디룸', 'Studyroom'],
        totalChecked,
        setTotalChecked,
        setWorkspace,
      )}
      {buttonWithLogic(
        workspace.Studycafe,
        ['스터디 카페', 'Studycafe'],
        totalChecked,
        setTotalChecked,
        setWorkspace,
      )}
      {buttonWithLogic(
        workspace.Meetingroom,
        ['회의실', 'Meetingroom'],
        totalChecked,
        setTotalChecked,
        setWorkspace,
      )}
      {buttonWithLogic(
        workspace.SharedOffice,
        ['공유 오피스', 'SharedOffice'],
        totalChecked,
        setTotalChecked,
        setWorkspace,
      )}
      {buttonWithLogic(
        workspace.Library,
        ['도서관', 'Library'],
        totalChecked,
        setTotalChecked,
        setWorkspace,
      )}
      {buttonWithLogic(
        workspace.Bookcafe,
        ['북카페', 'Bookcafe'],
        totalChecked,
        setTotalChecked,
        setWorkspace,
      )}
      {buttonWithLogic(
        workspace.Lounge,
        ['라운지', 'Lounge'],
        totalChecked,
        setTotalChecked,
        setWorkspace,
      )}
      {commonButton(
        isSelected,
        '다음',
        () => {
          navigation.navigate('BottomTabNavigator');
        },
        false,
      )}
    </View>
  );
};

export default WorkspacePreference;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flex: 1,
    gap: 5,
    marginBottom: 20,
  },
  headerMainText: {
    fonsSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  headerSubText: {
    fontSize: 20,
    color: 'black',
  },
});
