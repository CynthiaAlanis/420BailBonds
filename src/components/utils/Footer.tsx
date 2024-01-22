import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Container from './Container';

type IconItemProp = {
    icon: IconProp,
    href?: string
}

export const FooterIconItem = (props: IconItemProp) => (
    <a href={props.href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="hover:text-blue-light transition" icon={props.icon} size="lg" />
    </a>
);

export const Footer = () => (
    <footer className="py-8 bg-blue-dark">
        <Container className="flex flex-col space-y-2">

            <div className="flex gap-x-4 justify-center">
               
                <FooterIconItem icon={faFacebook} href="https://www.facebook.com/ssmehrbailbonds/" />
                <FooterIconItem icon={faYoutube} href="https://www.youtube.com/@lawofficesofjerrynicholson1878" />
            </div>
            <em className="text-center text-teal-100">&copy; 420 Bail Bonds 2023</em>
        </Container>
    </footer>
);
