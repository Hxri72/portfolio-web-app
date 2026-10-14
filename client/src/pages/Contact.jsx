import { useState } from "react";
import api from "../api/axios";
import useFetch from "../hooks/useFetch";
import SectionTitle from "../components/SectionTitle";
import { MailIcon, PhoneIcon, MapPinIcon, GithubIcon, LinkedinIcon } from "../components/Icons";
import "../styles/contact.css";

const emptyForm = { name: "", email: "", message: "" };

function Contact() {
  const { data: profile } = useFetch("/profile");

  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", text: "Please fill all the fields" });
      return;
    }

    setSending(true);
    setStatus({ type: "", text: "" });

    try {
      const res = await api.post("/messages", form);
      setStatus({ type: "success", text: res.data.message });
      setForm(emptyForm);
    } catch (err) {
      const msg = err.response?.data?.message || "Could not send message. Try again later.";
      setStatus({ type: "error", text: msg });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="container page page-fade">
      <SectionTitle
        label="Contact"
        title="Let's work together"
        subtitle="Open to Full Stack Developer, Frontend Developer and Software Engineer roles."
      />

      <div className="contact-wrap">
        <div className="card contact-info">
          <h3>Get in touch</h3>
          <p>The quickest way to reach me is email or phone.</p>

          {profile && (
            <ul>
              <li>
                <div className="icon-box"><MailIcon /></div>
                <div>
                  <span>Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </li>
              {profile.phone && (
                <li>
                  <div className="icon-box"><PhoneIcon /></div>
                  <div>
                    <span>Phone</span>
                    <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
                  </div>
                </li>
              )}
              <li>
                <div className="icon-box"><MapPinIcon /></div>
                <div>
                  <span>Location</span>
                  <p>{profile.location}</p>
                </div>
              </li>
            </ul>
          )}

          {profile && (
            <div className="contact-buttons">
              <a href={`mailto:${profile.email}`} className="btn btn-small">
                <MailIcon size={15} /> Email me
              </a>
              {profile.phone && (
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="btn btn-outline btn-small">
                  <PhoneIcon size={15} /> Call
                </a>
              )}
            </div>
          )}

          {profile && (
            <div className="contact-socials">
              {profile.links?.github && (
                <a href={profile.links.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
                  <GithubIcon />
                </a>
              )}
              {profile.links?.linkedin && (
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
              )}
            </div>
          )}
        </div>

        <form className="card contact-form" onSubmit={handleSubmit}>
          <div>
            <h3>Send a message</h3>
            <p className="muted">Messages are stored on my server and I reply by email.</p>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." />
          </div>

          {status.text && <p className={`form-status ${status.type}`}>{status.text}</p>}

          <button type="submit" className="btn" disabled={sending}>
            {sending ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
