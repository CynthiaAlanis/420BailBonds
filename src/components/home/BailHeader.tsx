import Link from 'next/link';
import { Button } from '../utils/Button';
import Container from '../utils/Container';

export const BailHeader = () => {
    return (
        <header>
            <video
                className="object-cover fixed -z-10 w-screen h-screen opacity-0.7"
                src="https://i.imgur.com/i6maDd9.mp4"
                playsInline
                autoPlay
                muted
                loop
            />
            <Container className="relative max-w-6xl min-h-screen">
                <div className="absolute bottom-0 left-0 h-2/3 px-page">
                    <h1 className="text-8xl font-bold">
                    <img className="logo" src="logo1.png" alt="logo" width="150"/>
                        <span className="text-teal">420</span>
                         Bail Bonds
                    </h1>
                    <p className="max-w-xl">
                    Arrests are often scary and stressful, but the good news is that you are not alone. At 420 Bail Bonds, we have been providing reliable bail bond services since 1927
                    </p>
                    <div className="flex gap-4 my-5 max-w-md">
                        <Link href="/notams">
                            <Button
                                className="w-40 hover:text-teal-400 bg-sky hover:bg-white border-2 border-teal"
                            >
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};