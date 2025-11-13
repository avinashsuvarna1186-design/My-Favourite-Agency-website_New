import { Link } from "wouter";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function SwissHome() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Swiss Grid Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">MFA</div>
          <nav className="flex gap-12 text-sm uppercase tracking-wider">
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
            <Link href="/" className="hover:opacity-60 transition-opacity">← Home</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section - Asymmetric Layout */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <h1 className="text-7xl md:text-8xl font-bold leading-none mb-12">
              Strategy-first,
              <br />
              design-obsessed,
              <br />
              anti-mediocrity.
            </h1>
            <div className="w-24 h-1 bg-white mb-8"></div>
            <p className="text-xl text-white/60 max-w-xl leading-relaxed">
              My Favourite Agency. We build brands that matter through systematic 
              thinking and uncompromising visual clarity.
            </p>
          </div>
          <div className="col-span-4 flex items-end">
            <div className="text-sm text-white/40 uppercase tracking-wider">
              Est. 2020
              <br />
              Based in India
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="max-w-7xl mx-auto px-8 py-24 border-t border-white/10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <h2 className="text-sm uppercase tracking-wider text-white/40 mb-8">Services</h2>
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-2 gap-16">
              <div>
                <div className="text-6xl font-bold mb-4">01</div>
                <h3 className="text-2xl font-bold mb-4">Brand Strategy</h3>
                <p className="text-white/60 leading-relaxed">
                  Research-driven positioning. Market analysis. Brand architecture. 
                  Messaging frameworks that cut through noise.
                </p>
              </div>
              <div>
                <div className="text-6xl font-bold mb-4">02</div>
                <h3 className="text-2xl font-bold mb-4">Visual Identity</h3>
                <p className="text-white/60 leading-relaxed">
                  Logos. Typography. Color systems. Design systems built on 
                  mathematical precision and visual harmony.
                </p>
              </div>
              <div>
                <div className="text-6xl font-bold mb-4">03</div>
                <h3 className="text-2xl font-bold mb-4">Digital Design</h3>
                <p className="text-white/60 leading-relaxed">
                  Websites. Apps. Interfaces. User experiences grounded in 
                  usability and systematic design principles.
                </p>
              </div>
              <div>
                <div className="text-6xl font-bold mb-4">04</div>
                <h3 className="text-2xl font-bold mb-4">Content Strategy</h3>
                <p className="text-white/60 leading-relaxed">
                  Words that work. Copy that converts. Content architectures 
                  that guide users to action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-white/10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <h2 className="text-sm uppercase tracking-wider text-white/40 mb-8">Process</h2>
          </div>
          <div className="col-span-9">
            <div className="space-y-12">
              <div className="flex gap-8 pb-12 border-b border-white/10">
                <div className="text-2xl font-bold w-12">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Discover</h3>
                  <p className="text-white/60">Research. Audit. Strategy. Understanding the problem before solving it.</p>
                </div>
              </div>
              <div className="flex gap-8 pb-12 border-b border-white/10">
                <div className="text-2xl font-bold w-12">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Define</h3>
                  <p className="text-white/60">Positioning. Messaging. Visual direction. Setting the foundation.</p>
                </div>
              </div>
              <div className="flex gap-8 pb-12 border-b border-white/10">
                <div className="text-2xl font-bold w-12">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Design</h3>
                  <p className="text-white/60">Execution. Iteration. Refinement. Making it real.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="text-2xl font-bold w-12">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Deliver</h3>
                  <p className="text-white/60">Launch. Support. Evolution. Taking it live and beyond.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="max-w-7xl mx-auto px-8 py-24 border-t border-white/10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-3">
            <h2 className="text-sm uppercase tracking-wider text-white/40">Selected Work</h2>
          </div>
          <div className="col-span-9">
            <h3 className="text-4xl font-bold">Projects that pushed boundaries.</h3>
          </div>
        </div>

        <div className="space-y-2">
          <div className="border-t border-white/10 py-8 hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-6">
                <h4 className="text-3xl font-bold group-hover:translate-x-2 transition-transform">Tech Startup A</h4>
              </div>
              <div className="col-span-3">
                <p className="text-white/60 text-sm uppercase tracking-wider">Brand Identity</p>
              </div>
              <div className="col-span-2">
                <p className="text-white/60 text-sm">2024</p>
              </div>
              <div className="col-span-1 text-right">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 py-8 hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-6">
                <h4 className="text-3xl font-bold group-hover:translate-x-2 transition-transform">E-Commerce Platform</h4>
              </div>
              <div className="col-span-3">
                <p className="text-white/60 text-sm uppercase tracking-wider">Digital Design</p>
              </div>
              <div className="col-span-2">
                <p className="text-white/60 text-sm">2024</p>
              </div>
              <div className="col-span-1 text-right">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 py-8 hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-6">
                <h4 className="text-3xl font-bold group-hover:translate-x-2 transition-transform">Financial Services Co.</h4>
              </div>
              <div className="col-span-3">
                <p className="text-white/60 text-sm uppercase tracking-wider">Brand Strategy</p>
              </div>
              <div className="col-span-2">
                <p className="text-white/60 text-sm">2023</p>
              </div>
              <div className="col-span-1 text-right">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>

          <div className="border-t border-b border-white/10 py-8 hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-6">
                <h4 className="text-3xl font-bold group-hover:translate-x-2 transition-transform">Wellness Brand</h4>
              </div>
              <div className="col-span-3">
                <p className="text-white/60 text-sm uppercase tracking-wider">Full Rebrand</p>
              </div>
              <div className="col-span-2">
                <p className="text-white/60 text-sm">2023</p>
              </div>
              <div className="col-span-1 text-right">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-8 py-32 border-t border-white/10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <h2 className="text-sm uppercase tracking-wider text-white/40 mb-8">Contact</h2>
          </div>
          <div className="col-span-6">
            <h3 className="text-5xl font-bold mb-12">Let's work together.</h3>
            <div className="space-y-6">
              <a href="mailto:hello@myfavourite.agency" className="flex items-center gap-4 text-xl hover:opacity-60 transition-opacity group">
                <Mail className="w-6 h-6" />
                <span className="group-hover:translate-x-2 transition-transform">hello@myfavourite.agency</span>
              </a>
              <a href="https://wa.me/911234567890" className="flex items-center gap-4 text-xl hover:opacity-60 transition-opacity group">
                <Phone className="w-6 h-6" />
                <span className="group-hover:translate-x-2 transition-transform">+91 123 456 7890</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-12 gap-8 text-sm text-white/40">
            <div className="col-span-6">
              <p>© 2024 My Favourite Agency. All rights reserved.</p>
            </div>
            <div className="col-span-6 text-right">
              <p>Designed with precision. Built with purpose.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
