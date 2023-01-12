import { Link, Typography } from '@mui/material';

export default function Copyright(props: any) {
    return (
      <Typography variant="body2" color="white" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://https://www.facebook.com/ligaagility/.com.br/">
         LAB - Liga Agility Brasil
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }