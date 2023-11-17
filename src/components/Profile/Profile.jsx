import PropTypes from 'prop-types';
import { AiFillLike } from 'react-icons/ai';
import { RiUserFollowFill } from 'react-icons/ri';
import { MdReviews } from 'react-icons/md';
import { iconSize } from 'constans';
import {
  ProfileCard,
  Descr,
  Name,
  Avatar,
  InfoList,
  Item,
  Label,
  Quantity,
} from 'components/Profile/Profile.styled';


export const Profile = (props) => {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = props;
  return (
    <ProfileCard>
      <Descr>
        <Avatar src={avatar} alt="User avatar"/>
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Descr>

      <InfoList>
        <Item>
          <RiUserFollowFill size={iconSize.sm} />
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <MdReviews size={iconSize.sm} />
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <AiFillLike size={iconSize.sm} />
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </InfoList>
    </ProfileCard>
  );
}


Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

