import {Sort} from "./SortCats"

function AddCat({allCats, setAllCats, sort, setSort, setCurrentCats}) {
    function HandleAddCat(e){
        e.preventDefault();
        let id = Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER);
        let name = e.target.name.value;
        let latinName = e.target.latinName.value;
        let imgLink = e.target.imgLink.value;
        e.target.name.value = "";
        e.target.latinName.value = "";
        e.target.imgLink.value = "";
        const newCats = [...allCats, {id: id, name: name, latinName: latinName, image: imgLink}];
        setAllCats(newCats);
        Sort({filter: sort.filter, sort: sort.sort}, newCats, setCurrentCats, sort, setSort);
    }

    return(
        <form onSubmit={HandleAddCat}>
            <label type="text">
                name:
                <input type="text" name="name"/>
            </label><br />
            <label type="text">
                latin name:
                <input type="text" name="latinName"/>
            </label><br />
            <label type="text">
                image link:
                <input type="text" name="imgLink"/>
            </label><br />
            <button>Add Cat</button>
        </form>
    )
}

export default AddCat;