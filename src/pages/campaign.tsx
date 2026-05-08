import { useState } from "react";

const G = "#1A3A1A";
const TC = "#C4622D";
const OC = "#D4A535";
const CR = "#F7EED8";
const EA = "#2A1810";
const SG = "#5A8A5A";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700;800&display=swap');

*{box-sizing:border-box;margin:0;padding:0}
.app{font-family:'Barlow',sans-serif;background:${CR};min-height:100vh;max-width:480px;margin:0 auto}

/* NAV */
.nav{display:flex;background:${G};position:sticky;top:0;z-index:100}
.nb{flex:1;padding:11px 2px;background:none;border:none;color:rgba(255,255,255,.5);font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;border-bottom:3px solid transparent;transition:all .2s}
.nb.active{color:${OC};border-bottom-color:${OC}}

/* POSTER TAB */
.poster{background:${G};position:relative;overflow:hidden;padding-bottom:32px}
.p-noise{position:absolute;inset:0;opacity:.2;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.06'/%3E%3C/svg%3E")}
.p-stripe{position:absolute;top:0;left:0;right:0;height:5px;background:linear-gradient(90deg,${TC},${OC},#4CAF50)}
.p-head{padding:22px 20px 0;position:relative}
.logo-row{display:flex;align-items:center;gap:10px;margin-bottom:18px}
.logo-leaf{width:34px;height:34px;background:${OC};border-radius:50% 0 50% 0;display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0}
.logo-name{font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:800;letter-spacing:2px;color:${OC};text-transform:uppercase;line-height:1}
.logo-reg{font-size:9px;color:rgba(255,255,255,.35);letter-spacing:1px;margin-top:2px}
.fd-badge{display:inline-flex;align-items:center;gap:5px;background:${TC};color:#fff;padding:5px 11px;border-radius:2px;font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px}
.p-hl{font-family:'Playfair Display',serif;font-size:46px;font-weight:900;color:#fff;line-height:.93;letter-spacing:-1px;margin-bottom:5px}
.p-hl span{color:${OC};display:block}
.p-sub{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:600;color:rgba(255,255,255,.6);letter-spacing:3px;text-transform:uppercase;margin-bottom:20px}
.wx-pill{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:100px;padding:7px 13px;margin-bottom:18px}
.wx-dot{width:7px;height:7px;background:#4CAF50;border-radius:50%;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(1.3)}}
.wx-txt{font-size:11px;color:rgba(255,255,255,.85);font-weight:500}
.p-details{padding:0 20px;display:grid;gap:9px}
.d-row{display:flex;align-items:flex-start;gap:11px}
.d-icon{width:30px;height:30px;background:rgba(255,255,255,.07);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.d-lbl{font-size:9px;color:rgba(255,255,255,.4);letter-spacing:1.5px;text-transform:uppercase;font-weight:600}
.d-val{font-size:13px;color:#fff;font-weight:500;margin-top:1px}
.tasks-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin:14px 20px 0}
.t-chip{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);border-radius:6px;padding:9px 11px;display:flex;align-items:center;gap:7px;font-size:11px;color:rgba(255,255,255,.8);font-weight:500}
.rwd-banner{margin:16px 20px;background:linear-gradient(135deg,${TC},#9A3810);border-radius:10px;padding:13px 15px;display:flex;align-items:center;gap:11px}
.rwd-txt{font-size:11px;color:rgba(255,255,255,.9);line-height:1.5}
.rwd-txt strong{color:#fff;font-size:12px;display:block;margin-bottom:2px}
.cta-btn{display:block;margin:0 20px;background:${OC};color:${EA};padding:15px;border-radius:8px;text-align:center;font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:800;letter-spacing:2px;text-transform:uppercase;border:none;cursor:pointer;transition:transform .1s}
.cta-btn:active{transform:scale(.98)}
.p-footer{padding:14px 20px 0;display:flex;justify-content:space-between;align-items:center}

/* SECTIONS */
.sec{padding:20px}
.sec-title{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:${G};margin-bottom:3px}
.sec-desc{font-size:12px;color:#666;margin-bottom:18px;line-height:1.5}
.s-card{background:#fff;border-radius:12px;margin-bottom:13px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,.05);border:1px solid rgba(0,0,0,.04)}
.s-head{padding:13px 15px;display:flex;align-items:center;justify-content:space-between;cursor:pointer}
.s-date-blk{display:flex;align-items:center;gap:11px}
.date-bdg{width:40px;height:40px;background:${G};border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0}
.d-num{font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:800;color:${OC};line-height:1}
.d-mo{font-size:8px;color:rgba(255,255,255,.65);font-weight:600;letter-spacing:1px;text-transform:uppercase}
.s-name{font-size:13px;font-weight:600;color:${EA}}
.s-time{font-size:10px;color:#888;margin-top:1px}
.s-status{padding:3px 9px;border-radius:100px;font-size:10px;font-weight:700}
.st-trial{background:#FFF3CD;color:#856404}
.st-open{background:#D4EDDA;color:#155724}
.s-body{padding:0 15px 15px;border-top:1px solid #F0F0F0}
.v-label{font-size:9px;color:#AAA;letter-spacing:1.5px;text-transform:uppercase;font-weight:600;margin:11px 0 7px}
.v-row{display:flex;gap:7px;flex-wrap:wrap;align-items:center}
.v-chip{display:flex;align-items:center;gap:5px;background:#F0F7F0;border:1px solid #C8E0C8;border-radius:100px;padding:4px 9px}
.v-av{width:20px;height:20px;background:${SG};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;color:#fff;font-weight:700;flex-shrink:0}
.v-name{font-size:11px;font-weight:600;color:${G}}
.v-role{font-size:9px;color:#888}
.rm-btn{background:none;border:none;color:#CCC;font-size:13px;cursor:pointer;padding:0 2px;line-height:1}
.add-area{margin-top:9px;display:flex;gap:7px}
.add-in{flex:1;border:1.5px solid #E0E0E0;border-radius:8px;padding:7px 11px;font-size:12px;font-family:'Barlow',sans-serif;outline:none;transition:border-color .2s;min-width:0}
.add-in:focus{border-color:${SG}}
.role-sel{border:1.5px solid #E0E0E0;border-radius:8px;padding:7px 6px;font-size:11px;background:#fff;color:#444;font-family:'Barlow',sans-serif;outline:none;max-width:110px}
.add-btn{background:${G};color:#fff;border:none;border-radius:8px;padding:7px 13px;font-size:12px;font-weight:700;cursor:pointer;font-family:'Barlow Condensed',sans-serif;letter-spacing:1px;white-space:nowrap}
.resched-area{margin-top:9px}
.resched-lbl{font-size:10px;color:#AAA;margin-bottom:5px}
.date-in{border:1.5px dashed #DDD;border-radius:8px;padding:6px 11px;font-size:12px;font-family:'Barlow',sans-serif;width:100%;color:#444;background:#FAFAFA;outline:none}
.wx-row{margin-top:9px;background:#F0F7F0;border-radius:8px;padding:9px 11px;display:flex;align-items:center;justify-content:space-between}
.wx-go{background:#28A745;color:#fff;padding:3px 9px;border-radius:100px;font-size:10px;font-weight:700}
.min-warn{background:#FFF3CD;border-radius:6px;padding:7px 11px;margin-top:9px;font-size:11px;color:#856404;display:flex;align-items:center;gap:6px}
.pts-banner{background:linear-gradient(135deg,${G},#2D5A2D);border-radius:12px;padding:19px;margin-bottom:18px;position:relative;overflow:hidden}
.pts-banner::after{content:'🌿';position:absolute;right:-8px;bottom:-8px;font-size:75px;opacity:.1}
.pts-ttl{font-family:'Playfair Display',serif;font-size:19px;color:#fff;margin-bottom:3px}
.pts-sub{font-size:11px;color:rgba(255,255,255,.55);margin-bottom:14px}
.pts-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:9px}
.pts-tier{background:rgba(255,255,255,.08);border-radius:8px;padding:11px 7px;text-align:center}
.t-num{font-family:'Barlow Condensed',sans-serif;font-size:20px;font-weight:800;color:${OC}}
.t-lbl{font-size:9px;color:rgba(255,255,255,.5);letter-spacing:1px;text-transform:uppercase;margin-top:2px;line-height:1.3}
.sp-hdr{font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;color:${EA};letter-spacing:2px;text-transform:uppercase;margin-bottom:11px;display:flex;align-items:center;gap:8px}
.sp-hdr::after{content:'';flex:1;height:1px;background:#E5E5E5}
.sp-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:18px}
.sp-card{background:#fff;border-radius:10px;padding:13px;border:1.5px solid #EEE}
.sp-card.confirmed{border-color:${SG};background:#F0F7F0}
.sp-card.open{border-style:dashed}
.sp-em{font-size:22px;margin-bottom:7px}
.sp-nm{font-size:11px;font-weight:700;color:${EA};margin-bottom:2px}
.sp-off{font-size:10px;color:#777;line-height:1.4}
.sp-bdg{display:inline-block;margin-top:5px;padding:2px 7px;border-radius:100px;font-size:9px;font-weight:700}
.b-conf{background:#D4EDDA;color:#155724}
.b-pend{background:#FFF3CD;color:#856404}
.b-slot{background:#F0F0F0;color:#666}
.nom-card{background:${TC};border-radius:10px;padding:15px;display:flex;align-items:center;gap:13px;margin-bottom:18px;cursor:pointer}
.earn-sec{background:#fff;border-radius:12px;padding:15px}
.earn-row{display:flex;align-items:center;gap:11px;padding:9px 0;border-bottom:1px solid #F5F5F5}
.earn-row:last-child{border-bottom:none;padding-bottom:0}
.earn-pts{font-family:'Barlow Condensed',sans-serif;font-size:19px;font-weight:800;color:${G};width:40px;text-align:center;flex-shrink:0}
.earn-desc{font-size:11px;color:#555;flex:1}
.earn-desc strong{color:${EA};display:block;font-size:12px;margin-bottom:1px}
.s-intro{background:${EA};border-radius:12px;padding:16px;margin-bottom:20px;position:relative;overflow:hidden}
.s-intro::before{content:'⚡';position:absolute;right:10px;top:8px;font-size:38px;opacity:.12}
.si-ttl{font-family:'Playfair Display',serif;font-size:20px;color:#fff;margin-bottom:4px}
.si-sub{font-size:11px;color:rgba(255,255,255,.55);line-height:1.5}
.z-card{background:#fff;border-radius:11px;margin-bottom:11px;overflow:hidden;border:1px solid #EEE}
.z-head{display:flex;align-items:center;gap:11px;padding:13px 14px;cursor:pointer}
.z-col{width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0}
.z-info{flex:1}
.z-name{font-size:13px;font-weight:700;color:${EA}}
.z-range{font-size:10px;color:#888;margin-top:1px}
.z-tag{font-size:9px;font-weight:700;padding:3px 8px;border-radius:100px;letter-spacing:.5px;white-space:nowrap}
.z-body{padding:0 14px 14px;border-top:1px solid #F5F5F5}
.m-list{display:grid;gap:10px;margin-top:11px}
.m-item{display:flex;gap:10px;align-items:flex-start}
.m-ico{font-size:17px;flex-shrink:0;margin-top:1px}
.m-ttl{font-size:12px;font-weight:700;color:${EA};margin-bottom:2px}
.m-txt{font-size:11px;color:#555;line-height:1.5}
.m-tag{display:inline-block;margin-top:4px;padding:2px 7px;border-radius:100px;font-size:9px;font-weight:700;background:#FFF3CD;color:#856404}
.m-tag.green{background:#D4EDDA;color:#155724}
.bw-box{background:linear-gradient(135deg,#2A1810,#4A2810);border-radius:11px;padding:16px;margin:18px 0}
.bw-ttl{font-family:'Playfair Display',serif;font-size:17px;color:${OC};margin-bottom:12px}
.bw-grid{display:grid;gap:10px}
.bw-card{background:rgba(255,255,255,.06);border-radius:8px;padding:12px}
.bw-ctitle{font-size:12px;font-weight:700;color:#fff;margin-bottom:4px;display:flex;align-items:center;gap:7px}
.bw-ctext{font-size:11px;color:rgba(255,255,255,.7);line-height:1.5}
.lf-box{background:#F0F7F0;border-radius:11px;padding:15px;margin-top:14px;border:1.5px solid #C8E0C8}
.lf-ttl{font-size:13px;font-weight:700;color:${G};margin-bottom:6px;display:flex;align-items:center;gap:7px}
.lf-txt{font-size:11px;color:#555;line-height:1.5}
`;

const roles = ["Session Lead", "Grass Cutter", "Beds Keeper", "Compost Sorter", "Compost Turner", "Shelter Steward", "Structural / Construction", "General Volunteer"];

const initSessions = [
  { id: 1, day: "27", month: "APR", label: "Freedom Day — Trial Run", time: "08:00–11:00", status: "trial", statusLabel: "TRIAL RUN", date: "2026-04-27", weather: { temp: "24°C", condition: "Clear ☀️" }, volunteers: [{ name: "Bra Tshego", role: "Session Lead", id: 1 }], minVols: 3 },
  { id: 2, day: "09", month: "MAY", label: "Session 2 — May Clean-Up", time: "08:00–11:00", status: "open", statusLabel: "OPEN", date: "2026-05-09", weather: null, volunteers: [], minVols: 3 },
  { id: 3, day: "23", month: "MAY", label: "Session 3 — May Clean-Up", time: "08:00–11:00", status: "open", statusLabel: "OPEN", date: "2026-05-23", weather: null, volunteers: [], minVols: 3 },
  { id: 4, day: "06", month: "JUN", label: "Session 4 — June Clean-Up", time: "08:00–11:00", status: "open", statusLabel: "OPEN", date: "2026-06-06", weather: null, volunteers: [], minVols: 3 },
  { id: 5, day: "20", month: "JUN", label: "Session 5 — June Clean-Up", time: "08:00–11:00", status: "open", statusLabel: "OPEN", date: "2026-06-20", weather: null, volunteers: [], minVols: 3 },
];

const sponsors = [
  { id: 1, emoji: "🛒", name: "Shoprite/Checkers", offer: "R50–R100 grocery voucher", status: "pending", statusLabel: "In Discussion" },
  { id: 2, emoji: "🔨", name: "Cashbuild Mabopane", offer: "R75 hardware voucher", status: "pending", statusLabel: "In Discussion" },
  { id: 3, emoji: "📱", name: "Airtime Partner", offer: "R30 data + airtime", status: "confirmed", statusLabel: "Confirmed" },
  { id: 4, emoji: "🍗", name: "Local Food Vendor", offer: "Post-session meal voucher", status: "pending", statusLabel: "In Discussion" },
  { id: 5, emoji: "💊", name: "Pharmacy/Clicks", offer: "R50 wellness voucher", status: "open", statusLabel: "Open Slot" },
  { id: 6, emoji: "✂️", name: "Salon/Barber", offer: "Free cut or treatment", status: "open", statusLabel: "Open Slot" },
  { id: 7, emoji: "⛽", name: "Petrol Station", offer: "Fuel or car wash", status: "open", statusLabel: "Open Slot" },
  { id: 8, emoji: "🏦", name: "Capitec/Bank", offer: "Airtime/cashback reward", status: "open", statusLabel: "Open Slot" },
];

const earnRows = [
  { pts: "10", action: "Attend 1 session", reward: "Entered into reward draw" },
  { pts: "20", action: "3 sessions", reward: "R30 airtime bundle" },
  { pts: "30", action: "5 sessions", reward: "R50 grocery voucher" },
  { pts: "50", action: "8 sessions", reward: "R100 partner voucher" },
  { pts: "★", action: "Session Lead", reward: "+10 bonus pts/session" },
  { pts: "♻️", action: "Recruit a volunteer", reward: "+5 pts per recruit" },
];

const zones = [
  { id: 1, col: "#D4EDDA", color: "#155724", emoji: "🌿", label: "Zone 1 — Ground Ring", range: "0 – 0.5m", tag: "PASSIVE", methods: [
    { ico: "🌵", title: "Thorny Native Planting", txt: "Ring of aloe, agave, or bougainvillea planted around each pole base. Native to SA climate, zero maintenance after establishment, naturally impenetrable.", tag: "MGSN-ALIGNED", green: true },
    { ico: "🪨", title: "Crushed Stone Collar", txt: "150mm deep gravel ring discourages loitering and foot-traffic at base. Doubles as drainage bed to prevent pole rot.", tag: null },
    { ico: "🏷️", title: "Community Signage", txt: "\"Community Property — Protected by Block M Residents\" in MGSN terracotta and green.", tag: "HIGH IMPACT", green: true },
  ]},
  { id: 2, col: "#F8D7DA", color: "#721C24", emoji: "🎨", label: "Zone 2 — Lower Pole", range: "0.5m – 2.5m", tag: "ACTIVE DETERRENT", methods: [
    { ico: "🖌️", title: "Anti-Climb Paint", txt: "Non-drying petroleum-based anti-climb paint applied from 0.5m to 2.5m up the pole. Available from Builders Warehouse.", tag: "LEGAL: POST WARNING SIGN" },
    { ico: "⚠️", title: "Warning Sign (Required)", txt: "\"DANGER: Anti-Climb Paint Applied\" sign must be posted at eye level.", tag: null },
  ]},
  { id: 3, col: "#FFF3CD", color: "#856404", emoji: "🔩", label: "Zone 3 — Mid-Pole Collar", range: "2.5m – 3.5m", tag: "PHYSICAL BARRIER", methods: [
    { ico: "🔩", title: "Outward-Flare Metal Skirt", txt: "Weld a galvanised steel cone (flaring at 45°, min 400mm radius) bolted around the pole at 3m.", tag: "MOST EFFECTIVE", green: true },
    { ico: "🌀", title: "Dense Barbed Wire Spiral", txt: "Minimum 8 tight wraps of double-strand barbed wire at 2.5–3m height. Deployable at near-zero material cost.", tag: "IMMEDIATE OPTION" },
  ]},
  { id: 4, col: "#E8D5C4", color: "#5A3A1A", emoji: "⭐", label: "Zone 4 — Crown (Near Panel)", range: "10m – 12m (top)", tag: "TOP BARRIER", methods: [
    { ico: "⭐", title: "Star-Frame Barbed Crown", txt: "6 angle-iron arms radiating outward at 45° from the pole at 10m. String 3 concentric rings of barbed wire between arms.", tag: "ARCHITECTURAL + EFFECTIVE", green: true },
    { ico: "🔒", title: "Solar Panel Cage", txt: "Weld an angle-iron frame with weld mesh tightly around the solar panel. Hinged door with padlock.", tag: "ESSENTIAL", green: true },
  ]},
  { id: 5, col: "#CCE5FF", color: "#004085", emoji: "🔌", label: "Zone 5 — Cable Run", range: "Full pole height", tag: "STRUCTURAL", methods: [
    { ico: "🛡️", title: "Steel Conduit Pipe", txt: "All wiring runs inside 20mm galvanised steel conduit pipe, U-clamped to pole every 400mm.", tag: null },
    { ico: "🔩", title: "Tamper-Proof Fasteners", txt: "One-way security screws on all junction boxes and conduit end caps.", tag: "LOW COST", green: true },
  ]},
];

function PoleDiagram() {
  return (
    <svg viewBox="0 0 300 540" style={{ width: "100%", maxWidth: 320, display: "block", margin: "0 auto", borderRadius: 12 }}>
      <defs>
        <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0A1628"/><stop offset="100%" stopColor="#162540"/></linearGradient>
        <linearGradient id="ground2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3D2B1F"/><stop offset="100%" stopColor="#2A1810"/></linearGradient>
      </defs>
      <rect x="0" y="0" width="300" height="540" fill="url(#sky2)" rx="12"/>
      <rect x="0" y="440" width="300" height="100" fill="url(#ground2)" rx="0"/>
      <rect x="0" y="438" width="300" height="5" fill="#4A3020"/>
      <text x="150" y="20" fill="rgba(255,255,255,.4)" fontSize="8.5" fontFamily="Barlow Condensed, sans-serif" textAnchor="middle" letterSpacing="2">12m TIMBER POLE — BLOCK M WATERFALL PARK</text>
      {[30,40],[260,55],[20,120],[270,90],[50,180],[255,170]].map(([x,y],i) => <circle key={i} cx={x} cy={y} r="1.2" fill="rgba(255,255,255,.4)"/>)}
      <rect x="139" y="440" width="22" height="70" fill="#6B4423" opacity=".7"/>
      <ellipse cx="150" cy="442" rx="34" ry="7" fill="#888" opacity=".8"/>
      <rect x="141" y="65" width="18" height="378" fill="#7B5230"/>
      <rect x="142" y="65" width="4" height="378" fill="rgba(255,255,255,.08)"/>
      {[0,51,102,153,204,255,306].map((a, i) => {
        const rad = a * Math.PI / 180;
        const x = 150 + 44 * Math.cos(rad), y = 445 + 8 * Math.sin(rad);
        return <text key={i} x={x - 6} y={y + 5} fontSize="11">🌵</text>;
      })}
      <rect x="138" y="340" width="24" height="100" fill="#C4622D" opacity=".25" rx="2"/>
      <polygon points="108,328 141,340 159,340 192,328" fill="#D4A535" opacity=".6"/>
      <polygon points="108,328 141,340 159,340 192,328" fill="none" stroke="#D4A535" strokeWidth="1.5"/>
      {[-55,-27,0,27,55,85].map((a, i) => {
        const rad = a * Math.PI / 180;
        return <line key={i} x1="150" y1="105" x2={150 + 38 * Math.sin(rad)} y2={105 - 38 * Math.cos(rad)} stroke="#8B4513" strokeWidth="2.5" strokeLinecap="round"/>;
      })}
      <circle cx="150" cy="105" r="34" fill="none" stroke="#D4A535" strokeWidth="1.5" strokeDasharray="4,2.5"/>
      <rect x="122" y="66" width="36" height="25" fill="#1565C0" rx="3"/>
      <rect x="120" y="64" width="40" height="29" fill="none" stroke="#D4A535" strokeWidth="1.5" rx="3"/>
      <rect x="128" y="91" width="24" height="14" fill="#FFD54F" rx="2"/>
      <line x1="94" y1="65" x2="94" y2="440" stroke="rgba(255,255,255,.15)" strokeWidth="1"/>
      <text x="72" y="255" fill="rgba(255,255,255,.3)" fontSize="8.5" fontFamily="Barlow Condensed, sans-serif" transform="rotate(-90,72,255)" letterSpacing="2">12 METRES</text>
    </svg>
  );
}

export default function CampaignApp() {
  const [tab, setTab] = useState("poster");
  const [sessions, setSessions] = useState(initSessions);
  const [expanded, setExpanded] = useState(1);
  const [expZ, setExpZ] = useState<number | null>(null);
  const [names, setNames] = useState<Record<number, string>>({});
  const [selR, setSelR] = useState<Record<number, string>>({});
  const [copied, setCopied] = useState(false);

  const addVol = (sid: number) => {
    const name = (names[sid] || "").trim();
    if (!name) return;
    const role = selR[sid] || roles[0];
    setSessions(p => p.map(s => s.id === sid ? { ...s, volunteers: [...s.volunteers, { name, role, id: Date.now() }] } : s));
    setNames(v => ({ ...v, [sid]: "" }));
  };

  const remVol = (sid: number, vid: number) => setSessions(p => p.map(s => s.id === sid ? { ...s, volunteers: s.volunteers.filter(v => v.id !== vid) } : s));

  const updDate = (sid: number, d: string) => {
    if (!d) return;
    const dt = new Date(d + "T00:00:00");
    setSessions(p => p.map(s => s.id === sid ? { ...s, date: d, day: String(dt.getDate()).padStart(2, "0"), month: dt.toLocaleString("en", { month: "short" }).toUpperCase() } : s));
  };

  const copyMsg = () => {
    navigator.clipboard.writeText(`🌿🇿🇦 CLEAN-UP TEAM-UP — BLOCK M WATERFALL\nMabopane Green Space Network\n\nDumelang bagaetsho! 👋🏾\n\nKgosi ya lefatshe ke morafe — A community owns its land.\n\nThis Freedom Day, Monday 27 April, we're planting, cutting & cleaning at Block M by the waterfall.\n\n📅 Monday 27 April 2026 | ⏰ 08:00–11:00\n📍 Block M — By the Waterfall, Mabopane\n🌤️ Weather: CLEAR ☀️ 24°C — 0mm rain confirmed!\n\n🌿 Cut the grass | 🌸 Flower beds | ♻️ Compost | 🌳 Tree care | 🪵 Shelter | 🔩 Structural tasks\n\n🎁 EARN VOUCHERS & GIFT CARDS from local businesses every session!\n\nKea leboga 🙏🏾\n— MGSN | Reg. 2025/422818/08`).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500); });
  };

  return (
    <>
      <style>{css}</style>
      <div className="app">
        <nav className="nav">
          {([["poster","📋 Poster"],["schedule","🗓 Schedule"],["rewards","🎁 Rewards"],["security","🔒 Security"]] as [string, string][]).map(([k, l]) => (
            <button key={k} className={`nb${tab === k ? " active" : ""}`} onClick={() => setTab(k)}>{l}</button>
          ))}
        </nav>

        {tab === "poster" && (
          <div className="poster">
            <div className="p-noise" />
            <div className="p-stripe" />
            <div className="p-head">
              <div className="logo-row">
                <div className="logo-leaf">🌿</div>
                <div><div className="logo-name">Mabopane Green Space Network</div><div className="logo-reg">NPC · Reg. 2025/422818/08</div></div>
              </div>
              <div className="fd-badge">🇿🇦 Freedom Day Launch</div>
              <h1 className="p-hl">CLEAN-UP<span>TEAM-UP</span></h1>
              <p className="p-sub">Block M · Waterfall · Mabopane</p>
              <div className="wx-pill"><div className="wx-dot" /><span className="wx-txt">☀️ Confirmed — 24°C · Clear · 0mm Rain · GO</span></div>
            </div>
            <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,.09)", margin: "0 20px 16px" }} />
            <div className="p-details">
              <div className="d-row"><div className="d-icon">📅</div><div><div className="d-lbl">When</div><div className="d-val">Monday 27 April 2026 · 08:00 – 11:00</div></div></div>
              <div className="d-row"><div className="d-icon">📍</div><div><div className="d-lbl">Where</div><div className="d-val">Block M · By the Waterfall · Mabopane</div></div></div>
              <div className="d-row"><div className="d-icon">👥</div><div><div className="d-lbl">Who</div><div className="d-val">Community volunteers · Min. 3 · All welcome</div></div></div>
            </div>
            <div className="tasks-grid">
              {[["🌿","Cut the grass"],["🌸","Flower beds"],["♻️","Compost turning"],["🌳","Tree care"],["🪵","Shelter check"],["🔩","Structural tasks"]].map(([ic, lb]) => (
                <div key={lb} className="t-chip"><span style={{ fontSize: 14 }}>{ic}</span>{lb}</div>
              ))}
            </div>
            <div className="rwd-banner">
              <span style={{ fontSize: 22 }}>🎁</span>
              <div className="rwd-txt"><strong>Earn Vouchers & Gift Cards</strong>Local businesses along the stream — groceries, airtime, meals & more. Every session earns rewards.</div>
            </div>
            <button className="cta-btn" onClick={copyMsg}>{copied ? "✅ Copied to clipboard!" : "📲 Copy WhatsApp Message"}</button>
            <div className="p-footer"><span style={{ fontSize: 9, color: "rgba(255,255,255,.18)" }}>MGSN · NPC Reg. 2025/422818/08 · Mabopane, City of Tshwane</span></div>
          </div>
        )}

        {tab === "schedule" && (
          <div className="sec">
            <h2 className="sec-title">Session Schedule</h2>
            <p className="sec-desc">Tap to join a session, pick your role, or propose a date change. Minimum 3 volunteers required.</p>
            {sessions.map(s => (
              <div key={s.id} className="s-card">
                <div className="s-head" onClick={() => setExpanded(expanded === s.id ? null : s.id)}>
                  <div className="s-date-blk">
                    <div className="date-bdg"><span className="d-num">{s.day}</span><span className="d-mo">{s.month}</span></div>
                    <div><div className="s-name">{s.label}</div><div className="s-time">⏰ {s.time} · 👥 {s.volunteers.length}/{s.minVols} volunteers</div></div>
                  </div>
                  <span className={`s-status st-${s.status}`}>{s.statusLabel}</span>
                </div>
                {expanded === s.id && (
                  <div className="s-body">
                    {s.weather && (
                      <div className="wx-row">
                        <div><div style={{ fontSize: 11, fontWeight: 600, color: G }}>🌤️ {s.weather.temp} · {s.weather.condition}</div></div>
                        <span className="wx-go">🟢 GO</span>
                      </div>
                    )}
                    <div className="v-label">Volunteers ({s.volunteers.length})</div>
                    <div className="v-row">
                      {s.volunteers.map(v => (
                        <div key={v.id} className="v-chip">
                          <div className="v-av">{v.name[0]}</div>
                          <div><div className="v-name">{v.name}</div><div className="v-role">{v.role}</div></div>
                          <button className="rm-btn" onClick={() => remVol(s.id, v.id)}>×</button>
                        </div>
                      ))}
                    </div>
                    {s.volunteers.length < s.minVols && <div className="min-warn">⚠️ Need {s.minVols - s.volunteers.length} more volunteer{s.minVols - s.volunteers.length > 1 ? "s" : ""}</div>}
                    <div className="add-area">
                      <input className="add-in" placeholder="Your name..." value={names[s.id] || ""} onChange={e => setNames(v => ({ ...v, [s.id]: e.target.value }))} onKeyDown={e => e.key === "Enter" && addVol(s.id)} />
                      <select className="role-sel" value={selR[s.id] || roles[0]} onChange={e => setSelR(v => ({ ...v, [s.id]: e.target.value }))}>
                        {roles.map(r => <option key={r}>{r}</option>)}
                      </select>
                      <button className="add-btn" onClick={() => addVol(s.id)}>JOIN</button>
                    </div>
                    <div className="resched-area">
                      <div className="resched-lbl">📅 Propose reschedule:</div>
                      <input type="date" className="date-in" value={s.date} onChange={e => updDate(s.id, e.target.value)} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "rewards" && (
          <div className="sec">
            <div className="pts-banner">
              <div className="pts-ttl">Volunteer Rewards 🏆</div>
              <p className="pts-sub">Show up, earn points, redeem with businesses along the stream.</p>
              <div className="pts-grid">
                <div className="pts-tier"><div className="t-num">10</div><div className="t-lbl">Points per session</div></div>
                <div className="pts-tier"><div className="t-num">R50</div><div className="t-lbl">After 5 sessions</div></div>
                <div className="pts-tier"><div className="t-num">R100</div><div className="t-lbl">After 8 sessions</div></div>
              </div>
            </div>
            <div className="sp-hdr">Partner Businesses</div>
            <div className="sp-grid">
              {sponsors.map(sp => (
                <div key={sp.id} className={`sp-card ${sp.status === "confirmed" ? "confirmed" : sp.status === "open" ? "open" : ""}`}>
                  <div className="sp-em">{sp.emoji}</div>
                  <div className="sp-nm">{sp.name}</div>
                  <div className="sp-off">{sp.offer}</div>
                  <span className={`sp-bdg ${sp.status === "confirmed" ? "b-conf" : sp.status === "pending" ? "b-pend" : "b-slot"}`}>{sp.statusLabel}</span>
                </div>
              ))}
            </div>
            <div className="nom-card">
              <span style={{ fontSize: 26 }}>➕</span>
              <div><strong style={{ display: "block", fontSize: 13, color: "#fff", marginBottom: 3 }}>Nominate a Local Business</strong><span style={{ fontSize: 11, color: "rgba(255,255,255,.8)" }}>Tag them in the group or contact MGSN to discuss a partnership.</span></div>
            </div>
            <div className="sp-hdr">How Points Work</div>
            <div className="earn-sec">
              {earnRows.map((r, i) => (
                <div key={i} className="earn-row">
                  <div className="earn-pts">{r.pts}</div>
                  <div className="earn-desc"><strong>{r.action}</strong>{r.reward}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "security" && (
          <div className="sec">
            <div className="s-intro">
              <div className="si-ttl">Pole Security Brief</div>
              <p className="si-sub">12m timber poles · 600mm installation holes · Block M Waterfall. Five layered defence zones from ground to panel.</p>
            </div>
            <PoleDiagram />
            <div style={{ marginTop: 20 }}>
              {zones.map(z => (
                <div key={z.id} className="z-card">
                  <div className="z-head" onClick={() => setExpZ(expZ === z.id ? null : z.id)}>
                    <div className="z-col" style={{ background: z.col }}>{z.emoji}</div>
                    <div className="z-info"><div className="z-name">{z.label}</div><div className="z-range">Height: {z.range}</div></div>
                    <span className="z-tag" style={{ background: z.col, color: z.color }}>{z.tag}</span>
                  </div>
                  {expZ === z.id && (
                    <div className="z-body">
                      {z.methods.map((m, i) => (
                        <div key={i} className="m-item">
                          <span className="m-ico">{m.ico}</span>
                          <div>
                            <div className="m-ttl">{m.title}</div>
                            <div className="m-txt">{m.txt}</div>
                            {m.tag && <span className={`m-tag${m.green ? " green" : ""}`}>{m.tag}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="bw-box">
              <div className="bw-ttl">🌀 Creative Barbed Wire Applications</div>
              <div className="bw-grid">
                {[
                  { ic: "🌀", t: "Spiral Crown (Z3 + Z4)", tx: "Tightly overlapping helix wound at both the mid-collar and top crown." },
                  { ic: "⭐", t: "Star-Halo Crown (Z4)", tx: "Six angle-iron arms at 10m, three concentric rings of barbed wire." },
                  { ic: "🌹", t: "Living Barbed Hedge (Z1)", tx: "Weave bougainvillea or rose canes through barbed wire frames at ground level." },
                  { ic: "🎨", t: "MGSN Aesthetic Integration", tx: "Paint the Z3 steel skirt in MGSN terracotta and forest green. Security hardware becomes community signage." },
                ].map((c, i) => (
                  <div key={i} className="bw-card">
                    <div className="bw-ctitle"><span>{c.ic}</span>{c.t}</div>
                    <div className="bw-ctext">{c.tx}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lf-box">
              <div className="lf-ttl">🌿 MGSN Principle: Security as Ecology</div>
              <div className="lf-txt">The strongest deterrent is a park that is <strong>visibly loved and actively maintained</strong>. Thorny plants that bloom, a fortnightly community presence, solar lights signalling human habitation.</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}