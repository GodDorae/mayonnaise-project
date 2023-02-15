import {IObligationChecklist, IOptionChecklist} from '../../types/loginType';

export const onObligation1Press = (
  setObligationChecklist: React.Dispatch<
    React.SetStateAction<IObligationChecklist>
  >,
) => {
  setObligationChecklist(prev => {
    let obj = {...prev};
    obj = {...prev, obligation1: !obj.obligation1};
    return obj;
  });
};

export const onObligation2Press = (
  setObligationChecklist: React.Dispatch<
    React.SetStateAction<IObligationChecklist>
  >,
) => {
  setObligationChecklist(prev => {
    let obj = {...prev};
    obj = {...prev, obligation2: !obj.obligation2};
    return obj;
  });
};

export const onObligation3Press = (
  setObligationChecklist: React.Dispatch<
    React.SetStateAction<IObligationChecklist>
  >,
) => {
  setObligationChecklist(prev => {
    let obj = {...prev};
    obj = {...prev, obligation3: !obj.obligation3};
    return obj;
  });
};

export const onObligation4Press = (
  setObligationChecklist: React.Dispatch<
    React.SetStateAction<IObligationChecklist>
  >,
) => {
  setObligationChecklist(prev => {
    let obj = {...prev};
    obj = {...prev, obligation4: !obj.obligation4};
    return obj;
  });
};

export const onObligation5Press = (
  setObligationChecklist: React.Dispatch<
    React.SetStateAction<IObligationChecklist>
  >,
) => {
  setObligationChecklist(prev => {
    let obj = {...prev};
    obj = {...prev, obligation5: !obj.obligation5};
    return obj;
  });
};

export const onOption1Press = (
  setOptionChecklist: React.Dispatch<React.SetStateAction<IOptionChecklist>>,
) => {
  setOptionChecklist(prev => {
    let obj = {...prev};
    obj = {...prev, option1: !obj.option1};
    return obj;
  });
};

export const onOption2Press = (
  setOptionChecklist: React.Dispatch<React.SetStateAction<IOptionChecklist>>,
) => {
  setOptionChecklist(prev => {
    let obj = {...prev};
    obj = {...prev, option2: !obj.option2};
    return obj;
  });
};

export const onAllObligationAgreementPress = (
  setObligationChecklist: React.Dispatch<
    React.SetStateAction<IObligationChecklist>
  >,
) => {
  setObligationChecklist(prev => {
    let obj = {...prev};
    obj = {
      obligation1: !obj.obligation1,
      obligation2: !obj.obligation2,
      obligation3: !obj.obligation3,
      obligation4: !obj.obligation4,
      obligation5: !obj.obligation5,
    };
    return obj;
  });
};

export const onAllOptionAgreementPress = (
  setOptionChecklist: React.Dispatch<React.SetStateAction<IOptionChecklist>>,
) => {
  setOptionChecklist(prev => {
    let obj = {...prev};
    obj = {
      option1: !obj.option1,
      option2: !obj.option2,
    };
    return obj;
  });
};
