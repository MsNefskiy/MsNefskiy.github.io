import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack/Stack';
import { frontendIcons, backendIcons } from '../constants/icons';
import { Icon } from './Icon';

export function Skills() {
  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: '1300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  }));

  const Divider = styled('div')(({theme}) => ({
    height: '5px',
    backgroundColor: '#00C7FF',
    borderRadius: '25px',
  }))

  return (
    <Container id='skills'>
      <CustomBox sx={{ my: 5, padding: 2 }}>
        <Typography variant="h1" color='primary'>
          Skills
        </Typography>

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
      <Divider/>
    </Container>
  );
}
