import { useState } from "react";

const G = "#1A3A1A";
const TC = "#C4622D";
const OC = "#D4A535";
const CR = "#F7EED8";
const EA = "#2A1810";
const SG = "#5A8A5A";
const LG = "#E8F0E8";

const gf = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700;800&family=Dancing+Script:wght@700&display=swap');`;

const css = `${gf}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#0f1a0f;color:#fff;font-family:'Barlow',sans-serif;-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:'Playfair Display',serif;letter-spacing:-.01em}
.eyebrow{font-family:'Barlow Condensed',sans-serif;font-weight:700;letter-spacing:2px;text-transform:uppercase}
.signature{font-family:'Dancing Script',cursive}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 32px;display:flex;align-items:center;justify-content:space-between;background:rgba(15,26,15,.9);backdrop-filter:blur(12px);border-bottom:1px solid rgba(212,165,53,.12)}
.nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none}
.nl-leaf{width:36px;height:36px;background:#D4A535;border-radius:50% 0 50% 0;display:flex;align-items:center;justify-content:center;font-size:18px}
.nl-name{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:800;letter-spacing:2px;color:#D4A535;text-transform:uppercase;line-height:1}
.nl-reg{font-size:9px;color:rgba(255,255,255,.35);letter-spacing:1px;margin-top:2px}
.nav-links{display:flex;gap:28px;align-items:center}
.nl{font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.65);text-decoration:none;transition:color .2s}
.nl:hover{color:#D4A535}
.nl-cta{background:#C4622D;color:#fff;padding:8px 18px;border-radius:6px;font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;transition:background .2s}
.nl-cta:hover{background:#a84e22}

/* HERO */
.hero{position:relative;min-height:100vh;display:flex;align-items:center;padding:120px 32px 80px;overflow:hidden}
.hero-bg{position:absolute;inset:0;background:linear-gradient(160deg,#0f1a0f 0%,#1a2e1a 50%,#0f1a0f 100%)}
.hero-texture{position:absolute;inset:0;opacity:.04;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.hero-accent{position:absolute;top:-200px;right:-100px;width:600px;height:600px;background:radial-gradient(circle,rgba(212,165,53,.08) 0%,transparent 70%);border-radius:50%}
.hero-content{position:relative;max-width:900px;margin:0 auto;width:100%;text-align:center}
.hero-eyebrow{font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#D4A535;margin-bottom:20px}
.hero-title{font-size:clamp(40px,7vw,76px);font-weight:900;line-height:.93;letter-spacing:-2px;color:#fff;margin-bottom:24px}
.hero-title span{display:block;color:#D4A535}
.hero-lead{font-size:17px;color:rgba(255,255,255,.72);line-height:1.7;max-width:620px;margin:0 auto 36px;font-weight:400}
.hero-ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.btn-primary{display:inline-flex;align-items:center;gap:8px;background:#C4622D;color:#fff;padding:14px 28px;border-radius:8px;font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:800;letter-spacing:2px;text-transform:uppercase;text-decoration:none;border:none;cursor:pointer;transition:all .2s}
.btn-primary:hover{background:#a84e22;transform:translateY(-1px)}
.btn-secondary{display:inline-flex;align-items:center;gap:8px;background:transparent;color:rgba(255,255,255,.85);padding:14px 28px;border-radius:8px;font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;border:1.5px solid rgba(255,255,255,.25);cursor:pointer;transition:all .2s}
.btn-secondary:hover{border-color:#D4A535;color:#D4A535}
.hero-scroll{position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;font-size:10px;color:rgba(255,255,255,.3);font-family:'Barlow Condensed',sans-serif;letter-spacing:2px;text-transform:uppercase}
.scroll-line{width:1px;height:40px;background:linear-gradient(to bottom,rgba(212,165,53,.5),transparent)}

/* SECTION COMMON */
.section{padding:96px 32px;max-width:1200px;margin:0 auto}
.section-eyebrow{font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#D4A535;margin-bottom:12px}
.section-title{font-size:clamp(28px,4vw,42px);font-weight:700;color:#fff;margin-bottom:16px;line-height:1.1}
.section-lead{font-size:16px;color:rgba(255,255,255,.6);line-height:1.7;max-width:560px}
.section-lead a{color:#D4A535;text-decoration:none}
.section-lead a:hover{text-decoration:underline}

/* ABOUT */
.about{background:linear-gradient(180deg,#0f1a0f 0%,#152115 100%)}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;margin-top:56px}
.about-text{font-size:16px;color:rgba(255,255,255,.7);line-height:1.8}
.about-text p{margin-bottom:20px}
.about-text strong{color:#fff;font-weight:600}
.about-visual{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.av-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:14px;padding:24px 20px}
.av-icon{font-size:28px;margin-bottom:12px}
.av-title{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:#fff;margin-bottom:6px}
.av-desc{font-size:12px;color:rgba(255,255,255,.55);line-height:1.5}

/* IMPACT */
.impact{background:#152115;position:relative;overflow:hidden}
.impact::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(212,165,53,.05) 0%,transparent 60%)}
.impact-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;margin-top:56px;position:relative}
.impact-card{text-align:center;padding:32px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:16px;transition:all .3s}
.impact-card:hover{background:rgba(212,165,53,.06);border-color:rgba(212,165,53,.2);transform:translateY(-4px)}
.impact-num{font-family:'Playfair Display',serif;font-size:52px;font-weight:900;color:#D4A535;line-height:1;margin-bottom:8px}
.impact-label{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.5)}
.impact-values{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px;padding-top:48px;border-top:1px solid rgba(255,255,255,.07)}
.iv-item{text-align:center}
.iv-icon{font-size:22px;margin-bottom:8px}
.iv-title{font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#D4A535;margin-bottom:6px}
.iv-desc{font-size:13px;color:rgba(255,255,255,.5);line-height:1.5}

/* PROJECTS */
.projects{background:linear-gradient(180deg,#152115 0%,#0f1a0f 100%)}
.projects-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px;flex-wrap:wrap;gap:20px}
.proj-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
.proj-card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:18px;overflow:hidden;transition:all .3s;cursor:pointer}
.proj-card:hover{border-color:rgba(212,165,53,.25);transform:translateY(-3px)}
.proj-img{height:200px;background:linear-gradient(135deg,#1a3a1a,#2a4a2a);display:flex;align-items:center;justify-content:center;font-size:56px;position:relative;overflow:hidden}
.proj-img::after{content:'';position:absolute;inset:0;background:rgba(0,0,0,.2)}
.proj-body{padding:24px}
.proj-title{font-family:'Playfair Display',serif;font-size:19px;font-weight:700;color:#fff;margin-bottom:8px}
.proj-desc{font-size:13px;color:rgba(255,255,255,.55);line-height:1.6;margin-bottom:16px}
.proj-tags{display:flex;gap:6px;flex-wrap:wrap}
.proj-tag{font-family:'Barlow Condensed',sans-serif;font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:3px 8px;border-radius:100px;background:rgba(212,165,53,.12);color:#D4A535;border:1px solid rgba(212,165,53,.2)}

/* MEMBERSHIP */
.membership{background:#0f1a0f;position:relative}
.membership::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(212,165,53,.3),transparent)}
.mems-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;margin-top:56px}
.mems-benefits{list-style:none;display:grid;gap:16px}
.mb-item{display:flex;gap:14px;align-items:flex-start;font-size:14px;color:rgba(255,255,255,.7)}
.mb-icon{width:32px;height:32px;background:rgba(212,165,53,.12);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:14px}
.mems-form{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:32px}
.mems-form-title{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#fff;margin-bottom:20px}
.form-group{margin-bottom:14px}
.form-label{font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.45);margin-bottom:6px;display:block}
.form-input{width:100%;background:rgba(255,255,255,.06);border:1.5px solid rgba(255,255,255,.1);border-radius:8px;padding:11px 14px;font-size:14px;font-family:'Barlow',sans-serif;color:#fff;outline:none;transition:border-color .2s}
.form-input:focus{border-color:#D4A535}
.form-input::placeholder{color:rgba(255,255,255,.25)}
.form-checkboxes{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px}
.form-checkbox{display:flex;align-items:center;gap:6px;cursor:pointer}
.form-checkbox input{accent-color:#D4A535;width:14px;height:14px}
.form-checkbox span{font-size:12px;color:rgba(255,255,255,.6)}
.form-submit{width:100%;background:#C4622D;color:#fff;padding:13px;border-radius:8px;font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:800;letter-spacing:2px;text-transform:uppercase;border:none;cursor:pointer;transition:background .2s}
.form-submit:hover{background:#a84e22}

/* FOOTER */
.footer{background:#0a120a;padding:64px 32px 32px;border-top:1px solid rgba(255,255,255,.06)}
.footer-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;margin-bottom:48px}
.footer-brand{display:flex;align-items:center;gap:10px;margin-bottom:16px}
.footer-tagline{font-size:13px;color:rgba(255,255,255,.45);line-height:1.6;max-width:280px}
.footer-col-title{font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#D4A535;margin-bottom:16px}
.footer-links{list-style:none;display:grid;gap:10px}
.footer-links a{font-size:13px;color:rgba(255,255,255,.5);text-decoration:none;transition:color .2s}
.footer-links a:hover{color:#D4A535}
.footer-bottom{max-width:1200px;margin:0 auto;padding-top:24px;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.footer-copy{font-size:12px;color:rgba(255,255,255,.3)}

/* MOBILE */
@media(max-width:768px){
.nav{padding:12px 20px}
.nav-links{display:none}
.hero{padding:100px 20px 60px}
.hero-ctas{flex-direction:column;align-items:center}
.section{padding:64px 20px}
.about-grid,.mems-grid{grid-template-columns:1fr;gap:40px}
.impact-grid{grid-template-columns:repeat(2,1fr)}
.proj-grid{grid-template-columns:1fr}
.footer-inner{grid-template-columns:1fr 1fr;gap:32px}
}
`;

const impacts = [
  { num: "50,000+", label: "Trees Planted" },
  { num: "15+", label: "Parks Revitalized" },
  { num: "2,000+", label: "Youth Engaged" },
  { num: "200+", label: "Tons Waste Diverted" },
];

const projects = [
  {
    icon: "🏗️",
    title: "Timber Shelter Construction Program",
    desc: "Hands-on construction of timber shelters involving youth capacity building, skills transfer, and community co-design implementation.",
    tags: ["Youth Empowerment", "Infrastructure"],
  },
  {
    icon: "🤝",
    title: "Community Co-Design Initiative",
    desc: "Collaborative design process involving community members in planning and implementing green space transformations.",
    tags: ["Community", "Sustainable Design"],
  },
  {
    icon: "🌱",
    title: "Youth Green Leadership Program",
    desc: "Comprehensive program nurturing young environmental leaders through workshops, mentorship, and practical conservation projects.",
    tags: ["Leadership", "Conservation"],
  },
  {
    icon: "♻️",
    title: "Green Space Rehabilitation",
    desc: "Comprehensive rehabilitation of neglected areas using sustainable practices and waste materials for benches and infrastructure.",
    tags: ["Restoration", "Upcycling"],
  },
];

const benefits = [
  { icon: "📚", text: "Access to exclusive workshops and training programs" },
  { icon: "🗳️", text: "Participation in community decision-making processes" },
  { icon: "🌐", text: "Networking with like-minded individuals and partners" },
  { icon: "📲", text: "Regular updates on project progress and impact" },
  { icon: "🤲", text: "Volunteer opportunities in meaningful projects" },
  { icon: "⚡", text: "Skills development in environmental conservation" },
];

const areas = [
  "Tree Planting",
  "Youth Programs",
  "Construction Projects",
  "Workshops & Training",
  "Community Design",
  "Fundraising",
];

export default function MGSNHomepage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", experience: "" });
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleArea = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{css}</style>
      <div>
        {/* NAV */}
        <nav className="nav">
          <a href="#" className="nav-logo">
            <div className="nl-leaf">🌿</div>
            <div>
              <div className="nl-name">MGSN</div>
              <div className="nl-reg">Mabopane Green Space Network</div>
            </div>
          </a>
          <div className="nav-links">
            <a href="#about" className="nl">About</a>
            <a href="#impact" className="nl">Impact</a>
            <a href="#projects" className="nl">Projects</a>
            <a href="#membership" className="nl">Membership</a>
            <a href="#contact" className="nl-cta">Donate Now</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-texture" />
          <div className="hero-accent" />
          <div className="hero-content">
            <div className="hero-eyebrow">🌿 Mabopane Green Space Network · NPC 2025/422818/08</div>
            <h1 className="hero-title">
              Cultivating Green Futures,<br />
              <span>Empowering Communities</span>
            </h1>
            <p className="hero-lead">
              Transforming Mabopane's Landscapes, One Green Space at a Time.
              Join us in building a sustainable and vibrant future for all.
            </p>
            <div className="hero-ctas">
              <a href="#impact" className="btn-primary">See Our Impact</a>
              <a href="#membership" className="btn-secondary">Join Us Today</a>
            </div>
          </div>
          <div className="hero-scroll">
            <div className="scroll-line" />
            <span>Scroll</span>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-eyebrow">About Mabopane Green Space Network</div>
          <h2 className="section-title">Pioneering sustainable community development through environmental stewardship</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                <strong>We are a pioneering force</strong> dedicated to revitalizing our urban environment and empowering our community. We believe that thriving green spaces are the bedrock of healthy, prosperous communities.
              </p>
              <p>
                Through innovative projects and collaborative initiatives, MGSN is transforming neglected areas into vibrant hubs of biodiversity, recreation, and social connection.
              </p>
              <p>
                <strong>Our vision:</strong> To create a sustainable and resilient Mabopane where every community member has access to quality green spaces that promote environmental health, social cohesion, and economic prosperity.
              </p>
              <p>
                Our work goes beyond planting trees — we cultivate a deeper connection between people and nature, fostering a sense of ownership and collective responsibility for our shared environment.
              </p>
            </div>
            <div className="about-visual">
              <div className="av-card">
                <div className="av-icon">🌍</div>
                <div className="av-title">Environmental</div>
                <div className="av-desc">Biodiversity conservation, carbon sequestration, and ecosystem restoration</div>
              </div>
              <div className="av-card">
                <div className="av-icon">👥</div>
                <div className="av-title">Social</div>
                <div className="av-desc">Community cohesion, recreational spaces, and improved quality of life</div>
              </div>
              <div className="av-card">
                <div className="av-icon">💰</div>
                <div className="av-title">Economic</div>
                <div className="av-desc">Job creation, skills development, and sustainable economic opportunities</div>
              </div>
              <div className="av-card">
                <div className="av-icon">🏛️</div>
                <div className="av-title">Governance</div>
                <div className="av-desc">Community-led decisions, transparent operations, and accountable stewardship</div>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section id="impact" className="section impact">
          <div style={{ textAlign: "center" }}>
            <div className="section-eyebrow">Our Collective Impact</div>
            <h2 className="section-title">At MGSN, our commitment to positive change is reflected in tangible results</h2>
          </div>
          <div className="impact-grid">
            {impacts.map((item) => (
              <div key={item.label} className="impact-card">
                <div className="impact-num">{item.num}</div>
                <div className="impact-label">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="impact-values">
            <div className="iv-item">
              <div className="iv-icon">🌍</div>
              <div className="iv-title">Environmental Value</div>
              <div className="iv-desc">Biodiversity conservation, carbon sequestration, and ecosystem restoration</div>
            </div>
            <div className="iv-item">
              <div className="iv-icon">👥</div>
              <div className="iv-title">Social Value</div>
              <div className="iv-desc">Community cohesion, recreational spaces, and improved quality of life</div>
            </div>
            <div className="iv-item">
              <div className="iv-icon">💰</div>
              <div className="iv-title">Economic Value</div>
              <div className="iv-desc">Job creation, skills development, and sustainable economic opportunities</div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects">
          <div className="projects-header">
            <div>
              <div className="section-eyebrow">Our Flagship Projects</div>
              <h2 className="section-title">Explore our initiatives that exemplify MGSN's dedication to creating lasting change</h2>
            </div>
          </div>
          <div className="proj-grid">
            {projects.map((p) => (
              <div key={p.title} className="proj-card">
                <div className="proj-img">{p.icon}</div>
                <div className="proj-body">
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-desc">{p.desc}</p>
                  <div className="proj-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="proj-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MEMBERSHIP */}
        <section id="membership" className="section membership">
          <div className="section-eyebrow">Join Our Community</div>
          <h2 className="section-title">Become part of the movement transforming Mabopane's green spaces</h2>
          <div className="mems-grid">
            <div>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#D4A535", marginBottom: 20 }}>Membership Benefits</h3>
              <ul className="mems-benefits">
                {benefits.map((b) => (
                  <li key={b.text} className="mb-item">
                    <div className="mb-icon">{b.icon}</div>
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mems-form">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Welcome to MGSN!</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,.6)" }}>We'll be in touch soon. Kea leboga! 🙏🏾</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="mems-form-title">Sign Up Today</h3>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+27 XX XXX XXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Areas of Interest</label>
                    <div className="form-checkboxes">
                      {areas.map((area) => (
                        <label key={area} className="form-checkbox">
                          <input
                            type="checkbox"
                            checked={selectedAreas.includes(area)}
                            onChange={() => toggleArea(area)}
                          />
                          <span>{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Previous Experience</label>
                    <textarea
                      className="form-input"
                      rows={3}
                      placeholder="Tell us about your relevant experience..."
                      value={form.experience}
                      onChange={(e) => setForm({ ...form, experience: e.target.value })}
                      style={{ resize: "vertical" }}
                    />
                  </div>
                  <button type="submit" className="form-submit">Join MGSN</button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="footer">
          <div className="footer-inner">
            <div>
              <div className="footer-brand">
                <div className="nl-leaf">🌿</div>
                <div>
                  <div className="nl-name">MGSN</div>
                  <div className="nl-reg">Mabopane Green Space Network</div>
                </div>
              </div>
              <p className="footer-tagline">
                Cultivating green futures and empowering communities through sustainable environmental initiatives.
              </p>
            </div>
            <div>
              <div className="footer-col-title">Quick Links</div>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#projects">Our Projects</a></li>
                <li><a href="#impact">Our Impact</a></li>
                <li><a href="#membership">Join Us</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Get Involved</div>
              <ul className="footer-links">
                <li><a href="#membership">Become a Member</a></li>
                <li><a href="#contact">Volunteer</a></li>
                <li><a href="#contact">Donate</a></li>
                <li><a href="#contact">Partner With Us</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Contact Info</div>
              <ul className="footer-links">
                <li><a href="#">Mabopane, City of Tshwane</a></li>
                <li><a href="mailto:info@mgsn.org.za">info@mgsn.org.za</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">© 2025 Mabopane Green Space Network. All rights reserved. · NPC Reg. 2025/422818/08</span>
            <span className="footer-copy">Mabopane, City of Tshwane, South Africa</span>
          </div>
        </footer>
      </div>
    </>
  );
}