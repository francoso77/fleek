import React, { useContext, useState } from 'react'

// import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { ContextoGlobal, ContextoGlobalInterface } from '../GlobalStates/ContextoGlobal';

import Icon from '@mui/material/Icon';
import { EstruturaMenuInterface } from './MenuCls';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';

interface PropsInterface {
  menu: EstruturaMenuInterface
}

export default function MenuItem ( { menu }: PropsInterface ) {

  const navigate = useNavigate();

  const { layoutState, setLayoutState } = useContext( ContextoGlobal ) as ContextoGlobalInterface

  const [openSubMenu, setOpenSubMenu] = useState( false )

  const handleClickSubMenu = ( oque: any ) => {
    // console.log( 'handleClickSubMenu MenuItem' )
    setOpenSubMenu( !openSubMenu )
  }

  const irPara = ( url: string ) => {
    navigate( url )
    setLayoutState( { ...layoutState, exibirMenu: false } )
  }

  if ( menu.filhos.length === 0 ) {
    return (
      <ListItemButton onClick={() => irPara( menu.path )}>
        <ListItemIcon>
          <Icon>{menu.icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={menu.descricao} />
      </ListItemButton>
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
          menu.filhos.map( ( menu, index ) =>

            <Collapse in={openSubMenu} timeout="auto" unmountOnExit key={index}>
              <List component="div" disablePadding>
                <MenuItem menu={menu} />
              </List>
            </Collapse>

          )}

      </>
    )
  }

}