

import { Link } from "react-router-dom";
import "./menus.css";

export const Menus = (props) => {

    return <div className="menus">
        {
            props.list?.map((menu) => {
                return <div
                    key={menu.target}
                    className="menu-item"
                  
                >
                    <Link to={menu.target}>
                        {menu.name}
                    </Link>

                </div>
            })
        }
    </div>
}