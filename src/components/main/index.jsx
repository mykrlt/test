import {Route, Routes} from "react-router";
import HomePage from "./register/Register.jsx";
import Serials from "./serials/Serials.jsx";
import Profile from "./profile/Profile.jsx";

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/serials" elementt={<Serials/>}/>
                <Route path="/profile" component={Profile}/>
                <Route/>
            </Routes>
        </div>
    )
};

export default Main;