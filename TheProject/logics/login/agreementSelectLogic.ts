import {
  obligationAgreement1,
  obligationAgreement2,
  obligationAgreement3,
  obligationAgreement4,
  obligationAgreement5,
  optionAgreement1,
  optionAgreement2,
} from '../../data/agreement/agreements';

const selectedAgreements = (property: string, number: number) => {
  let agreements;
  if (property === 'obligation') {
    switch (number) {
      case 1:
        agreements = obligationAgreement1;
        break;
      case 2:
        agreements = obligationAgreement2;
        break;
      case 3:
        agreements = obligationAgreement3;
        break;
      case 4:
        agreements = obligationAgreement4;
        break;
      case 5:
        agreements = obligationAgreement5;
        break;
      default:
        break;
    }
  } else {
    switch (number) {
      case 1:
        agreements = optionAgreement1;
        break;
      case 2:
        agreements = optionAgreement2;
        break;
      default:
        break;
    }
  }
  return agreements;
};

export default selectedAgreements;
