import PageComponent from "@/components/PageComponent";
import homeImage from "@/public/17.jpeg";
import { Button } from 'antd';


export const metadata = {
    title: "Scale",
}

export default function Page() {
    return (
        <>
            <div className="App">
                <Button type="primary">Button</Button>
            </div>
            <PageComponent imgUrl={homeImage} altText="Scale" context="Scale" />
        </>
    )
}