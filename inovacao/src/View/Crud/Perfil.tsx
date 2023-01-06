import React from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled( Paper )( ( { theme } ) => ( {
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing( 1 ),
  textAlign: 'center',
  color: theme.palette.text.secondary,
} ) );

export default function Perfil () {

  return (
    <>
      <p>Inicio</p>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map( ( _v, i ) =>
        <Grid container spacing={2} key={i}>
          <Grid item xs={12} md={6}>
            <Item>xs=12 md=6</Item>
          </Grid>
          <Grid item xs={4} md={6}>
            <Item>xs=4 md=6</Item>
          </Grid>
          <Grid item xs={4} md={12}>
            <Item>xs=4 md=12</Item>
          </Grid>
          <Grid item xs={4} md={12}>
            <Item>xs=4 md=12</Item>
          </Grid>
        </Grid>
      )}
      <p>Término</p>
    </>
  )
}