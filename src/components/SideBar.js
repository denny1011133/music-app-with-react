
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faPlayCircle, faColumns, faHeart } from '@fortawesome/free-solid-svg-icons'

import { Form, Button } from 'react-bootstrap'

function SideBar() {
    return <div className="sidenav px-2">
        <a href="https://music.apple.com/tw/browse" className="fw-bold"><FontAwesomeIcon icon={faApple} />Music</a>
        <Form.Control type="text" size="sm" placeholder="搜尋" />
        <div className="d-flex flex-column justify-content-evenly align-items-baseline gap-3 mt-2">
            <Button variant="light" style={{ color: "black" }} ><FontAwesomeIcon icon={faPlayCircle} /> 立即聆聽</Button>
            <Button variant="light" style={{ color: "black" }} ><FontAwesomeIcon icon={faColumns} /> 瀏覽</Button>
            <Button variant="light" style={{ color: "black" }}><FontAwesomeIcon icon={faHeart} /> 我的歌單</Button>
            
        </div>
        <hr/>
    </div>
}


export default SideBar