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
      <div className="w-full">
        <section>
          <Row justify='center' >
            <Col flex={3} className="flex justify-center">
              <Image src="/images/welcome.jpg" width={500} height={500}></Image>
            </Col>
            <Col flex={2} className="flex justify-center ">
              <div className='flex flex-col items-baseline justify-center'>
                <Title className="text-white font-bold text-4xl align-baseline">Welcom To my Blog</Title>
                <Typography.Text mark className='text-2xl'>in this blog you can see posts and comment from tribe applicaiton </Typography.Text>
              </div>
            </Col>
          </Row >
        </section>
        <section className='flex flex-row flex-wrap px-10 justify-between items-center'>
          {
            posts?.map(post => <Card title={post.title} description={post.shortContent} avatar={post.owner.member.name} />
            )
          }

        </section>
      </div >
    </div >
  );
}


Home.layout = 'default';



export default Home;


