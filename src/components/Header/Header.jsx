'use client'
import {
  Group,
  Text,
  Button,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';;

import { useAuth } from '@/context/AuthContext'; 
import classes from './Header.module.scss';

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const theme = useMantineTheme();

  const { user, logout } = useAuth();

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <img className={classes.logo} src="images/logo.png" alt="logo" />

          <Group visibleFrom="sm">
            {user?.email ? (
              <>
                <Text>{user.email}</Text>
                <Button className={classes.logoutButton} onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <Button variant="default">Log in</Button>
                <Button>Sign up</Button>
              </>
            )}
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Group justify="center" grow pb="xl" px="md">
            {user?.email ? (
              <>
                <Text>{user.email}</Text>
                <Button onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <Button variant="default">Log in</Button>
                <Button>Sign up</Button>
              </>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
