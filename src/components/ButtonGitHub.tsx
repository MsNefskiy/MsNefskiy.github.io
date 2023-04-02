import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Colors } from '../theme';

interface Props {
    link: string
    text: string
}

export function ButtonGitHub({link, text}: Props) {
  const CustomButton = styled(Button)(({ theme }) => ({
    border: '3px solid transparent',
    backgroundColor: Colors['--light-cyan'],
    color: 'white',
    borderRadius: '25px',
    '&:hover': {
      border: '3px solid white',
      backgroundColor: 'transparent',
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  }));

  return (
    <CustomButton>
      <a href={link} target="_blank">
        {text}
      </a>
    </CustomButton>
  );
}
