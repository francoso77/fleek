import React, { useEffect, useRef, useState } from "react";
import { InputTextInterface } from "../Interfaces/InputTextInterface";
import ClsValidaCampo from "../Utils/ClsValidaCampos";
import './InputText.css'

export default function InputText<T>(
    {
        autofocus = false,
        disabled = false,
        label,
        tipo,
        dados,
        campo,
        setState,
        valida,
        placeholder,
        valor,
        id = undefined
    }: InputTextInterface
) {

    const inputRef = useRef<HTMLInputElement> (null)

    useEffect(() => {
        if (autofocus && inputRef.current) {
            inputRef.current.focus()
        }
    }, [autofocus])

    const validaCampo: ClsValidaCampo = new ClsValidaCampo()

    const [validacao, setValidacao] = useState('')

    const testaCEP = (_CEP: string) => {

        validaCampo.verificaCEP(_CEP).then(temCEP => {
            if (temCEP) {

                setValidacao('')

            } else {
                setValidacao('CEP Inválido!')

            }
        })
    }

    const validarNaoVazio = (evento: any) => {

        let vr: any = evento.target.value
     
        if (valida === 'txt' && validaCampo.campoVazio(vr)) {
            setValidacao("Campo não pode ser vázio!")
        } else if (valida === 'cpf' && !validaCampo.eCPF(vr)) {
            setValidacao("CPF Inválido!")
        } else if (valida === 'cnpj' && !validaCampo.eCNPJ(vr)) {
            setValidacao("CNPJ Inválido!")
        } else if (valida === 'uf' && !validaCampo.eUF(vr)) {
            setValidacao("UF Inválido!")
        } else if (valida === 'sexo' && !validaCampo.eSEXO(vr)) {
            setValidacao('SEXO inválido!')
        } else if (valida === 'tel' && !validaCampo.eTEL(vr)) {
            setValidacao('Formato correto do tel é (xx) xxxxx-xxxx')
        } else if (valida === 'cep') {
            testaCEP(vr)
        } else if (valida === 'email' && !validaCampo.eEMAIL(vr)) {
            setValidacao('E-mail com formato inválido!')
        } else {
            setValidacao("")
        }
    }

    return (
        <>
            <label className="labelInputText">{label}</label>
            <input className="InputText"
                type={tipo}
                ref={inputRef}
                disabled={disabled}
                id={id}
                value={valor}
                placeholder={placeholder}
                onBlur={validarNaoVazio}
                onChange={(evento) => { setState({ ...dados, [campo]: 
                    valida !=='email'? evento.target.value.toUpperCase() : evento.target.value}) }}
            />
            <span className="spanValidacao">{validacao}</span>
        </>
    )
}
