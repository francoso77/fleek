import { useContext } from "react";
import { ContextoGlobal, ContextoGlobalInterface } from "../GlobalStates/ContextoGlobal";
import { MensagemStatePadrao } from "../GlobalStates/MensagemState";
import Condicional from "../Layout/Condicional";
import { Box, Button, CircularProgress, Grid, Modal, Typography } from '@mui/material'
import Alert from '@mui/material/Alert'

export default function Mensagem() {

  const { mensagemState, setMensagemState } = (useContext(ContextoGlobal) as ContextoGlobalInterface)

  const fecharJanela = () => {
    setMensagemState(MensagemStatePadrao)
  }


  const MensagemNoModal = () =>
    <>
      <Condicional condicao={!mensagemState.loading}>

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
                  fontSize: 35
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
      </Condicional>
      <Condicional condicao={mensagemState.loading}>

        <Grid
          container
          justifyContent='center'
          alignItems='center'
          height='100vh'
          sx={{ margin: 'auto' }}
        >
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </Grid>
      </Condicional>
    </>
  return (
    <>
      <Condicional condicao={!mensagemState.loading}>
        <Modal
          open={mensagemState.exibir}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <><MensagemNoModal /></>
        </Modal>
      </Condicional>
      <Condicional condicao={mensagemState.loading}>
        <Modal open={mensagemState.exibir}>
          <><MensagemNoModal /></>
        </Modal>
      </Condicional>
    </>
  )
}