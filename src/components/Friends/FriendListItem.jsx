import css from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.item} key={id}>
      <span className={`status ${isOnline ? css.online : css.offline}`}></span>
        <img src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
    </li>
  )
}

export default FriendListItem