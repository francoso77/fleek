import React, { useState } from 'react'


export interface LayoutStateInterface {
  aliasDB: string
  versaoCompleta: string
  exibirMenu: boolean
  //opcoesMenu: Array<EstruturaMenuInterface>
}

export default function useLayoutState () {

  const [layoutState, setLayoutState] =
    useState<LayoutStateInterface>( {
      aliasDB: '',
      versaoCompleta: '',
      exibirMenu: false,
      //opcoesMenu: []
    } )

  return { layoutState, setLayoutState }

}