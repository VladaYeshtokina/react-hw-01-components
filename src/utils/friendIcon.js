import { CiCircleCheck, CiCircleMinus } from 'react-icons/ci';
import { iconSize } from 'constans';

export const friendStatus = status => {
  return !status ? (
    <CiCircleMinus size={iconSize.md} />
  ) : (
    <CiCircleCheck size={iconSize.md} />
  );
};
