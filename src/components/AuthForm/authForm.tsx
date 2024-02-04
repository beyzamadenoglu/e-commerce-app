'use client';
import { useEffect, useState } from 'react';
import { TextInput, Button, Notification } from '@mantine/core';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase/config';
import { useRouter } from 'next/navigation'

import { useAuth } from '@/context/AuthContext';

import styles from './authForm.module.scss';


interface AuthFormProps {
  type: 'login' | 'register';
}

const emptyState = {
  email: '',
  password: '',
};

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [userInputs, setUserInputs] = useState(emptyState);
  const [notification, setNotification] = useState<{title: string; message: string; color: string;} | null>(null);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInUserWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);


  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (type === 'register') {
        const res = await createUserWithEmailAndPassword(userInputs.email, userInputs.password);
        console.log( res );
        setUserInputs(emptyState);
        setNotification({
          title: 'Success',
          message: 'User registered successfully!',
          color: 'teal',
        });
        router.push('/login');

      } else {
        const res = await signInUserWithEmailAndPassword(userInputs.email, userInputs.password);
        console.log({ res });
        setUserInputs(emptyState);
        setNotification({
          title: 'Success',
          message: 'Login successful!',
          color: 'teal',
        });
        router.push('/home');
      }
    } catch (e: any) {
      console.log(e);
      setNotification({
        title: 'Error',
        message: type === 'register' ? 'Registration failed. Please try again.' : 'Login failed. Please try again.',
        color: 'red',
      });
    }
  };

  return (
      <form className={styles.mantineAuthForm} onSubmit={handleSubmit}>
        <h2>{type === 'login' ? 'Sign in' : 'Sign Up'}</h2>
        {notification && (
          <Notification
            title={notification.title}
            color={notification.color}
            onClose={() => setNotification(null)}
          >
            {notification.message}
            </Notification>
        )}
        <TextInput
          label="Email"
          id="email"
          size="sm" 
          radius="md"
          value={userInputs.email}
          onChange={(event) => setUserInputs({ ...userInputs, email: event.currentTarget.value })}
          required
          width={100}
        />
        <TextInput
          label="Password"
          id="password"
          type="password"
          size="sm" 
          radius="md"
          value={userInputs.password}
          onChange={(event) => setUserInputs({ ...userInputs, password: event.currentTarget.value })}
          required
        />

        <Button type="submit" radius="md" color='#8A99ED' className={styles.Button}>
          {type === 'login' ? 'Sign in' : 'Sign Up'}
        </Button>
      </form>
  );
};

export default AuthForm;
