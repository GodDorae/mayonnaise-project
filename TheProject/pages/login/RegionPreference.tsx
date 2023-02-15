import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonButton from '../../components/commonButton';
import {IRegionPreference} from '../../types/preferenceType';
import {RegionPreferenceProps} from '../../types/screenPropsType';

const RegionPreference = ({navigation}: RegionPreferenceProps) => {
  const [region, setRegion] = useState<IRegionPreference>({
    Gangnam: false,
    Seolleung: false,
    Samsung: false,
    Yeoksam: false,
    Nonhyeon: false,
  });
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (
      !region.Gangnam &&
      !region.Seolleung &&
      !region.Samsung &&
      !region.Yeoksam &&
      !region.Nonhyeon
    ) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  }, [
    region.Gangnam,
    region.Nonhyeon,
    region.Samsung,
    region.Seolleung,
    region.Yeoksam,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>어떤 지역의 워크 스페이스에</Text>
          <Text style={styles.headerText}>관심이 있나요?</Text>
        </View>
        <View style={styles.headerDescriptionContainer}>
          <Text style={styles.headerDescription}>
            Workus는 강남, 역삼, 선릉, 삼성, 논현을 우선으로
          </Text>
          <Text style={styles.headerDescription}>
            정보를 제공하고 있습니다.
          </Text>
        </View>
        <View style={styles.headerDescriptionContainer}>
          <Text style={styles.headerDescription}>
            더 멋지고 다양한 워크 스페이스 제공을 위해
          </Text>
          <Text style={styles.headerDescription}>
            서비스 이용으로 Workus를 응원해 주세요!
          </Text>
        </View>
      </View>
      <View style={styles.regionContainer}>
        {commonButton(
          region.Gangnam,
          '강남역',
          () => {
            setRegion(prev => {
              let obj = {...prev};
              obj = {...obj, Gangnam: !obj.Gangnam};
              return obj;
            });
          },
          true,
        )}
        {commonButton(
          region.Seolleung,
          '선릉역',
          () => {
            setRegion(prev => {
              let obj = {...prev};
              obj = {...obj, Seolleung: !obj.Seolleung};
              return obj;
            });
          },
          true,
        )}
        {commonButton(
          region.Samsung,
          '삼성역',
          () => {
            setRegion(prev => {
              let obj = {...prev};
              obj = {...obj, Samsung: !obj.Samsung};
              return obj;
            });
          },
          true,
        )}
        {commonButton(
          region.Yeoksam,
          '역삼역',
          () => {
            setRegion(prev => {
              let obj = {...prev};
              obj = {...obj, Yeoksam: !obj.Yeoksam};
              return obj;
            });
          },
          true,
        )}
        {commonButton(
          region.Nonhyeon,
          '논현역',
          () => {
            setRegion(prev => {
              let obj = {...prev};
              obj = {...obj, Nonhyeon: !obj.Nonhyeon};
              return obj;
            });
          },
          true,
        )}
      </View>
      {commonButton(
        isSelected,
        '다음',
        () => {
          navigation.navigate('ObjPreference');
        },
        false,
      )}
    </View>
  );
};

export default RegionPreference;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flex: 2.5,
  },
  header: {
    gap: 5,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  headerDescriptionContainer: {
    marginVertical: 10,
  },
  headerDescription: {
    color: 'black',
  },
  regionContainer: {
    flex: 4.5,
    marginVertical: 20,
  },
});
