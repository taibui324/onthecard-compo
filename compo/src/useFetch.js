
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);



  useState (() => {
      const abort = new AbortController();
      

      setTimeout(() => {
          fetch(url, {signal: abort.signal})
          
          .then(res => {
              if(!res.ok) {// error from server
              throw Error( ' could not fetch data');
          }
          
          return res.json();
          })
          
          .then(data => {
              setIsPending(false);
              setData(data);
              setError(null);
          })

          .catch(err => {
            if (err.name === 'Error') {
              console.log('cant fetch data');
            } else {
              // auto catches network / connection error
              setIsPending(false);
              setError(err.message);
            }
          })
        }, 1000);
    
        // abort the fetch
        return () => abort.abort();
      }, [url])
    
      return { data, isPending, error };
    }
     
export default useFetch;