import { useEffect,  useState } from "react";
import axios from '../api'
export function useFetch(api, ...rest){
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    useEffect(()=>{
        setLoading(true);
        axios
          .get(api)
          .then(res => setData(res))
          .catch(err => console.log(err))
          .finally(()=>setLoading(false))
      },[...rest])
      return {data, loading}
}