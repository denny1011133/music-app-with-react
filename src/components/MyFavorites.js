import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function MyFavorites({ myFavorites }) {
  return (
    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>專輯名稱</th>
          <th>演唱者</th>
          <th>類型</th>
          <th>移除</th>
        </tr>
      </thead>
      <tbody>
        {myFavorites.map((i) => {
          return (
            <tr>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.artist}</td>
              <td>{i.type}</td>
              <td>
                {" "}
                <FontAwesomeIcon icon={faTrash} size="lg" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default MyFavorites;
