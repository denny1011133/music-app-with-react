
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faPlayCircle, faPodcast, faColumns } from '@fortawesome/free-solid-svg-icons'

import { Form, Button } from 'react-bootstrap'

function SideBar() {
    return <div className="sidenav">
        <a href="https://music.apple.com/tw/browse" className="fw-bold"><FontAwesomeIcon icon={faApple} />Music</a>
        <Form.Control type="text" size="sm" placeholder="搜尋" />
        <div className="d-flex flex-column justify-content-evenly align-items-baseline gap-3">
            <Button ><FontAwesomeIcon icon={faPlayCircle} />立即聆聽</Button>
            <Button ><FontAwesomeIcon icon={faColumns} />瀏覽</Button>
            <Button ><FontAwesomeIcon icon={faPodcast} />廣播</Button>
        </div>
    </div>
}


export default SideBar