import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ReactIcon from '../assets/icons/react.svg';
import Container from '@mui/material/Container/Container';
import styled from '@mui/material/styles/styled';
import { Link } from '@mui/material';
import { ButtonDarkMode } from './ButtonDarkMode';
import { scrollTo, toScroll } from '../utils/toScroll';

export function Header() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    fontWeight: 500,
  }));

  const CustomIcon = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 6,
  }));

  const LinkBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    '& :hover::before': {
      content: "''",
      display: 'block',
      position: 'absolute',
      height: '2px',
      backgroundColor: '#5C62EC',
      width: '100%',
      top: '100%',
      left: 0,
    },
  }));
  return (
    <AppBar component="nav" position="sticky" sx={{ minWidth: '100%' }}>
      <Container>
        <Toolbar>
          <CustomIcon>
            <img src={ReactIcon} height="30px" width="40px" />
          </CustomIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My site
          </Typography>
          <CustomBox>
            <LinkBox>
              <Link href="#home" underline="none" onClick={(event) => toScroll(event, scrollTo.HOME)}>
                Home
              </Link>
            </LinkBox>
            <LinkBox>
              <Link
                href="#skills"
                underline="none"
                onClick={(event) => toScroll(event, scrollTo.SKILLS)}
              >
                Skills
              </Link>
            </LinkBox>
            <LinkBox>
              <Link
                href="#contacts"
                underline="none"
                onClick={(event) => toScroll(event, scrollTo.CONTACTS)}
              >
                Contacts
              </Link>
            </LinkBox>
            <ButtonDarkMode />
          </CustomBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
