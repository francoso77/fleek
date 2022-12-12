import React, { useState } from "react";
import { EscolasInterface } from "../Interfaces/EscolasInterface";

export default function usePesquisaState(){

    const [pesquisaState, setPesquisaState] = useState<Array<EscolasInterface>>([])

    return { pesquisaState, setPesquisaState}
}
