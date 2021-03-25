import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import api from '../service/api';

import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
import { EmpresaController } from '../controller/empresaController'
import Header from '../components/Header/Header'

function Empresa() {
    const { getEmpresa, handleEmpresa } = EmpresaController()
    const [pedidos, setPedidos] = useState([])
    const [showDialog, setShowDialog] = useState(false)
    const [pedido, setPedido] = useState({nPedido:4})

    useEffect(() => {
        api.get('pedidos').then(response => {
            setPedidos(response.data)
        })
    }, [])

    const actionAtividadeBodyTemplate = (product) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-check"
                    label="Enviar para entrega"
                    className="p-button-rounded p-button-text p-button-primary"
                    onClick={(e) => {
                        e.preventDefault()
                        // handleEmpresa
                    }}
                />
                <Button
                    label="Visualizar pedido"
                    className="p-button-rounded p-button-text p-button-primary"
                    onClick={(e) => {
                        e.preventDefault()
                        setPedido(product)
                        console.log(product)
                        setShowDialog(true)
                    }}
                />
            </React.Fragment>
        );
    };

    return (
        <div >
            <Header/>
            <div className="p-card p-p-4">
                <DataTable value={pedidos}>
                    <Column field="nPedido" header="Numero do pedido"></Column>
                    <Column body={actionAtividadeBodyTemplate} bodyStyle={{ textAlign: 'right' }}></Column>
                </DataTable>
            </div>
            <Dialog header={"Pedido numero: "+ pedido.nPedido} visible={showDialog} style={{ width: '50vw' }} onHide={() => setShowDialog(false)}>
                <DataTable value={pedido.data}>
                    <Column field="name" header="Nome"></Column>
                    <Column field="quantidade" header="Quantidade"></Column>
                </DataTable>
            </Dialog>
        </div>

    );
}

export default Empresa;
