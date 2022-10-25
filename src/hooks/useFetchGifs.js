import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
  
    const [images, setimages] = useState([]);
    const [ isLoading , setIsLoading ] = useState( true );

    const getImages = async() => {

        const newImages = await getGifs( category );
        setimages( newImages );
        setIsLoading( false );
    }

    useEffect( () => {

        getImages();

    }, []); // un arreglo vacio, significa que lo ejecuta un sola vez
  
  
  
    return {

    images
    ,isLoading

  }
}
