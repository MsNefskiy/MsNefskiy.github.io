import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';

export function Contacts() {
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
    color: 'rgba(0,199,255,255)',
  }));

  return (
    <Container>
      <CustomBox sx={{ my: 5, padding: 2 }}>
        <Typography variant="h1" sx={{ color: 'rgba(0,199,255,255)' }}>
          Contacts
        </Typography>

        <Box sx={{ mt: '50px' }}>
          <CustomList>
            <Typography variant="h2">Location</Typography>
            <CustomListItem>Tula, Russia</CustomListItem>
          </CustomList>

          <CustomList>
            <Typography variant="h2">Telegram</Typography>
            <CustomListItem>+7 (953) 188-93-27</CustomListItem>
          </CustomList>

          <CustomList>
            <Typography variant="h2">Email</Typography>
            <CustomListItem>salionk223457162@gmail.com</CustomListItem>
          </CustomList>
        </Box>

      </CustomBox>
    </Container>
  );
}
