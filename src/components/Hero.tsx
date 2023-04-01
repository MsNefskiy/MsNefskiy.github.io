import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper/Paper';
import SpaceImg from '../assets/img/space.jpg';

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
    backgroundImage: `url('${SpaceImg}')`,
    backgroundSize: '100% 100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
  }));

  return (
    <CustomPaper id='home'>
      <Box
        sx={{
          maxWidth: '1230px',
          padding: '0 15px',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '50px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Typography sx={{ fontSize: '80px' }} variant="h1">
            Hello, my name is <span style={{ color: 'rgba(0,199,255,255)' }}>Alexey</span>
            <br />
            <span style={{ fontSize: '60px' }}>a frontend developer</span>
          </Typography>
        </Box>

        <Box>
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
