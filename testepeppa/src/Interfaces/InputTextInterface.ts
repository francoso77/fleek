export interface InputTextInterface {
    autofocus?: boolean | undefined
    disabled?: boolean | undefined
    id?: string | undefined
    label: string,
    tipo: string,
    placeholder: string,
    dados: { [key: string]: string | number | readonly string[] | undefined | any },
    campo: string,
    valor: string,
    setState: React.Dispatch<React.SetStateAction<any>>
    valida: string
  }
  