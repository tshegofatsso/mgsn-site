import { useState } from "react";

const LIGHT = {
  bg: "#F5F0E8", surface: "#ffffff", surface2: "#EDE7D9",
  text: "#1A3D4A", muted: "rgba(26,61,74,0.6)", dim: "rgba(26,61,74,0.45)",
  border: "rgba(26,61,74,0.08)", headerBg: "#072C2C",
  cardShadow: "0 2px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)",
  navBtn: "rgba(255,255,255,0.05)", navTxt: "rgba(255,255,255,0.65)",
};
const DARK = {
  bg: "#041f1f", surface: "#072C2C", surface2: "#0a3535",
  text: "#EDB810", muted: "rgba(237,184,16,0.7)", dim: "rgba(237,184,16,0.5)",
  border: "rgba(237,184,16,0.1)", headerBg: "#020f0f",
  cardShadow: "0 2px 8px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)",
  navBtn: "rgba(237,184,16,0.07)", navTxt: "rgba(237,184,16,0.7)",
};

export default function Home() {
  const [dark, setDark] = useState(false);
  const T = dark ? DARK : LIGHT;

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", background: T.bg, minHeight: "100vh", transition: "background 0.3s, color 0.3s" }}>
      <header style={{ background: T.headerBg, position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.3)", transition: "background 0.3s" }}>
        {/* MGSN color bar */}
        <div style={{ height: "4px", background: "linear-gradient(90deg, #F07A1A 0%, #F07A1A 33%, #EDB810 33%, #EDB810 66%, #2D8B3A 66%, #2D8B3A 100%)" }} />
        {/* Main nav bar */}
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px", gap: "16px" }}>
          {/* Logo + name */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <img src="/assets/mgsn-logo-light.png" alt="MGSN" style={{ height: "38px", width: "auto", objectFit: "contain" }} />
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "#EDB810", lineHeight: 1.2 }}>MGSN</div>
              <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.5px", marginTop: "1px" }}>Mabopane Green Space Network</div>
            </div>
          </div>

          {/* Weather widget — centered */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "100px", padding: "6px 14px", flexShrink: 0 }}>
            <span style={{ fontSize: "18px" }}>☀️</span>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: 800, color: "#fff", lineHeight: 1 }}>12°C</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "1px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginTop: "1px" }}>Mabopane · Block M</div>
            </div>
          </div>

          {/* Nav links */}
          <nav style={{ display: "flex", gap: "6px", alignItems: "center", flexShrink: 0 }} className="nav-links">
            {[["/noticeboard","📋 Notice Board"],["/volunteer","🌿 Our Story"],["/register","🤝 Register"]].map(([href, label]) => (
              <a key={href} href={href} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: T.navTxt, textDecoration: "none", padding: "7px 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: T.navBtn, transition: "all 0.18s", whiteSpace: "nowrap" }}>
                {label}
              </a>
            ))}
            <button onClick={() => setDark(d => !d)} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#EDB810", background: "rgba(237,184,16,0.1)", border: "1px solid rgba(237,184,16,0.3)", borderRadius: "8px", padding: "7px 12px", cursor: "pointer" }}>
              {dark ? "☀️ Light" : "◐ Dark"}
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "420px", display: "flex", alignItems: "center" }}>
        <img src="/assets/block-m-waterfall-hero.jpg" alt="Block M Waterfall Park" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(7,44,44,0.82) 0%, rgba(7,44,44,0.55) 100%)", zIndex: 1 }} />
        <div style={{ position: "absolute", right: "-40px", top: "-40px", width: "220px", height: "220px", borderRadius: "50%", border: "50px solid rgba(255,255,255,0.04)", zIndex: 1 }} />
        <div style={{ position: "absolute", left: "-60px", bottom: "-60px", width: "200px", height: "200px", borderRadius: "50%", border: "40px solid rgba(255,255,255,0.03)", zIndex: 1 }} />
        <div style={{ maxWidth: "960px", width: "100%", margin: "0 auto", padding: "52px 20px 48px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
            <div style={{ width: "6px", height: "6px", background: "#EDB810", borderRadius: "50%" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#EDB810" }}>Block M Waterfall Park · Mabopane</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,5vw,56px)", fontWeight: 900, color: "#fff", lineHeight: 1.04, marginBottom: "10px", letterSpacing: "-0.5px", textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
            The land remembers<br /><span style={{ color: "#EDB810", fontStyle: "italic" }}>who tends it.</span>
          </h1>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, maxWidth: "520px", marginBottom: "22px", textShadow: "0 1px 6px rgba(0,0,0,0.25)" }}>
            A community-owned green space network. Restoring native species, clearing invasives, and building something that lasts.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="/register" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F07A1A", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", padding: "14px 24px", borderRadius: "100px", textDecoration: "none", boxShadow: "0 4px 18px rgba(240,122,26,0.35)" }}>Join Us &mdash; Re a leboga</a>
            <a href="/noticeboard" style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "2px solid rgba(255,255,255,0.3)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "12px 20px", borderRadius: "100px", textDecoration: "none" }}>📋 Notice Board</a>
          </div>
          <div style={{ display: "flex", gap: "14px", marginTop: "22px", flexWrap: "wrap" }}>
            {["Block M · Fortnightly", "60+ Volunteers", "NPC 2025/422818/08"].map(m => (
              <div key={m} style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "100px", padding: "5px 11px", fontSize: "10px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "1px", color: "rgba(255,255,255,0.8)", textTransform: "uppercase" }}>{m}</div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT SESSIONS */}
      <section style={{ background: "linear-gradient(135deg, #072C2C 0%, #0D5050 100%)", padding: "32px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
          <div style={{ flexShrink: 0, position: "relative" }}>
            <img src="/assets/event-poster-9th.jpg" alt="May Sessions Poster" style={{ width: "140px", height: "180px", objectFit: "cover", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }} />
            <div style={{ position: "absolute", top: "-10px", left: "-10px", background: "#F07A1A", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", padding: "4px 10px", borderRadius: "100px" }}>Next Sessions</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "6px" }}>📅 Saturday, 23 May 2026</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px,3vw,30px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "8px" }}>Session 3 &mdash; May Clean-Up<br /><span style={{ color: "#EDB810" }}>Block M Waterfall Park</span></h2>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "14px" }}>
              {["🕗 08:00–12:00", "📍 Timber Shelter", "🌿 All ages welcome", "🧤 Gloves provided"].map(d => (
                <span key={d} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{d}</span>
              ))}
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.55, marginBottom: "16px" }}>Invasive species removal, indigenous planting, stream bank restoration. Followed by a plant ID workshop with the UP team. Refreshments sponsored.</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="/register" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#F07A1A", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "10px 20px", borderRadius: "100px", textDecoration: "none" }}>Register Now &rarr;</a>
              <a href="/noticeboard" style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "2px solid rgba(255,255,255,0.2)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "9px 18px", borderRadius: "100px", textDecoration: "none" }}>View Details</a>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", right: "-50px", bottom: "-50px", width: "180px", height: "180px", borderRadius: "50%", border: "45px solid rgba(255,255,255,0.03)" }} />
      </section>

      {/* WORKSHOP BANNER */}
      <section style={{ background: "linear-gradient(135deg, #1a3a1a 0%, #2d5a1e 100%)", padding: "28px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
          <div style={{ flexShrink: 0, textAlign: "center" }}>
            <div style={{ width: "72px", height: "72px", background: "rgba(237,184,16,0.15)", border: "2px solid rgba(237,184,16,0.4)", borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", fontWeight: 900, color: "#EDB810" }}>26</span>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", color: "rgba(237,184,16,0.7)", textTransform: "uppercase" }}>May</span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "inline-block", background: "rgba(237,184,16,0.15)", border: "1px solid rgba(237,184,16,0.3)", borderRadius: "100px", padding: "3px 10px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#EDB810", marginBottom: "8px" }}>🎓 Workshop</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "6px" }}>📅 Tuesday, 26 May 2026 &nbsp;&middot;&nbsp; 🕘 09:00–12:00</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px,3vw,26px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "8px" }}>Invasive Alien Plant Species<br /><span style={{ color: "#EDB810" }}>Identification & Removal Workshop</span></h2>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "14px" }}>A structured 3-hour workshop at the Block M Waterfall Park timber shelter. Learn to identify and safely remove invasive species. Hosted by MGSN with partner support. Free entry &mdash; all welcome.</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="/register" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#EDB810", color: "#1a3a1a", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "10px 20px", borderRadius: "100px", textDecoration: "none" }}>Register for Workshop &rarr;</a>
              <a href="/noticeboard" style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "2px solid rgba(255,255,255,0.2)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "9px 18px", borderRadius: "100px", textDecoration: "none" }}>Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: T.surface, borderBottom: "1px solid " + T.border, padding: "20px", transition: "all 0.3s" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", textAlign: "center" }}>
          {[["60+", "Community Members", "Blocks A through L"], ["3", "Partner Institutions", "UP · CoT · MGSN"], ["9", "Species Identified", "Invasive + Indigenous"], ["2 km", "Stream Surveyed", "Block M Watercourse"]].map(item => (
            <div key={item[1]} style={{ padding: "8px 16px", borderRight: "1px solid " + T.border }}>
              <p style={{ fontSize: "28px", fontWeight: 900, color: dark ? "#EDB810" : "#0D5050" }}>{item[0]}</p>
              <p style={{ fontSize: "12px", fontWeight: 600, color: dark ? "#fff" : "#1A3D4A", marginTop: "2px" }}>{item[1]}</p>
              <p style={{ fontSize: "10px", color: T.muted, marginTop: "2px" }}>{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST NOTICES */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 20px 60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "20px" }}>📋</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: T.dim }}>Latest Notices</h2>
          </div>
          <a href="/noticeboard" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: dark ? "#EDB810" : "#0D5050", textDecoration: "none" }}>Full Notice Board &rarr;</a>
        </div>
        <div style={{ display: "grid", gap: "12px" }}>
          {[
            { cat: "urgent", bar: "linear-gradient(90deg, #C0392B, #8B1C14)", badge: "Urgent", badgeBg: "#FDECEA", badgeColor: "#C0392B", title: "Freedom Day Launch &mdash; Monday 27 April 2026", body: "First clean-up session at Block M Waterfall. Weather confirmed clear &mdash; 24&deg;C. Meet at the timber shelter at 08:00.", date: "26 April 2026", author: "MGSN Management", href: "/noticeboard" },
            { cat: "news", bar: "linear-gradient(90deg, #1B7A7A, #0D5050)", badge: "News", badgeBg: dark ? "#0a3535" : "#E6F4F4", badgeColor: dark ? "#EDB810" : "#0D5050", title: "Solar Floodlights Installed at Block M Waterfall Park", body: "Two 12-metre timber poles with solar-powered floodlights installed. Park now lit after dark.", date: "25 April 2026", author: "Bra Tshego &mdash; MGSN", href: "/noticeboard" },
            { cat: "notice", bar: "linear-gradient(90deg, #2D8B3A, #1E6028)", badge: "Notice", badgeBg: dark ? "#0a3535" : "#E8F5EA", badgeColor: dark ? "#EDB810" : "#1E6028", title: "Volunteer Registration Now Open &mdash; Earn Rewards", body: "Register to join the Clean-Up Team-Up group. Volunteers earn vouchers from Shoprite, Cashbuild and local food vendors.", date: "24 April 2026", author: "MGSN Management", href: "/register" },
          ].map(post => (
            <div key={post.title} style={{ background: T.surface, borderRadius: "14px", overflow: "hidden", boxShadow: T.cardShadow, border: "1px solid " + T.border, transition: "all 0.3s" }}>
              <div style={{ height: "3.5px", background: post.bar }} />
              <div style={{ padding: "16px 18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ padding: "3px 8px", borderRadius: "100px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", background: post.badgeBg, color: post.badgeColor }}>{post.badge}</span>
                  <span style={{ fontSize: "10px", color: T.dim, marginLeft: "auto" }}>{post.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 700, color: dark ? "#fff" : "#1A3D4A", lineHeight: 1.25, marginBottom: "6px" }}>{post.title}</h3>
                <p style={{ fontSize: "13px", color: T.muted, lineHeight: 1.6, marginBottom: "12px" }}>{post.body}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "10px", borderTop: "1px solid " + T.border }}>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: T.muted }}>{post.author}</span>
                  <a href={post.href} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: dark ? "#EDB810" : "#0D5050", textDecoration: "none" }}>Read more &rarr;</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WOULD YOU LIKE TO DO */}
      <section style={{ background: T.surface, borderTop: "1px solid " + T.border, borderBottom: "1px solid " + T.border, padding: "40px 20px", transition: "all 0.3s" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: T.dim, marginBottom: "16px" }}>What would you like to do?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
            {[
              { icon: "📋", title: "Notice Board", sub: "News, events, announcements. Stay informed.", href: "/noticeboard", color: "#1B7A7A" },
              { icon: "🤝", title: "Register to Volunteer", sub: "Join the green team. Earn rewards for your time.", href: "/register", color: "#F07A1A" },
              { icon: "🌿", title: "Our Story", sub: "What happened on 30 April 2026 at Block M.", href: "/volunteer", color: "#2D8B3A" },
              { icon: "💬", title: "Chat with MGSN", sub: "Questions? Email the team directly.", href: "mailto:tshegofatso@duck.com", color: "#1565C0" },
            ].map(item => (
              <a key={item.title} href={item.href} style={{ background: T.surface2, borderRadius: "14px", padding: "20px 18px", textDecoration: "none", border: "1px solid " + T.border, display: "flex", flexDirection: "column", gap: "8px", boxShadow: T.cardShadow, transition: "all 0.3s" }}>
                <span style={{ fontSize: "28px" }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: 800, letterSpacing: "0.5px", color: item.color }}>{item.title}</div>
                  <div style={{ fontSize: "12px", color: T.muted, lineHeight: 1.4, marginTop: "4px" }}>{item.sub}</div>
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: item.color, marginTop: "auto" }}>Open &rarr;</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP QR */}
      <section style={{ background: "linear-gradient(135deg, #072C2C, #0D5050)", padding: "40px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
          <div style={{ flexShrink: 0, textAlign: "center" }}>
            <img src="/assets/whatsapp-qr.png" alt="MGSN WhatsApp QR" style={{ width: "110px", height: "110px", borderRadius: "12px", border: "3px solid rgba(255,255,255,0.2)", display: "block" }} />
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: "6px" }}>Scan to join</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "6px" }}>💬 Join the conversation</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px,3vw,28px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "8px" }}>MGSN Clean-Up Team-Up<br /><span style={{ color: "#EDB810" }}>WhatsApp Group</span></h2>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "14px" }}>Get session updates, volunteer reminders, and community news delivered straight to your phone.</p>
            <a href="/register" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#25D366", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "10px 18px", borderRadius: "100px", textDecoration: "none" }}>📱 Register to Join</a>
          </div>
        </div>
        <div style={{ position: "absolute", right: "-50px", bottom: "-50px", width: "180px", height: "180px", borderRadius: "50%", border: "45px solid rgba(255,255,255,0.03)", pointerEvents: "none" }} />
      </section>

      <footer style={{ background: T.headerBg, padding: "32px 20px", textAlign: "center", transition: "background 0.3s" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <img src="/assets/mgsn-logo-light.png" alt="MGSN" style={{ height: "40px", width: "auto", margin: "0 auto 14px", display: "block", objectFit: "contain" }} />
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", margin: "12px 0 16px", flexWrap: "wrap" }}>
            {[["/", "Home"], ["/noticeboard", "Notice Board"], ["/volunteer", "Our Story"], ["/register", "Register"], ["mailto:tshegofatso@duck.com", "Contact"]].map(([href, label]) => (
              <a key={label} href={href} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{label}</a>
            ))}
          </div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", lineHeight: 1.7 }}>Mabopane Green Space Network &middot; NPC Reg. 2025/422818/08<br />Block M Waterfall Park &middot; Mabopane, City of Tshwane<br /><span style={{ fontStyle: "italic" }}>Kgosi ya lefatshe ke morafe &mdash; A community owns its land.</span></div>
          <div style={{ height: "3px", background: "linear-gradient(90deg, #F07A1A, #EDB810, #2D8B3A)", width: "60px", margin: "20px auto 0", borderRadius: "100px" }} />
        </div>
      </footer>

      <style>{`
        @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(76,175,80,0.5); } 50% { box-shadow: 0 0 0 6px rgba(76,175,80,0); } }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </div>
  );
}