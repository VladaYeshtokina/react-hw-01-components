import { BsFiletypeDocx, BsFiletypePdf, BsFiletypeMp3, BsFiletypePsd } from 'react-icons/bs';
import css from 'components/Statistics/Statistics.module.css';




const icon = idx => {
  switch (idx) {
    case 0:
      return <BsFiletypeDocx size='30'className={css.icon}/>;
    case 1:
      return <BsFiletypePdf size="30" className={css.icon} />;
    case 2:
      return <BsFiletypeMp3 size="30" className={css.icon} />;
    default:
      return <BsFiletypePsd size="30" className={css.icon} />;
  }
};


export { icon };