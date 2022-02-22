import styles from "./styles.module.scss";
import Image from "next/image";

export function Logo() {
  return (
    <div className={styles.container}>
      <Image src="/logo.svg" width={32} height={32} alt="h.analyzer logo" />
      <h1 className={styles.logo}>
        h.<span>analyzer</span>
      </h1>
    </div>
  );
}
