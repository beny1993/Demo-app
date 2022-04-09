import Head from 'next/head';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';
import { Row, Col, Typography, Tabs } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import { useFeed, useSpaces } from '@tribeplatform/react-sdk/hooks'
import { simplifyPaginatedResult } from "@tribeplatform/react-sdk/utils";
import { Post } from "@tribeplatform/gql-client/types";
import Card from '../components/atoms/Cards/Card';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated, easings } from '@react-spring/web'
import { useState } from 'react';

const Title = styled.h1`
  color: blue;
`;

const Home = (props) => {
  const { t } = useTranslation('common');
  const [of, setOf] = useState(false)
  const {
    data,
  } = useFeed({
    fields: {
      owner: { member: 'all' },
      reactions: { variables: { limit: 5 }, fields: 'basic' },
    },
    variables: { limit: 10 },
  })

  const { nodes: posts } = simplifyPaginatedResult<Post>(data)

  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 11000,
      easing: easings.easeInOutQuart,
    },
  })



  return (
    <div className='h-screen'>
      <Head>
        <title>Demo App</title>
        <meta name="description" content="welcome to Demo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section onClick={() => setOf(!of)} className={of ? 'opacity-0 transition-opacity	' : 'text-[#555] transition-opacity z-10 text-center items-center top-0 bg-[#333] cursor-pointer font-bold flex h-full min-h-full min-w-full overflow-hidden fixed w-full hover:text-shadow-md'}>
        <div className={!of ? 'w-3/6 font-bold justify-end' : 'opacity-0'} >¡WELC</div>
        <span className='justify-end' style={{ width: of ? '100%' : "0px" }}></span>
        <div className={!of ? 'w-3/6 font-bold justify-start' : 'opacity-0'}  >OME!</div>
      </section>
      <div className="z-0">
        <Typography.Text mark className=" text-bold font-bold text-5xl">These are the posts which you can see in Tribe</Typography.Text>
        <section className='flex flex-row flex-wrap px-10 justify-between items-center relative' >
          {
            posts?.map(post =>
              <animated.div style={{ ...styles }} >
                <Card title={post.title} description={post.shortContent} avatar={post.owner.member.name} key={post.id} />
              </animated.div>
            )
          }

        </section>
      </div>

    </div >
  );
}


Home.layout = 'default';



export default Home;


