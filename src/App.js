import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App=()=>{

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          setData(persons );
        })
    
      
    },[])

    console.log(data);
    
  return (
    <div>App</div>
  )
}

export default App 