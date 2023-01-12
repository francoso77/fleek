import React, { SetStateAction, useState } from "react";
import FormControl from '@mui/material/FormControl';
import { OutlinedInput, Typography } from '@mui/material';
import ClsValidaCampo from "../Services/ClsValidaCampos";


interface InputTextInterface {
    label: string
    disabled?: boolean
    type?: string
    placeholder?: string
    dados: { [key: string]: string | number | readonly string[] | undefined | any },
    field: string
    valida: string
    setState: React.Dispatch<SetStateAction<any>>
}

export default function InputText(
    { label, dados, field, setState, disabled = false, type = 'text', placeholder = label, valida }: InputTextInterface
) {


    const [validacaoState, setValdacaoState] = useState('')
    
    const validaCampo: ClsValidaCampo = new ClsValidaCampo()

  
    const testaCEP = (_CEP: string) => {

        validaCampo.verificaCEP(_CEP).then(temCEP => {
            if (temCEP) {

                setValdacaoState('')

            } else {
                setValdacaoState('CEP Inválido!')

            }
        })
    }

    const validarNaoVazio = (evento: any) => {

        let vr: any = evento.target.value

        if (valida === 'txt' && validaCampo.campoVazio(vr)) {
            setValdacaoState("Campo não pode ser vázio!")
        } else if (valida === 'cpf' && !validaCampo.eCPF(vr)) {
            setValdacaoState("CPF Inválido!")
        } else if (valida === 'cnpj' && !validaCampo.eCNPJ(vr)) {
            setValdacaoState("CNPJ Inválido!")
        } else if (valida === 'uf' && !validaCampo.eUF(vr)) {
            setValdacaoState("UF Inválido!")
        } else if (valida === 'sexo' && !validaCampo.eSEXO(vr)) {
            setValdacaoState('SEXO inválido!')
        } else if (valida === 'tel' && !validaCampo.eTEL(vr)) {
            setValdacaoState('Formato correto do tel é (xx) xxxxx-xxxx')
        } else if (valida === 'cep') {
            testaCEP(vr)
        } else if (valida === 'email' && !validaCampo.eEMAIL(vr)) {
            setValdacaoState('E-mail com formato inválido!')
        } else {
            setValdacaoState("")
        }
    }
    return (
        <>
            <FormControl sx={{ width: '100%' }}>
                <Typography
                    variant='h6'
                    textAlign='left'
                    sx={{ mt: 1, color: 'primary.main' }}
                >
                    {label}
                </Typography>
                <OutlinedInput
                    sx={{ my: 0, py: 0, height: 40 }}
                    placeholder={placeholder}
                    disabled={disabled}
                    type={type}
                    onChange={(e) => setState({ ...dados, [field]: e.target.value })}
                    onBlur={validarNaoVazio}
                />
                <Typography variant='caption' textAlign='left' color='warning.main'>
                    {validacaoState}
                </Typography>
            </FormControl>
        </>
    )
}