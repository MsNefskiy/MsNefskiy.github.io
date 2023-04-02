import { ToggleButton } from '@mui/material';
import Sun from '../assets/icons/sun.svg';
import Moon from '../assets/icons/moon.svg';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { useContext, useState } from 'react';
import { IThemeContext, ThemeContext } from '../App';

export function ButtonDarkMode() {
  const { mode, toggleTheme } = useContext<IThemeContext>(ThemeContext);

  const [selected, setSelected] = useState(() => {
    return mode === 'dark' ? true : false;
  });

  const onClickDarkMode = () => {
    setSelected(!selected);

    if (!selected) {
      toggleTheme && toggleTheme();
    } else {
      toggleTheme && toggleTheme();
    }
  };

  const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    width: '51px',
    height: '26px',
    padding: '5px',
    justifyContent: 'space-between',
    borderRadius: '50px',
    border: '0px',
    backgroundColor: '#272727',

    '&::before': {
      content: "''",

      position: 'absolute',
      top: '1px',
      left: '1px',

      display: 'block',
      width: '24px',
      height: '24px',

      borderRadius: '50%',
      backgroundColor: 'white',

      transition: 'left 0.2s ease-in',
    },

    '&.Mui-selected::before': {
      left: '26px',
    },
  }));

  const CustomIcon = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
  }));
  return (
    <CustomToggleButton value="check" selected={selected} onChange={onClickDarkMode}>
      <CustomIcon>
        <img src={Sun} alt="light mode" />
      </CustomIcon>
      <CustomIcon>
        <img src={Moon} alt="dark mode" />
      </CustomIcon>
    </CustomToggleButton>
  );
}
