import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum Screens {
  OnBoarding = 'OnBoarding',
  CheckboxForAgreement = 'CheckboxForAgreement',
  AgreementDetail = 'AgreementDetail',
  Nickname = 'Nickname',
  RegionPreference = 'RegionPreference',
  ObjPreference = 'ObjPreference',
  WorkspacePreference = 'WorkspacePreference',
}

export type RootStackParamList = {
  OnBoarding: undefined;
  CheckboxForAgreement: undefined;
  AgreementDetail: {
    property: string;
    number: number;
  };
  Nickname: undefined;
  RegionPreference: undefined;
  ObjPreference: undefined;
  WorkspacePreference: undefined;
};

export type OnBoardingProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.OnBoarding
>;

export type CheckboxAgreementProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.CheckboxForAgreement
>;

export type AgreementDetailProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.AgreementDetail
>;

export type NicknameProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.Nickname
>;

export type RegionPreferenceProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.RegionPreference
>;

export type ObjPreferenceProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.ObjPreference
>;

export type WorkspacePreferenceProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.WorkspacePreference
>;
