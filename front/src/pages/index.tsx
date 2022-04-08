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


const Title = styled.h1`
  color: blue;
`;

const Home = (props) => {
  const { t } = useTranslation('common');

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFeed({
    fields: {
      owner: { member: 'all' },
      reactions: { variables: { limit: 5 }, fields: 'basic' },
    },
    variables: { limit: 10 },
  })

  const { nodes: posts } = simplifyPaginatedResult<Post>(data)

  console.log("posts", posts);



  return (
    <div className='h-screen'>
      <Head>
        <title>Demo App</title>
        <meta name="description" content="welcome to Demo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={2} >
          <div className='w-full relative  z-10 h-full'>
            <Image src="/images/welcome.jpg" layout="fill" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <Typography.Text mark className=" text-bold font-bold text-5xl bg-[url('/images/bg-back.jpg')] " >These are the posts which you can see in Tribe</Typography.Text>
          <section className='flex flex-row flex-wrap px-10 justify-between items-center relative' >
            {
              posts?.map(post => <Card title={post.title} description={post.shortContent} avatar={post.owner.member.name} key={post.id} />
              )
            }

          </section>
        </ParallaxLayer>
      </Parallax>
    </div >
  );
}


Home.layout = 'default';



export default Home;


