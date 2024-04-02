import * as React from 'react';
import { useColorScheme, CssVarsProvider } from '@mui/joy'; 
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate= useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#27296d', 
      },
    },
  });
  const handleSignup= () =>{
    navigate('/Signup')
  }
  
  return (
    <ThemeProvider theme={theme}>
      <CssVarsProvider> 
        <main>
          <CssBaseline />
          <Sheet
            sx={{
              width: 350,
              mx: 'auto',
              my: 18,
              py: 3,
              px: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              borderRadius: 'sm',
              boxShadow: 'md',
            }}
            variant="outlined"
          >
            <div>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body-sm">Sign in to continue.</Typography>
            </div>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="johndoe@email.com"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="password"
              />
            </FormControl>
            <Button sx={{ backgroundColor: '#27296d', color: '#fff' }}>Log in</Button>
            <Typography
              endDecorator={<Link onClick={handleSignup} sx={{ color: '#27296d' }}>Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: 'center' , color: '#00000'}}
            >
              Don&apos;t have an account?
            </Typography>
          </Sheet>
        </main>
      </CssVarsProvider>
    </ThemeProvider>
  );
}

export default Login;
