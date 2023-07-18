import React, {useState} from 'react'

const forminput = () => {
    
    const [myText, setMyText] = useState('');
    
    const send = () => { 

        setMyText(''); //remise a 0 de la variable myText
     }

    const handlerChange = (event) => {

        setMyText(event.target.value) ; //recuperation de la valeur du formulaire saisi dans l'input
        console.log('event change' , event.target.value) ;

    }
  
    return (
    <div>
    <input type="text"
    onChange={handlerChange}
    value={myText}
     placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />

     <label className="label">
     <span className="label-text-alt">{myText}</span>
   </label>
   <button className='btn' onClick={send}>Envoyer</button>
 </div>
  
  )
}

export default forminput