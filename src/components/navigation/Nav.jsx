import './nav.css';
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
    <div className="Nav-main">
        <div className="Navigation">
            <Link className='Element' to="profile">
                <div><i className='bx bx-user-pin'/> Профиль</div>
            </Link>
            <Link className='Element' to="/">
                <div> <i className='bx bx-home bx-flip-horizontal'/> Главная</div>
            </Link>
            <div className="Element"><i className='bx bx-book-bookmark'/> Программа</div>
            <Link className="Element" to="/serials">
            <div><i className='bx bx-video'/> Сериалы</div>
            </Link>
            <div className="Element"><i className='bx bx-message-dots'/> Чат</div>
        </div>
    </div>
    )
};

export default Navigation;