import React from 'react'
import { useState,useEffect } from 'react'

import Button from "@material-ui/core/Button";

const Files = () => {
    const [data, setData] = useState([])
    const apiGet=()=>{
    fetch('https://gorest.co.in/public/v1/todos',)
    .then((response) => response.json())
    .then((json) =>{ console.log(json);
        
    setData(json)});

    };
    useEffect(() => {
       apiGet()
    },[])
    return (
        <>
            My API <br/>
            <Button variant="contained"  onclick={apiGet}> hey 
            {JSON.stringify(data)}
          
            </Button>
          
        </>
    )
}

export default Files
