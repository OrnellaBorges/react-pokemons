function Test ({message, question, propsClickHere, propsAge}){

    const monTableau = ['one', 'two']
    const greeting = 'bonjour'
    const num = 17

    /* const testRecup = (e) => {
        console.log('e.target.previousSibling.value', e)
    } */

    return(
        <div>
            <div>Je suis l'enfant 3</div>
            {/* <button onClick={() => question('Tu vas bien?')}>je suis un bouton {message}</button>
            <button onClick={() => propsClickHere(100)}>BOUTON</button> */}
            <input type='number' placeholder="entrez votre age" />
            <button onClick={(e) => propsAge( Number(e.target.previousSibling.value) )}>AGE</button>

        </div>
    )
} 

export default Test