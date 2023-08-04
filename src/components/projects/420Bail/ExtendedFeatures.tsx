import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const ExtendedFeatures = () => (
    <section className="py-4 pb-20 mx-auto max-w-screen-2xl rounded-lg sm:px-6 lg:px-8 px-page">
        <div className="grid
                        grid-cols-1
                        md:grid-cols-2
                        xl:grid-cols-3
                        2xl:grid-cols-4
                        max-w-max mx-auto gap-x-16 gap-y-20"
        >
            <Feature key="EFB">
                <FeatureTitle>
                Exceptional Speed and Efficiency
                </FeatureTitle>
                <FeatureBody>
                420 Bail Bonds understands the urgency of the bail process. They prioritize swift action, ensuring that paperwork is processed promptly and efficiently. Their streamlined procedures and extensive experience enable them to expedite the release of your loved one, minimizing unnecessary delays.
                </FeatureBody>
            </Feature>

            <Feature key="Custom Soundpack">
                <FeatureTitle>
                Knowledgeable and Experienced Staff
                </FeatureTitle>
                <FeatureBody>
                The team at 420 Bail Bonds consists of highly skilled professionals who possess a deep understanding of the legal system and bail processes. Their expertise allows them to navigate complexities effectively, providing you with accurate information and guidance every step of the way.
                </FeatureBody>
            </Feature>

            <Feature key="Simbrief Integration">
                <FeatureTitle>
                Compassionate and Supportive Approach
                </FeatureTitle>
                <FeatureBody>
                Facing legal trouble can be emotionally challenging for individuals and their families. 420 Bail Bonds offers compassionate support, recognizing the stress and anxiety that can accompany such situations. They prioritize empathy and are dedicated to providing a supportive environment for their clients, offering reassurance and understanding throughout the process.
                </FeatureBody>
            </Feature>

            <Feature key="Product Installer">
                <FeatureTitle>
                24/7 Availability
                </FeatureTitle>
                <FeatureBody>
                Legal troubles can arise at any time, day or night. 420 Bail Bonds operates 24/7, ensuring that their clients have access to assistance whenever they need it. Their round-the-clock availability allows you to reach out for help and guidance, regardless of the time or day.
                </FeatureBody>
            </Feature>

            <Feature key="Experimental Variations">
                <FeatureTitle>
                Transparent and Fair Pricing
                </FeatureTitle>
                <FeatureBody>
                420 Bail Bonds believes in transparency when it comes to pricing. They provide clear explanations of the costs involved in their services, ensuring that you are fully informed and have a clear understanding of the financial aspects. This commitment to honesty and fairness sets them apart from other companies in the industry.
                </FeatureBody>
            </Feature>

            <Feature key="Constant Additions">
                <FeatureTitle>
                Extensive Network and Resources
                </FeatureTitle>
                <FeatureBody>
                Over the years, 420 Bail Bonds has built a strong network of connections and resources within the legal and law enforcement communities. This network enables them to handle a wide range of cases effectively. Whether it's a misdemeanor or a more complex legal matter, their connections and resources allow them to provide comprehensive support and assistance.
                </FeatureBody>
            </Feature>

           

        </div>
        
    </section>
);

const Feature: FC = ({ children }) => (
    <div className="flex flex-row max-w-prose md:w-96">
        <FontAwesomeIcon className="mt-1 mr-5 mb-auto text-2xl text-green-500" size="1x" icon={faCheck} />
        <div className="space-y-3">
            {children}
        </div>
    </div>
);

const FeatureTitle: FC = ({ children }) => (
    <h1 className="text-2xl font-semibold">{children}</h1>
);

const FeatureBody: FC<{ className?: string }> = ({ children, className }) => (
    <p className={`text-lg text-left ${className}`}>
        {children}
    </p>
);
