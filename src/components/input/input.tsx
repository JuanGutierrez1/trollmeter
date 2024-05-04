import { useState } from "react";
import styles from "./input.module.scss";

interface InputProps {
  onClick: (value: string) => void;
}

const Input = ({ onClick }: InputProps) => {
  const [value, setValue] = useState<string>('')

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClick(value)
    }
  }

  return (
    <div className={styles['input-container']}>
      <input onKeyDown={onKeyDown} onChange={(e) => setValue(e.target.value)} value={value} className={styles['input']} spellCheck={false} placeholder="Name#TAG" />
      <i onClick={() => onClick(value)} className={`fas fa-search fa-2x ${styles['icon']}`}></i>
      <select className={styles['select']} >
        <option>NA</option>
        <option>EUW</option>
        <option>EUNE</option>
        <option>OCE</option>
        <option>KR</option>
        <option>JP</option>
        <option>BR</option>
        <option>LAS</option>
        <option>LAN</option>
        <option>RU</option>
        <option>TR</option>
        <option>SG</option>
        <option>PH</option>
        <option>TW</option>
        <option>VN</option>
        <option>TH</option>
      </select>
    </div>
  );
}

export default Input;