import React, { useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { EmpresaController } from '../controller/empresaController'
import Header from '../components/Header/Header'
import api from '../service/api';

import DropzoneScreen from '../components/Dropzone/Dropzone';
import { useUploadController } from '../controller/ImageUpload/UploadController';

const CadastroNovoItem = () => {
    const { getEmpresa, handleEmpresa } = EmpresaController()
    const { handleUpload, getUpload } = useUploadController();

    const [value, setValue] = useState(0);
    const [name, setName] = useState('');

    return (
        <div>
            <Header />
            <div className="p-grid p-fluid">
                <div className="p-field p-col-6 p-md-3 ">
                    <label style={{ fontSize: 14 }} htmlFor="NOME">Nome: </label>
                    <InputText
                        id="NOME"
                        value={name}
                        maxLength={150}
                        onChange={(e) => {
                            setName(e.currentTarget.value)
                        }}
                    />
                </div>
                <div className="p-field p-col-6 p-md-3 ">
                    <label style={{ fontSize: 14 }} htmlFor="VALOR">Valor: </label>
                    <InputNumber
                        id="VALOR"
                        value={value}
                        maxLength={150}
                        onChange={(e) => {
                            setValue(e.value)
                        }}
                        mode="decimal" minFractionDigits={2}
                    />
                </div>
                {name ?
                    <div className="p-field p-col-6 p-md-3 ">
                        <DropzoneScreen nameFile={name} />
                    </div>
                    : <></>}
                {name ?
                    <div className="p-field p-col-6 p-md-3 ">
                        <label style={{ fontSize: 14 }} htmlFor="VALOR">Finalizar: </label>
                        <Button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault()
                                handleEmpresa.finalizarCadastro({ value, name })
                                handleUpload.processUploadFileImage()
                                // handleClient.finishBuy()
                            }}
                            style={{ alignSelf: 'end' }}
                            label="Finalizar Cadastro"
                            className="p-button-primary" />
                    </div>
                    : <></>
                }
            </div>
        </div >
    )
}

export default CadastroNovoItem;