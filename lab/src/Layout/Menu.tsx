import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';
import { styled } from '@mui/material/styles';
import { Drawer, Toolbar } from '@mui/material';
import MenuItem from './MenuItem';


const drawerWidth = 240;

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function Menu() {

    const { layoutState, setLayoutState } = (useContext(ContextoGlobal) as GlobalStateInterface)


    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', marginBottom: -100 },
                    zIndex: (theme) => theme.zIndex.appBar - 1
                }}
                anchor='left'
                open={layoutState.exibirMenu}
                onClose={() => { setLayoutState({ ...layoutState, exibirMenu: false }) }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <MenuItem />
                    </List>
                    <Offset />
                </Box>
            </Drawer>
        </>
    )
}