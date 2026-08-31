"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const endpoint = "https://formsubmit.co/ajax/drewmarcondes@gmail.com";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    // Spam honeypot
    if (data.get("website")) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      business: data.get("business"),
      project_type: data.get("project_type"),
      message: data.get("message"),

      _subject: "New Andrew + Savannah website inquiry",
      _template: "table",
      _url: window.location.href,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="formSuccess" role="status">
        <span className="successMark" aria-hidden="true">
          ✓
        </span>

        <p className="eyebrow">Message sent</p>

        <h2>Thanks for reaching out.</h2>

        <p>
          We’ve got your project details and will get back to you as soon as
          we can.
        </p>

        <button
          className="secondaryButton"
          type="button"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="formRow">
        <label>
          <span>Name *</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </label>

        <label>
          <span>Email *</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
      </div>

      <div className="formRow">
        <label>
          <span>Business / organization</span>
          <input
            name="business"
            type="text"
            autoComplete="organization"
          />
        </label>

        <label>
          <span>Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </label>
      </div>

      <label>
        <span>What can we help with? *</span>

        <select
          name="project_type"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="New website">
            A new website
          </option>
          <option value="Website redesign">
            A website redesign
          </option>
          <option value="Website support">
            Website help or ongoing support
          </option>
          <option value="SEO / GEO">
            SEO / GEO foundations
          </option>
          <option value="Not sure yet">
            I’m not sure yet
          </option>
          <option value="Something else">
            Something else
          </option>
        </select>
      </label>

      <label>
        <span>Tell us a little about your project *</span>

        <textarea
          name="message"
          rows={7}
          placeholder="What are you hoping to build or improve?"
          required
        />
      </label>

      {/* Bots may fill this. Humans won't see it. */}
      <label className="honeypot" aria-hidden="true">
        Website
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      {status === "error" && (
        <p className="formError" role="alert">
          Something went wrong while sending your message. Please try again.
        </p>
      )}

      <div className="formActions">
        <button
          className="submitButton"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send message"}
          <span aria-hidden="true">→</span>
        </button>

        <p>
          No sales funnel. Just a real conversation with us.
        </p>
      </div>
    </form>
  );
}