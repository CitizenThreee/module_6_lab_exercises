function Avatar(props) {
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} width="200px"/>
    )
}

export default Avatar;