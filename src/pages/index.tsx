import Head from 'next/head';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

const Title = styled.h1`
  color: blue;
`;

const Home = () => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo App</title>
        <meta name="description" content="welcome to Demo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-bold text-blue text-base">welcome to Demo App</div>
      <Title>styled component</Title>
    </div>
  );
}


Home.layout = 'default';


export default Home;


