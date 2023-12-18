import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>

    <div className={styles.login}>
      <h1>Login</h1>
      <div>
        <form action="" className={styles.boxLabel}>
          <label htmlFor="username">
            <span>E-mail</span>
            <input type="text" id="username" className={styles.input} />
          </label>
          <label htmlFor="password">
            <span>Senha</span>
            <input type="password" id="password" className={styles.input} />
          </label>
          <div className={styles.boxButton}>
            <Link href="/perfil" className={styles.sendButton}>
              Login
            </Link>
            <Link href="/criarperfil" className={styles.sendButton}>
              Criar Conta
            </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
