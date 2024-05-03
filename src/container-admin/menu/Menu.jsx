import React from 'react'
import MenuItem from '../../components/Menuitem/MenuItem';

const Menu = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="w-100 "><h2 className="text-center rounded mt-3 bg-primary">Menu Item</h2></div>
                <div className="d-flex flex-wrap justify-content-between border border-primary ">
                  <MenuItem />
                </div>
            </div>
        </>
    );
};

export default Menu