import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Condicional from './Condicional';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';


export default function Loading() {

    const {mensagemState} = React.useContext(ContextoGlobal) as GlobalStateInterface
    
 
      
    return (

        <Condicional condicao={mensagemState.loading}>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
 
                <Box sx={{ height: 40 }}>
                    
                
                <CircularProgress />
                                    
                </Box>
     
            </Box>
       
        </Condicional>
    );
}