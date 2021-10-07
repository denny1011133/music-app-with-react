import { Row, Col, Card } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'

function Musics() {

    const dummyData = [{
        id: uuidv4(),
        name: "123",
        description: "text"
    }, {
        id: uuidv4(),
        name: "123",
        description: "text"
    }, {
        id: uuidv4(),
        name: "123",
        description: "text"
    }, {
        id: uuidv4(),
        name: "123",
        description: "text"
    }, {
        id: uuidv4(),
        name: "123",
        description: "text"
    }, {
        id: uuidv4(),
        name: "123",
        description: "text"
    }
    ]

    const [albums, setAlbums] = useState(dummyData);


    return <Row xs={1} md={2} className="g-4">
        {albums.map((album) => (
            <Col key={album.id}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{album.name}</Card.Title>
                        <Card.Text>
                        {album.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
}


export default Musics