import { Collapse, Divider, Icon, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextoGlobal, ContextoGlobalInterface } from '../GlobalStates/ContextoGlobal'
import { EstruturaMenuInterface } from './MenuCls'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


interface PropsInterface {
    menu: EstruturaMenuInterface,
}


export default function MenuItem({ menu }: PropsInterface) {

    const navigate = useNavigate()

    const { layoutState, setLayoutState } = useContext(ContextoGlobal) as ContextoGlobalInterface

    const [openSubMenu, setOpenSubMenu] = useState(false)

    const handleClickSubMenu = (oque: any) => {
        setOpenSubMenu(!openSubMenu)
    }

    const irPara = (url: string) => {
        navigate(url)
        setLayoutState({ ...layoutState, exibirMenu: false })
    }

    if (menu.filhos.length === 0) {
        return (
            <ListItemButton onClick={() => irPara(menu.path)}>
                <ListItemIcon>
                <Icon sx={openSubMenu ? { marginLeft: 3 }: { marginLeft: 0 }}>{menu.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={menu.descricao} />
            </ListItemButton>
        )
    } else {
        return (
            <>
                <ListItemButton onClick={handleClickSubMenu}>
                    <ListItemIcon >
                        <Icon sx={{ marginLeft: 3 }}>{menu.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={menu.descricao} />
                    {openSubMenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                {
                    menu.filhos.map((menu, index) =>
                        
                        <Collapse in={openSubMenu} timeout="auto" unmountOnExit key={index}>
                            <List component="div" disablePadding>
                                <MenuItem menu={menu} />
                            </List>
                        </Collapse>

                    )}
                <Divider />
            </>
        )
    }
}