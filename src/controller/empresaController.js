import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import api from "../service/api"

export const EmpresaController = () => {

    const finalizarCadastro = (pedido) =>{
        api.post('/cardapio', pedido).then(response=>{
            console.log(response.data)
        }).catch(error=>console.log(error))
    }

    return {
        handleEmpresa: {
            finalizarCadastro
        },
        getEmpresa: {
        }
    }
}