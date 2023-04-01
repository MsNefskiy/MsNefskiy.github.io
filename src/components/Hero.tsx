import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper/Paper';
import SpaceImg from '../assets/img/space.jpg';
import { Colors } from '../theme';

export function Hero() {
  const CustomButton = styled(Button)(({ theme }) => ({
    border: '3px solid transparent',
    backgroundColor: Colors['--light-cyan'],
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

  const CustomSpan = styled(Typography)(({ theme }) => ({
    color: Colors['--light-cyan'],
    display: 'inline',
    fontSize: 'inherit',
  }));
  return (
    <CustomPaper id="home">
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
          <Typography sx={{ fontSize: '80px', color: 'white' }} variant="h1">
            Hello, my name is <CustomSpan>Alexey</CustomSpan>
            <br />
            <span style={{ fontSize: '60px' }}>a frontend developer</span>
          </Typography>
        </Box>

        <Box>
          <Typography variant="h3">
            I enjoy <CustomSpan>building</CustomSpan> and{' '}
            <CustomSpan>designing</CustomSpan> for the web
          </Typography>
        </Box>

        <CustomButton>View Github Profile</CustomButton>
      </Box>
    </CustomPaper>
  );
}
