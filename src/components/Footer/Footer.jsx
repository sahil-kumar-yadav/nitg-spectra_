import CopyrightSection from "./FooterComponents/CopyrightSection";
import NavigationLinks from "./FooterComponents/NavigationLinks";
import SociaLIcons from "./FooterComponents/SociaLIcons";
import TopFootertext from "./FooterComponents/TopFootertext";

function Footer() {
    return (
        <>
            <footer className="flex flex-col items-center bg-neutral-900 text-center text-white">
                <div className="container px-6 pt-6 max-sm:px-3">
                    <TopFootertext />
                    <NavigationLinks />
                    <SociaLIcons />
                    <hr className='h-2px mx-0 mb-6 bg-gray-400 border-spacing-2 dark:bg-white' />
                </div>

                {/* <!--Copyright section--> */}
                <CopyrightSection />


            </footer >
        </>
    );
}

export default Footer;