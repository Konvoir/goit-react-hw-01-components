import PropTypes from 'prop-types';
import s from './FriendList.module.css'

export const FriendCard = ({ avatar, name, isOnline }) => {
    return (
        <li className={s.item}>
            <span className={isOnline ? s.online : s.ofline}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
};


FriendCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
  
  FriendCard.defaultProps = {
    name: 'User',
    isOnline: 'false',
};