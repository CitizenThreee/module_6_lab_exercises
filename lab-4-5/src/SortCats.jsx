function Sort(sortObj, cats, setCurrentCats, sort, setSort) {
    let newCats = [...cats];
    if(sortObj.filter != sort.filter) setSort({filter: sortObj.filter, sort: sort.sort})
    if(sortObj.sort != sort.sort) setSort({filter: sort.filter, sort: sortObj.sort})

    switch (sortObj.filter) {
        case "none":
            break;
        case "panthera":
            newCats = newCats.filter(cat => cat.latinName.toLowerCase().startsWith("panthera"))
    }

    switch (sortObj.sort) {
        case "az":
            newCats.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
            break;
        case "za":
            newCats.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)
    }

    setCurrentCats(newCats);
}

function SortCats({sort, setSort, allCats, setCurrentCats}) {
    return(
        <div>
            <label>
                {'Sort '}
                <select onChange={ (e) => Sort({filter: sort.filter, sort: e.target.value}, allCats, setCurrentCats, sort, setSort)} value={sort.sort}>
                    <option value="az">a - z</option>
                    <option value="za">z - a</option>
                </select>
            </label>

            <label>
                {'Filter '}
                <select onChange={ (e) => Sort({filter: e.target.value, sort: sort.sort}, allCats, setCurrentCats, sort, setSort) } value={sort.filter}> 
                    <option value="none">None</option>
                    <option value="panthera">Panthera</option>
                </select>
            </label>
        </div>
    )
}

export {SortCats, Sort};