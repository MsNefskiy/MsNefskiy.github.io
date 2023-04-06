import styled from '@emotion/styled';
import { Button, ButtonProps } from '@mui/material';
import { Colors } from '../theme';

export interface IButtonProps extends ButtonProps {
  link: string;
  label: string;
}

// Only include variant, size, and color
type ButtonBaseProps = Pick<IButtonProps, "variant" | "size" | "link" | "label">;
// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;


export function ButtonGitHub({ link, label, ...rest }: ButtonBaseProps) {
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
    <CustomButton {...rest}>
      <a href={link} target="_blank">
        {label}
      </a>
    </CustomButton>
  );
}
