import { FriendCard } from './FriendCard';
import s from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return (
      <ul className={s.list}>
  {friends.map(friend => (
    <FriendCard
      key={friend.id}
      avatar={friend.avatar}
      isOnline={friend.isOnline}
      name={friend.name}
    />
  ))}
</ul>
  )
};
  