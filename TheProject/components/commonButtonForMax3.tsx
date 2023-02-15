import React from 'react';
import commonButton from './commonButton';
import {Alert} from 'react-native';
import {IWorkspacePreference} from '../types/preferenceType';

const buttonWithLogic = (
  standard: boolean,
  text: string[],
  totalChecked: number,
  setTotalChecked: React.Dispatch<React.SetStateAction<number>>,
  setWorkspace: React.Dispatch<React.SetStateAction<IWorkspacePreference>>,
) => {
  return (
    <>
      {commonButton(
        standard,
        text[0],
        () => {
          if (standard) {
            setWorkspace(prev => {
              let newObj = {...prev};
              newObj = {...newObj, [text[1]]: false};
              return newObj;
            });
            setTotalChecked(prev => prev - 1);
          } else {
            if (totalChecked > 2) {
              Alert.alert(
                '선택 개수에 제한이 있습니다!',
                '워크스페이스는 최대 3개까지 선택 가능합니다.',
                [
                  {
                    text: '확인',
                  },
                ],
                {cancelable: true},
              );
            } else {
              setWorkspace(prev => {
                let newObj = {...prev};
                newObj = {...newObj, [text[1]]: true};
                return newObj;
              });
              setTotalChecked(prev => prev + 1);
            }
          }
        },
        true,
      )}
    </>
  );
};

export default buttonWithLogic;
