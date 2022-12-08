import React from "react"

export interface InputTextInterface {
    autofocus?: boolean | undefined
    disabled?: boolean | undefined
    id?: string | undefined
    label: string
    tipo: string
    campo: string
    dados: {[key: string]: string | number | readonly string[] | undefined | any}
    setState: React.Dispatch<React.SetStateAction<any>>
    valida: string
    placeholder?: string | undefined
    valor?: string | undefined
}