import { useState } from 'react';
import styles from '../styles/Login.module.css';

// Importe as imagens diretamente para que o Vite/Webpack as processem
import logoImage from '/assets/ChatGPT Image 29 de ago. de 2025, 01_20_13.png';

const Login = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRegisterActive(true);
  };

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRegisterActive(false);
  };

  return (
    <div className={styles.body}>
      <div className={styles.logo}>
        <img src={logoImage} alt="Logo do Site" />
      </div>
      <div className={`${styles.wrapper} ${isRegisterActive ? styles.active : ''}`}>
        <span className={styles.rotateBg}></span>
        <span className={styles.rotateBg2}></span>

        <div className={`${styles.formBox} ${styles.login}`}>
          <h2 className={styles.title}>Login</h2>
          <form action="#">
            <div className={styles.inputBox}>
              <input type="email" required />
              <label htmlFor="">Email</label>
              <i className="bx bxs-user"></i>
            </div>
            <div className={styles.inputBox}>
              <input type="password" required />
              <label htmlFor="">Senha</label>
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className={styles.btn}>
              Login
            </button>
            <div className={styles.linkTxt}>
              <p>
                Ainda não possui conta ?
                <a href="#" className={styles.registerLink} onClick={handleRegisterClick}>
                  Registre-se
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className={`${styles.infoText} ${styles.login}`}>
          <h2>Bem vindo de volta!</h2>
          <p>Sua música, seu mundo! Entre e sinta o som.</p>
        </div>

        <div className={`${styles.formBox} ${styles.register}`}>
          <h2 className={styles.title}>Registre-se</h2>
          <form action="#">
            <div className={styles.inputBox}>
              <input type="text" required />
              <label htmlFor="">Nome</label>
              <i className="bx bxs-user"></i>
            </div>
            <div className={styles.inputBox}>
              <input type="email" required />
              <label htmlFor="">Email</label>
              <i className="bx bxs-envelope"></i>
            </div>
            <div className={styles.inputBox}>
              <input type="password" required />
              <label htmlFor="">Senha</label>
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className={styles.btn}>
              Sign Up
            </button>
            <div className={styles.linkTxt}>
              <p>
                Já possui uma conta ? <a href="#" className={styles.loginLink} onClick={handleLoginClick}>Login</a>
              </p>
            </div>
          </form>
        </div>

        <div className={`${styles.infoText} ${styles.register}`}>
          <h2>Leva menos de 1 minuto.</h2>
          <p>Crie sua conta e explore o futuro da música com a gente.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;