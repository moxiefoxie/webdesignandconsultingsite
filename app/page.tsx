import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website design + development",
    text: "Clear, responsive websites built around what your customers actually need to do.",
  },
  {
    number: "02",
    title: "Content management",
    text: "Simple editing tools so your team can update pages, locations, menus, and more.",
  },
  {
    number: "03",
    title: "SEO + GEO foundations",
    text: "Technical structure that helps traditional search engines and AI discovery tools understand your business.",
  },
  {
    number: "04",
    title: "Ongoing support",
    text: "Practical help after launch, from troubleshooting and updates to thoughtful improvements.",
  },
];

const steps = [
  ["Listen", "We learn how your business works and what the website needs to accomplish."],
  ["Build", "We design, develop, and refine the right solution without unnecessary complexity."],
  ["Launch", "We handle the technical details, show you how everything works, and stay available."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Andrew and Savannah home">
          <span>A</span><i>+</i><span>S</span>
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <Link className="navCta" href="/contact">
  Start a conversation
</Link>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <p className="eyebrow">Web design and consulting for growing businesses</p>
        <h1>Websites that work hard<br />for <em>local businesses.</em></h1>
        <div className="heroBottom">
          <p>
            We’re Andrew and Savannah. We design and build fast, useful websites
            that make businesses easier to find, trust, and choose.
          </p>
          <Link className="textLink" href="/contact">
  Tell us about your project <span aria-hidden="true">↗</span>
</Link>
        </div>
        <div className="orbit" aria-hidden="true">
          <div className="orbitRing" />
          <span>thoughtful</span><span>fast</span><span>clear</span>
        </div>
      </section>

      <section className="proofBar" aria-label="What we value">
        <div className="shell proofInner">
          <span>Built for real people</span><b>•</b><span>Easy to manage</span><b>•</b>
          <span>Ready to grow</span><b>•</b><span>Support after launch</span>
        </div>
      </section>

      <section className="section shell" id="services">
        <div className="sectionIntro">
          <p className="eyebrow">What we do</p>
          <h2>One small team.<br />A complete web partner.</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="service" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="darkSection" id="about">
        <div className="shell aboutGrid">
          <div>
            <p className="eyebrow light">Why work with us</p>
            <h2>Senior attention,<br /><em>without the agency layers.</em></h2>
          </div>
          <div className="aboutCopy">
            <p>
              You work directly with the people designing and building your site.
              That means faster decisions, honest recommendations, and a result
              shaped around your business—not a template sales process.
            </p>
            <p>
              We care about the details, explain the technical parts plainly, and
              stick around after launch.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell processSection">
        <div className="sectionIntro">
          <p className="eyebrow">How it works</p>
          <h2>Simple from first<br />conversation to launch.</h2>
        </div>
        <div className="steps">
          {steps.map(([title, text], index) => (
            <article className="step" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact">
        <div className="shell contactInner">
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Let’s make something<br /><em>useful together.</em></h2>
          <Link href="/contact">
  Tell us about your project <span>→</span>
</Link>
        </div>
      </section>

      <footer className="shell footer">
        <div className="wordmark"><span>A</span><i>+</i><span>S</span></div>
        <p>Andrew + Savannah · Web design and consulting</p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
