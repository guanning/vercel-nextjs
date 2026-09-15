import PageComponent from "@/components/PageComponent";
import homeImage from "@/public/17.jpeg";

export const metadata = {
    title: "Scale",
}

export default function Page() {
    return (
        <PageComponent imgUrl={homeImage} altText="Scale" context="Scale" />
    )
}