function Enfant2({firstName, lastName, fonctionBis}){


    return(
        <div>
            <div>Hello {firstName} {lastName}</div>
            <button onClick={() => fonctionBis('coucou')}>Prout</button>
        </div>
        
    )
}

export default Enfant2