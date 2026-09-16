import BlogList from "@/components/blogList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "博客列表",
    description: "Blog",
}

export default function Page() {
    return (
        <BlogList />
    )
}