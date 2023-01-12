import React, { useContext } from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { EstruturaMenuInterface } from './MenuCls';
import Icon from '@mui/material/Icon';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';

interface PropsInterface {
  menu: EstruturaMenuInterface
  setOpenSubMenu: React.Dispatch<React.SetStateAction<boolean>>
  openSubMenu: boolean
}

export default function MenuItemFilhos ( { menu, setOpenSubMenu, openSubMenu }: PropsInterface ) {

  const navigar = useNavigate();

  const { layoutState, setLayoutState } = useContext( ContextoGlobal ) as GlobalStateInterface

  const irPara = ( url: string ) => {
    navigar( url )
    setLayoutState( { ...layoutState, exibirMenu: false } )
  }

  const handleClickSubMenu = ( oque: any ) => {
    setOpenSubMenu( !openSubMenu )
  }

  if ( menu.filhos.length === 0 ) {

    return (
      <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => irPara( menu.path )}>
            <ListItemIcon>
              <Icon>{menu.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={menu.descricao} />
          </ListItemButton>
        </List>
      </Collapse>
    )
  } else {

    return (
      <>
        <ListItemButton onClick={handleClickSubMenu}>
          <ListItemIcon>
            {menu.icon}
          </ListItemIcon>
          <ListItemText primary={menu.descricao} />
          {openSubMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        {
          menu.filhos.map( ( menu, index ) =>
            <MenuItemFilhos openSubMenu={openSubMenu} setOpenSubMenu={setOpenSubMenu} key={index} menu={menu} /> )
        }

      </>
    )
  }

}