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

  return (
    <Container>
      <CustomBox sx={{ my: 5, padding: 2 }}>
        <Typography variant="h1" sx={{ color: 'rgba(0,199,255,255)' }}>
          Skills
        </Typography>

        <Box sx={{ mt: '50px' }}>
          <Typography variant="h2">Frontend</Typography>

          <Stack direction="row" spacing={2} sx={{ mt: '20px' }}>
            {frontendIcons &&
              frontendIcons.map((icon) => (
                <Icon key={icon.id} name={icon.name} src={icon.src} />
              ))}
          </Stack>
        </Box>

        <Box sx={{ mt: '50px' }}>
          <Typography variant="h2">Backend</Typography>

          <Stack direction="row" spacing={2} sx={{ mt: '20px' }}>
            {backendIcons &&
              backendIcons.map((icon) => (
                <Icon key={icon.id} name={icon.name} src={icon.src} />
              ))}
          </Stack>
        </Box>
      </CustomBox>
    </Container>
  );
}
