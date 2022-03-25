import Image from 'next/image'
import Link from 'next/link'
import zero from "../images/zero.svg";
import cc from "../images/cc.svg";

export default function Footer() {
  return (
    <footer
      className="px-12 my-12 mx-auto py-14 lg:py-0 lg:flex lg:relative max-w-7xl justify-between recursive-font items-center"
      aria-labelledby="footer-heading"
    >
      <div className='lg:flex'>
      <p
      className="mr-12"
      xmlnsCc="http://creativecommons.org/ns#"
      xmlnsDct="http://purl.org/dc/terms/"
      >
        <a
          property="dct:title"
          rel="cc:attributionURL"
          href="https://www.freezeforpeace.org"
          >
          Freeze for Peace
        </a>{" "}
        is marked with{" "}
        <a
          href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          style={{ display: "inline-block " }}
          >
          CC0 1.0
          </a>
        </p>
          <div className="flex justify-start">
            <Image
                height={25}
                alt="Creative Commons Logo"
                src={cc}
                />
            <Image
              height={25}
              alt="Creative Commons License Level"
              src={zero}
              />
          </div>
        </div>
        <Link href="/imprint">
          <a>Legal Disclosure</a>
        </Link>
    </footer>
  );
}
