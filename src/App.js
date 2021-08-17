import React, {useState, useEffect} from 'react'
import Loading from './companents/Loading'
import Harrys from './companents/Harrys'
import './style.css'

const url = 'https://hp-api.herokuapp.com/api/characters'
const App = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([ ])
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
            
        }
        getData()
    }, [ ])
    function close(name){
       const newData = data.filter(el=>el.name !== name)
       setData(newData)
    }
    
    if(data.length == 0){
        return(
            <Loading/>
        )
    }

    return (
        <div className="bigCountainer">
            <Harrys close={close} data={data}/>
        </div>
    )
}

export default App


