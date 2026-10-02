import { Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Menu, X, ArrowUpRight, ShieldCheck, MapPin, Phone, Mail, Globe } from "lucide-react";
import { toast, Toaster } from "sonner";
import { ADDRESS, CERTS, EMAIL, GST, PHONES, type Cert, type Division } from "@/lib/site-data";

const SECURITY_MSG =
  "Security Protocol: Direct archiving, local printing, or devtools inspection of official enterprise credentials is fully restricted.";

function useSecurityShield() {
  useEffect(() => {
    const warn = () =>
      toast.error("Restricted", { description: SECURITY_MSG, id: "security" });
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      const mod = e.ctrlKey || e.metaKey;
      if (e.key === "F12" || (mod && (k === "p" || k === "s")) || (mod && e.shiftKey && ["i", "j", "c"].includes(k))) {
        e.preventDefault();
        e.stopPropagation();
        warn();
      }
    };
    const onPrint = () => warn();
    window.addEventListener("keydown", onKey, true);
    window.addEventListener("beforeprint", onPrint);
    return () => {
      window.removeEventListener("keydown", onKey, true);
      window.removeEventListener("beforeprint", onPrint);
    };
  }, []);
}

function Eyebrow({ children }: { children: string }) {
  return <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">✦ {children}</p>;
}

function Header({ d }: { d: Division }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <>
      <div className="border-b bg-card px-4 py-2 text-[11px] tracking-[0.15em] sm:text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <span className="min-w-0 truncate uppercase text-muted-foreground">✦ {d.strip}</span>
          <Link to={d.switchTo} className="inline-flex shrink-0 items-center gap-1 font-semibold text-primary hover:text-primary-glow">
            {d.switchLabel} <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 lg:flex lg:justify-between">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-gold font-display text-lg font-bold text-primary-foreground">G</span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-lg tracking-[0.2em]">GOLDAGRO</span>
              <span className="block text-[10px] uppercase tracking-[0.35em] text-muted-foreground">Global Export</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {d.nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={`https://wa.me/${PHONES[0].wa}`} target="_blank" rel="noreferrer" className="lift hidden rounded-sm bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground sm:inline-block">
              {d.key === "agro" ? "Contact Desk" : "WhatsApp Us"}
            </a>
            <button aria-label="Open menu" onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center rounded-sm border text-foreground lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <div className={`fixed inset-0 z-50 bg-overlay backdrop-blur-xl transition-opacity duration-500 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}>
        <button aria-label="Close menu" onClick={() => setOpen(false)} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-sm border">
          <X className="h-5 w-5" />
        </button>
        <nav className="flex h-full flex-col items-center justify-center gap-6">
          {d.nav.map((n, i) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={`font-display text-2xl tracking-[0.15em] transition-all duration-500 hover:text-primary ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
              {n.label}
            </a>
          ))}
          <Link to={d.switchTo} className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{d.switchLabel} ↗</Link>
        </nav>
      </div>
    </>
  );
}

function Hero({ d }: { d: Division }) {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img src={d.hero.img} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-40">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-sand">{d.hero.eyebrow}</p>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.1] sm:text-6xl lg:text-7xl">
          {d.hero.lines[0]}<br />
          <span className="font-serif italic text-gradient-gold">{d.hero.lines[1]}</span> {d.hero.lines[2]}
        </h1>
        <p className="mt-6 font-serif text-lg tracking-[0.2em] text-primary">✦ {d.hero.tag} ✦</p>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{d.hero.body}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#inquiry" className="lift rounded-sm bg-gradient-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
            {d.key === "agro" ? "Submit B2B Inquiry" : "Inquire Now"}
          </a>
          <a href="#collections" className="lift rounded-sm border border-primary/50 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground">
            {d.key === "agro" ? "View Specifications" : "View Collections"}
          </a>
        </div>
        <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t pt-8">
          {d.hero.stats.map(([v, l]) => (
            <div key={l}>
              <dt className="font-display text-2xl text-primary sm:text-3xl">{v}</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="overflow-hidden border-y bg-card py-4">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...d.marquee, ...d.marquee, ...d.marquee, ...d.marquee].map((m, i) => (
            <span key={i} className="font-serif text-lg tracking-widest text-sand">✦ {m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ d }: { d: Division }) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <img src={d.about.img} alt="" className="aspect-[4/5] w-full rounded-sm object-cover" loading="lazy" />
          <div className="absolute -bottom-6 right-4 rounded-sm bg-gradient-gold px-6 py-5 text-primary-foreground shadow-glow sm:-right-6">
            <p className="font-display text-4xl">1+</p>
            <p className="text-xs uppercase tracking-widest">{d.about.years}</p>
          </div>
        </div>
        <div className="min-w-0">
          <Eyebrow>{d.about.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-5xl">
            {d.about.title[0]} <span className="font-serif italic text-gradient-gold">{d.about.title[1]}</span> {d.about.title[2]}
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">{d.about.body}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {d.about.points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm"><span className="text-primary">◆</span>{p}</li>
            ))}
          </ul>
          <div className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-sm border px-5 py-3 text-xs tracking-widest">
            <span className="text-muted-foreground">GST REGISTRATION</span>
            <span className="font-semibold text-primary">{GST}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CertModal({ cert, onClose }: { cert: Cert | null; onClose: () => void }) {
  useEffect(() => {
    if (!cert) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [cert, onClose]);
  if (!cert) return null;
  const isPdf = cert.file.endsWith(".pdf");
  return (
    <div className="secure-zone fixed inset-0 z-50 grid place-items-center bg-overlay p-3 backdrop-blur-md sm:p-6" onClick={onClose} onContextMenu={(e) => e.preventDefault()}>
      <div className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-sm border bg-card select-none" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between gap-3 border-b px-5 py-3">
          <span className="flex min-w-0 items-center gap-2 text-xs uppercase tracking-widest text-primary">
            <ShieldCheck className="h-4 w-4 shrink-0" /> <span className="truncate">Secured Corporate Record (View Only)</span>
          </span>
          <button aria-label="Close" onClick={onClose} className="grid h-9 w-9 shrink-0 place-items-center rounded-sm border"><X className="h-4 w-4" /></button>
        </div>
        <div className="grid min-h-0 flex-1 overflow-y-auto md:grid-cols-[1.3fr_1fr]">
          <div className="relative min-h-[50vh] bg-muted">
            {isPdf ? (
              <iframe title={cert.title} src={`${cert.file}#toolbar=0&navpanes=0&view=FitH`} className="secure-media absolute inset-0 h-full w-full" />
            ) : (
              <img src={cert.file} alt={cert.title} draggable={false} className="secure-media absolute inset-0 h-full w-full object-contain p-4" />
            )}
            <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()} />
          </div>
          <div className="space-y-4 p-6 text-sm">
            <h3 className="font-display text-xl">{cert.title}</h3>
            <p className="text-muted-foreground">{cert.issuer}</p>
            {[["License Number", cert.regId], ["Status", cert.status], ["Authorized Signatory", cert.proprietor], ["Registered", cert.state], ["Date of Issue", cert.date]].map(([k, v]) => (
              <div key={k} className="flex flex-wrap justify-between gap-2 border-b pb-2">
                <span className="text-muted-foreground">{k}</span><span className="font-semibold text-sand">{v}</span>
              </div>
            ))}
            <p className="leading-relaxed text-muted-foreground">{cert.desc}</p>
            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Verified copy request: " + cert.title)}`} className="lift block rounded-sm bg-gradient-gold px-5 py-3 text-center font-semibold text-primary-foreground">
              Request verified copy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Credentials({ d }: { d: Division }) {
  const [cert, setCert] = useState<Cert | null>(null);
  return (
    <section className="border-y bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{d.key === "agro" ? "Fully Compliant Exporter" : "Trust & Legality"}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-5xl">Corporate <span className="font-serif italic text-gradient-gold">Credentials</span></h2>
          <p className="mt-4 text-muted-foreground">{d.credBody}</p>
        </div>
        <div className="mt-12 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          {CERTS.map((c) => (
            <button key={c.title} onClick={() => setCert(c)} className="lift rounded-sm border bg-background p-6 text-left">
              <span className="text-3xl">{c.icon}</span>
              <h3 className="mt-4 font-display text-lg">{c.short}</h3>
              <p className="text-xs uppercase tracking-widest text-primary">{c.issuerShort}</p>
              <p className="mt-3 text-sm text-muted-foreground">{c.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Verify Credentials <ArrowUpRight className="h-4 w-4" /></span>
            </button>
          ))}
        </div>
      </div>
      <CertModal cert={cert} onClose={() => setCert(null)} />
    </section>
  );
}

function Collections({ d }: { d: Division }) {
  const [tab, setTab] = useState(d.tabs[0].id);
  const items = d.products.filter((p) => p.cat === tab);
  return (
    <section id="collections" className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
      <div className="text-center">
        <Eyebrow>{d.key === "agro" ? "Global Food Standard" : "Exclusive Range"}</Eyebrow>
        <h2 className="font-display text-3xl sm:text-5xl">Our {d.collectionsTitle[0]} <span className="font-serif italic text-gradient-gold">{d.collectionsTitle[1]}</span></h2>
      </div>
      <div className="no-scrollbar -mx-4 mt-10 overflow-x-auto px-4">
        <div className="mx-auto flex w-max gap-3">
          {d.tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`whitespace-nowrap rounded-sm border px-6 py-3 text-sm uppercase tracking-widest transition-all duration-500 ${tab === t.id ? "border-transparent bg-gradient-gold text-primary-foreground shadow-glow" : "text-muted-foreground hover:border-primary hover:text-foreground"}`}>
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
        {items.map((p) => (
          <a key={p.img} href="#inquiry" className="lift group overflow-hidden rounded-sm border bg-card">
            <div className="aspect-square overflow-hidden bg-muted">
              <img src={p.img} alt={p.name} loading="lazy" draggable={false} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-widest text-primary">{p.label}</p>
              <h3 className="mt-2 font-serif text-xl">{p.name}</h3>
              <p className="mt-3 text-[11px] italic text-muted-foreground">*This image is for illustration purpose only</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Why({ d }: { d: Division }) {
  return (
    <section id="why" className="border-y bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <Eyebrow>{d.key === "agro" ? "Global Supply Standard" : "Our Promise"}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-5xl">Why Choose <span className="text-gradient-gold">GOLDAGRO</span>?</h2>
        </div>
        <div className="mt-12 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
          {d.why.map((w) => (
            <div key={w.title} tabIndex={0} className="lift rounded-sm border bg-background p-8 text-center">
              <span className="text-4xl">{w.icon}</span>
              <h3 className="mt-4 font-display text-xl">{w.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CrossDivision() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="grid gap-10 rounded-sm border bg-card p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Corporate Extension</Eyebrow>
          <h3 className="font-display text-3xl">GOLDAGRO <span className="font-serif italic text-gradient-gold">Agro-Exports</span> Division</h3>
          <p className="mt-4 text-muted-foreground">Beyond imitation jewellery, GOLDAGRO exports premium agro commodities directly from harvesting points across India, under strictly regulated phytosanitary standards.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/" className="lift rounded-sm bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground">View Agro Portfolio</Link>
            <a href={`https://wa.me/${PHONES[0].wa}`} target="_blank" rel="noreferrer" className="lift rounded-sm border px-6 py-3 text-sm font-semibold">WhatsApp Agro Dept.</a>
          </div>
        </div>
        <div className="grid gap-4">
          {[["🌶️", "Premium Spices", "High-grade Turmeric, Cardamom, and Black Pepper from Indian estates."], ["🥭", "Exotic Fruits", "Mangoes, pomegranates, and grapes in cold-chain packs."], ["🧅", "Fresh Vegetables", "Wholesale onions, potatoes, and daily fresh crops for global docks."]].map(([i, t, b]) => (
            <div key={t} className="lift flex gap-4 rounded-sm border bg-background p-4">
              <span className="text-2xl">{i}</span>
              <div><h4 className="font-semibold">{t}</h4><p className="text-sm text-muted-foreground">{b}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const field = "w-full rounded-sm border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

function Inquiry({ d }: { d: Division }) {
  const [f, setF] = useState({ name: "", email: "", phone: "", cat: d.inquiry.categories[0], rep: "0", msg: "" });
  const body = () =>
    `Hello GOLDAGRO,\n\nName: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nCategory: ${f.cat}\n\n${f.msg}`;
  const valid = () => {
    if (!f.name.trim() || !f.email.includes("@")) {
      toast.error("Please add your name and a valid email.");
      return false;
    }
    return true;
  };
  const viaWa = (e: FormEvent) => {
    e.preventDefault();
    if (!valid()) return;
    window.open(`https://wa.me/${PHONES[Number(f.rep)].wa}?text=${encodeURIComponent(body())}`, "_blank");
  };
  const viaMail = () => {
    if (!valid()) return;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`${d.inquiry.title} — ${f.cat}`)}&body=${encodeURIComponent(body())}`;
  };
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });
  return (
    <section id="inquiry" className="mx-auto max-w-4xl px-4 py-20 sm:py-28">
      <div className="text-center">
        <Eyebrow>{d.key === "agro" ? "Global Trade Request" : "Business Proposal"}</Eyebrow>
        <h2 className="font-display text-3xl sm:text-5xl">{d.inquiry.title}</h2>
        <p className="mt-4 text-muted-foreground">{d.inquiry.body}</p>
      </div>
      <form onSubmit={viaWa} className="mt-10 grid gap-4 rounded-sm border bg-card p-6 sm:grid-cols-2 sm:p-10">
        <input className={field} placeholder="Full Name" value={f.name} onChange={set("name")} maxLength={100} />
        <input className={field} type="email" placeholder="Business Email" value={f.email} onChange={set("email")} maxLength={255} />
        <input className={field} placeholder="Phone / WhatsApp" value={f.phone} onChange={set("phone")} maxLength={30} />
        <select className={field} value={f.cat} onChange={set("cat")}>
          {d.inquiry.categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select className={`${field} sm:col-span-2`} value={f.rep} onChange={set("rep")}>
          {d.inquiry.reps.map((r, i) => <option key={r} value={i}>{r} ({PHONES[i].label})</option>)}
        </select>
        <textarea className={`${field} min-h-32 sm:col-span-2`} placeholder={d.key === "agro" ? "Transit volume requirements" : "Business requirements"} value={f.msg} onChange={set("msg")} maxLength={1500} />
        <button type="submit" className="lift rounded-sm bg-gradient-gold px-6 py-3.5 font-semibold text-primary-foreground">📱 Submit via WhatsApp</button>
        <button type="button" onClick={viaMail} className="lift rounded-sm border px-6 py-3.5 font-semibold">✉️ Submit via Email</button>
      </form>
    </section>
  );
}

function Contact({ d }: { d: Division }) {
  const items = [
    { icon: MapPin, t: "Corporate Office", v: [ADDRESS] },
    { icon: Phone, t: "Operational Lines", v: PHONES.map((p) => p.label) },
    { icon: Mail, t: "Email Us", v: [EMAIL] },
    { icon: Globe, t: "Global Export Services", v: ["Direct maritime dispatch from Mumbai customs ports"] },
  ];
  return (
    <section id="contact" className="border-t bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <Eyebrow>HQ Coordinate</Eyebrow>
          <h2 className="font-display text-3xl sm:text-5xl">{d.contactTitle}</h2>
        </div>
        <div className="mt-12 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
          {items.map(({ icon: I, t, v }) => (
            <div key={t} className="lift rounded-sm border bg-background p-6">
              <I className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg">{t}</h3>
              {v.map((x) => <p key={x} className="mt-2 break-words text-sm text-muted-foreground">{x}</p>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ d }: { d: Division }) {
  return (
    <footer className="border-t px-4 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl tracking-[0.2em]">GOLDAGRO</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{d.footerBlurb}</p>
        </div>
        <div className="grid gap-2 text-sm">
          {d.nav.slice(0, 4).map((n) => <a key={n.id} href={`#${n.id}`} className="text-muted-foreground hover:text-primary">{n.label}</a>)}
        </div>
        <div className="grid gap-2 text-sm">
          <Link to={d.switchTo} className="text-primary">{d.key === "agro" ? "Jewellery Portfolio ↗" : "Agro Exports ↗"}</Link>
          <a href={`https://wa.me/${PHONES[0].wa}`} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">WhatsApp Desk</a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t pt-6 text-xs text-muted-foreground">© 2026 Goldagro Global Export. All Rights Reserved.</p>
    </footer>
  );
}

export function DivisionPage({ d }: { d: Division }) {
  useSecurityShield();
  return (
    <div className={`${d.theme} min-h-screen overflow-x-hidden bg-background text-foreground`}>
      <Header d={d} />
      <main>
        <Hero d={d} />
        <About d={d} />
        <Credentials d={d} />
        <Collections d={d} />
        <Why d={d} />
        {d.key === "jewel" && <CrossDivision />}
        <Inquiry d={d} />
        <Contact d={d} />
      </main>
      <Footer d={d} />
      <Toaster position="top-center" theme="dark" richColors />
    </div>
  );
}
