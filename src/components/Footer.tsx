import styled from '@emotion/styled';
import { GitHub } from '@mui/icons-material';
import { Box, Link, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import VkIcon from '../assets/icons/vk.svg';
import DiscordIcon from '../assets/icons/discord.svg';

export function Footer() {
  const CustomFooter = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(0, 10, 31, 255)',
    borderTop: '1px solid #7889A8',
    display: 'flex',
    padding: '30px 0',
  }));

  const LinkWithIcon = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    underline: 'none',
  }));
  return (
    <CustomFooter>
      <Container>
        <Box
          sx={{
            display: 'flex',
            maxWidth: '1230px',
            justifyContent: 'space-around',
            padding: '0 15px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              rowGap: 4,
            }}
          >
            <Typography variant="body1" sx={{ color: '#7889A8', fontWeight: 'bold' }}>
              PAGES
            </Typography>

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={3}
            >
              <Link href="#home" underline="none">
                Home
              </Link>
              <Link href="#skills" underline="none">
                Skills
              </Link>
              <Link href="#contacts" underline="none">
                Contacts
              </Link>
            </Stack>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              rowGap: 4,
            }}
          >
            <Typography variant="body1" sx={{ color: '#7889A8', fontWeight: 'bold' }}>
              SOCIAL
            </Typography>

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={3}
            >
              <LinkWithIcon underline="none">
                <GitHub color="secondary" sx={{ fontSize: 24, mr: 2 }} />
                GitHub
              </LinkWithIcon>

              <LinkWithIcon underline="none">
                <img
                  src={VkIcon}
                  style={{ marginRight: 16 }}
                  height="24px"
                  width="25px"
                />
                VK
              </LinkWithIcon>

              <LinkWithIcon underline="none">
                <img
                  src={DiscordIcon}
                  style={{ marginRight: 16 }}
                  height="24px"
                  width="25px"
                />
                Discord
              </LinkWithIcon>
            </Stack>
          </Box>
        </Box>
      </Container>
    </CustomFooter>
  );
}
