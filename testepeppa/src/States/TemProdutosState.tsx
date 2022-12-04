import React, { useState } from "react";
import { TemProdutosInterface } from "../Interfaces/TemProdutosInterface";


export default function useTemProdutosState() {

    const [temProdutosState, setTemProdutosState] = useState<TemProdutosInterface> ({
        temProduto: false,
        id: -1
    })
    
    return {temProdutosState, setTemProdutosState}
}