import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import IndexLayout from "../layouts/IndexLayout";
import WorkOverviewLayout from "../layouts/WorkOverviewLayout";
import WorkLayout from "../layouts/WorkLayout";

const layouts = {
    IndexLayout,
    WorkOverviewLayout,
    WorkLayout,
};

export async function getStaticProps({ params }) {
    const slug = params.slug ? params.slug.join("/") : "index"; // Handle nested paths
    const mdxPath = path.join(process.cwd(), "content", `${slug}.mdx`);

    if (!fs.existsSync(mdxPath)) {
        return { notFound: true };
    }

    const fileContents = fs.readFileSync(mdxPath, "utf-8");
    const { content, data } = matter(fileContents);

    return { props: { source: content, frontMatter: data } };
}

export async function getStaticPaths() {
    const contentDir = path.join(process.cwd(), "content");
    const files = fs.readdirSync(contentDir);

    const paths = files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => ({
            params: { slug: file.replace(".mdx", "").split("/") },
        }));

    return { paths, fallback: false };
}

export default function MDXPage({ source, frontMatter }) {
    const Layout = layouts[frontMatter.layout] || (({ children }) => <>{children}</>);

    return (
        <Layout title={frontMatter.title} date={frontMatter.date} color={frontMatter.color}>
            <MDXRemote source={source} />
        </Layout>
    );
}
