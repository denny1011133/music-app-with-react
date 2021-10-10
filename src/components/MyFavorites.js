import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function MyFavorites({ myFavorites, handleDelete }) {
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

export default MyFavorites;
