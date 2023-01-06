import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { ContextoGlobal, ContextoGlobalInterface } from '../GlobalStates/ContextoGlobal'

import { styled } from '@mui/material/styles';

const Offset = styled( 'div' )( ( { theme } ) => theme.mixins.toolbar );

export default function BottomBar () {

  const GlobalContexto: ContextoGlobalInterface = useContext( ContextoGlobal ) as ContextoGlobalInterface

  return (
    <>
      <Offset />
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, maxHeight: 50 }}>
        <Toolbar>
          <Typography variant="h6">
            {GlobalContexto.layoutState.aliasDB}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}