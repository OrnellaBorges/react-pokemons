
function Enfant ({firstname, lastname, fonctionProp}){

    return (
        <div>
            <p>{firstname} {lastname}</p>
            <button onClick={() => fonctionProp('bidon-ville')} >click</button>
        </div>
        )
}

export default Enfant