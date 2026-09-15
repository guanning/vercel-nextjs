import PageComponent from "@/components/PageComponent";
import homeImage from "@/public/15.jpeg";

export const metadata = {
    title: "Performance",
}

export default function Page() {
    return (
        <PageComponent imgUrl={homeImage} altText="Performance" context="Performance" />
    )
}