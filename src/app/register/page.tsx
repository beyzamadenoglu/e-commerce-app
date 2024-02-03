import AuthForm from "@/components/AuthForm/authForm";

import styles from './register.module.scss'

export default function Register() {
  return (
    <div className={styles.registerContainer}>
    <div className={styles.formContainer}>
     <AuthForm type='register' />
    </div>
    <div className={styles.imgContainer}></div>
  </div>
  
  );
}
