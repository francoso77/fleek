import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function TesteBox () {

  return (
    <>
      <Grid container alignContent='center' justifyContent='center' height='100vh' sx={{border: 'solid'}}>
        <Typography variant="h4" color="initial"  >Center</Typography>
      </Grid>
    </>
  )

}