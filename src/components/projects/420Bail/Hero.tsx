import { Button } from '../../utils/Button';

export const Hero = () => (
    <>
        <header className="absolute inset-y-1/3 inset-x-2 z-30 mx-auto max-w-7xl px-page">
            <div className="flex flex-row justify-between items-end">
                <div>
                    <h2 className="mb-2 ml-2 text-2xl font-medium tracking-widest uppercase">
                        
                    </h2>
                    <h1 className="text-7xl font-medium sm:text-8xl">
                        <span className="text-blue-light">420</span>
                         Bail Bonds
                    </h1>
                    <h1 className="mt-2 w-2/3 text-xl">
                        &quot;420 Bail Bonds is the company you can rely on. Their dedication to their clients' well-being and their commitment to excellence make them an outstanding choice in the industry.&quot;
                    </h1>
                    <p className="mt-4 text-xl text-gray-200">
                        - Raymond Sanchez
                    </p>
                    <br/>
                    <p>Give us a call</p>
                    
                    <div className="flex py-5 max-w-md">
                    
                        <a href="tel:+7142410221">
                            <Button
                                className="mr-3 w-40 text-xl font-bold hover:text-blue-light bg-blue-light hover:bg-white border-2 border-blue-light"
                            >
                                (714) 241-0221
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <img draggable="false" className="object-cover relative z-0 w-screen h-screen opacity-30 select-none" src="/img/discord.jpg" alt="" />
    </>
);
