export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Real-Time Meeting Cost Tracker
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Every meeting has a price tag.{" "}
          <span className="text-[#58a6ff]">Now everyone can see it.</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Meeting Cost Shame Calculator overlays a live running cost counter on your video calls — calculated from attendee salaries and elapsed time. Make every minute count.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $8/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card surprises.</p>

        {/* Live demo ticker */}
        <div className="mt-12 inline-flex items-center gap-3 bg-[#161b22] border border-[#30363d] rounded-xl px-6 py-4">
          <span className="text-2xl">💸</span>
          <div className="text-left">
            <p className="text-xs text-[#8b949e] uppercase tracking-wide">Current meeting cost</p>
            <p className="text-2xl font-mono font-bold text-[#58a6ff]">$47.32 <span className="text-sm text-[#8b949e] font-normal">and counting...</span></p>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {[
          { icon: "📹", title: "Works on any call", desc: "Zoom, Meet, Teams, Slack — browser extension detects them all" },
          { icon: "💰", title: "Salary-based math", desc: "Enter team salaries once; costs update live per second" },
          { icon: "😬", title: "Shame-driven focus", desc: "Visible counter creates healthy urgency to end meetings on time" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$8<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Per workspace. Unlimited meetings.</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Browser extension for Chrome & Firefox",
              "Unlimited attendees & salary profiles",
              "Live cost overlay on all video platforms",
              "Meeting cost history & reports",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the cost calculation work?",
              a: "You enter each attendee's annual salary. The extension divides that by working hours per year to get a per-second rate, then multiplies by elapsed meeting time and sums across all attendees."
            },
            {
              q: "Does it access my video call audio or video?",
              a: "No. The extension only detects that a supported video call tab is active and reads the meeting timer. It never accesses your camera, microphone, or call content."
            },
            {
              q: "Which video platforms are supported?",
              a: "Google Meet, Zoom (web), Microsoft Teams, Slack Huddles, and Webex are supported at launch. More platforms are added based on user requests."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} Meeting Cost Shame Calculator. All rights reserved.
      </footer>
    </main>
  );
}
