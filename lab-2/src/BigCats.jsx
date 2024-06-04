import SingleCat from "./SingleCat"

function BigCats() {
    const cats = [
        { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Cheetah_portrait_Whipsnade_Zoo.jpg' },
        { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Cougar_closeup.jpg' },
        { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://site-547756.mozfiles.com/files/547756/medium/Jaguar.jpg' },
        { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://images8.alphacoders.com/406/406084.jpg' },
        { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://3.bp.blogspot.com/-0enfHL35AAE/TeF3HSZhl-I/AAAAAAAAB1A/Li-ubFS9v2I/s1600/lion_1.jpg' },
        { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://media.wtsp.com/assets/WTSP/images/0a074568-9d0c-40ed-b4dd-7f0dc080f0ac/0a074568-9d0c-40ed-b4dd-7f0dc080f0ac_1920x1080.jpg' },
        { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://wallpapercave.com/wp/UBWCF1e.jpg' },
    ]

    const catItems = cats.map(cat => (
        <SingleCat key={cat.id} name={cat.name} latinName={cat.latinName} image={cat.image} />
    ))

    return (
        <div>
            <h1>Big Cats</h1>
            <ul>{ catItems }</ul>
        </div>
    )
}

export default BigCats;