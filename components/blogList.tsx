"use client";
import { List } from "antd";
import { data } from "@/data";
import { Avatar } from "antd";
import Link from "next/link";

export default function BlogList() {
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta className="items-center!"
                        avatar={<Avatar src={`https://api.dicebear.com/10.x/lorelei/svg?seed=${index}`} />}
                        title={<Link href={`/blog/${item.id}`}>{item.title}</Link>}
                    />
                </List.Item>
            )}
        />
    )
}