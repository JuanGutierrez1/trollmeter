import { useState } from "react";
import Input from "../../components/input/input";
import styles from "./home.module.scss";

const phrases = {
  safe: ['Nice and safe!', 'We shilling 😎', 'Keep playing, is safe bro'],
  danger: ['You are in danger!', 'Be careful!', 'Maybe you are unlucky'],
  hell: ['You are in hell!', 'Consider not playing anymore'],
  stop: ['Just stop playing!', 'Just create a new account'],
}

const Home = () => {
  const [trollMeter, setTrollMeter] = useState<number>(0);

  const getTrollMeterPhrase = () => {
    //TODO Make a phew phrases for each trollMeter range
    if (trollMeter < 30) {
      return (
        <p style={{ color: '#198038', fontWeight: '700' }}>
          {phrases.safe[Math.floor(Math.random() * (phrases.safe.length - 1))]}
        </p>
      )
    } else if (trollMeter < 50) {
      return (
        <p style={{ color: '#ff832b', fontWeight: '700' }}>
          {phrases.danger[Math.floor(Math.random() * (phrases.danger.length - 1))]}
        </p>
      )
    } else if (trollMeter < 70) {
      return (
        <p style={{ color: '#da1e28', fontWeight: '700' }}>
          {phrases.hell[Math.floor(Math.random() * (phrases.hell.length - 1))]}
        </p>
      )
    } else {
      return (
        <p style={{ color: 'purple', fontWeight: '700' }}>
          {phrases.stop[Math.floor(Math.random() * (phrases.stop.length - 1))]}
        </p>
      )
    }
  }

  const calculateTrollMeter = (value: string) => {
    console.log("Searching for: ", value)
    const trollMeter = Math.floor(Math.random() * 100);
    setTrollMeter(trollMeter);
  }

  return (
    <div className={styles['container']}>
      <header className={styles['header']}>Que onda pa</header>
      <h1 className={styles['title']}>TROLLMETER</h1>
      <div className={styles['search-container']}>
        <Input onClick={(e) => calculateTrollMeter(e)} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p className={styles['troll-percentage']}>{trollMeter}%</p>
        <p className={styles['troll-meter']}>You were {trollMeter}% trolled in the last 20 games.</p>
        <p className={styles['troll-phrase']}>{getTrollMeterPhrase()}</p>
      </div>
    </div>
  );
}

export default Home;