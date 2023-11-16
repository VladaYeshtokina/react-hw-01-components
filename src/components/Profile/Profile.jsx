import PropTypes from 'prop-types';
import { AiFillLike } from 'react-icons/ai';
import { RiUserFollowFill } from 'react-icons/ri';
import { MdReviews } from 'react-icons/md';
import css from 'components/Profile/Profile.module.css';

export const Profile = (props) => {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = props;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.box}>
          <RiUserFollowFill />
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.box}>
          <MdReviews />
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.box}>
          <AiFillLike />
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}


Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

