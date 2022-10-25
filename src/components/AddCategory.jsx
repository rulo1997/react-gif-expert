import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue(target.value);        
    }

    const onSubmit = (event) => {
        event.preventDefault(); 

        const newValue = inputValue.trim();

        if( newValue.length <= 1 ) return;

        onNewCategory( newValue );

        //setCategories( categories =>  [ inputValue , ...categories]);   
        setinputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>

  )
}
