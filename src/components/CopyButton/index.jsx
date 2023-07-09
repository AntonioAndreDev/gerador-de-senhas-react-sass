import styles from "./style.module.scss";

export default function CopyButton(props) {
  return (
    <button onClick={props.onClick} className={styles["copyBtn"]}>
      {props.children}
    </button>
  );
}
