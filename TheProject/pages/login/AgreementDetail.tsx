import React from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import selectedAgreements from '../../logics/login/agreementSelectLogic';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../../types/introScreenPropsType';
import {RouteProp} from '@react-navigation/native';

interface Props {
  navigation: IntroStackNavigationProps<'AgreementDetail'>;
  route: RouteProp<IntroStackParamList, 'AgreementDetail'>;
}

const AgreementDetail = ({navigation, route}: Props) => {
  const {property, number} = route.params;
  const agreements: string[] | undefined = selectedAgreements(property, number);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesomeIcon size={30} icon={faAngleLeft} />
          </Pressable>
          <View>
            <Text style={styles.header}>이용 약관</Text>
          </View>
        </View>
        {agreements
          ? agreements.map((agreement, index) => (
              <View key={index} style={styles.agreementContainer}>
                <Text style={styles.agreementText}>제 {index + 1}항</Text>
                <Text style={styles.agreementText}>{agreement}</Text>
              </View>
            ))
          : null}
      </ScrollView>
    </View>
  );
};

export default AgreementDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: 20,
    gap: 5,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  agreementContainer: {
    marginVertical: 20,
    gap: 20,
  },
  agreementText: {
    color: 'black',
  },
});
