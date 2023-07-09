import styles from "./style.module.scss";

export default function Title() {
  return (
    <div>
      <h1 className={styles["title"]}>Gerador de senhas</h1>
    </div>
  );
}
