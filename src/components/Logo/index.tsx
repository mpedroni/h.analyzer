import styles from "./styles.module.scss";
import logoSvg from "../../../public/logo.svg";
import Image from "next/image";

export function Logo() {
  return (
    <div className={styles.container}>
      <Image src={logoSvg} alt="h.analyzer logo" />
      <h1 className={styles.logo}>
        h.<span>analyzer</span>
      </h1>
    </div>
  );
}
