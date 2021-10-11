import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, Form } from "react-bootstrap";

function Musics({ albums, handleSearch, handleAdd, inputValue }) {
  const filterResult = albums.every((i) => {
    return i.isShown === false;
  });
  if (filterResult) {
    return (
      <>
        <Form.Control
          onKeyDown={handleSearch}
          type="search"
          placeholder="搜尋"
          style={{ maxWidth: "500px", margin: "0 auto" }}
        />
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <h1>查無與{inputValue}相關的結果</h1>
          <p>請確認所有拼字正確．或使用較少．或使用較少或不同的關鍵字．</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Form.Control
          onKeyDown={handleSearch}
          type="search"
          placeholder="搜尋"
          style={{ maxWidth: "500px", margin: "10px auto" }}
        />
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
                  <button
                    onClick={() => handleAdd(album.id)}
                    className="btn btn-success"
                  >
                    <FontAwesomeIcon
                      icon={[`${album.isAdd ? "fas" : "far"}`, "heart"]}
                    />
                    {album.isAdd ? " 已收藏" : " 收藏"}
                  </button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default Musics;
