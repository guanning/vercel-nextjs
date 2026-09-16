import { Card } from "antd";
import { data } from "@/data";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return { title: `博客详情 - ${id}` };
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const item = data.find((item) => item.id === parseInt(id));
    return (
        <div>
            <Card title={item?.title}>
                <p>{item?.body}</p>
            </Card>
        </div>
    )
}