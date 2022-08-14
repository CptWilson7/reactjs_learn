import Axios from "axios"
import React, { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import {Button,ButtonGroup} from "react-bootstrap"
import Loaders from "../Utilities/loaders"


const Collection = () => {
    const [datas, setDatas] = useState([])
    const [limit, setLimit] = useState(3)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isCanceled = false
        if(isCanceled === false)
        {
            setLoading(true)
            Axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
            }).then((response) => setDatas(response.data)).catch((err) =>console.log(err)).finally(() => setLoading(false))
        }
        // clean up handler
        return () => {isCanceled = true}
    }, [limit])

    const handleLimit = (option) =>{
       if(option === "+"){
        setLimit((prev)=>prev + 1);
       }
       else{
        setLimit((prev)=>prev - 1);
       }
    }
    
    if(loading) return <Loaders/>
    return (
    <React.Fragment>
        <h3>{limit} collection</h3>
        <Carousel>
            {datas.map((data, i)=>{
                return(
                    <Carousel.Item key={i}>
                    <img
                      className="d-block w-100"
                      src= {data.url}
                      alt="First slide"
                      height={350}
                    />
                    <Carousel.Caption>
                      <p>{data.title}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
            })}
    </Carousel>
    <ButtonGroup className="d-flex justify-content align-items-center mt-2">
        <Button variant="btn btn-outline-primary" onClick={() => handleLimit("+")}>+</Button>
        <Button variant="btn btn-outline-primary" onClick={() => handleLimit("-")}>-</Button>
    </ButtonGroup>
    </React.Fragment>
    )
}

export default Collection