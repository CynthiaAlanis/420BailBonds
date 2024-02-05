import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dropdown, DropdownItem } from './Dropdown';


export type LinkProps = {
    name: string,
    path: string,
    external?: boolean,
    className?: string
};

export const NavLink = ({ name, path, external, className }: LinkProps) => (
    <li className={`list-none transition w-full cursor-pointer hover:text-teal ${className}`}>
        {
            external ? (
                <a href={path}>
                    <p>
                        {name}
                    </p>
                </a>
            ) : (
                <Link href={path}>
                    <p>
                        {name}
                    </p>
                </Link>
            )
        }
    </li>
);

export const NavLinks = (props: { className?: string }) => {
    const router = useRouter();

    return (
        
        <span className={`flex flex-col gap-x-4 gap-y-2 md:items-center ${props.className}`}>
           
            {router.pathname !== '/' && <NavLink name="Home" path="/" />}
            <NavLink name="Location" path="/notams/Location" />
            <NavLink name="About" path="/about" />
          

            <Dropdown titleName="Community">
                <DropdownItem>
                    <NavLink name="Merchandise" external path="/notams/Merchandise/" />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name="Pricing" external path="/notams/Pricing/" />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name="Facebook" external path="https://www.facebook.com/ssmehrbailbonds/" />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name="YouTube" external path="https://www.youtube.com/@lawofficesofjerrynicholson1878" />
                </DropdownItem>
            </Dropdown>
        </span>
    );
};
