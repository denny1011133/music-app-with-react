import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Musics({ albums, handleAdd }) {
  return (
    <Row
      xs={1}
      md={3}
      className="g-4"
      style={{
        marginLeft: "224.8px",
        marginBottom: "100px",
      }}
    >
      {albums.map((album) => (
        <Col
          key={album.id}
          style={{
            display: album.isShown ? "block" : "none",
          }}
        >
          <Card
            style={{ backgroundColor: "#E8E8E8" }}
            className="border-dark h-100"
          >
            <Card.Img variant="top" src={album.image} />
            <Card.Body>
              <Card.Title>{album.name}</Card.Title>
              <Card.Text>{album.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              {" "}
              <a
                onClick={() => handleAdd(album.id)}
                className="btn btn-primary"
                style={{ display: album.isAdd ? "none" : "inline-block" }}
              >
                <FontAwesomeIcon icon={faPlus} /> 收藏
              </a>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Musics;
