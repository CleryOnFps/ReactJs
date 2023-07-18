import React , {useState} from 'react'

const stagiaires = [

    {id:1 , prenom: 'Betsy', note: 10},
    {id:2 , prenom: 'Didier', note: 10},
    {id:3 , prenom: 'Yannick', note: 2},
    {id:4 , prenom: 'Hervé', note: 0},
    {id:5 , prenom: 'Ludmilla', note: 10},
    {id:6 , prenom: 'Steeven', note: 20},
    {id:7 , prenom: 'Cléry', note: 3},
];
const StagiaireItem = ({stagiaire}) => { 
    
    return  <li >{stagiaire.prenom} note: {stagiaire.note}</li>
}

const ListeItem = () => {

    //initialisation de mon state allStagiaire 
    const [allStagiaires, setallStagiaires] = useState(stagiaires)
    
    const asc = () =>{
        const ascStagiaire = allStagiaires.sort(a,b =>a.note - b.note);
        setallStagiaires(ascStagiaires);
    console.log('asc',ascStagiaires) 
}

        const desc = () => {
            allStagiaires.sort(a,b =>a.note - b.note);
        setallStagiaires(ascStagiaires);
         console.log('desc') 
} 
  
 
 return (
    <div>ListeItem
        <ul>
            {allStagiaires.map(item => <StagiaireItem key={item.id} stagiaire={item}/>)}
        </ul>
        <button onClick={asc} className='btn btn-primary'>Ast</button>
        <button onClick={desc} className='btn btn-secondary'>Desc</button>
    </div>
  )
}

export default ListeItem