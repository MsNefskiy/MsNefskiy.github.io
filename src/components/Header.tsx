import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ReactIcon } from './ReactIcon';
import Container from '@mui/material/Container/Container';

const navItems = ['Home', 'Experience', 'Contact'];


//rgba(0, 10, 31, 255)
export function Header() {
  return (
    <AppBar component="nav" position="sticky" sx={{ backgroundColor: '#171718' }}>
      <Container>
        <Toolbar>
          <ReactIcon
            sx={{ marginRight: 1, fontSize: 30, display: 'flex', alignItems: 'center' }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My site
          </Typography>
          <Box>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
