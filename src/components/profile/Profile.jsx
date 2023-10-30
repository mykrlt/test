import './Profile.css';
import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';


export function Profile() {
 let user = localStorage.getItem('name');
 const [info, setInfo] = useLocalStorage('info');
 const [inputInfo, setInputInfo] = useState('')

    return (
        <main>
            <div className="Panel">

                <div className="User">
                    <div className='User-avatar'>
                        
                    </div>
                    <div className='User-info'>
                        {info &&(
                            <div>
                                <div>{user}</div>
                                <div>{info}</div>
                            </div>
                        )}
                        {!info &&(
                            <div>
                                <div>{user}</div>
                                <input placeholder='Расскажите о себе' value={inputInfo} onChange={(e) => setInputInfo(e.target.value)}/>
                                <button onClick={() => setInfo(inputInfo)}></button>
                            </div>
                        )}
                    </div>
                </div>
                <hr className='Hr'/>
                <div className="Progress">
                    <div></div>
                    <div></div>
                    <div></div>

                </div>
            </div>
        </main>
    )
}
