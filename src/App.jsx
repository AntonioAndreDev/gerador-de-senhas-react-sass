import CopyButton from "./components/CopyButton";
import CreateButton from "./components/CreateButton";
import Title from "./components/Title";
import styles from "./App.module.scss";
import { useState } from "react";

export default function App() {
  const [senha, setSenha] = useState("");
  const [copiarTexto, setCopiarTexto] = useState("Copiar");
  const [tamanhoSenha, setTamanhoSenha] = useState(12);

  function senhaAleatoria() {
    const caracteres =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|:;"<>,.?/~`';
    let senha = "";
    while (senha.length < tamanhoSenha) {
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

  function validarTamanho(ev) {
    const tamanho = parseInt(ev.target.value);
    if (tamanho >= 1) {
      setTamanhoSenha(tamanho);
    } else {
      setTamanhoSenha("");
      setSenha("Informe um tamanho >= 1");
    }
  }

  return (
    <div className={styles["container"]}>
      <Title />
      <div className={styles.btnContainer}>
        <label className={styles["labelText"]} htmlFor="tamanhoSenha">
          Tamanho da senha:
          <input
            className={styles["pswInput"]}
            type="number"
            id="tamanhoSenha"
            value={tamanhoSenha}
            onChange={validarTamanho}
          />
        </label>
        <CreateButton onClick={senhaAleatoria}>
          Gerar senha de {tamanhoSenha} caracteres
        </CreateButton>
        <CopyButton onClick={copiarSenha}>{copiarTexto}</CopyButton>
      </div>
      <h3 className={styles["newPsw"]}>{senha}</h3>
    </div>
  );
}
