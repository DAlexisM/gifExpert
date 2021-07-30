import React,{useState} from 'react'
import PropType from 'prop-types';

export const GifExpertAdd = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleinputChange =(e)=>{
        setinputValue(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(category=>[inputValue,...category]);
            setinputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
            type = "Tex"
            value = {inputValue}
            onChange={ handleinputChange }
          />
        </form>
    )
}


GifExpertAdd.propTypes = {
    setCategories: PropType.func.isRequired
}