import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/*  
              <MenuIcon />
              */}
          </IconButton>
          <Box>
            <Typography variant="h6" component="div">
              Gerenciamento de Projetos
            </Typography>
            <Typography variant="subtitle1" component="div">
              Atividade Prática Módulo 10 - Desenvolvido pelo aluno Gabriel Alexandre
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
