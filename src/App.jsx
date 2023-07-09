import CopyButton from "./components/CopyButton";
import CreateButton from "./components/CreateButton";
import Title from "./components/Title";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div>
      <Title />
      <div className={styles.btnContainer}>
        <CreateButton />
        <CopyButton />
      </div>
      <h3 className={styles["newPsw"]}>Nova Senha</h3>
    </div>
  );
}
