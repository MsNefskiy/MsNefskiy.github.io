import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper/Paper';

export function Hero() {
  const CustomButton = styled(Button)(({ theme }) => ({
    border: '3px solid transparent',
    backgroundColor: '#00C7FF',
    color: 'white',
    width: '20%',
    borderRadius: '25px',
    '&:hover': {
      border: '3px solid white',
      backgroundColor: 'transparent',
    },
  }));

  const CustomPaper = styled(Paper)(({ theme }) => ({
    padding: '40px 0',
    minHeight: 695,
    backgroundImage:
      'url(https://catherineasquithgallery.com/uploads/posts/2021-02/1613224201_8-p-fon-sinii-kosmos-8.jpg)',
    backgroundSize: '100% 100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }));

  return (
    <CustomPaper>
      <Box sx={{ maxWidth: '1230px', padding: '0 15px' }}>
        <Box sx={{marginBottom: '20px'}}>
          <Typography sx={{ fontSize: '80px' }} variant="h1">
            Hello, my name is <span style={{ color: 'rgba(0,199,255,255)' }}>Alexey</span>
            <br />
            <span style={{ fontSize: '60px' }}>a frontend developer</span>
          </Typography>
        </Box>

        <Box sx={{marginBottom: '20px'}}>
          <Typography variant="h3">
            I enjoy <span style={{ color: 'rgba(0,199,255,255)' }}>building</span> and{' '}
            <span style={{ color: 'rgba(0,199,255,255)' }}>designing</span> for the web
          </Typography>
        </Box>

        <CustomButton>View Github Profile</CustomButton>
      </Box>
    </CustomPaper>
  );
}
