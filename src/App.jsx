import { useState, useEffect } from 'react'
import data from './content.json'

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const links = [
    { label: 'Products', href: '#products' },
    { label: 'Customisation', href: '#customisation' },
    { label: 'Why NUVEX', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ]
  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#" className="logo-wrap">
            <span className="logo-name">{data.brand.name}</span>
            <span className="logo-tag">{data.brand.tagline}</span>
          </a>
          <div className="nav-links">
            {links.map(l => <a key={l.label} href={l.href} className="nav-link">{l.label}</a>)}
            <a href="#contact" className="nav-cta">Get a Quote</a>
          </div>
          <button className="hamburger" onClick={() => setOpen(!open)}>
            <span style={{ transform: open ? 'rotate(45deg) translateY(6px)' : '' }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? 'rotate(-45deg) translateY(-6px)' : '' }} />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => <a key={l.label} href={l.href} className="mobile-link" onClick={() => setOpen(false)}>{l.label}</a>)}
        <a href="#contact" className="nav-cta" style={{ textAlign: 'center' }} onClick={() => setOpen(false)}>Get a Quote</a>
      </div>
    </>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { hero, contact } = data
  const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hi NUVEX, I'm interested in wholesale pricing. Please share your catalogue.")}`
  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="corner-tl"><div className="corner-h" /><div className="corner-v" /></div>
      <div className="corner-br"><div className="corner-h" /><div className="corner-v" /></div>
      <div className="container hero-content">
        <div className="label fade-up delay-1">{hero.badge}</div>
        <h1 className="hero-headline fade-up delay-2">{hero.headline}</h1>
        <p className="hero-sub fade-up delay-2">{hero.subheadline}</p>
        <p className="hero-body fade-up delay-3">{hero.body}</p>
        <div className="hero-ctas fade-up delay-4">
          <a href="#contact" className="btn-primary">{hero.cta1}</a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {hero.cta2}
          </a>
        </div>
        <div className="hero-stats">
          {hero.stats.map(s => (
            <div key={s.label}>
              <div className="stat-val">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="scroll-hint">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
function Products() {
  const { products, contact } = data
  const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi NUVEX, please share your wholesale catalogue and pricing.')}`
  return (
    <section className="section" id="products">
      <div className="section-divider" />
      <div className="container">
        <div className="label">Our Products</div>
        <h2 className="display" style={{ fontSize: 'clamp(40px,7vw,80px)', lineHeight: 1, marginBottom: 48 }}>
          WHAT WE<br /><span style={{ color: 'var(--teal)' }}>SUPPLY</span>
        </h2>
        <div className="products-grid">
          {products.map(p => (
            <div key={p.id} className="product-card">
              <div className="product-id">{p.id}</div>
              {p.tag && <div className="product-tag">{p.tag}</div>}
              <h3 className="product-name">{p.name.toUpperCase()}</h3>
              <p className="product-desc">{p.desc}</p>
              <div className="product-specs">
                {p.specs.map(s => <span key={s} className="spec-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="products-cta">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="teal-link">Request full catalogue →</a>
          <span className="muted-text">All products available for export</span>
        </div>
      </div>
    </section>
  )
}

// ─── CUSTOMISATION ────────────────────────────────────────────────────────────
function Customisation() {
  const { customisation } = data
  return (
    <section className="section section-gray" id="customisation">
      <div className="section-divider" />
      <div className="container">
        <div className="label">Customisation</div>
        <h2 className="display" style={{ fontSize: 'clamp(40px,7vw,80px)', lineHeight: 1, marginBottom: 16 }}>
          YOUR LOGO.<br /><span style={{ color: 'var(--teal)' }}>EVERYWHERE.</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 580, lineHeight: 1.7, marginBottom: 48 }}>
          {customisation.steps[0] && 'Send us your logo file and we handle everything from artwork approval to final dispatch.'}
        </p>
        <div className="methods-grid">
          {customisation.methods.map(m => (
            <div key={m.id} className="method-card">
              <div className="method-id">{m.id}</div>
              <h3 className="method-name">{m.name.toUpperCase()}</h3>
              <p className="method-desc">{m.desc}</p>
              <div className="method-ideal"><span>Ideal for: </span>{m.ideal}</div>
            </div>
          ))}
        </div>
        <div className="two-col">
          <div>
            <div className="sub-label">Logo Placement Options</div>
            <div className="placements-wrap">
              {customisation.placements.map(p => <span key={p} className="placement-tag">{p}</span>)}
            </div>
          </div>
          <div>
            <div className="sub-label">How It Works</div>
            <div className="steps-list">
              {customisation.steps.map((s, i) => (
                <div key={i} className="step-row">
                  <span className="step-num">{i + 1}</span>
                  <span className="step-text">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── WHY ──────────────────────────────────────────────────────────────────────
function Why() {
  const { why } = data
  const allItems = [...why.marquee, ...why.marquee]
  return (
    <section className="section" id="why">
      <div className="section-divider" />
      <div className="marquee-wrap">
        <div className="marquee-track">
          {allItems.map((item, i) => (
            <span key={i} className="marquee-item">{item}<span className="marquee-dot">◆</span></span>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="label">Why NUVEX</div>
        <h2 className="display" style={{ fontSize: 'clamp(40px,7vw,80px)', lineHeight: 1, marginBottom: 48 }}>
          BUILT FOR<br /><span style={{ color: 'var(--teal)' }}>BUYERS</span>
        </h2>
        <div className="reasons-grid">
          {why.reasons.map(r => (
            <div key={r.id} className="reason-card">
              <div className="reason-id">{r.id}</div>
              <h3 className="reason-title">{r.title.toUpperCase()}</h3>
              <p className="reason-desc">{r.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 56 }}>
          <div className="sub-label">Who We Supply</div>
          <div className="buyers-grid">
            {why.buyers.map(b => (
              <div key={b} className="buyer-card">
                <span className="buyer-name">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const { contact, contact_form } = data
  const [form, setForm] = useState({ company: '', name: '', email: '', product: '', quantity: '', message: '' })
  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const filled = form.company && form.name && form.product && form.quantity
  const waLink = () => {
    const msg = `Hi NUVEX,\n\nCompany: ${form.company}\nName: ${form.name}\nProduct: ${form.product}\nQuantity: ${form.quantity}\n\n${form.message}\n\nPlease share catalogue and pricing.`
    return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`
  }
  return (
    <section className="section section-gray" id="contact">
      <div className="section-divider" />
      <div className="container">
        <div className="contact-grid">
          <div>
            <div className="label">Get a Quote</div>
            <h2 className="display" style={{ fontSize: 'clamp(40px,6vw,72px)', lineHeight: 1, marginBottom: 24 }}>
              LET'S DO<br /><span style={{ color: 'var(--teal)' }}>BUSINESS</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7, maxWidth: 380 }}>
              Fill the form and we respond within 2 hours with catalogue and pricing. Or reach us directly on WhatsApp.
            </p>
            <div className="contact-methods">
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="method-icon teal">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--teal)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <div className="method-info-label">WhatsApp (Fastest)</div>
                  <div className="method-info-val">{contact.whatsappDisplay}</div>
                </div>
              </a>
              <div className="contact-method">
                <div className="method-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div className="method-info-label">Email</div>
                  <div className="method-info-val">{contact.email}</div>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div>
                  <div className="method-info-label">Based in</div>
                  <div className="method-info-val">{contact.location} · {contact.exportNote}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-wrap">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Company *</label>
                <input className="form-input" name="company" value={form.company} onChange={handle} placeholder="Your company" />
              </div>
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input className="form-input" name="name" value={form.name} onChange={handle} placeholder="Full name" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" name="email" type="email" value={form.email} onChange={handle} placeholder="you@company.com" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Product *</label>
                <select className="form-select" name="product" value={form.product} onChange={handle}>
                  <option value="">Select</option>
                  {contact_form.products.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Quantity *</label>
                <select className="form-select" name="quantity" value={form.quantity} onChange={handle}>
                  <option value="">Select</option>
                  {contact_form.quantities.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Additional Info</label>
              <textarea className="form-textarea" name="message" rows={3} value={form.message} onChange={handle} placeholder="Logo details, colours, deadline..." />
            </div>
            <a href={filled ? waLink() : '#'} target={filled ? '_blank' : undefined} rel="noopener noreferrer"
              onClick={!filled ? e => e.preventDefault() : undefined}
              className={`form-submit ${filled ? 'active' : 'disabled'}`}>
              Send via WhatsApp →
            </a>
            <p className="form-note">We respond within 2 hours · B2B enquiries only</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const { brand, contact } = data
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <a href="#" className="logo-wrap">
            <span className="logo-name">{brand.name}</span>
            <span className="logo-tag">{brand.tagline}</span>
          </a>
          <div className="footer-links">
            {['#products', '#customisation', '#why', '#contact'].map((href, i) => (
              <a key={href} href={href} className="footer-link">
                {['Products', 'Customisation', 'Why NUVEX', 'Contact'][i]}
              </a>
            ))}
          </div>
          <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="footer-wa">{contact.whatsappDisplay}</a>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} {brand.name}. B2B WHOLESALE ONLY.</p>
          <p className="footer-copy">{contact.location.toUpperCase()} · {contact.exportNote.toUpperCase()}</p>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Customisation />
      <Why />
      <Contact />
      <Footer />
    </>
  )
}
