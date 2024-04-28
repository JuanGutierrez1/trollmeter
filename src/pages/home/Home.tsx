import { useState } from "react";
import Input from "../../components/input/input";
import styles from "./home.module.scss";

const Home = () => {
  const [trollMeter, setTrollMeter] = useState<number>(0);

  const getTrollMeterPhrase = () => {
    if (trollMeter < 20) {
      return "You are safe!";
    } else if (trollMeter < 40) {
      return "You are in danger!";
    } else if (trollMeter < 60) {
      return "You are in hell!";
    } else if (trollMeter < 80) {
      return "You are in the abyss!";
    } else {
      return "You are in the darkest abyss!";
    }
  }

  const calculateTrollMeter = (value: string) => {
    console.log("Searching for: ", value)
    const trollMeter = Math.floor(Math.random() * 100);
    setTrollMeter(trollMeter);
  }

  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>TROLLMETER</h1>
      <div className={styles['search-container']}>
        <Input onClick={(e) => calculateTrollMeter(e)} />
      </div>
      <p className={styles['troll-meter']}>You were {trollMeter}% trolled. {getTrollMeterPhrase()}</p>
    </div>
  );
}

export default Home;