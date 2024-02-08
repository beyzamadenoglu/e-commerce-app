'use client'
import { useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';



export function Navbar({ data, handleCategoryClick }:any) {
  const [active, setActive] = useState('Billing');

  const links = data.map((item:any) => (
    <a
      className={classes.link}
      data-active={item === active || undefined}
      href={item}
      key={item}
      onClick={(event) => {
        event.preventDefault();
        setActive(item);
        handleCategoryClick()
      }}
    >
      <span>{item}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
        </Group>
        {links}
      </div>
    </nav>
  );
}