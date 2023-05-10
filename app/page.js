import styles from "./page.module.css";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Index</h1>
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
