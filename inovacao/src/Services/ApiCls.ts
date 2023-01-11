import { MensagemStateInterface } from "../GlobalStates/MensagemState"

import { URL_API } from '../Config/Server'

export default class ApiCls {

  public post<T> (
    url: string,
    body: { [key: string]: number | string },
    mensagem: string,
    mensagemState: MensagemStateInterface,
    setMensagemState: React.Dispatch<React.SetStateAction<MensagemStateInterface>>
  ): Promise<T> {

    let headers = new Headers()

    headers.set( 'Content-Type', 'application/json' )
    // headers.set('Access-Control-Allow-Origin', "*")

    const parametros: RequestInit = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify( body )
    }

    setMensagemState( { ...mensagemState, mensagem: mensagem } )

    /*

    // console.clear()
    console.log( url )
    */

    return fetch( URL_API.concat( url ), parametros ).then( rs => {
      return rs.json() as Promise<T>
    } )

    /*
        return new Promise( ( resolve ) => {
    
          console.log( parametros )
          console.log( URL_API )
    
          setTimeout( () => {
            console.log( 'Dentro do TimeOut....' )
            resolve( require( '../Mocks/Menu.json' ) as T )
          }, 2000 )
    
        } )
    */
  }
}