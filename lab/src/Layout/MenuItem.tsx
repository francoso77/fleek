import React from 'react'
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Icon } from '@mui/material';


export interface MenuOpcoesInterface {
    id: string
    parentId: string
    descricao: string
    path: string
    icon: string
}


export default function MenuItem() {
    const MenuDto: Array<MenuOpcoesInterface> = [
        {
            "id": "Cadastros",
            "parentId": "Principal",
            "descricao": "Cadastros",
            "icon": "grid_view",
            "path": ""
        },
        {
            "id": "Bairros",
            "parentId": "Cadastros",
            "descricao": "Bairros",
            "icon": "location_on",
            "path": "/Perfil"
        },
        {
            "id": "Cidades",
            "parentId": "Cadastros",
            "descricao": "Cidades",
            "icon": "apartment",
            "path": "/"
        },
        {
            "id": "Cadastros",
            "parentId": "Principal",
            "descricao": "Cadastros",
            "icon": "grid_view",
            "path": ""
        },
        {
            "id": "Bairros",
            "parentId": "Cadastros",
            "descricao": "Bairros",
            "icon": "location_on",
            "path": "/Perfil"
        },
        {
            "id": "Cidades",
            "parentId": "Cadastros",
            "descricao": "Cidades",
            "icon": "apartment",
            "path": "/"
        }
    ]
    return (
        <>
            {MenuDto.map ((menu,i) => 
            <ListItemButton key={i}>
                <ListItemIcon>
                    <Icon>{menu.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={menu.descricao} />
            </ListItemButton>
            )}
        </>
    )
}