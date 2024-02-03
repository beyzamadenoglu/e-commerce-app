import AuthForm from "@/components/AuthForm/authForm";
import Image from '../../../public/images/background.jpg'

import styles from './login.module.scss'

export default function Login() {
  return (
    <div className={styles.loginContainer}>
    <div className={styles.formContainer}>
     <AuthForm type='login' />
    </div>
    <div className={styles.imgContainer}></div>
  </div>
  
  );
}
