function SingleCat({name="undefined", latinName="undefined", image="undefined"}) {
    return (
        <li className="cat">
            <img src={image} alt={name} width="400px"/>
            <h3>{name}</h3>
            <p>{latinName}</p>
        </li>
    )
}

export default SingleCat;