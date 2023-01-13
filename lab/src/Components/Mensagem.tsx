import { useContext } from 'react'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { MensagemStatePadrao } from '../States/MensagemState';
import { Alert, Grid } from '@mui/material';
import Condicional from '../Layout/Condicional';



export default function Mensagem() {

  const { mensagemState, setMensagemState } = (useContext(ContextoGlobal) as GlobalStateInterface)


  const fecharJanela = () => {
    setMensagemState(MensagemStatePadrao)
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
              <Button variant='contained' onClick={() => fecharJanela()} sx={{ width: '50%' }}>Fechar</Button>
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