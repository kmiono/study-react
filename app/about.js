import styles from "./page.module.css";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>About</h1>
        <p>
          hello &nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
      </div>
      <Links />
      <Footer />
    </main>
  );
}
