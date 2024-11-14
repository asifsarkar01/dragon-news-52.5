import { Outlet } from "react-router-dom";


const AuthLayouts = () => {
    return (
        <div>
            Auth Layout 
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts;