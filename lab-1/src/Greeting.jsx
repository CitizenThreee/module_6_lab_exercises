function Greeting(props){
    return(
        <div>
            {props.name ? <h1>Hello {props.name}</h1> : <h1>Hello World</h1>}
            {props.children}
        </div>
    )
}

export default Greeting;