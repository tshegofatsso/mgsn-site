import { useState } from "react";

const WEIGHTS = { community: 0.40, financial: 0.30, governance: 0.30 };
const MATCH_MULTIPLIER = 0.35;

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap');

*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Barlow',sans-serif;background:#0D4A3A;color:#E0E0E0;padding:30px 16px;min-height:100vh}
.app{max-width:700px;width:100%;margin:0 auto}

.nav{background:rgba(255,255,255,.05);border-radius:12px;padding:12px 16px;margin-bottom:28px;display:flex;gap:8px;flex-wrap:wrap}
.nav a{font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.5);text-decoration:none;padding:6px 14px;border-radius:100px;border:1px solid rgba(255,255,255,.1);transition:all .2s}
.nav a:hover,.nav a.active{color:#fff;background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.25)}
.nav a.primary{background:#F07A1A;border-color:#F07A1A;color:#fff}

h1{font-family:'Playfair Display',serif;color:#EDB810;margin:0 0 8px;font-size:28px}
h2{font-family:'Barlow Condensed',sans-serif;letter-spacing:2px;color:#F07A1A;margin:28px 0 14px;font-size:14px}

.card{background:#1A3D4A;border-radius:18px;padding:24px;margin-bottom:20px;box-shadow:0 8px 32px rgba(0,0,0,.3)}

.checkbox-group{display:flex;flex-direction:column;gap:10px}
.checkbox-item{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.05);padding:10px 14px;border-radius:8px;font-size:13px;color:rgba(255,255,255,.8);cursor:pointer;transition:background .2s}
.checkbox-item:hover{background:rgba(255,255,255,.08)}
.checkbox-item input{accent-color:#EDB810;width:18px;height:18px;flex-shrink:0}

.score-row{display:flex;flex-direction:column;gap:16px;margin:16px 0}
.slider-group{display:flex;flex-direction:column;gap:6px}
.slider-label{display:flex;justify-content:space-between;font-size:13px;color:rgba(255,255,255,.7)}
.slider-label strong{color:#fff}
.slider-label span{color:#EDB810;font-family:'Barlow Condensed',sans-serif;font-weight:800}
input[type="range"]{width:100%;accent-color:#EDB810;height:6px;border-radius:3px}

.outlay-row{display:flex;align-items:center;gap:16px;margin:20px 0;flex-wrap:wrap}
.outlay-row label{font-size:13px;color:rgba(255,255,255,.7)}
.outlay-row input{width:70px;padding:8px 12px;border-radius:8px;border:none;text-align:center;font-size:16px;font-weight:700;background:#0D4A3A;color:#EDB810}

.bar-container{background:rgba(255,255,255,.1);border-radius:10px;height:28px;margin:12px 0;overflow:hidden;position:relative}
.bar-fill{height:100%;transition:width .4s,background .3s;border-radius:10px}
.bar-fill.safe{background:#2D8B3A}
.bar-fill.warning{background:#F07A1A}
.bar-fill.danger{background:#C0392B}
.bar-label{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;color:#fff;letter-spacing:1px}

.score-summary{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:16px 0}
.score-box{background:rgba(255,255,255,.05);border-radius:10px;padding:14px;text-align:center}
.score-box .val{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:#EDB810}
.score-box .lbl{font-size:10px;color:rgba(255,255,255,.5);letter-spacing:1.5px;text-transform:uppercase;margin-top:4px}

.risk-alert{background:#C0392B;color:#fff;padding:14px 18px;border-radius:10px;font-weight:700;margin:18px 0;display:flex;align-items:center;gap:10px;font-size:14px}
.risk-alert.ok{background:#2D8B3A}

.export-btn{background:linear-gradient(130deg,#EDB810,#C49A0C);color:#0D4A3A;border:none;border-radius:12px;padding:16px 28px;font-size:15px;font-weight:800;letter-spacing:2px;cursor:pointer;margin:28px 0 16px;width:100%;font-family:'Barlow Condensed',sans-serif;transition:all .2s}
.export-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(237,184,16,.3)}

.json-output{background:#111;color:#9ECB9E;padding:18px;border-radius:10px;font-size:12px;white-space:pre-wrap;max-height:350px;overflow-y:auto;margin-top:16px;font-family:monospace}

.footer-note{text-align:center;font-size:11px;color:rgba(255,255,255,.3);margin-top:24px;line-height:1.6}
.footer-note strong{color:rgba(255,255,255,.5)}
`;

const checklistItems = [
  "Declare All Interests (Family/Business)",
  "Verify CIPC & NPO Status Online",
  "Scrutinise Bank Accounts",
  "Check Cash Runway & Donor Concessions",
  "Audit Governance Paper Trail",
  "Duty of Care Review (Decision Rationale)",
  "Validate Project Agreements",
  "Update Risk Register",
  "Enforce Role Separation in Communications",
  "Professional Knowledge Update (IoDSA)",
];

export default function GovernanceDashboard() {
  const [checklist, setChecklist] = useState<Record<string, boolean>>(
    Object.fromEntries(checklistItems.map((_, i) => [`c${i + 1}`, false]))
  );
  const [communityScore, setCommunityScore] = useState(50);
  const [financialScore, setFinancialScore] = useState(40);
  const [governanceScore, setGovernanceScore] = useState(30);
  const [outlayPerc, setOutlayPerc] = useState(25);
  const [jsonOutput, setJsonOutput] = useState("");

  const checkedCount = Object.values(checklist).filter(Boolean).length;
  const complianceScore = checkedCount * 10;

  const totalVitality = (
    communityScore * WEIGHTS.community +
    financialScore * WEIGHTS.financial +
    governanceScore * WEIGHTS.governance
  ).toFixed(1);

  const matchMultiplierViolation = outlayPerc > MATCH_MULTIPLIER * 100;

  const getBarClass = () => {
    if (Number(totalVitality) < 40) return "danger";
    if (Number(totalVitality) < 70) return "warning";
    return "safe";
  };

  const getRiskLevel = () => {
    if (matchMultiplierViolation) return "HIGH";
    if (complianceScore > 70) return "LOW";
    return "MODERATE";
  };

  const handleExport = () => {
    const data = {
      exportDate: new Date().toISOString(),
      entity: "Mabopane Green Space Network NPC",
      regNumber: "2025/422818/08",
      officerRole: "Director / PSC Secretary",
      quarter: "Q2-2026",
      matchMultiplierScenario: "A",
      maxFounderOutlayAllowed: `${MATCH_MULTIPLIER * 100}%`,
      currentFounderOutlay: `${outlayPerc}%`,
      outlayViolation: matchMultiplierViolation,
      complianceChecklist: {
        ...Object.fromEntries(checklistItems.map((label, i) => [`item${i + 1}: ${label}`, checklist[`c${i + 1}`]])),
        totalScoreOutOf100: complianceScore,
      },
      vitalityIndex: {
        communityImpact: communityScore,
        financialSustainability: financialScore,
        governanceHealth: governanceScore,
        totalVitalityScore: parseFloat(totalVitality),
        riskLevel: getRiskLevel(),
      },
      personalLiabilityExposure: complianceScore < 50 ? "CRITICAL – Directors face joint/several liability under S77" : "CONTROLLED",
      notes: "Audit log for funders and board review. All scores derived from live dashboard input.",
    };
    setJsonOutput(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <style>{css}</style>
      <div className="app">
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/volunteer">Volunteer</a>
          <a href="/campaign" className="active">Campaign</a>
          <a href="/governance" className="primary">Governance</a>
          <a href="/meeting">Meeting</a>
        </nav>

        <h1>🌿 MGSN Governance Simulator</h1>
        <p style={{ marginTop: 0, marginBottom: 24, color: "rgba(255,255,255,.6)", fontSize: 14 }}>Dual-Role Officer Quarterly Dashboard</p>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>1. Quarterly Compliance Checklist</h2>
          <div className="checkbox-group">
            {checklistItems.map((label, i) => {
              const key = `c${i + 1}`;
              return (
                <label key={key} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={checklist[key]}
                    onChange={e => setChecklist({ ...checklist, [key]: e.target.checked })}
                  />
                  {label}
                </label>
              );
            })}
          </div>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>2. Vitality Index Scoring (Weighted 40/30/30)</h2>
          <div className="score-row">
            <div className="slider-group">
              <div className="slider-label">
                <span>Community Impact</span>
                <strong>{communityScore}%</strong>
              </div>
              <input type="range" min="0" max="100" value={communityScore} onChange={e => setCommunityScore(Number(e.target.value))} />
            </div>
            <div className="slider-group">
              <div className="slider-label">
                <span>Financial Sustainability</span>
                <strong>{financialScore}%</strong>
              </div>
              <input type="range" min="0" max="100" value={financialScore} onChange={e => setFinancialScore(Number(e.target.value))} />
            </div>
            <div className="slider-group">
              <div className="slider-label">
                <span>Governance Health</span>
                <strong>{governanceScore}%</strong>
              </div>
              <input type="range" min="0" max="100" value={governanceScore} onChange={e => setGovernanceScore(Number(e.target.value))} />
            </div>
          </div>

          <div className="score-summary">
            <div className="score-box"><div className="val">{complianceScore}%</div><div className="lbl">Compliance</div></div>
            <div className="score-box"><div className="val">{totalVitality}%</div><div className="lbl">Vitality</div></div>
            <div className="score-box"><div className="val">{checkedCount}/10</div><div className="lbl">Items</div></div>
          </div>

          <div className="bar-container">
            <div className={`bar-fill ${getBarClass()}`} style={{ width: `${totalVitality}%` }}>
              <div className="bar-label">Vitality Score: {totalVitality}%</div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>3. Match Multiplier (Scenario A — Max 35% Outlay)</h2>
          <div className="outlay-row">
            <label>Current Founder/Org Outlay:</label>
            <input
              type="number"
              min="0"
              max="100"
              value={outlayPerc}
              onChange={e => setOutlayPerc(Number(e.target.value))}
            />
            <span style={{ color: "#EDB810", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}>%</span>
          </div>
          {matchMultiplierViolation && (
            <div className="risk-alert">
              🚨 VIOLATION: Outlay exceeds the 35% Scenario A ceiling. Danish grant alignment is at risk!
            </div>
          )}
          {getRiskLevel() !== "HIGH" && (
            <div className="risk-alert ok">✅ Risk Level: {getRiskLevel()} — Governance parameters within acceptable limits.</div>
          )}
        </div>

        <button className="export-btn" onClick={handleExport}>📤 Export Governance Audit Log (JSON)</button>

        {jsonOutput && <pre className="json-output">{jsonOutput}</pre>}

        <p className="footer-note">
          <strong>Legal Disclaimer:</strong> This tool provides a visual index of governance health.<br />
          It does not replace formal legal advice. · MGSN NPC · info@mgsn.org.za
        </p>
      </div>
    </>
  );
}