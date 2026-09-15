import PageComponent from "@/components/PageComponent";
import homeImage from "@/public/16.jpeg";

export const metadata = {
    title: "Reliability",
}

export default function Page() {
    return (
        <PageComponent imgUrl={homeImage} altText="Reliability" context="Reliability" />
    )
}