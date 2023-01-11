import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Link, Typography } from '@mui/material'
import { ContextoGlobal, ContextoGlobalInterface } from '../GlobalStates/ContextoGlobal'

import { styled } from '@mui/material/styles';

const Offset = styled( 'div' )( ( { theme } ) => theme.mixins.toolbar );

const Copyright = ( props: any ) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://inovatec.com.br">
        Inovacao Tecnologia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
          <Copyright />
        </Toolbar>
      </AppBar>
    </>
  )
}