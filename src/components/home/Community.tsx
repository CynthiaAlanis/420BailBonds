import Image from 'next/image';
import { IconArrowRight } from '@tabler/icons';
import { Card, CardBody, CardTitle } from '../utils/Card';
import Container from '../utils/Container';



export const Community = () => {

    return (
        <section id="community" className="flex flex-col justify-between items-center text-blue-dark-contrast bg-stone-50 lg:flex-row">
            <Container className="flex flex-col py-12 max-w-6xl lg:px-24">
                <span className="mb-3 w-24 h-2 bg-teal-400-contrast rounded-full" />
                <h1 className="bg-teal-400">Contact Us for Bail Bond Services</h1>
                <p className="max-w-prose text-stone-800">
                At 420 Bail Bonds, located at 515 S Harbor Blvd, Anaheim, CA 92805, their dedicated team of agents is committed to providing round-the-clock availability and support. With a phone number of 714-241-0221, they ensure that assistance is just a call away at any time, day or night.
                </p>

                <div className="my-8">
                    <Card bgColour="stone-100" className="border-discord shadow-lg">
                        <CardTitle>
                            <span className="flex justify-center items-center p-2 mr-2 bg-discord rounded-xl">
                                <Image 
                                src="/svg/cannabis.svg" width={23} 
                                height={23} 
                                alt="leaf"
                                />
                            </span>
                            420 Bail Bonds
                        </CardTitle>
                        <CardBody>
                            Check out our Facebook Page
                        </CardBody>
                        <a
                            className="self-center py-2 px-3 text-xl font-semibold text-blue bg-discord hover:bg-discord-dark rounded-xl transition"
                            href="https://www.facebook.com/ssmehrbailbonds/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Join the Community
                            <IconArrowRight className="inline-flex mb-1 ml-1" size={20} stroke={2} />
                        </a>
                    </Card>
                </div>
            </Container>
            
        </section>
    );
};
