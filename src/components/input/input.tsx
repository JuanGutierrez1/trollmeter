import { useState } from "react";
import styles from "./input.module.scss";

interface InputProps {
  onClick: (value: string) => void;
}

const Input = ({ onClick }: InputProps) => {
  const [value, setValue] = useState<string>('')

  return (
    <div className={styles['input-container']}>
      <input onChange={(e) => setValue(e.target.value)} value={value} className={styles['input']} spellCheck={false} placeholder="Name#TAG" />
      <i onClick={() => onClick(value)} className={`fas fa-search fa-2x ${styles['icon']}`}></i>
    </div>
  );
}

export default Input;