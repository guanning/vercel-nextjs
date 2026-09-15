import homeImage from "@/public/13.jpeg";
import PageComponent from "@/components/PageComponent";

export const metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <PageComponent imgUrl={homeImage} altText="home image" context="Professional Cloud Hosting" />
  );
}
