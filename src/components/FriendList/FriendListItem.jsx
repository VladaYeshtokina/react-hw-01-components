import PropTypes from 'prop-types';
import { CiCircleCheck, CiCircleMinus } from 'react-icons/ci';
import css from 'components/FriendList/FriendList.module.css';

export const FriendListItem = ({ status, avatar, name }) => {
  
  return (
    
    //   <li className={css.item}>
    //     {!status ? (
    //       <span>
    //         <CiCircleMinus size="30" className={css.offline} />
    //       </span>
    //     ) : (
    //       <span>
    //         <CiCircleCheck size="30" className={css.online} />
    //       </span>
    //     )}
    //     <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    //     <p className={css.name}>{name}</p>
    // </li>
    
(!status) ? (<li className={css.itemIsOffline}>        
          <span>
            <CiCircleMinus size="30" className={css.offline} />
          </span>        
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>) : (<li className={css.itemIsOnline}>        
          <span>
            <CiCircleCheck size="30" className={css.online} />
          </span>        
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>) 



    
  );
}

FriendListItem.propTypes = {  
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
