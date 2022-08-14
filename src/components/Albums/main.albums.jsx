// children component
import {Container} from 'react-bootstrap'
import Collection from './collection.albums';
import React from "react"

const Albums = (props) => {
    
    return (
        <React.Fragment>
            <Container className="mt-2">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            <Collection/>
            </Container>
        </React.Fragment>
    );
}

export default Albums;