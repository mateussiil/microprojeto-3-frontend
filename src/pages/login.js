import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Card } from 'primereact/card';
import './styles.scss';

function Login() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height:'100vh' }}>
            <div className="p-flex-column p-d-flex">
                <Link to="/empresa">
                    <Card style={{ width: '20vw' }} title="Empresa" subTitle="Para empresas">
                        <span className="p-card-content" >Empresa</span>
                    </Card>
                </Link>
            </div>
            <div style={{ width: '5vw' }}></div>
            <div className="p-flex-column p-d-flex">
                <Link to="/cliente">
                    <Card style={{ width: '20vw' }} title="Cliente" subTitle="Para Clientes">
                        <span className="p-card-content" >Cliente</span>
                    </Card>
                </Link>
            </div>
        </div>
    );
}

export default Login;
