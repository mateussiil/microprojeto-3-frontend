import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Card } from 'primereact/card';

function Login() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Link to="/empresa">
                <Card title="Empresa" subTitle="Para empresas">
                    Empresa
                </Card>
            </Link>
            <Link to="/cliente">
                <Card title="Cliente" subTitle="Para Clientes">
                    Cliente
                </Card>
            </Link>
        </div>
    );
}

export default Login;
