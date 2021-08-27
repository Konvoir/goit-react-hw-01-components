import PropTypes from 'prop-types';

export const FriendList = ({ avatar, name, isOnline, id }) => {
    return (
<ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве -->
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