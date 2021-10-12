import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, Form } from "react-bootstrap";
import clsx from "clsx";
import { ReactComponent as Loading } from '../images/Spinner-1s-200px.svg'

function Musics({ albums, handleSearch, handleAdd, inputValue, isloading }) {

  if (isloading) {
    return <Loading />
  } else {
    const filterResult = albums.every((i) => {
      return i.isShown === false;
    });


    if (filterResult) {
      return (
        <>
          <Form.Control
            onInput={handleSearch}
            type="search"
            placeholder="搜尋"
            style={{
              width: "30vw",
              margin: "10px 150px",
              marginLeft: "240px",
            }}
            value={inputValue}
          />
          <div
            style={{
              width: "30vw",
              margin: "10px 150px",
              marginLeft: "240px",
              wordWrap: "break-word",
            }}
          >
            <h1>查無與{inputValue}相關的結果</h1>
            <p>請確認所有拼字正確．或使用較少．或使用較少或不同的關鍵字．</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Form.Control
            onInput={handleSearch}
            type="search"
            placeholder="搜尋"
            style={{
              width: "30vw",
              margin: "10px 150px",
              marginLeft: "240px",
            }}
            value={inputValue}
          />
          <Row
            xs={1}
            sm={2}
            md={3}
            className="g-4"
            style={{
              marginLeft: "224.8px",
              marginBottom: "100px",
              width: "70vw",
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
                  style={{
                    backgroundColor: "#E8E8E8",
                  }}

                  className="border-dark h-100"
                >
                  <Card.Img variant="top" src={album.image} />
                  <Card.Body>
                    <Card.Title>{album.name}</Card.Title>
                    <Card.Text>{album.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <button
                      onClick={() => handleAdd(album.id)}
                      className={clsx("btn btn-success", {
                        disabled: album.isAdd,
                      })}
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

}

export default Musics;
