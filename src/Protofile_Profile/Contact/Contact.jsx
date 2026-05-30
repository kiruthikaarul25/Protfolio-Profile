import { useState, useEffect, useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields.");
      return;
    }
    setSubmitted(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current?.querySelectorAll(".reveal,.reveal-left,.reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-section" ref={sectionRef}>
      <div className="sec-header reveal">
        <div className="sec-label"><i className="ti ti-mail" aria-hidden="true"></i> Contact</div>
        <h2 className="sec-title">Let's Connect</h2>
        <div className="sec-divider"></div>
      </div>

      <div className="contact-layout">
        {/* LEFT */}
        <div className="contact-left reveal-left">
          <div className="avail-strip">
            <span className="avail-dot"></span>
            <p><strong>Currently available</strong> — Open to full-time roles and freelance projects in Java Full Stack development.</p>
          </div>
          <div className="cinfo-card">
            <h3>Get in Touch</h3>
            {[
              { icon:"ti-mail", bg:"rgba(37,99,235,0.08)", color:"#2563eb", lbl:"Email", val:<a href="mailto:kiruthikaarul25@gmail.com">kiruthikaarul25@gmail.com</a> },
              { icon:"ti-phone", bg:"rgba(34,197,94,0.08)", color:"#15803d", lbl:"Phone", val:"+91 93635 94725" },
              { icon:"ti-map-pin", bg:"rgba(234,179,8,0.08)", color:"#92400e", lbl:"Location", val:"Bangalore, India" },
              { icon:"ti-brand-github", bg:"rgba(15,32,64,0.07)", color:"#0f2040", lbl:"GitHub", val:<a href="https://github.com/kiruthikaarul25" target="_blank" rel="noreferrer">github.com/kiruthikaarul25</a> },
              { icon:"ti-brand-linkedin", bg:"rgba(10,102,194,0.08)", color:"#0a66c2", lbl:"LinkedIn", val:<a href="https://www.linkedin.com/in/kiruthika3125" target="_blank" rel="noreferrer">linkedin.com/in/kiruthika3125</a> },
            ].map((item) => (
              <div className="ci" key={item.lbl}>
                <div className="ci-icon" style={{background:item.bg,color:item.color}}>
                  <i className={`ti ${item.icon}`} aria-hidden="true"></i>
                </div>
                <div>
                  <div className="ci-lbl">{item.lbl}</div>
                  <div className="ci-val">{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="cform reveal-right">
          <h3>Send a Message</h3>
          {!submitted ? (
            <>
              <div className="f-row">
                <div className="fg"><label>Your Name *</label><input name="name" placeholder="Kiruthika A" value={form.name} onChange={handleChange} /></div>
                <div className="fg"><label>Your Email *</label><input name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleChange} /></div>
              </div>
              <div className="fg"><label>Subject</label><input name="subject" placeholder="Job opportunity / Collaboration" value={form.subject} onChange={handleChange} /></div>
              <div className="fg"><label>Message *</label><textarea name="message" rows="5" placeholder="Hi Kiruthika, I'd love to connect..." value={form.message} onChange={handleChange}></textarea></div>
              <button className="send-btn" onClick={handleSubmit}>
                <i className="ti ti-send" aria-hidden="true"></i> Send Message
              </button>
            </>
          ) : (
            <div className="success-box show">
              <i className="ti ti-circle-check" aria-hidden="true"></i>
              <h4>Message Sent!</h4>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
