import PropTypes from 'prop-types';
import s from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return (
<ul className="friend-list">
  {friends.map(friend =>
<li 
    key={friend.id}
    className={s.item}>
  <span className={s.status}></span>

  <img className={s.avatar} 
  src={friend.avatar} 
  alt={friend.name} 
  width="48" />
  <p className={s.name}>{friend.name}</p>
</li>
 )}
</ul>
    )
    
};

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
   };
  
  FriendList.defaultProps = {
    name: 'User',
    isOnline: 'false',
};