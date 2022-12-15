import { useState } from "react";
import { LayoutStateInterface } from "../Interfaces/LayoutStateInterface";


export default function useLayoutState(){

    const [layoutState, setLayoutState] = useState<LayoutStateInterface>({ titulaPagina:'' })

    return { layoutState, setLayoutState}
}
