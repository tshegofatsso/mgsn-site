import { useState } from "react";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap');

*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Barlow',sans-serif;background:#eef5f0;color:#1A3D4A;padding:20px 16px;min-height:100vh}
.app{max-width:420px;width:100%;margin:0 auto}

.nav{background:#1f4d4d;border-radius:12px;padding:12px 16px;margin-bottom:20px;display:flex;gap:8px;flex-wrap:wrap}
.nav a{font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.5);text-decoration:none;padding:6px 14px;border-radius:100px;border:1px solid rgba(255,255,255,.1);transition:all .2s}
.nav a:hover,.nav a.active{color:#fff;background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.25)}

.card{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,.1);margin-bottom:20px}
.card-header{background:#1f4d4d;color:#fff;padding:20px;text-align:center}
.card-header img{width:80px;margin-bottom:8px}
.card-header h3{font-family:'Playfair Display',serif;margin:0;font-size:18px}

.section{padding:16px}
h4{font-family:'Barlow Condensed',sans-serif;letter-spacing:1px;text-transform:uppercase;color:#1f4d4d;margin:0 0 12px;font-size:12px}

.agenda-item{background:#f9f9f9;border-radius:10px;padding:12px 14px;margin-bottom:8px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.agenda-item .num{font-family:'Barlow Condensed',sans-serif;font-weight:800;color:#1f4d4d;font-size:14px;min-width:20px}
.agenda-item .label{flex:1;font-size:13px;color:#333;font-weight:500}
.agenda-item .tag{display:inline-block;padding:3px 10px;border-radius:12px;font-size:11px;font-weight:700;margin-left:auto}
.tag.done{background:#c8e6c9;color:#155724}
.tag.pending{background:#ffcdd2;color:#721c24}

.btn{width:100%;padding:12px;margin-top:8px;border:none;border-radius:25px;background:#ff7f2a;color:#fff;font-weight:bold;font-size:14px;cursor:pointer;font-family:'Barlow Condensed',sans-serif;letter-spacing:1px;transition:all .2s}
.btn:hover{background:#e56a1a;transform:translateY(-1px)}

input,select{width:100%;padding:10px;margin-top:8px;border-radius:10px;border:1px solid #ccc;font-size:14px;font-family:'Barlow',sans-serif;box-sizing:border-box}
input:focus,select:focus{outline:none;border-color:#1f4d4d}

.dashboard{background:#f0f7f0;border-radius:12px;padding:14px;margin-top:16px}
.dashboard h4{color:#2d8b3a}

.prog-bar{background:#ddd;border-radius:10px;height:14px;margin-top:10px;overflow:hidden}
.prog-fill{height:100%;background:#2d8b3a;border-radius:10px;transition:width .4s;display:flex;align-items:center;justify-content:flex-end;padding-right:8px;font-size:10px;color:#fff;font-weight:700}

.live-indicator{display:flex;align-items:center;gap:6px;margin-bottom:12px}
.live-dot{width:8px;height:8px;background:#2d8b3a;border-radius:50%;animation:pulse 1.5s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}

.qr-section{text-align:center;padding:20px;background:#fff;border-radius:12px;margin-top:16px}
.qr-section img{width:120px;height:120px;border-radius:8px;margin-bottom:8px}
.qr-section p{font-size:11px;color:#666;margin:4px 0}
`;

const agendaItems = [
  "CIPC & SARS compliance",
  "Board updates & resignations",
  "Review of Membership",
  "UP relationship & way forward",
  "Strategic direction – next 90 days",
  "River Custodianship update",
];

const LogoSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
    <rect width="80" height="80" fill="#1f4d4d" rx="12"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="bold" fontSize="22">MGSN</text>
  </svg>
);

export default function MeetingDashboard() {
  const [decisions, setDecisions] = useState<Record<number, boolean>>({});
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("Yes");
  const [sessionTitle, setSessionTitle] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [showSessionForm, setShowSessionForm] = useState(false);

  const doneCount = Object.keys(decisions).length;
  const total = agendaItems.length;
  const progress = Math.round((doneCount / total) * 100);

  const markDone = (i: number) => setDecisions(p => ({ ...p, [i]: true }));

  const sendRSVP = () => {
    const msg = `MGSN RSVP:\nName: ${name}\nStatus: ${attendance}`;
    window.open(`https://wa.me/27766998595?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const createSession = () => {
    if (!sessionTitle || !sessionDate) return;
    alert(`New Session Created:\n${sessionTitle} - ${sessionDate}`);
    setSessionTitle("");
    setSessionDate("");
    setShowSessionForm(false);
  };

  return (
    <>
      <style>{css}</style>
      <div className="app">
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/volunteer">Volunteer</a>
          <a href="/campaign">Campaign</a>
          <a href="/governance">Governance</a>
          <a href="/meeting" className="active">Meeting</a>
        </nav>

        <div className="card">
          <div className="card-header">
            <LogoSVG />
            <h3>MGSN Decision Session System</h3>
          </div>

          <div className="section">
            <h4>📋 RSVP Form</h4>
            <input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
            <select value={attendance} onChange={e => setAttendance(e.target.value)}>
              <option value="Yes">Attending</option>
              <option value="No">Not Attending</option>
              <option value="Virtual">Joining via WhatsApp</option>
            </select>
            <button className="btn" onClick={sendRSVP}>Confirm via WhatsApp</button>
          </div>

          <div className="section">
            <h4>📝 Agenda Decision Tracker</h4>
            {agendaItems.map((item, i) => (
              <div key={i} className="agenda-item">
                <span className="num">{i + 1}.</span>
                <span className="label">{item}</span>
                {decisions[i] ? (
                  <span className="tag done">Resolved ✓</span>
                ) : (
                  <button className="btn" style={{ width: "auto", padding: "6px 14px", fontSize: "12px", margin: 0 }} onClick={() => markDone(i)}>Mark Done</button>
                )}
              </div>
            ))}
          </div>

          <div className="section">
            <button className="btn" onClick={() => setShowSessionForm(!showSessionForm)}>
              {showSessionForm ? "Cancel" : "+ Create New Session"}
            </button>
            {showSessionForm && (
              <div style={{ marginTop: 12 }}>
                <input placeholder="Session Title" value={sessionTitle} onChange={e => setSessionTitle(e.target.value)} />
                <input type="date" value={sessionDate} onChange={e => setSessionDate(e.target.value)} />
                <button className="btn" onClick={createSession}>Create Session</button>
              </div>
            )}
          </div>

          <div className="section">
            <div className="dashboard">
              <div className="live-indicator">
                <div className="live-dot" />
                <h4 style={{ margin: 0 }}>Live Dashboard</h4>
              </div>
              <div style={{ fontSize: 13, color: "#555", marginBottom: 8 }}>
                <strong>{doneCount}/{total}</strong> items resolved · <strong>{progress}%</strong> complete
              </div>
              <div className="prog-bar">
                <div className="prog-fill" style={{ width: `${progress}%` }}>{progress}%</div>
              </div>
              <div style={{ marginTop: 12, fontSize: 13, color: "#555" }}>
                {agendaItems.filter((_, i) => !decisions[i]).length === 0
                  ? <span style={{ color: "#2d8b3a", fontWeight: 700 }}>🎉 All items resolved!</span>
                  : <span>Pending: {agendaItems.filter((_, i) => !decisions[i]).join(", ")}</span>
                }
              </div>
            </div>
          </div>

          <div className="section">
            <div className="qr-section">
              <img src="/assets/whatsapp-qr.png" alt="WhatsApp QR" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <p><strong>WhatsApp Group</strong></p>
              <p style={{ fontSize: 10, color: "#999" }}>Scan to join the MGSN volunteer group</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}