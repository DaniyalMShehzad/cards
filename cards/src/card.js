function Card(props){
    const add=()=>{
        console.log("success");
    }
    return(
        <>
        {props.data.map((e,i)=>{
            return(
        <div className="app2" key={i} onClick={()=>{
            }}>

            <img src={e.imge}/>
            <h3>{e.name}</h3>
            <h4>{e.type}</h4>
            <p>{e.discpriton}</p>
            <p>{e.price}</p>
            <button onClick={add}>{e.button}</button>
        </div>
            )
        })
    }
        </>
    )
}

export default Card