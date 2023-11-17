import PropTypes from 'prop-types';
import {friendStatus} from 'utils'
import { Item, Avatar, Name} from 'components/FriendList/FriendList.styled';

export const FriendListItem = ({ status, avatar, name }) => {
  const icons = friendStatus(status);
  return (
    <Item $status={status}>
      <span>{icons}</span>
      <Avatar src={avatar} alt="User avatar"/>
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {  
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
