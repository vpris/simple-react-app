import React, {Fragment} from "react";
import './AppFooter.css'


export default function AppFooterFunctionalComponent(props) {
    const currentYear = new Date().getFullYear();
    return (
        <Fragment>
            <hr />
            <p className="footer">Copyright &copy; 2021-{ currentYear } vpris {props.myProperty}</p>
        </Fragment>
    );
}
