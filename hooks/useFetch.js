import {useState, useEffect} from 'react'
import axios from 'axios'
// import { RAPID_API_KEY } from '@.env';

// const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'x-rapidapi-key': 'e78f656cabmsh688fb8f74bd655ap178215jsnf76ce6e47a13',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query},
      };

      const fetchData = async() => {
          setIsLoading(true);
          try{
            const res = await axios.request(options);
            setData(res.data.data);
            setIsLoading(false);
          } catch(error){
            setError(error);
            alert('There is an error');
          } finally{
            setIsLoading(false);
          }
      }


      useEffect(()=>{
        fetchData()
      },[])

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }


      return { data, isLoading, error, refetch };

}

export default useFetch