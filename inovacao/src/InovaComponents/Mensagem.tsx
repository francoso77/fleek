import React, { useContext } from 'react';
import { ContextoGlobal, ContextoGlobalInterface } from '../GlobalStates/ContextoGlobal';
import Condicional from '../Layout/Condicional';

import { Box, Button, Grid, Modal, Typography } from '@mui/material'
import Alert from '@mui/material/Alert'
import { MensagemStatePadrao } from '../GlobalStates/MensagemState';

export default function Mensagem () {

  const { mensagemState, setMensagemState } = ( useContext( ContextoGlobal ) as ContextoGlobalInterface )

  const fecharJanela = () => {
    setMensagemState( MensagemStatePadrao )
  }

  const MensagemNoModal = () =>
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      height='100vh'
      sx={{ margin: 'auto' }}
    >
      <Box>
        <Alert
          severity={mensagemState.tipo}
          sx={{
            '& .MuiAlert-icon': {
              fontSize: 50
            }
          }}>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            {mensagemState.titulo}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {mensagemState.mensagem}
          </Typography>
          <Condicional condicao={mensagemState.modal}>
            <Button variant='contained' onClick={() => fecharJanela()} sx={{ width: '100%' }}>Fechar</Button>
          </Condicional>
        </Alert>
      </Box>
    </Grid>

  return (
    <>
      <Modal
        open={mensagemState.exibir}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <><MensagemNoModal /></>
      </Modal>
    </>
  )
}