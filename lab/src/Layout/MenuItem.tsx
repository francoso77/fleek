import React, { useContext, useState } from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Icon } from '@mui/material';
import { EstruturaMenuInterface } from './MenuCls';
import { useNavigate } from 'react-router-dom';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuItemFilhos from './MenuItemFilhos';


interface PropsInterface {
    menu: EstruturaMenuInterface
}

export default function MenuItem({ menu }: PropsInterface) {

    const navegar = useNavigate()

    const { layoutState, setLayoutState } = useContext(ContextoGlobal) as GlobalStateInterface

    const irPara = (url: string) => {
        navegar(url)
        setLayoutState({ ...layoutState, exibirMenu: false })
    }


    const [openSubMenu, setOpenSubMenu] = useState(false)

    const handleClickSubMenu = (oque: any) => {
        console.log('handleClickSubMenu MenuItem')
        setOpenSubMenu(!openSubMenu)
    }

    if (menu.filhos.length === 0) {
        return (
            <>
                <ListItemButton onClick={() => irPara(menu.path)}>
                    <ListItemIcon>
                        <Icon>{menu.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={menu.descricao} />
                </ListItemButton>
                <Divider />
            </>
        )
    } else {
        return (
            <>
                <ListItemButton onClick={handleClickSubMenu}>
                    <ListItemIcon>
                        <Icon>{menu.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={menu.descricao} />
                    {openSubMenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {
                    menu.filhos.map((menu, index) =>
                        <MenuItemFilhos openSubMenu={openSubMenu} setOpenSubMenu={setOpenSubMenu} key={index} menu={menu} />)
                }
                <Divider />
            </>
        )
    }
}