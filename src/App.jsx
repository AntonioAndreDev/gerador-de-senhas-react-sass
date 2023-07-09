import CopyButton from "./components/CopyButton";
import CreateButton from "./components/CreateButton";
import Title from "./components/Title";
import styles from "./App.module.scss";

function senhaAleatoria() {
  const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|:;"<>,.?/~`';
  let senha = "";

  while (senha.length < 15) {
    const algumValor = Math.floor(Math.random() * caracteres.length);

    senha += caracteres[algumValor];
  }

  return senha;
}

export default function App() {
  const clickPsw = () => {
    const senha = senhaAleatoria();
    const inputNewPsw = document.getElementById("valueNewPsw");

    if (inputNewPsw) {
      inputNewPsw.textContent = `Senha gerada: ${senha}`;
    }
  };
  return (
    <div>
      <Title />
      <div className={styles.btnContainer}>
        <CreateButton onClick={clickPsw} />
        <CopyButton />
      </div>
      <h3 id="valueNewPsw" className={styles["newPsw"]}></h3>
    </div>
  );
}
