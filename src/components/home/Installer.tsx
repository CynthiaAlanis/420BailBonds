import Image from 'next/image';
import { createRef, forwardRef } from 'react';
import { IconPackage } from '@tabler/icons';
import { Button } from '../utils/Button';
import Container from '../utils/Container';


export const installerRef = createRef<HTMLDivElement>();

export const Installer = forwardRef(() => (
    <section ref={installerRef} className="overflow-hidden py-12 bg-blue-dark">
        <Container className="flex flex-col items-center 3xl:flex-row 3xl:justify-center">
            <div className="mb-4 text-center 2xl:mr-12 3xl:text-left">
            
                <IconPackage className="p-2 mx-auto mb-4 bg-sky-contrast rounded-xl 3xl:mx-0" size={55} stroke={1.5} />
                <h1 className="font-extrabold">
                    Our Services
                </h1>
                <p className="max-w-2xl text-blue-100">
                At 420 Bail Bonds, we offer a comprehensive range of services to meet your bail bond needs. Our dedicated team is well-versed in various types of bail bonds and strives to provide efficient and reliable assistance. Here are the services we offer:
               </p>
               <br/>
               <div className="max-w-2xl text-blue-100">
               
 <ol className="list-decimal">
  <li>Surety Bonds: We specialize in surety bonds, which involve a contractual agreement between the defendant, a bail bondsman, and the court. We act as the surety, guaranteeing the appearance of the defendant in court.</li>
  <br/>
  <li>Cash Bail Bonds: If you prefer to pay the full amount of bail in cash, we can facilitate that process by assisting you in posting the required bail amount with the court.</li>
  <br/>
  <li>Property Bonds: In cases where cash or surety bonds are not feasible options, we can explore property bonds. This type of bond involves using real estate or other valuable assets as collateral for bail.</li>
  <br/>
  <li>Citation Release: For certain less serious offenses, individuals may be issued a citation and released without the need for bail. We can provide guidance and support in understanding the citation release process.</li>
  <br/>
  <li>Recognizance Release: In some cases, the court may allow a defendant's release on their own recognizance, without the need for bail or collateral. We can help navigate this process and ensure all necessary requirements are met.</li>
  <br/>
  <li>Immigration Bail Bonds: If a loved one is detained by immigration authorities, we offer immigration bail bond services to assist in securing their release while their immigration case is pending.</li>
  <br/>
  <li>Federal Bail Bonds: When facing federal charges, the bail process can be more complex. We have experience in handling federal bail bonds and can provide the necessary support and expertise.</li>
</ol>
</div>
<br/>               

            <a href="tel:+7142410221">
                    <h3>Call us today at: </h3>
                    <Button className="mt-8 w-40 hover:text-teal-light-contrast bg-teal-light-contrast hover:bg-white border-2 border-teal-light-contrast">
                    (714) 241-0221
                    </Button>
                </a>
            </div>
            <div className="-mb-[125px] w-11/12 xl:w-5/6 3xl:-mb-3 3xl:w-320">
                <Image
                    src="/img/InstallerScreenshot.png"
                    alt="Installer"
                    width={1200}
                    height={850}
                    quality={90}
                    objectFit="contain"
                />
            </div>
        </Container>
    </section>
));
