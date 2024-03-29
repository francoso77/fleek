import { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';
import Copyright from './Copyright';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function BottomBar() {

  const { layoutState } = useContext(ContextoGlobal) as GlobalStateInterface

  return (
    <>
      <Offset />
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, maxHeight: 50 }}>
        <Toolbar>
          <Typography variant="h6">
            {layoutState.aliasDB}
          </Typography>
          < Copyright sx={{ ml: '33%' }} />
        </Toolbar>
      </AppBar>
    </>
  )
}