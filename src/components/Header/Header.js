import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import { InputText } from 'primereact/inputtext';

import './styles.scss';

const Header = () => {
    const history = useHistory();

    return (
        <div style={{ height: "10vh" }} className=" p-mb-2 layout-topbar p-d-flex p-justify-between p-align-center p-shadow-1">
            <div className=" p-d-flex p-align-center layout-topbar-icons">
            </div>
            <div className="p-tabmenu p-component">
                <Button className="p-tabmenu-item" style={{ background: '#042f5a', border: 'none' }} onClick={() => window.location.hash = '/cadastrarnovoitem'}>
                    <div>
                        <span style={{ margin: "0 2px", color: "#FFFFFF" }} className={`p-menu-item-icon pi pi-fw pi-pencil`} />
                        <span style={{ margin: "0 2px", color: "#FFFFFF" }} className="p-menu-item-text">Cadastrar Novo Item</span>
                    </div>
                </Button>
                <Button className="p-tabmenu-item" style={{ background: '#042f5a', border: 'none' }} onClick={() => window.location.hash = '/empresa'}>
                    <div>
                        <span style={{ margin: "0 2px", color: "#FFFFFF" }} className={`p-menu-item-icon pi pi-fw pi-list`} />
                        <span style={{ margin: "0 2px", color: "#FFFFFF" }} className="p-menu-item-text">Pedidos</span>
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default Header;