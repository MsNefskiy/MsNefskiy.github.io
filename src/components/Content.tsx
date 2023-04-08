import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { frontendIcons, backendIcons } from '../constants/icons';
import { Colors } from '../theme';
import { Icon } from './Icon';

export function Content() {
  const { mode } = useContext(ThemeContext);

  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: '1300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '0 50px',
  }));

  const CustomList = styled(Box)(({ theme }) => ({
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  }));

  const CustomListItem = styled(Typography)(({ theme }) => ({
    fontSize: 25,
  }));

  const Divider = styled('div')(({ theme }) => ({
    height: '5px',
    backgroundColor: `${
      mode === 'dark' ? Colors['--light-cyan'] : Colors['--light-blue']
    }`,
    borderRadius: '25px',
  }));

  return (
    <Container id="skills" sx={{ padding: '0px 15px' }}>
      <CustomBox sx={{ my: 5, padding: 2 }}>
        <Typography variant="h1">Skills</Typography>

        <Box sx={{ mt: '50px' }}>
          <Typography variant="h2">Frontend</Typography>

          <Grid sx={{ flexGrow: 1, mt: '25px' }} container>
            <Grid container justifyContent="center" spacing={3}>
              {frontendIcons &&
                frontendIcons.map((icon) => (
                  <Grid item key={icon.id}>
                    <Icon key={icon.id} name={icon.name} src={icon.src} />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: '25px' }}>
          <Typography variant="h2">Backend</Typography>

          <Grid sx={{ flexGrow: 1, mt: '25px' }} container>
            <Grid container justifyContent="center" spacing={3}>
              {backendIcons &&
                backendIcons.map((icon) => (
                  <Grid item key={icon.id}>
                    <Icon key={icon.id} name={icon.name} src={icon.src} />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Box>
      </CustomBox>

      <Divider />

      <CustomBox sx={{ my: 5, padding: 2 }} id="contacts">
        <Typography variant="h1">Contacts</Typography>

        <Box sx={{ mt: '50px' }}>
          <CustomList>
            <Typography variant="h2">Location</Typography>
            <CustomListItem color="primary">Tula, Russia</CustomListItem>
          </CustomList>

          <CustomList>
            <Typography variant="h2">Telegram</Typography>
            <CustomListItem color="primary">+7 (953) 188-93-27</CustomListItem>
          </CustomList>

          <CustomList>
            <Typography variant="h2">Email</Typography>
            <CustomListItem color="primary">salionk223457162@gmail.com</CustomListItem>
          </CustomList>
        </Box>
      </CustomBox>
    </Container>
  );
}
