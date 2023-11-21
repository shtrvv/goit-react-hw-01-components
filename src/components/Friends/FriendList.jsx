import FriendListItem from "./FriendListItem";

const FriendList = ({friends}) => {
  return (
    <ul className="friend-list">
          {friends.map(({ avatar, name, isOnline, id }) => {
              return (
                  <FriendListItem
                      key={id}
                      avatar={avatar}
                      name={name}
                      isOnline={isOnline}
                  />
              )
          })}
    </ul>
  )
}

export default FriendList