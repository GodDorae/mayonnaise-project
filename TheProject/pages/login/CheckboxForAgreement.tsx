import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {IObligationChecklist, IOptionChecklist} from '../../types/loginType';
import {
  onAllObligationAgreementPress,
  onAllOptionAgreementPress,
  onObligation1Press,
  onObligation2Press,
  onObligation3Press,
  onObligation4Press,
  onObligation5Press,
  onOption1Press,
  onOption2Press,
} from '../../logics/login/onPressLogic';
import {CheckboxAgreementProps} from '../../types/screenPropsType';
import commonButton from '../../components/commonButton';

const CheckboxForAgreement = ({navigation}: CheckboxAgreementProps) => {
  const [obligationChecklist, setObligationChecklist] =
    useState<IObligationChecklist>({
      obligation1: false,
      obligation2: false,
      obligation3: false,
      obligation4: false,
      obligation5: false,
    });
  const [optionChecklist, setOptionChecklist] = useState<IOptionChecklist>({
    option1: false,
    option2: false,
  });
  const [allObligationsAgreed, setAllObligationsAgreed] =
    useState<boolean>(false);
  const [allOptionsAgreed, setAllOptionsAgreed] = useState<boolean>(false);

  useEffect(() => {
    if (
      obligationChecklist.obligation1 &&
      obligationChecklist.obligation2 &&
      obligationChecklist.obligation3 &&
      obligationChecklist.obligation4 &&
      obligationChecklist.obligation5
    ) {
      setAllObligationsAgreed(true);
    } else {
      setAllObligationsAgreed(false);
    }
  }, [
    obligationChecklist.obligation1,
    obligationChecklist.obligation2,
    obligationChecklist.obligation3,
    obligationChecklist.obligation4,
    obligationChecklist.obligation5,
  ]);

  useEffect(() => {
    if (optionChecklist.option1 && optionChecklist.option2) {
      setAllOptionsAgreed(true);
    } else {
      setAllOptionsAgreed(false);
    }
  }, [optionChecklist.option1, optionChecklist.option2]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>????????? ????????? ????????? ??????</Text>
        <Text style={styles.text}>????????? ?????? ????????? ????????? ?????????.</Text>
      </View>
      <View style={styles.obligationsContainer}>
        <View style={styles.title}>
          <Text style={styles.text}>??????</Text>
          <View style={styles.agreement}>
            <Text style={styles.text}>?????? ??????</Text>
            <BouncyCheckbox
              size={25}
              fillColor="#FFCF54"
              unfillColor="white"
              iconStyle={styles.checkboxIconStyle}
              innerIconStyle={styles.checkboxInnerIconStyle}
              disableBuiltInState
              isChecked={allObligationsAgreed ? true : false}
              onPress={() =>
                onAllObligationAgreementPress(setObligationChecklist)
              }
            />
          </View>
        </View>
        <View style={styles.row}>
          <BouncyCheckbox
            size={25}
            fillColor="#FFCF54"
            unfillColor="white"
            text="????????? ?????? ??????"
            iconStyle={styles.checkboxIconStyle}
            innerIconStyle={styles.checkboxInnerIconStyle}
            textStyle={styles.checkboxTextStyle}
            disableBuiltInState
            isChecked={obligationChecklist.obligation1 ? true : false}
            onPress={() => onObligation1Press(setObligationChecklist)}
          />
          <Pressable
            onPress={() =>
              navigation.navigate('AgreementDetail', {
                property: 'obligation',
                number: 1,
              })
            }>
            <FontAwesomeIcon icon={faAngleRight} />
          </Pressable>
        </View>
        <View style={styles.row}>
          <BouncyCheckbox
            size={25}
            fillColor="#FFCF54"
            unfillColor="white"
            text="?????? ?????? ?????? ??????"
            iconStyle={styles.checkboxIconStyle}
            innerIconStyle={styles.checkboxInnerIconStyle}
            textStyle={styles.checkboxTextStyle}
            disableBuiltInState
            isChecked={obligationChecklist.obligation2 ? true : false}
            onPress={() => onObligation2Press(setObligationChecklist)}
          />
          <Pressable
            onPress={() =>
              navigation.navigate('AgreementDetail', {
                property: 'obligation',
                number: 2,
              })
            }>
            <FontAwesomeIcon icon={faAngleRight} />
          </Pressable>
        </View>
        <View style={styles.row}>
          <BouncyCheckbox
            size={25}
            fillColor="#FFCF54"
            unfillColor="white"
            text="?????? ?????? ????????? ?????? ??????"
            iconStyle={styles.checkboxIconStyle}
            innerIconStyle={styles.checkboxInnerIconStyle}
            textStyle={styles.checkboxTextStyle}
            disableBuiltInState
            isChecked={obligationChecklist.obligation3 ? true : false}
            onPress={() => onObligation3Press(setObligationChecklist)}
          />
          <Pressable
            onPress={() =>
              navigation.navigate('AgreementDetail', {
                property: 'obligation',
                number: 3,
              })
            }>
            <FontAwesomeIcon icon={faAngleRight} />
          </Pressable>
        </View>
        <View style={styles.row}>
          <BouncyCheckbox
            size={25}
            fillColor="#FFCF54"
            unfillColor="white"
            text="??? 3??? ?????? ??????"
            iconStyle={styles.checkboxIconStyle}
            innerIconStyle={styles.checkboxInnerIconStyle}
            textStyle={styles.checkboxTextStyle}
            disableBuiltInState
            isChecked={obligationChecklist.obligation4 ? true : false}
            onPress={() => onObligation4Press(setObligationChecklist)}
          />
          <Pressable
            onPress={() =>
              navigation.navigate('AgreementDetail', {
                property: 'obligation',
                number: 4,
              })
            }>
            <FontAwesomeIcon icon={faAngleRight} />
          </Pressable>
        </View>
        <View style={styles.row}>
          <BouncyCheckbox
            size={25}
            fillColor="#FFCF54"
            unfillColor="white"
            text="??? 14??? ??????"
            iconStyle={styles.checkboxIconStyle}
            innerIconStyle={styles.checkboxInnerIconStyle}
            textStyle={styles.checkboxTextStyle}
            disableBuiltInState
            isChecked={obligationChecklist.obligation5 ? true : false}
            onPress={() => onObligation5Press(setObligationChecklist)}
          />
          <Pressable
            onPress={() =>
              navigation.navigate('AgreementDetail', {
                property: 'obligation',
                number: 5,
              })
            }>
            <FontAwesomeIcon icon={faAngleRight} />
          </Pressable>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.title}>
          <Text style={styles.text}>??????</Text>
          <View style={styles.agreement}>
            <Text style={styles.text}>?????? ??????</Text>
            <BouncyCheckbox
              size={25}
              fillColor="#FFCF54"
              unfillColor="white"
              iconStyle={styles.checkboxIconStyle}
              innerIconStyle={styles.checkboxInnerIconStyle}
              disableBuiltInState
              isChecked={allOptionsAgreed ? true : false}
              onPress={() => {
                onAllOptionAgreementPress(setOptionChecklist);
              }}
            />
          </View>
        </View>
        <View style={styles.row}>
          <BouncyCheckbox
            size={25}
            fillColor="#FFCF54"
            unfillColor="white"
            text="??? 3??? ??????, ?????? ?????? ??????"
            iconStyle={styles.checkboxIconStyle}
            innerIconStyle={styles.checkboxInnerIconStyle}
            textStyle={styles.checkboxTextStyle}
            disableBuiltInState
            isChecked={optionChecklist.option1 ? true : false}
            onPress={() => onOption1Press(setOptionChecklist)}
          />
          <Pressable
            onPress={() =>
              navigation.navigate('AgreementDetail', {
                property: 'option',
                number: 1,
              })
            }>
            <FontAwesomeIcon icon={faAngleRight} />
          </Pressable>
        </View>
        <View style={styles.row}>
          <BouncyCheckbox
            size={25}
            fillColor="#FFCF54"
            unfillColor="white"
            text="????????? ?????? ??????"
            iconStyle={styles.checkboxIconStyle}
            innerIconStyle={styles.checkboxInnerIconStyle}
            textStyle={styles.checkboxTextStyle}
            disableBuiltInState
            isChecked={optionChecklist.option2 ? true : false}
            onPress={() => onOption2Press(setOptionChecklist)}
          />
          <Pressable
            onPress={() =>
              navigation.navigate('AgreementDetail', {
                property: 'option',
                number: 2,
              })
            }>
            <FontAwesomeIcon icon={faAngleRight} />
          </Pressable>
        </View>
      </View>
      {commonButton(
        allObligationsAgreed,
        '???????????? ????????????',
        () => {
          navigation.navigate('Nickname');
        },
        false,
      )}
    </View>
  );
};

export default CheckboxForAgreement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  agreement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginRight: -18,
  },
  headerContainer: {
    flex: 1,
  },
  obligationsContainer: {
    flex: 3,
  },
  optionsContainer: {
    flex: 2,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  checkboxIconStyle: {
    borderColor: 'black',
    borderWidth: 1,
  },
  checkboxInnerIconStyle: {
    borderColor: 'white',
    borderWidth: 0,
  },
  checkboxTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'none',
  },
});
