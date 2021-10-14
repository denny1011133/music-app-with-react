import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Loading } from '../images/Spinner-1s-200px.svg'
import { Link } from "react-router-dom";

function MyFavorites({ myFavorites, handleDelete, isloading }) {
  if (isloading) {
    return <Loading />
  } else {
    if (myFavorites.length === 0) {
      return <div
        style={{
          marginLeft: "224.8px",
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>還沒有喜歡的音樂嗎?。</h1>
        <Link to="/albums"> 前往瀏覽音樂庫</Link>
      </div>
    } else {
      return (
        <Table
          style={{
            textAlign: "center",
            marginLeft: "230px",
            marginTop: "20px",
            width: "80vw",
          }}
          striped
          bordered
          hover
          size="lg"
          variant="dark"
          responsive
        >
          <thead>
            <tr>
              <th style={{ width: "3%" }}>#</th>
              <th style={{ width: "5%" }}>專輯名稱</th>
              <th style={{ width: "5%" }}>演唱者</th>
              <th style={{ width: "3%" }}>類型</th>
              <th style={{ width: "3%" }}>移除</th>
            </tr>
          </thead>
          <tbody>
            {myFavorites.map((i) => {
              return (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.artist}</td>
                  <td>{i.type}</td>
                  <td>
                    <FontAwesomeIcon
                      onClick={() => handleDelete(i.id)}
                      icon={faTimes}
                      size="lg"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      );
    }

  }

}

export default MyFavorites;
