import React, { useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { EmpresaController } from '../controller/empresaController'
import Header from '../components/Header/Header'

const CadastroNovoItem = () => {
    const { getEmpresa, handleEmpresa } = EmpresaController()

    const [value, setValue] = useState(0);
    const [name, setName] = useState('');

    return (
        <div>
            <Header/>
            <form>
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
                    <div className="p-field p-col-6 p-md-3 ">
                        <label style={{ fontSize: 14 }} htmlFor="VALOR">Finalizar: </label>
                        <Button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault()
                                handleEmpresa.finalizarCadastro({ value, name })
                                // handleClient.finishBuy()
                            }}
                            style={{ alignSelf: 'end' }}
                            label="Finalizar Cadastro"
                            className="p-button-primary" />
                    </div>
                </div>
            </form>
        </div >
    )
}

export default CadastroNovoItem;