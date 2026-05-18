import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Shield, Radio, Camera, Plane, Cctv, Eye, Smartphone, Video, Binoculars,
  Activity, Radar, Lock, Satellite, MapPin, Users, MessageSquare, Share2,
  PictureInPicture, Layers, PlayCircle, Cpu, Wifi, HardDrive, Compass,
  Gauge, Zap, ShieldCheck, Crosshair, Globe, ArrowRight, Mail, Briefcase,
  ChevronRight, Signal, Database, FileVideo
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/hero-command.jpg";
import vvipImg from "@/assets/vvip.jpg";
import dashImg from "@/assets/dashboard.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function LiveBadge({ children, color = "green" }: { children: React.ReactNode; color?: "green" | "cyan" | "red" }) {
  const colors = {
    green: "text-[color:var(--tactical-green)] border-[color:var(--tactical-green)]/40",
    cyan: "text-[color:var(--tactical-cyan)] border-[color:var(--tactical-cyan)]/40",
    red: "text-[color:var(--tactical-red)] border-[color:var(--tactical-red)]/40",
  };
  const dot = { green: "bg-[color:var(--tactical-green)]", cyan: "bg-[color:var(--tactical-cyan)]", red: "bg-[color:var(--tactical-red)]" };
  return (
    <div className={`inline-flex items-center gap-2 border px-3 py-1.5 text-[10px] font-mono-tac uppercase tracking-[0.25em] bg-black/40 ${colors[color]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dot[color]} animate-pulse-dot`} />
      {children}
    </div>
  );
}

function SectionLabel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono-tac text-xs text-[color:var(--tactical-green)] tracking-[0.3em]">[{id}]</span>
      <span className="h-px flex-1 bg-gradient-to-r from-[color:var(--tactical-green)]/60 to-transparent" />
      <span className="font-mono-tac text-[10px] text-muted-foreground uppercase tracking-[0.3em]">{children}</span>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="IronWolf 2CM logo" width={40} height={40} className="h-10 w-10 object-contain drop-shadow-[0_0_8px_oklch(0.78_0.17_165_/_0.5)]" />
          <div className="flex flex-col leading-none">
            <span className="font-mono-tac text-[10px] text-[color:var(--tactical-green)] tracking-[0.3em]">IRONWOLF</span>
            <span className="font-mono-tac text-[10px] text-muted-foreground tracking-[0.3em]">2CM · HUMINT</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 font-mono-tac text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#platform" className="hover:text-foreground transition">Platform</a>
          <a href="#devices" className="hover:text-foreground transition">Devices</a>
          <a href="#features" className="hover:text-foreground transition">Operations</a>
          <a href="#specs" className="hover:text-foreground transition">Specs</a>
          <a href="#command" className="hover:text-foreground transition">Command</a>
        </nav>
        <a href="#contact" className="group inline-flex items-center gap-2 border border-[color:var(--tactical-green)]/50 bg-[color:var(--tactical-green)]/5 px-4 py-2 font-mono-tac text-xs uppercase tracking-[0.2em] text-[color:var(--tactical-green)] hover:bg-[color:var(--tactical-green)]/15 transition">
          Request Access <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Tactical command center" width={1920} height={1080} className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 hud-grid opacity-40" />
        <div className="absolute inset-0 scanlines pointer-events-none" />
        <div className="absolute inset-x-0 h-px bg-[color:var(--tactical-green)]/40 animate-scan blur-sm" />
      </div>

      {/* corner HUD elements */}
      <div className="absolute top-24 left-6 font-mono-tac text-[10px] text-[color:var(--tactical-green)]/70 uppercase tracking-[0.3em] hidden md:block">
        <div>LAT 24°27'N · LON 54°22'E</div>
        <div className="mt-1 text-muted-foreground">SECTOR · ALPHA-7</div>
      </div>
      <div className="absolute top-24 right-6 font-mono-tac text-[10px] text-right text-[color:var(--tactical-green)]/70 uppercase tracking-[0.3em] hidden md:block">
        <div>UPLINK · NOMINAL</div>
        <div className="mt-1 text-muted-foreground">AES-256 · TLS 1.3</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <div className="flex flex-wrap gap-2 mb-8">
            <LiveBadge color="red">LIVE STREAM ACTIVE</LiveBadge>
            <LiveBadge color="green">SECURE CHANNEL</LiveBadge>
            <LiveBadge color="cyan">ENCRYPTED SIGNAL</LiveBadge>
          </div>

          <div className="font-mono-tac text-xs text-[color:var(--tactical-green)] tracking-[0.4em] mb-4">
            // CLASSIFIED · TACTICAL INTELLIGENCE SYSTEM
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] mb-6">
            IronWolf <span className="text-[color:var(--tactical-green)] drop-shadow-[0_0_25px_oklch(0.78_0.17_165_/_0.6)]">2CM</span>
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-foreground/90 mb-6 max-w-2xl">
            Real-Time <span className="text-[color:var(--tactical-cyan)]">HUMINT</span> Field Intelligence &amp; Tactical Surveillance
          </p>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-10">
            A classified-grade intelligence platform engineered for live field operations — enabling
            secure tactical streaming, real-time evidence collection, frontline operational monitoring,
            and synchronized command visibility across every theater of operation.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-3 bg-[color:var(--tactical-green)] text-[color:var(--primary-foreground)] px-7 py-4 font-mono-tac text-sm uppercase tracking-[0.2em] glow-green hover:bg-[color:var(--tactical-green)]/90 transition">
              Request Access <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#contact" className="group inline-flex items-center gap-3 border border-border bg-card/40 backdrop-blur px-7 py-4 font-mono-tac text-sm uppercase tracking-[0.2em] hover:border-[color:var(--tactical-cyan)] hover:text-[color:var(--tactical-cyan)] transition">
              Contact Operations <Radio className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* radar panel */}
        <div className="lg:col-span-4">
          <div className="glass-tac corner-brackets p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono-tac text-[10px] text-[color:var(--tactical-green)] uppercase tracking-[0.3em]">// TAC-RADAR</span>
              <span className="font-mono-tac text-[10px] text-muted-foreground animate-flicker">SCANNING…</span>
            </div>
            <div className="relative aspect-square rounded-full border border-[color:var(--tactical-green)]/30 overflow-hidden bg-black/60">
              <div className="absolute inset-4 rounded-full border border-[color:var(--tactical-green)]/20" />
              <div className="absolute inset-12 rounded-full border border-[color:var(--tactical-green)]/20" />
              <div className="absolute inset-20 rounded-full border border-[color:var(--tactical-green)]/20" />
              <div className="absolute inset-0 origin-center animate-radar">
                <div className="absolute top-1/2 left-1/2 w-1/2 h-px bg-gradient-to-r from-[color:var(--tactical-green)] to-transparent" />
              </div>
              <div className="absolute top-[30%] left-[55%] h-2 w-2 rounded-full bg-[color:var(--tactical-green)] shadow-[0_0_8px_var(--tactical-green)]" />
              <div className="absolute top-[60%] left-[35%] h-1.5 w-1.5 rounded-full bg-[color:var(--tactical-cyan)] shadow-[0_0_8px_var(--tactical-cyan)]" />
              <div className="absolute top-[45%] left-[70%] h-1.5 w-1.5 rounded-full bg-[color:var(--tactical-red)] shadow-[0_0_8px_var(--tactical-red)] animate-pulse-dot" />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4 font-mono-tac text-[10px] uppercase tracking-wider">
              <div className="border border-border bg-black/30 p-2">
                <div className="text-muted-foreground">UNITS</div>
                <div className="text-[color:var(--tactical-green)] text-lg">24</div>
              </div>
              <div className="border border-border bg-black/30 p-2">
                <div className="text-muted-foreground">FEEDS</div>
                <div className="text-[color:var(--tactical-cyan)] text-lg">112</div>
              </div>
              <div className="border border-border bg-black/30 p-2">
                <div className="text-muted-foreground">ALERTS</div>
                <div className="text-[color:var(--tactical-red)] text-lg">03</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Need() {
  const sectors = [
    { icon: Shield, label: "Military Operations" },
    { icon: ShieldCheck, label: "Police Forces" },
    { icon: Crosshair, label: "VVIP Protection" },
    { icon: Activity, label: "Healthcare Security" },
    { icon: Eye, label: "Retail Security" },
    { icon: Radio, label: "Emergency Response" },
  ];
  const stats = [
    { v: "$15.8B", l: "Global Body-Cam Market 2030", s: "+14.2% CAGR" },
    { v: "78%", l: "Agencies Adopting Real-Time Streaming", s: "5-year horizon" },
    { v: "3.2M", l: "Frontline Devices Deployed Worldwide", s: "and accelerating" },
  ];
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel id="02">SITUATION REPORT</SectionLabel>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
            The Growing Need for <span className="text-[color:var(--tactical-green)]">Real-Time</span> Intelligence
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Body-worn cameras, drone surveillance and tactical streaming have become non-negotiable
            across modern security doctrines. Operators on every frontline require live situational
            awareness and forensic-grade evidence — captured, transmitted and reviewed in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.l} className="glass-tac corner-brackets p-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[color:var(--tactical-green)]/10 blur-3xl" />
              <div className="font-mono-tac text-[10px] text-[color:var(--tactical-green)] uppercase tracking-[0.3em] mb-2">{s.s}</div>
              <div className="text-5xl font-black text-foreground mb-2 font-[Orbitron]">{s.v}</div>
              <div className="text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {sectors.map(({ icon: Icon, label }) => (
            <div key={label} className="group flex flex-col items-center text-center border border-border bg-card/40 p-5 hover:border-[color:var(--tactical-green)]/60 hover:bg-[color:var(--tactical-green)]/5 transition">
              <Icon className="h-7 w-7 text-[color:var(--tactical-green)] mb-3 group-hover:scale-110 transition" />
              <div className="font-mono-tac text-[11px] uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Platform() {
  const items = [
    { icon: Video, t: "Secure Live Streaming", d: "End-to-end encrypted video transmission from field to command in real time." },
    { icon: FileVideo, t: "Tactical Evidence Recording", d: "Forensic-grade capture with timestamp, geo-tag and chain-of-custody metadata." },
    { icon: Activity, t: "Synchronized Field Monitoring", d: "Multi-operator timeline sync for coordinated tactical playback and review." },
    { icon: Layers, t: "Multi-Device Integration", d: "Unified intelligence layer across body-cams, drones, CCTV and mobile assets." },
    { icon: Eye, t: "Command Center Visibility", d: "Total operational picture with live unit telemetry and situational overlays." },
    { icon: Users, t: "Operational Coordination", d: "Mission-grade comms, tasking and group orchestration for distributed teams." },
  ];
  return (
    <section id="platform" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionLabel id="03">PLATFORM OVERVIEW</SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <h2 className="text-4xl md:text-5xl font-black uppercase">Built for <span className="text-[color:var(--tactical-green)]">Frontline</span> Intelligence</h2>
          <p className="text-muted-foreground max-w-md">Six capability pillars engineered around the operator. Hardened, low-latency, mission-ready.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group bg-background p-8 hover:bg-card/50 transition relative">
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 border border-[color:var(--tactical-green)]/40 bg-[color:var(--tactical-green)]/5 flex items-center justify-center group-hover:glow-green transition">
                  <Icon className="h-6 w-6 text-[color:var(--tactical-green)]" />
                </div>
                <span className="font-mono-tac text-[10px] text-muted-foreground tracking-[0.3em]">0{items.indexOf(items.find(i=>i.t===t)!)+1}</span>
              </div>
              <h3 className="text-lg font-bold uppercase mb-2 tracking-wide">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Devices() {
  const devices = [
    { icon: Camera, t: "Body-Worn Cameras" },
    { icon: Smartphone, t: "Tactical Smartphones" },
    { icon: Cctv, t: "CCTV Systems" },
    { icon: Plane, t: "Drones" },
    { icon: Video, t: "GoPro Cameras" },
    { icon: PictureInPicture, t: "Webcams" },
    { icon: Binoculars, t: "Binocular Surveillance" },
  ];
  return (
    <section id="devices" className="relative py-32 px-6 border-t border-border">
      <div className="absolute inset-0 hud-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto">
        <SectionLabel id="04">FIELD ASSETS</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Supported <span className="text-[color:var(--tactical-cyan)]">Field Devices</span></h2>
        <p className="text-muted-foreground max-w-2xl mb-14">Any sensor. Any operator. Any theater. IronWolf 2CM integrates the full spectrum of field capture hardware into a single intelligence fabric.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {devices.map(({ icon: Icon, t }, i) => (
            <div key={t} className="group relative glass-tac p-8 hover:border-[color:var(--tactical-green)] transition cursor-pointer overflow-hidden">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[color:var(--tactical-green)]/0 group-hover:bg-[color:var(--tactical-green)]/15 blur-2xl transition" />
              <div className="font-mono-tac text-[10px] text-muted-foreground mb-6 tracking-[0.3em]">UNIT-{String(i+1).padStart(2,'0')}</div>
              <Icon className="h-10 w-10 text-[color:var(--tactical-green)] mb-6 group-hover:drop-shadow-[0_0_12px_var(--tactical-green)] transition" />
              <div className="font-bold uppercase tracking-wide text-sm mb-2">{t}</div>
              <div className="flex items-center gap-2 text-[10px] font-mono-tac text-[color:var(--tactical-green)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--tactical-green)] animate-pulse-dot" /> ONLINE
              </div>
            </div>
          ))}
          <div className="relative glass-tac p-8 border-dashed flex flex-col justify-center items-start">
            <div className="font-mono-tac text-[10px] text-muted-foreground mb-2 tracking-[0.3em]">+ EXPANSION</div>
            <div className="text-sm text-foreground/80">Custom integrations via secure SDK & RTSP/RTMP ingest.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Signal, t: "Real-Time Streaming" },
    { icon: Users, t: "Event-Based Group Stream" },
    { icon: FileVideo, t: "Unlimited Video Upload" },
    { icon: Activity, t: "Auto Synchronization" },
    { icon: Eye, t: "Live Monitoring" },
    { icon: Gauge, t: "Adaptive Bitrate" },
    { icon: PictureInPicture, t: "Picture-in-Picture" },
    { icon: Layers, t: "Overlay Navigation" },
    { icon: MessageSquare, t: "Live Chat & Comments" },
    { icon: Users, t: "User & Group Management" },
    { icon: Share2, t: "Instant Content Sharing" },
    { icon: MapPin, t: "Map Integration" },
    { icon: PlayCircle, t: "Secure Playback System" },
  ];
  return (
    <section id="features" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionLabel id="05">OPERATIONAL MODULES</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-14">Real-Time <span className="text-[color:var(--tactical-green)]">Operation</span> Features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {features.map(({ icon: Icon, t }, i) => (
            <div key={t} className="group relative border border-border bg-card/30 p-6 hover:border-[color:var(--tactical-green)]/60 hover:bg-[color:var(--tactical-green)]/5 transition">
              <div className="absolute top-2 right-2 font-mono-tac text-[9px] text-muted-foreground tracking-widest">MOD/{String(i+1).padStart(3,'0')}</div>
              <Icon className="h-6 w-6 text-[color:var(--tactical-green)] mb-4" />
              <div className="font-bold text-sm uppercase tracking-wide">{t}</div>
              <div className="mt-4 h-px bg-gradient-to-r from-[color:var(--tactical-green)]/40 to-transparent" />
              <div className="mt-2 font-mono-tac text-[10px] text-[color:var(--tactical-green)] flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[color:var(--tactical-green)] animate-pulse-dot" /> ACTIVE
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const protocols = ["RTMP", "RTSP", "WebRTC", "HTTP Streaming", "WebSocket", "H.264", "MPEG-4 AVC", "AAC Codec", "HTTPS / TLS 1.3"];
  return (
    <section className="relative py-32 px-6 border-t border-border overflow-hidden">
      <div className="absolute inset-0 hud-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel id="06">TRANSMISSION LAYER</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">Streaming &amp; <span className="text-[color:var(--tactical-cyan)]">Security</span> Technology</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            A military-grade transport stack engineered for low-latency delivery and end-to-end
            cryptographic integrity. Built on open protocols, hardened for hostile networks.
          </p>
          <div className="flex flex-wrap gap-2">
            {protocols.map((p) => (
              <span key={p} className="font-mono-tac text-xs px-3 py-2 border border-[color:var(--tactical-cyan)]/40 text-[color:var(--tactical-cyan)] bg-[color:var(--tactical-cyan)]/5 uppercase tracking-wider">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* network diagram */}
        <div className="glass-tac corner-brackets p-8 relative">
          <div className="font-mono-tac text-[10px] text-[color:var(--tactical-green)] uppercase tracking-[0.3em] mb-6">// SECURE TRANSMISSION FABRIC</div>
          <div className="relative h-80">
            {/* nodes */}
            {[
              { l: "FIELD", x: "5%", y: "10%", c: "green", icon: Camera },
              { l: "DRONE", x: "5%", y: "50%", c: "cyan", icon: Plane },
              { l: "OPERATOR", x: "5%", y: "85%", c: "green", icon: Shield },
              { l: "EDGE / RTMP", x: "45%", y: "30%", c: "cyan", icon: Cpu },
              { l: "ENCRYPT", x: "45%", y: "70%", c: "green", icon: Lock },
              { l: "COMMAND", x: "85%", y: "50%", c: "red", icon: Globe },
            ].map((n) => {
              const Icon = n.icon;
              return (
                <div key={n.l} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: n.x, top: n.y }}>
                  <div className={`h-12 w-12 border bg-black/60 flex items-center justify-center text-[color:var(--tactical-${n.c})] border-[color:var(--tactical-${n.c})]/60`} style={{ boxShadow: `0 0 18px var(--tactical-${n.c})` }}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 font-mono-tac text-[9px] uppercase tracking-widest text-muted-foreground whitespace-nowrap">{n.l}</div>
                </div>
              );
            })}
            {/* connecting lines */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="ln" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="oklch(0.78 0.17 165)" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="oklch(0.78 0.17 165)" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="oklch(0.78 0.17 165)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {[
                ["5,10", "45,30"], ["5,50", "45,30"], ["5,85", "45,70"],
                ["5,50", "45,70"], ["45,30", "85,50"], ["45,70", "85,50"],
              ].map(([a, b], i) => {
                const [x1,y1] = a.split(",").map(Number); const [x2,y2] = b.split(",").map(Number);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#ln)" strokeWidth="0.3" strokeDasharray="1 1">
                  <animate attributeName="stroke-dashoffset" from="0" to="20" dur="3s" repeatCount="indefinite" />
                </line>;
              })}
            </svg>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 font-mono-tac text-[10px] uppercase tracking-wider">
            <div className="border border-border p-2 bg-black/30"><div className="text-muted-foreground">LATENCY</div><div className="text-[color:var(--tactical-green)]">&lt; 240ms</div></div>
            <div className="border border-border p-2 bg-black/30"><div className="text-muted-foreground">CIPHER</div><div className="text-[color:var(--tactical-green)]">AES-256</div></div>
            <div className="border border-border p-2 bg-black/30"><div className="text-muted-foreground">UPTIME</div><div className="text-[color:var(--tactical-green)]">99.99%</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VVIP() {
  return (
    <section className="relative py-32 px-6 border-t border-border overflow-hidden">
      <div className="absolute inset-0">
        <img src={vvipImg} alt="VVIP protection team" width={1920} height={1080} loading="lazy" className="h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 scanlines pointer-events-none" />
      </div>
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <SectionLabel id="07">PRINCIPAL PROTECTION</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6">
            Protecting <span className="text-[color:var(--tactical-green)]">High-Value</span> Personnel <span className="text-foreground/80">in Real Time</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
            Presidential details, executive protection teams and elite security units rely on IronWolf 2CM
            to maintain a continuous, encrypted intelligence link with command — every angle, every step,
            every second, captured and protected.
          </p>
          <div className="grid grid-cols-2 gap-3 max-w-md">
            <div className="border border-border bg-black/40 p-4">
              <Crosshair className="h-5 w-5 text-[color:var(--tactical-green)] mb-2" />
              <div className="font-mono-tac text-xs uppercase tracking-wider">360° Perimeter</div>
            </div>
            <div className="border border-border bg-black/40 p-4">
              <Shield className="h-5 w-5 text-[color:var(--tactical-green)] mb-2" />
              <div className="font-mono-tac text-xs uppercase tracking-wider">Encrypted Detail</div>
            </div>
            <div className="border border-border bg-black/40 p-4">
              <Eye className="h-5 w-5 text-[color:var(--tactical-green)] mb-2" />
              <div className="font-mono-tac text-xs uppercase tracking-wider">Live Overwatch</div>
            </div>
            <div className="border border-border bg-black/40 p-4">
              <Radio className="h-5 w-5 text-[color:var(--tactical-green)] mb-2" />
              <div className="font-mono-tac text-xs uppercase tracking-wider">Silent Comms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Specs() {
  const specs = [
    { l: "Resolution", v: "1920×1080 H.264" },
    { l: "Geolocation", v: "GPS · GLONASS · Galileo" },
    { l: "Ingress Protection", v: "IP67 · Dust/Waterproof" },
    { l: "Stabilization", v: "Built-in Gyroscope" },
    { l: "Motion", v: "3-Axis Accelerometer" },
    { l: "Connectivity", v: "Wi-Fi · 4G · BT 5.2" },
    { l: "Audio", v: "Dual-Mic · Noise Cancel" },
    { l: "Optics", v: "141° Field of View" },
    { l: "Form", v: "Outdoor Ready / MIL-Spec" },
    { l: "Storage", v: "Secure Local AES-256" },
  ];
  return (
    <section id="specs" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionLabel id="08">HARDWARE TELEMETRY</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-14">Technical <span className="text-[color:var(--tactical-green)]">Specifications</span></h2>

        <div className="glass-tac corner-brackets p-6 md:p-10">
          <div className="flex items-center gap-3 mb-6 font-mono-tac text-xs">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--tactical-red)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--tactical-green)]" />
            </div>
            <span className="text-muted-foreground tracking-widest">~/ironwolf/spec_sheet.term</span>
          </div>
          <div className="font-mono-tac text-sm space-y-2">
            <div className="text-[color:var(--tactical-green)]">$ cat hardware.manifest</div>
            {specs.map((s, i) => (
              <div key={s.l} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-2 border-b border-border/50">
                <span className="text-muted-foreground">#{String(i+1).padStart(2,'0')}</span>
                <span className="text-foreground/80 uppercase tracking-wider">{s.l}</span>
                <span className="text-[color:var(--tactical-green)]">{s.v}</span>
              </div>
            ))}
            <div className="text-[color:var(--tactical-green)] pt-2">$ status: <span className="text-[color:var(--tactical-cyan)] animate-flicker">MISSION-READY █</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Eye, t: "Improved Operational Awareness" },
    { icon: Video, t: "Live Evidence Collection" },
    { icon: Users, t: "Enhanced Team Coordination" },
    { icon: Lock, t: "Secure Tactical Monitoring" },
    { icon: Briefcase, t: "Court-Ready Video Evidence" },
    { icon: ShieldCheck, t: "Increased Field Safety" },
    { icon: Radar, t: "Centralized Command Visibility" },
  ];
  return (
    <section className="relative py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionLabel id="09">MISSION OUTCOMES</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-14">Operational <span className="text-[color:var(--tactical-green)]">Benefits</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map(({ icon: Icon, t }, i) => (
            <div key={t} className={`relative border border-border bg-card/30 p-7 hover:bg-[color:var(--tactical-green)]/5 hover:border-[color:var(--tactical-green)]/60 transition ${i === 0 ? "lg:col-span-2" : ""}`}>
              <div className="flex items-center justify-between mb-6">
                <Icon className="h-7 w-7 text-[color:var(--tactical-green)]" />
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="font-bold uppercase tracking-wide text-base">{t}</div>
              <div className="mt-4 font-mono-tac text-[10px] text-muted-foreground tracking-widest">// BENEFIT-{String(i+1).padStart(2,'0')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Command() {
  return (
    <section id="command" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionLabel id="10">COMMAND INTERFACE</SectionLabel>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase max-w-3xl">Command Center <span className="text-[color:var(--tactical-cyan)]">Dashboard</span> Preview</h2>
          <div className="flex gap-2">
            <LiveBadge color="green">SYSTEM NOMINAL</LiveBadge>
            <LiveBadge color="cyan">24 UNITS LIVE</LiveBadge>
          </div>
        </div>

        <div className="glass-tac corner-brackets p-2 md:p-4 relative overflow-hidden">
          <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-x-0 top-1/3 h-px bg-[color:var(--tactical-green)]/40 animate-scan" />
          <img src={dashImg} alt="Command center dashboard preview" width={1920} height={1200} loading="lazy" className="relative w-full h-auto object-cover" />
          {/* floating panels */}
          <div className="absolute top-6 left-6 glass-tac p-3 hidden md:block">
            <div className="font-mono-tac text-[10px] text-[color:var(--tactical-green)] tracking-widest">// ACTIVE UNITS</div>
            <div className="flex items-end gap-1 mt-2">
              <span className="text-3xl font-black">24</span>
              <span className="text-xs text-muted-foreground mb-1">/ 30</span>
            </div>
          </div>
          <div className="absolute top-6 right-6 glass-tac p-3 hidden md:block">
            <div className="font-mono-tac text-[10px] text-[color:var(--tactical-cyan)] tracking-widest">// DRONE FEED</div>
            <div className="text-xs mt-1 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--tactical-cyan)] animate-pulse-dot" />
              UAV-03 · 1080p
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 glass-tac p-3 hidden md:flex justify-between text-xs font-mono-tac">
            <span className="text-[color:var(--tactical-green)]">CHANNEL · SECURE</span>
            <span className="text-muted-foreground">112 FEEDS</span>
            <span className="text-[color:var(--tactical-cyan)]">UPLINK 86Mb/s</span>
            <span className="text-[color:var(--tactical-red)] animate-flicker">3 ALERTS</span>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-3 mt-6">
          {[
            { i: MapPin, t: "Live Map Tracking" },
            { i: Plane, t: "Drone Feed" },
            { i: Camera, t: "Surveillance Streams" },
            { i: Radio, t: "Secure Comms" },
          ].map(({ i: Icon, t }) => (
            <div key={t} className="border border-border bg-card/30 p-4 flex items-center gap-3">
              <Icon className="h-5 w-5 text-[color:var(--tactical-green)]" />
              <span className="text-sm uppercase tracking-wide">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border pt-24 pb-10 px-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--tactical-green)] to-transparent" />
      <div className="max-w-7xl mx-auto">
        <SectionLabel id="11">SECURE COMMS</SectionLabel>
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="IronWolf 2CM" width={56} height={56} loading="lazy" className="h-14 w-14 object-contain drop-shadow-[0_0_10px_oklch(0.78_0.17_165_/_0.5)]" />
              <div>
                <div className="font-black text-xl uppercase tracking-wider">IronWolf 2CM</div>
                <div className="font-mono-tac text-[10px] text-[color:var(--tactical-green)] tracking-[0.3em]">HUMINT FIELD INTELLIGENCE</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Classified-grade real-time intelligence and tactical surveillance for defense,
              law enforcement and elite protection units worldwide.
            </p>
          </div>

          <div>
            <div className="font-mono-tac text-[10px] uppercase tracking-[0.3em] text-[color:var(--tactical-green)] mb-5">// Contact Operations</div>
            <a href="mailto:ops@ironwolf2cm.io" className="group flex items-start gap-4 border border-border bg-card/30 p-5 hover:border-[color:var(--tactical-green)]/60 transition mb-3">
              <Mail className="h-5 w-5 text-[color:var(--tactical-green)] mt-0.5" />
              <div>
                <div className="font-mono-tac text-[10px] text-muted-foreground tracking-widest mb-1">CONTACT PERSON</div>
                <div className="font-bold uppercase tracking-wide text-sm">Cmdr. Operations Liaison</div>
                <div className="text-xs text-muted-foreground mt-1">ops@ironwolf2cm.io · +1 (555) 010-2200</div>
              </div>
            </a>
            <a href="mailto:careers@ironwolf2cm.io" className="group flex items-start gap-4 border border-border bg-card/30 p-5 hover:border-[color:var(--tactical-green)]/60 transition">
              <Briefcase className="h-5 w-5 text-[color:var(--tactical-green)] mt-0.5" />
              <div>
                <div className="font-mono-tac text-[10px] text-muted-foreground tracking-widest mb-1">JOB OPENING</div>
                <div className="font-bold uppercase tracking-wide text-sm">Recruiting Cleared Operators</div>
                <div className="text-xs text-muted-foreground mt-1">careers@ironwolf2cm.io</div>
              </div>
            </a>
          </div>

          <div>
            <div className="font-mono-tac text-[10px] uppercase tracking-[0.3em] text-[color:var(--tactical-green)] mb-5">// System Status</div>
            <div className="border border-border bg-black/40 p-5 font-mono-tac text-xs space-y-2">
              <div className="flex justify-between"><span className="text-muted-foreground">UPLINK</span><span className="text-[color:var(--tactical-green)] flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--tactical-green)] animate-pulse-dot" />NOMINAL</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">ENCRYPTION</span><span className="text-[color:var(--tactical-green)]">AES-256</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">LATENCY</span><span className="text-[color:var(--tactical-cyan)]">238ms</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">NODES</span><span className="text-[color:var(--tactical-green)]">42 / 42</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">CLEARANCE</span><span className="text-[color:var(--tactical-red)]">CLASSIFIED</span></div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3 font-mono-tac text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <div>© {new Date().getFullYear()} IRONWOLF 2CM · ALL RIGHTS RESERVED</div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--tactical-green)] animate-pulse-dot" />SECURE SESSION</span>
            <span>BUILD v2.41.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Need />
        <Platform />
        <Devices />
        <Features />
        <TechStack />
        <VVIP />
        <Specs />
        <Benefits />
        <Command />
      </main>
      <Footer />
    </div>
  );
}
