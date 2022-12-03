import React, { useState } from "react";
import { LayoutStateInterface } from "../Interfaces/LayoutStateInterface";

export default function useLayoutState() {

    const [layouteState, setLayoutState] = useState<LayoutStateInterface> ({tituloPagina: ''})
    
    return {layouteState, setLayoutState}
}