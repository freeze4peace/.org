export default function Footer() {
  return (
    <footer
      className="px-12 mx-auto py-14 lg:py-0 lg:flex lg:relative max-w-7xl recursive-font"
      aria-labelledby="footer-heading"
    >
      <p
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
        by{" "}
        <a
          rel="cc:attributionURL dct:creator"
          property="cc:attributionName"
          href="https://www.linkedin.com/in/jaronschulz"
        >
          Jaron Schulz{" "}
        </a>{" "}
        is marked with{" "}
        <a
          href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          style={{ display: "inline-block " }}
        >
          CC0 1.0
          <img
            style={{
              height: "22px!important",
              marginLeft: "3px",
              verticalAlign: "text-bottom",
            }}
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
          />
          <img
            style={{
              height: "22px!important",
              marginLeft: "3px",
              verticalAlign: "text-bottom",
            }}
            src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1"
          />
        </a>
      </p>
    </footer>
  );
}
