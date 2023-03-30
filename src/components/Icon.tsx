import { Box, Typography } from "@mui/material";

interface IconProps {
    name: string,
    src: string
}

export function Icon({name, src}: IconProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 3,
      }}
    >
      <img src={src} height="40px" width="40px" />
      <Typography variant="body1" sx={{ mt: 1, color: 'gray' }}>
        {name}
      </Typography>
    </Box>
  );
}
