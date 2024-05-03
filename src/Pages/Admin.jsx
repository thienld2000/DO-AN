    import React from 'react'
    import {Sidebar} from "../../src/container-admin"
    import { Outlet} from 'react-router-dom';
    import 'bootstrap/dist/css/bootstrap.min.css';

    const Admin = () => {
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
            <Sidebar />
            </div>
            <div className="col-md-9">
                <Outlet />
            </div>
        </div>
        </div>

    )
    }

    export default Admin