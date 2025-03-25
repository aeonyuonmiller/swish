import fs from "fs";
import path from "path"; // ✅ Add this line
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Hero from "../components/Hero";
import Transition from "../components/Transition";

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "content", "about.mdx");
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);
    const mdxSource = await serialize(content);

    return {
        props: {
            title: data.title,
            image: data.image,
            mdxSource,
        },
    };
}

export default function ContactPage({ title, mdxSource, image }) {
    return (
        <div>
            <Hero title={title} image={image} />
            <Transition>
                <MDXRemote {...mdxSource} />
            </Transition>
        </div>
    );
}
