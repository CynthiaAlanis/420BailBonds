import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPostListings, PostListing } from '../../lib/notams/posts';
import Container from '../../components/utils/Container';

export type BlogProps = { listings: PostListing[] }

const Blog = ({ listings }: BlogProps) => (
    <section className="min-h-screen bg-midnight">
        <Container
            className="grid gap-8 py-14 pt-24 max-w-7xl md:grid-cols-2"
        >
            {listings.map(({
                id,
                title,
                authors,
                readingStats,
                category,
                metaImage,
                metaAlt,
            }, index) => (
                <Link key={id} href={`/notams/${id}`}>
                    <div className={`
                                ${index === 0 ? 'md:col-span-2' : 'brightness-90 hover:brightness-100'}
                                bg-blue-dark-contrast
                                flex flex-col
                                rounded-lg
                                transition
                                ring-1
                                overflow-hidden
                                hover:ring-2
                                ring-gray-700
                                hover:shadow-lg
                                hover:ring-teal
                                cursor-pointer`}
                    >
                        {metaImage
                            ? (
                                <Image
                                    width={1000}
                                    height={350}
                                    objectFit="cover"
                                    draggable="false"
                                    src={metaImage}
                                    alt={metaAlt}
                                />
                            )
                            : <></>}
                        <Container className="py-7">
                            <div className="flex flex-wrap gap-x-4 md:text-lg text-md">
                                {category === 'ANNOUNCEMENTS'
                                    ? (
                                        <p
                                            className="font-bold text-teal-light"
                                        >
                                            {category}
                                        </p>
                                    )
                                    : (
                                        <p
                                            className="font-bold text-orangutanOrange"
                                        >
                                            {category}
                                        </p>
                                    )}
                               
                                <em className="self-end text-gray-300">
                                    {readingStats.text}
                                </em>
                            </div>
                            <h1>
                                {title}
                            </h1>
                            <div className="flex flex-col">
                                <p className="font-semibold">
                                    Written by
                                    {' '}
                                    {authors.join(', ')}
                                </p>
                                
                            </div>
                        </Container>
                    </div>
                </Link>
            ))}
        </Container>
    </section>
);

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    const listings = getPostListings();

    return { props: { listings } };
};

export default Blog;
