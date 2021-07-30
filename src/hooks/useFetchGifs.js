import {useState, useEffect} from 'react'
import { getGifts } from '../helpers/getGifitem';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data:[],
        loading:true
    });
    
    useEffect(() => {
        getGifts( category )
        .then( imgs =>{
            setState({
                data: imgs,
                loading: false
            });
        })
    }, [category])

    return state;
}
