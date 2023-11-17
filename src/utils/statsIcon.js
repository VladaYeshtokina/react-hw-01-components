import { BsFiletypeDocx, BsFiletypePdf, BsFiletypeMp3, BsFiletypePsd } from 'react-icons/bs';
import { iconSize } from 'constans';



export const statsIcon = idx => {
  switch (idx) {
    case 0:
      return <BsFiletypeDocx size={iconSize.md}/>;
    case 1:
      return <BsFiletypePdf size={iconSize.md}/>;
    case 2:
      return <BsFiletypeMp3 size={iconSize.md}/>;
    default:
      return <BsFiletypePsd size={iconSize.md}/>;
  }
};

