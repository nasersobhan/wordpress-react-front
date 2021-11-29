import { useState, useEffect } from 'react'
import axios from 'axios'


const useGetData = (url) => {
    console.log(url);
    const [data, setData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      setTimeout(() => {
        axios.get('https://nasersobhan.com/'+url)
        .then(res => {
            console.log(res.data)
            setData(res.data);
            setIsLoaded(true);
        })
        .catch(err => setError(err))
      }, 500)
        
     },[]);
     
    return {data, isLoaded, error }
}


export default useGetData
