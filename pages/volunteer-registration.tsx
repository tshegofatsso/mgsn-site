import { useState } from "react";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --teal:#1B7A7A;--teal-dk:#0D5050;--teal-lt:#E8F5F5;
  --orange:#F07A1A;--gold:#EDB810;--green:#2D8B3A;
  --ink:#1A3D4A;--cream:#F5F0E8;--white:#fff;
  --border:#D8E8E8;--err:#C0392B;
}
html{background:linear-gradient(150deg,#0A3A3A 0%,#0D4A3A 100%);min-height:100vh;display:flex;flex-direction:column;align-items:center;padding:32px 16px 60px;font-family:'Barlow',sans-serif}
body{width:100%;max-width:520px}

/* HEADER CARD */
.hdr{background:var(--teal-dk);border-radius:18px 18px 0 0;padding:28px 28px 24px;text-align:center;position:relative;overflow:hidden}
.hdr::before{content:'';position:absolute;top:-40px;right:-40px;width:180px;height:180px;background:rgba(255,255,255,.04);border-radius:50%}
.hdr::after{content:'';position:absolute;bottom:-60px;left:-40px;width:200px;height:200px;background:rgba(255,255,255,.03);border-radius:50%}
.logo-wrap{width:100px;margin:0 auto 16px;background:#fff;border-radius:10px;padding:8px;box-shadow:0 4px 16px rgba(0,0,0,.2);position:relative;z-index:1;display:flex;align-items:center;justify-content:center}
.logo-wrap img,.logo-wrap svg{width:84px;height:84px;display:block}
.hdr-title{font-family:'Playfair Display',serif;font-size:28px;font-weight:900;color:#fff;line-height:1;margin-bottom:6px;position:relative;z-index:1}
.hdr-title span{color:var(--gold)}
.hdr-sub{font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:14px;position:relative;z-index:1}
.stripe{height:4px;background:linear-gradient(90deg,var(--orange),var(--gold),var(--green));border-radius:2px;margin:0 auto;width:80%;position:relative;z-index:1}

/* NAV */
.nav{background:var(--teal-dk);padding:12px 20px;display:flex;gap:8px;overflow-x:auto;flex-wrap:nowrap}
.nav a{font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.5);text-decoration:none;padding:6px 14px;border-radius:100px;border:1px solid rgba(255,255,255,.1);white-space:nowrap;transition:all .2s}
.nav a:hover,.nav a.active{color:#fff;background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.25)}
.nav a.primary{background:var(--orange);border-color:var(--orange);color:#fff}

/* FORM CARD */
.form-card{background:#fff;border-radius:0 0 18px 18px;padding:28px;box-shadow:0 8px 40px rgba(0,0,0,.2)}

/* SECTION LABELS */
.sec-title{font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:var(--teal);margin:22px 0 12px;display:flex;align-items:center;gap:8px}
.sec-title::after{content:'';flex:1;height:1.5px;background:var(--border)}
.sec-title:first-of-type{margin-top:0}

/* FIELDS */
.field{margin-bottom:16px}
.field label{display:block;font-size:12px;font-weight:600;color:var(--ink);margin-bottom:5px;letter-spacing:.3px}
.field label span{color:var(--orange);margin-left:2px}
.field input,.field select,.field textarea{
  width:100%;padding:11px 14px;
  border:1.5px solid var(--border);
  border-radius:9px;font-size:14px;
  font-family:'Barlow',sans-serif;
  color:var(--ink);background:#fff;
  transition:border-color .2s,box-shadow .2s;outline:none;
}
.field input:focus,.field select:focus,.field textarea:focus{
  border-color:var(--teal);
  box-shadow:0 0 0 3px rgba(27,122,122,.1);
}
.field textarea{resize:vertical;min-height:80px}
.field select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%231A3D4A' stroke-width='1.8' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:36px}
.row{display:grid;grid-template-columns:1fr 1fr;gap:12px}

/* ROLES CHECKBOXES */
.roles-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.role-chip{position:relative}
.role-chip input{position:absolute;opacity:0;width:0;height:0}
.role-chip label{
  display:flex;align-items:center;gap:8px;
  padding:9px 12px;border-radius:8px;
  border:1.5px solid var(--border);cursor:pointer;
  font-size:12px;font-weight:600;color:#555;
  transition:all .18s;
}
.role-chip label .rc-icon{font-size:16px;flex-shrink:0}
.role-chip input:checked + label{
  border-color:var(--teal);background:var(--teal-lt);color:var(--teal-dk);
}

/* SESSIONS CHECKBOXES */
.sessions-list{display:grid;gap:7px}
.sess-chip{position:relative}
.sess-chip input{position:absolute;opacity:0;width:0;height:0}
.sess-chip label{
  display:flex;align-items:center;gap:10px;
  padding:10px 14px;border-radius:8px;
  border:1.5px solid var(--border);cursor:pointer;
  font-size:13px;color:#444;transition:all .18s;
}
.sess-chip input:checked + label{border-color:var(--orange);background:#FEF5EC;color:var(--ink)}
.sess-day{font-weight:700;color:var(--teal-dk);min-width:32px}

/* CONSENT */
.consent{background:var(--teal-lt);border-radius:10px;padding:14px;margin-bottom:20px;display:flex;gap:12px;align-items:flex-start}
.consent input{margin-top:2px;accent-color:var(--teal);flex-shrink:0;width:16px;height:16px}
.consent p{font-size:12px;color:#555;line-height:1.6}
.consent strong{color:var(--ink)}

/* SUBMIT */
.submit-btn{
  width:100%;padding:16px;border:none;border-radius:11px;
  background:linear-gradient(130deg,var(--teal-dk),var(--teal));
  color:#fff;font-family:'Barlow Condensed',sans-serif;
  font-size:16px;font-weight:800;letter-spacing:2px;
  text-transform:uppercase;cursor:pointer;
  box-shadow:0 4px 18px rgba(27,122,122,.3);
  transition:all .2s;
}
.submit-btn:hover{transform:translateY(-1px);box-shadow:0 6px 22px rgba(27,122,122,.38)}
.submit-btn:active{transform:scale(.98)}

/* SUCCESS STATE */
.success{display:none;text-align:center;padding:32px 20px}
.success.show{display:block}
.form-inner.hide{display:none}
.success-icon{font-size:56px;margin-bottom:16px}
.success h2{font-family:'Playfair Display',serif;font-size:26px;color:var(--teal-dk);margin-bottom:8px}
.success p{font-size:14px;color:#666;line-height:1.6}
.success .setswana{margin-top:12px;font-size:13px;color:var(--teal);font-weight:600}

/* FOOTER */
.form-footer{text-align:center;margin-top:20px;font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.5px}
`;

const LogoSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="84" height="84">
    <rect width="58" height="58" fill="#1B7A7A" rx="8"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="bold" fontSize="18">MGSN</text>
  </svg>
);

const roles = ["Session Lead", "Grass Cutter", "Beds Keeper", "Compost", "Shelter Steward", "Structural"];
const sessions = [
  { id: "s1", day: "27 Apr", label: "Freedom Day Launch — Trial Run · 08:00–11:00" },
  { id: "s2", day: "09 May", label: "Session 2 — May Clean-Up · 08:00–11:00" },
  { id: "s3", day: "23 May", label: "Session 3 — May Clean-Up · 08:00–11:00" },
  { id: "s4", day: "06 Jun", label: "Session 4 — June Clean-Up · 08:00–11:00" },
  { id: "s5", day: "20 Jun", label: "Session 5 — June Clean-Up · 08:00–11:00" },
];

export default function VolunteerRegistration() {
  const [form, setForm] = useState({ fname: "", lname: "", phone: "", block: "", age: "", skills: "", source: "" });
  const [selectedSessions, setSelectedSessions] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [allSessions, setAllSessions] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleSession = (id: string) => {
    if (allSessions) return;
    setSelectedSessions(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };

  const toggleRole = (role: string) => {
    setSelectedRoles(prev => prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fname || !form.lname || !form.phone || !form.block || !form.age) return;
    if (selectedSessions.length === 0) return;
    if (!consent) return;
    setSubmitted(true);
  };

  return (
    <>
      <style>{css}</style>
      <div style={{ width: "100%", maxWidth: 520, margin: "0 auto" }}>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/volunteer" className="active">Volunteer</a>
          <a href="/campaign">Campaign</a>
          <a href="/governance">Governance</a>
          <a href="/meeting">Meeting</a>
        </nav>

        <div className="hdr" style={{ borderRadius: "18px 18px 0 0" }}>
          <div className="logo-wrap"><LogoSVG /></div>
          <h1 className="hdr-title">Join the <span>Green Team</span></h1>
          <p className="hdr-sub">Community-Owned, Community-Led · NPC Reg. 2025/422818/08</p>
          <div className="stripe" />
        </div>

        <div className="form-card">
          {submitted ? (
            <div className="success show">
              <div className="success-icon">🌳</div>
              <h2>You're In!</h2>
              <p>Thank you for registering with the Mabopane Green Space Network. Your details have been securely recorded. Our Session Lead will add you to the <strong>Clean-Up Team-Up WhatsApp group</strong> shortly.</p>
              <p style={{ marginTop: 10, fontSize: 13, color: "#888" }}>First session: <strong>Monday 27 April 2026 · 08:00</strong><br />Block M · By the Waterfall · Mabopane</p>
              <p className="setswana">Kea leboga 🙏🏾 — MGSN</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-inner">
                <div className="sec-title">Personal Details</div>
                <div className="row">
                  <div className="field">
                    <label>First Name <span>*</span></label>
                    <input type="text" placeholder="e.g. Refilwe" value={form.fname} onChange={e => setForm({ ...form, fname: e.target.value })} required />
                  </div>
                  <div className="field">
                    <label>Surname <span>*</span></label>
                    <input type="text" placeholder="e.g. Sithole" value={form.lname} onChange={e => setForm({ ...form, lname: e.target.value })} required />
                  </div>
                </div>
                <div className="field">
                  <label>WhatsApp Number <span>*</span></label>
                  <input type="tel" placeholder="+27 XX XXX XXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                </div>
                <div className="row">
                  <div className="field">
                    <label>Ward / Block <span>*</span></label>
                    <select value={form.block} onChange={e => setForm({ ...form, block: e.target.value })} required>
                      <option value="">Select block</option>
                      <option value="Ward20">Ward 20 (Block M)</option>
                      <option>Block A</option><option>Block B</option><option>Block C</option>
                      <option>Block D</option><option>Block E</option><option>Block F</option>
                      <option>Block G</option><option>Block H</option><option>Block J</option>
                      <option>Block N</option><option>Block P</option><option>Other</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Age Group <span>*</span></label>
                    <select value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} required>
                      <option value="">Select</option>
                      <option>Under 18</option><option>18–25</option>
                      <option>26–35</option><option>36–50</option><option>50+</option>
                    </select>
                  </div>
                </div>

                <div className="sec-title">Availability & Sessions</div>
                <div className="field">
                  <label>Select sessions you can attend <span>*</span></label>
                  <div className="sessions-list">
                    {sessions.map(s => (
                      <div key={s.id} className="sess-chip">
                        <input type="checkbox" id={s.id} checked={allSessions || selectedSessions.includes(s.id)} onChange={() => allSessions ? null : toggleSession(s.id)} />
                        <label htmlFor={s.id}><span className="sess-day">{s.day}</span>{s.label}</label>
                      </div>
                    ))}
                    <div className="sess-chip">
                      <input type="checkbox" id="sall" checked={allSessions} onChange={() => { setAllSessions(!allSessions); if (!allSessions) setSelectedSessions(sessions.map(s => s.id)); }} />
                      <label htmlFor="sall"><span className="sess-day">ALL</span>I'm available for all sessions</label>
                    </div>
                  </div>
                </div>

                <div className="sec-title">Your Role Preferences</div>
                <div className="field">
                  <label>Select roles you'd like to take on</label>
                  <div className="roles-grid">
                    {roles.map(r => (
                      <div key={r} className="role-chip">
                        <input type="checkbox" id={"r-" + r} checked={selectedRoles.includes(r)} onChange={() => toggleRole(r)} />
                        <label htmlFor={"r-" + r}><span className="rc-icon">{r === "Session Lead" ? "📋" : r === "Grass Cutter" ? "🌿" : r === "Beds Keeper" ? "🌸" : r === "Compost" ? "♻️" : r === "Shelter Steward" ? "🪵" : "🔩"}</span>{r}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sec-title">Additional Info</div>
                <div className="field">
                  <label>Do you have any skills, tools or equipment you can bring?</label>
                  <textarea placeholder="e.g. I own a lawnmower / I can weld / I have a bakkie..." value={form.skills} onChange={e => setForm({ ...form, skills: e.target.value })} />
                </div>
                <div className="field">
                  <label>How did you hear about MGSN?</label>
                  <select value={form.source} onChange={e => setForm({ ...form, source: e.target.value })}>
                    <option value="">Select</option>
                    <option>WhatsApp Group</option><option>Neighbour / Word of mouth</option>
                    <option>Poster / Flyer</option><option>Social Media</option>
                    <option>Community Meeting</option><option>Other</option>
                  </select>
                </div>

                <div className="consent">
                  <input type="checkbox" id="consent" checked={consent} onChange={e => setConsent(e.target.checked)} />
                  <p><strong>POPIA Consent:</strong> I agree to my details being securely stored by MGSN for volunteer coordination and community development purposes. My information will never be shared with third parties.</p>
                </div>

                <button type="submit" className="submit-btn">🌿 Join the Green Team</button>
              </div>
            </form>
          )}
        </div>

        <p className="form-footer">MGSN · NPC Reg. 2025/422818/08 · Mabopane, City of Tshwane</p>
      </div>
    </>
  );
}