import { Row, Col, Card } from 'react-bootstrap'


function Musics({ albums }) {

    return <Row xs={1} md={2} className="g-4">
        {albums.map(album => (
            <Col key={album.id} style={{ display: album.isShown ? "block" : "none" }}>
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