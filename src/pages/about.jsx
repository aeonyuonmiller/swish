import fs from "fs";
import path from "path"; // ✅ Add this line
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Hero from "../components/Hero";

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "content", "about.mdx"); // Load contact.mdx
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);
    const mdxSource = await serialize(content);

    return {
        props: {
            title: data.title,
            mdxSource,
        },
    };
}

export default function ContactPage({ title, mdxSource }) {
    return (
        <div>
            <Hero title={title} image="files/out-there.jpg" />
            <MDXRemote {...mdxSource} />
        </div>
    );
}
