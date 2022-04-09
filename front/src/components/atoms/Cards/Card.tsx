import { Avatar, Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import Button from '../Button/Buttton';

type Props = {
    img?: string;
    title: string;
    description: string;
    avatar?: string
}

export default function Cards({ img, title, description, avatar, }: Props) {
    return (
        <>
            <Card
                style={{ width: 300 }}
                cover={img}
                className="my-8 rounded-xl "
            >
                <Meta
                    avatar={
                        <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        >{avatar}</Avatar>
                    }
                    title={title}
                    description={
                        <div dangerouslySetInnerHTML={{ __html: description as string }} />
                    }

                />
            </Card>
        </>
    )
}

