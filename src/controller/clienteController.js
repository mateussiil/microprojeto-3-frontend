import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import api from "../service/api"

export const ClienteController = () => {
    const [productsClicked, setProductsClicked] = useState([])
    const toast = useRef();

    const filterProduct = (INDEX) => {
        console.log(productsClicked)
        console.log(INDEX)

        const productIndex = productsClicked.findIndex(product =>
            product.index === INDEX
        )

        return productIndex
    }

    const removeProduct = (product) => {
        const index = filterProduct(product.index)

        productsClicked.splice(index, 1)
        setProductsClicked([...productsClicked])
    }


    const minusProduct = (product) => {
        const index = filterProduct(product.index)

        const productCopy = productsClicked[index]
        productCopy.quantidade -= 1
        productsClicked.splice(index, 1)
        if(productCopy.quantidade!==0){
            productsClicked.splice(index, 0, productCopy)
        }
        setProductsClicked([...productsClicked])
    }

    const addProduct = (product) => {
        const index = filterProduct(product.index)

        if (index >= 0) {
            const productCopy = productsClicked[index]
            productCopy.quantidade += 1
            productsClicked.splice(index, 1)
            productsClicked.splice(index, 0, productCopy)
            setProductsClicked([...productsClicked])
            return false
        }

        setProductsClicked(productsClicked.concat({ ...product, quantidade: 1 }))
    }

    const finishBuy = () => {
        api.post('/pedido', productsClicked).then(response => {
            console.log(response.data)
            toast.current.show({ severity: 'success', detail: `Pedido recebido`, summary: `numero: ${response.data}`, life: 5000 });
        }).catch(error=>{
            toast.current.show({ severity: 'warn', detail: `Inválido`, life: 5000 });
        })
    }

    return {
        handleClient: {
            addProduct,
            removeProduct,
            minusProduct,
            finishBuy
        },
        getClient: {
            toast,
            productsClicked
        }
    }
}