import { Sort } from "./SortCats";

function SingleCat({id=0, name="undefined", latinName="undefined", image="undefined", allCats, setAllCats, sort, setSort, setCurrentCats}) {
    function DeleteCat() {
        let newCats = [...allCats];
        newCats = newCats.filter(cat => cat.id != id);
        setAllCats(newCats);
        Sort({filter: sort.filter, sort: sort.sort}, newCats, setCurrentCats, sort, setSort);
    }
    
    return (
        <li className="cat">
            <img src={image} alt={name} width="400px"/>
            <h3>{name}</h3>
            <p>{latinName}</p>
            <button onClick={DeleteCat}>delete</button>
        </li>
    )
}

export default SingleCat;