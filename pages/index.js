import { useEffect, useState, useRe } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState(null);
  const getDate = useCustomFunc();
  let [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count++);
  });

  useEffect(() => {
    fetch("/api/hello")
      .then((req) => req.json())
      .then((data) => setData(data));
  }, []);

  const handleOnChange = () => {
    setData(null);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{data?.name}</h1>
        <h2>{getDate}</h2>
        {count}
        <button onClick={handleOnChange}>Click me</button>
      </main>
    </div>
  );
}

const useCustomFunc = () => {
  const [date, setDate] = useState(null);
  let [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count++);
  });
  return count;
};
