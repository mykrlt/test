import { useLocalStorage } from '../../hooks/useLocalStorage';
import './Register.css';
import {useState} from 'react';
import logoBB from './images/BB_logo.jpg';
import logoBCS from './images/BCS_logo.jpg';
import logoF from './images/F_logo.jpg';
import logoKE from './images/KE_logo.webp';
import logoMR from './images/MR_logo.jpg';
import logoTO from './images/TO_logo.jpg';
import logoTW from './images/TW_logo.jpg';

export function HomePage() {

const [user, setUser] = useLocalStorage("name");
const [inputValue, setInputValue] = useState("");


    return ( <div>
        {user &&(
            <main className="App-header">
                <hr className='HrF'/>
                <span className="Logo">Learn & Watch</span>
                <div className="About">
                    <p>
                        Learn & Watch - проект, посвящённый изучению английского во время просмотра сериалов. На этом сайте вы найдете все необходимые средства для изучения английского языка,
                        а именно: список сериалов, подходящих вам по уровню, чат, где вы можете общаться с другими пользователями, необходимые для комфортной учебы материалы.
                    </p>
                </div>
                <hr className="Hr"/>
                <div className="About-serials">
                    <h3>Наши сериалы:</h3>
                    <div className="Serial-li">
                        <div><img src={logoBB} alt="Breaking bad" className='Serial-logo'/></div>
                        <div><img src={logoBCS}alt="Better call Saul" className='Serial-logo'/></div>
                        <div><img src={logoF} alt="Friends" className='Serial-logo'/></div>
                        <div><img src={logoKE} alt="Killing Eva" className='Serial-logo'/></div>
                        <div><img src={logoMR} alt="Mr. robot" className='Serial-logo'/></div>
                        <div><img src={logoTO} alt="The office" className='Serial-logo'/></div>
                        <div><img src={logoTW} alt="The Wicther" className='Serial-logo'/></div>
                    </div>
                </div>
            </main>
        )}
        
        {!user && (
            <div>
                <header className="App-header">
                <hr className='HrF'/>
                        <div className="Reg-panel">
                            <span className="Logo">Learn & Watch</span>
                            <h3>Register</h3>
                            <input placeholder="name" className="Reg-panel-item" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                            <input type="password" placeholder="password" className="Reg-panel-item"/>
                            <button onClick={() => setUser(inputValue)} className="Reg-panel-button">Start</button>
                        </div>  
                </header>
            </div>
        )}


      </div>);
}

