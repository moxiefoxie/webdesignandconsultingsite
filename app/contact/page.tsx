import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "./contactform";

export const metadata: Metadata = {
  title: "Contact | Andrew + Savannah",
  description: "Tell Andrew + Savannah about your website or digital project.",
};

export default function ContactPage() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <Link
  className="wordmark"
  href="/"
  aria-label="Andrew and Savannah home"
>
  <span>A</span>
  <i>+</i>
  <span>S</span>
</Link>

        <div className="navLinks">
          <Link href="/#services">Services</Link>
<Link href="/#about">About</Link>

<Link className="navCta activeCta" href="/contact">
  Contact us
</Link>
        </div>
      </nav>

      <section className="contactPage shell">
        <div className="contactPageIntro">
          <p className="eyebrow">Start a conversation</p>

          <h1>
            Tell us what you’re
            <br />
            <em>working on.</em>
          </h1>

          <p className="contactLead">
            Have a website idea, a site that needs some attention, or just a
            problem you’re not sure how to solve? Send us the details. We’ll
            read it ourselves and follow up directly.
          </p>
        </div>

        <div className="contactFormWrap">
          <ContactForm />
        </div>
      </section>

      <section className="contactAside">
        <div className="shell contactAsideInner">
          <p className="eyebrow">What happens next?</p>

          <div className="contactAsideGrid">
            <p>
              We’ll review what you send and make sure we understand what you
              need.
            </p>

            <p>
              If it looks like something we can help with, we’ll reach out to
              talk through the project and next steps.
            </p>

            <p>
              If we think there’s a simpler or better direction, we’ll tell
              you that too.
            </p>
          </div>
        </div>
      </section>

      <footer className="shell footer">
        <a
          className="wordmark"
          href="/"
          aria-label="Andrew and Savannah home"
        >
          <span>A</span>
          <i>+</i>
          <span>S</span>
        </a>

        <p>Andrew + Savannah · Web design and consulting</p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}