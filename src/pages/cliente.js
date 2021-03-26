import React, { useEffect, useRef, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';

import api from '../service/api';
import { ClienteController } from '../controller/clienteController'

const Empresa = () => {
    const { getClient, handleClient } = ClienteController()
    const [products, setProducts] = useState([])
    const toast = useRef();

    useEffect(() => {
        api.get('/foods').then(response => {
            setProducts(response.data)
        }).catch(err => console.log(err))
    }, [])

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        {product.index <=4 ? 
                        <img height="100px" src={`http://localhost:3336/files/images/product/${product.name}.jpeg`} className="product-image" />
                        : <img height="100px" src={`http://localhost:3336/files/images/product/embreve.jpeg`} className="product-image" />
                        }
                    </div>
                    <div>
                        <h4 className="p-mb-1">{product.name}</h4>
                        <h6 className="p-mt-0 p-mb-3">{product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h6>
                        <div className="car-buttons p-mt-5">
                            <Button icon="pi pi-check" label="Comprar" onClick={(e) => handleClient.addProduct(product)} className="p-button p-button-rounded p-mr-2" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const actionAtividadeBodyTemplate = (product) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-minus"
                    className="p-button-rounded p-button-text p-button-primary"
                    onClick={(e) => {
                        e.preventDefault()
                        handleClient.minusProduct(product)
                    }}
                />
                <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-text p-button-danger"
                    onClick={(e) => {
                        e.preventDefault()
                        handleClient.removeProduct(product)

                    }}
                />
            </React.Fragment>
        );
    };

    return (
        <div style ={{padding: "70px 2rem 2rem 2rem"}}>
            <Toast ref={getClient.toast} />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Carousel value={products} itemTemplate={productTemplate} numVisible={3} autoplayInterval={3000} numScroll={1}></Carousel>
            </div>
            <div className="p-card p-p-4">
                <DataTable value={getClient.productsClicked}>
                    <Column field="name" header="Produto"></Column>
                    <Column field="value" header="Valor"></Column>
                    <Column field="quantidade" header="Quantidade"></Column>
                    <Column body={actionAtividadeBodyTemplate} bodyStyle={{ textAlign: 'right' }}></Column>
                </DataTable>
            </div>
            <div className="p-d-flex p-jc-end p-mr-2 p-mb-6 p-mt-2">
                <Button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault()
                        handleClient.finishBuy()
                    }}
                    style={{ alignSelf: 'end' }}
                    label="Finalizar Compra"
                    className="p-button-primary" />
            </div>
        </div>

    );
}

export default Empresa;
