import React ,{useState} from 'react'
import { GifExpertAdd } from './components/GifExpertAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['Dragon ball'])

    return (
        <>
            <h2>Gif Expert</h2>
            <GifExpertAdd setCategories={setCategories}  />
            <hr/>
            <ol>
                {
                    categories.map(category=>{
                        return <GifGrid key={category} category={category} />
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;