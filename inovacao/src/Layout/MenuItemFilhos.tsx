import React, { useContext } from 'react'

// import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { ContextoGlobal, ContextoGlobalInterface } from '../GlobalStates/ContextoGlobal';

// import Icon from '@mui/material/Icon';
import { EstruturaMenuInterface } from './MenuCls';
import Icon from '@mui/material/Icon';

interface PropsInterface {
  menu: EstruturaMenuInterface
  setOpenSubMenu: React.Dispatch<React.SetStateAction<boolean>>
  openSubMenu: boolean
}

export default function MenuItemFilhos ( { menu, setOpenSubMenu, openSubMenu }: PropsInterface ) {

  const navigate = useNavigate();

  const { layoutState, setLayoutState } = useContext( ContextoGlobal ) as ContextoGlobalInterface

  const irPara = ( url: string ) => {
    navigate( url )
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