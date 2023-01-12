import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { ContextoGlobal, ContextoGlobalInterface } from '../GlobalStates/ContextoGlobal';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Copyright from './Copyright';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function BottomBar() {

    const GlobalContexto = (useContext(ContextoGlobal) as ContextoGlobalInterface)

    return (
        <>
            <Offset />
            <AppBar
                position="fixed"
                color="primary"
                sx={{ top: 'auto', bottom: 0, maxHeigth: 50 }}
            >
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
