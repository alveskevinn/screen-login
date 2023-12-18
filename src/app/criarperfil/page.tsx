import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1>Criar conta</h1>
        <div>
          <form action="" className={styles.boxLabel}>
          <label htmlFor="username">
              <span>Nome</span>
              <input type="text" id="username" className={styles.input} autoComplete="none"/>
            </label>
            <label htmlFor="email">
              <span>E-mail</span>
              <input type="text" id="email" className={styles.input} />
            </label>
            <label htmlFor="password">
              <span>Senha</span>
              <input type="password" id="password" className={styles.input} />
            </label>
            <label htmlFor="confirm-password">
              <span>Confirme a senha</span>
              <input type="password" id="confirm-password" className={styles.input} />
            </label>
            <div className={styles.boxButton}>
              <Link href="/" className={styles.sendButton}>
                Criar conta
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
