import CopyButton from "./components/CopyButton";
import CreateButton from "./components/CreateButton";
import Title from "./components/Title";
import styles from "./App.module.scss";
import { useState } from "react";

export default function App() {
  const [senha, setSenha] = useState("");
  const [copiarTexto, setCopiarTexto] = useState("Copiar");

  function senhaAleatoria() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|:;"<>,.?/~`';
    let senha = "";
    while (senha.length < 15) {
      const algumValor = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[algumValor];
    }

    setSenha(senha);
  }

  function copiarSenha() {
    window.navigator.clipboard.writeText(senha);
    setCopiarTexto("Copiado!");

    setTimeout(() => {
      setCopiarTexto("Copiar");
    }, 3000);
  }

  return (
    <div className={styles["container"]}>
      <Title />
      <div className={styles.btnContainer}>
        <CreateButton onClick={senhaAleatoria} />
        <CopyButton onClick={copiarSenha}>{copiarTexto}</CopyButton>
      </div>
      <h3 className={styles["newPsw"]}>{senha}</h3>
    </div>
  );
}
