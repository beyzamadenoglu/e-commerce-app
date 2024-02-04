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
import { useDisclosure } from '@mantine/hooks';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';


import { useAuth } from '@/context/AuthContext'; 
import { auth } from '@/lib/firebase/config';
import classes from './Header.module.scss';

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const theme = useMantineTheme();

  const { user } = useAuth();

  const router = useRouter();


  const handleLogout = async() => {
    signOut(auth);
    router.push('/login');
  } 

  return (
    <Box pb={50}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <img className={classes.logo} src="images/logo.png" alt="logo" />

          <Group visibleFrom="sm">
            {user?.email ? (
              <>
                <Text>{user.email}</Text>
                <Button onClick={handleLogout} className={classes.logoutButton} >Logout</Button>
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
          <Group justify="center" grow pb="xs" px="md">
            {user?.email ? (
              <>
                <Text>{user.email}</Text>
                <Button onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button onClick={() => {router.push("/login")}} onClickvariant="default">Log in</Button>
                <Button onClick={() => router.push("/register")} className={classes.logoutButton}>Sign up</Button>
              </>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
