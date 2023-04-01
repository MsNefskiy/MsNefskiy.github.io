import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack/Stack';
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
    <Container id="skills">
      <CustomBox sx={{ my: 5, padding: 2 }}>
        <Typography variant="h1">Skills</Typography>

        <Box sx={{ mt: '50px' }}>
          <Typography variant="h2">Frontend</Typography>

          <Stack direction="row" spacing={4} sx={{ mt: '25px' }}>
            {frontendIcons &&
              frontendIcons.map((icon) => (
                <Icon key={icon.id} name={icon.name} src={icon.src} />
              ))}
          </Stack>
        </Box>

        <Box sx={{ mt: '50px' }}>
          <Typography variant="h2">Backend</Typography>

          <Stack direction="row" spacing={4} sx={{ mt: '25px' }}>
            {backendIcons &&
              backendIcons.map((icon) => (
                <Icon key={icon.id} name={icon.name} src={icon.src} />
              ))}
          </Stack>
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
