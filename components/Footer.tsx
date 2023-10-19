//next
import Link from "next/link";
import Image from "next/image";

//constants
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constants";

//components
import { FooterColumn } from "./";

const Footer = () => {
  //variables
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact-us" className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link className="mb-10" href="/">
            <Image
              className="pointer-events-none"
              src="/hilink-logo.svg"
              alt="logo"
              width={74}
              height={29}
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link key={link} href="/">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    className="flex gap-4 md:flex-col lg:flex-row"
                    key={link.label}
                    href="/"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link key={link} href="/">
                      <Image
                        className="pointer-events-none"
                        src={link}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          {currentYear} Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
