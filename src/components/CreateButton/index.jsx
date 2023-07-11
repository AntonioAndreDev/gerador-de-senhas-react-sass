import styles from "./style.module.scss";

export default function CreateButton(props) {
  return (
    <button {...props} onClick={props.onClick} className={styles["createBtn"]}>
      {props.children}
    </button>
  );
}
