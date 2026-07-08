import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Trophy, Activity, Clock, TrendingUp } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { applySeo } from "@/lib/seo";
import cricket from "@/assets/sport-cricket.jpg";
import hero from "@/assets/hero-cricket.jpg";

const Cricket = () => {
  useEffect(() => {
    applySeo({
      title: "SkyExchFast Cricket | Live Cricket Updates, Matches & Cricket Experience",
      description:
        "Follow SkyExchFast Cricket for live match updates, cricket schedules, team information, player statistics, IPL coverage, and a complete cricket entertainment experience.",
      canonical: "https://skyexchfast.live/cricket",
      keywords:
        "SkyExchFast Cricket, SkyExchFast cricket live, cricket updates, live cricket score, IPL cricket, cricket matches, cricket platform, cricket news, cricket statistics",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Live Cricket Betting on Skyexchfast",
          url: "https://skyexchfast.live/cricket",
          description: "Live cricket betting markets on Skyexchfast — IPL, T20 World Cup, ODI, Test cricket.",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://skyexchfast.live/" },
            { "@type": "ListItem", position: 2, name: "Cricket", item: "https://skyexchfast.live/cricket" },
          ],
        },
      ],
    });
  }, []);

  const markets = [
    { t: "Match Winner", d: "Pick the winning team. Best for beginners learning how to bet on live cricket matches online." },
    { t: "Top Batsman", d: "Predict the highest run-scorer. Pays 3x–8x with live updates after every over." },
    { t: "Session Runs", d: "Bet runs in 6-over blocks. Settles fast — most pros' favourite live cricket betting market." },
    { t: "Total Fours / Sixes", d: "Bet on boundary count. Great for T20 and IPL 2026 high-scoring matches." },
    { t: "Toss Winner", d: "Simple 50/50 market — locks in before every match." },
    { t: "Man of the Match", d: "Long-shot market with big payouts (5x–15x)." },
  ];

  const leagues = [
    { t: "IPL 2026", d: "All 74 matches with sub-2-second odds refresh", img: cricket, tag: "LIVE" },
    { t: "T20 World Cup", d: "Every group & knockout match", img: cricket, tag: "HOT" },
    { t: "ODI Series", d: "India vs World — bilateral series", img: cricket },
    { t: "Test Cricket", d: "Session betting + lead at end of day", img: cricket },
    { t: "BBL Australia", d: "Big Bash live odds", img: cricket },
    { t: "PSL Pakistan", d: "Pakistan Super League markets", img: cricket },
    { t: "CPL Caribbean", d: "Caribbean Premier League", img: cricket },
    { t: "Domestic T20", d: "Ranji, Vijay Hazare, Mushtaq Ali", img: cricket },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={hero} alt="Live cricket betting on skyexchfast.live - bet on IPL T20 ODI online" title="Play online cricket betting on Skyexchfast — get your free cricket ID" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="relative container py-12 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/70">Cricket</span>
          </nav>

          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Cricket Updates & Insights</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Live Cricket in India – Follow <span className="text-gradient-gold">IPL, T20, ODI & Test Cricket</span> on SkyExchFast
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-7 max-w-2xl">
              Cricket is one of the most followed sports in the world, connecting millions of fans through unforgettable moments, exciting tournaments, and legendary performances. SkyExchFast Cricket provides a modern cricket platform experience where users can stay connected with match schedules, team information, player statistics, live updates, and detailed cricket insights.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Activity, l: "Sub-2s", s: "Live odds refresh" },
            { icon: Trophy, l: "8 leagues", s: "IPL, T20WC, ODI, Test, BBL+" },
            { icon: Clock, l: "5–10 min", s: "₹ withdrawals" },
            { icon: TrendingUp, l: "Lowest", s: "Commission in India" },
          ].map((x) => (
            <div key={x.l} className="text-center p-5 rounded-2xl bg-gradient-card border border-border">
              <x.icon className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-xl md:text-2xl font-extrabold text-gradient-gold">{x.l}</div>
              <div className="text-xs text-muted-foreground mt-1">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Cricket markets <span className="text-gradient-gold">on Skyexchfast</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {markets.map((m) => (
            <div key={m.t} className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/60 transition">
              <h3 className="font-bold text-lg mb-2 text-primary">{m.t}</h3>
              <p className="text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <div className="prose prose-invert max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">What Makes SkyExchFast Cricket Different?</h2>
          <p className="text-muted-foreground mb-6">
            A great cricket platform should provide more than just match information. Cricket fans want quick updates, accurate details, simple navigation, and access to important statistics. SkyExchFast focuses on providing a smooth cricket experience with features including:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Latest cricket match updates",
              "Tournament information",
              "Team profiles",
              "Player statistics",
              "Match schedules",
              "Live score tracking",
              "Cricket analysis tools",
              "Mobile-friendly access"
            ].map((feature) => (
              <li key={feature} className="text-muted-foreground">✓ {feature}</li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-gradient-card border border-border">
            <h3 className="text-xl font-extrabold mb-3 text-gradient-gold">Test Cricket</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Test cricket is the traditional format of the game and tests a team's patience, strategy, and technical ability over multiple days.
            </p>
            <ul className="text-xs text-muted-foreground space-y-2">
              <li>• Pitch conditions</li>
              <li>• Batting technique</li>
              <li>• Bowling endurance</li>
              <li>• Session performance</li>
              <li>• Weather conditions</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-card border border-border">
            <h3 className="text-xl font-extrabold mb-3 text-gradient-gold">ODI Cricket</h3>
            <p className="text-sm text-muted-foreground mb-4">
              ODI cricket combines strategy with attacking gameplay. Each team receives a limited number of overs, making every partnership important.
            </p>
            <ul className="text-xs text-muted-foreground space-y-2">
              <li>• Powerplay performance</li>
              <li>• Middle-over partnerships</li>
              <li>• Death-over bowling</li>
              <li>• Run rate management</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-card border border-border">
            <h3 className="text-xl font-extrabold mb-3 text-gradient-gold">T20 Cricket</h3>
            <p className="text-sm text-muted-foreground mb-4">
              T20 cricket is the fastest and most entertaining format. With only 20 overs per innings, teams focus on aggressive batting and powerful bowling.
            </p>
            <ul className="text-xs text-muted-foreground space-y-2">
              <li>• Opening partnerships</li>
              <li>• Boundary-hitting ability</li>
              <li>• Bowling variations</li>
              <li>• Match momentum</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Leagues you can bet on</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {leagues.map((g) => (
            <div key={g.t} className="relative rounded-2xl overflow-hidden border border-border bg-gradient-card group">
              <div className="aspect-square overflow-hidden">
                <img src={g.img} alt={`Bet on ${g.t} live online at skyexchfast.live`} title={`${g.t} — bet live on ${g.t} at Skyexchfast`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              {g.tag && (
                <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-bold bg-destructive text-destructive-foreground">
                  {g.tag}
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background via-background/80 to-transparent">
                <h3 className="font-bold text-base">{g.t}</h3>
                <p className="text-xs text-muted-foreground">{g.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <div className="p-6 md:p-10 rounded-2xl border border-primary/30 bg-gradient-card text-center shadow-gold">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Ready to bet on <span className="text-gradient-gold">IPL 2026?</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Get your Skyexchfast cricket ID in 60 seconds on WhatsApp. Play in ₹, win in ₹.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Frequently Asked Questions About SkyExchFast Cricket</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: "What is SkyExchFast Cricket?", a: "SkyExchFast Cricket is a cricket-focused platform designed to provide fans with match information, updates, statistics, and cricket-related features. It helps users stay connected with their favourite tournaments and teams." },
            { q: "What cricket tournaments can I follow?", a: "Users can follow popular cricket events including international matches, franchise leagues, T20 competitions, ODI tournaments, and domestic cricket events depending on availability." },
            { q: "Does SkyExchFast provide live cricket updates?", a: "Yes, the platform focuses on providing updated match information including scores, match progress, player performances, and important game moments." },
            { q: "Why are cricket statistics important?", a: "Cricket statistics help fans understand player and team performance. Information such as batting averages, strike rates, and bowling records provides deeper knowledge about the game." },
            { q: "Can I access SkyExchFast Cricket on mobile?", a: "Yes, SkyExchFast is designed to provide a convenient experience across smartphones, tablets, and desktop devices." },
            { q: "Why is pitch condition important?", a: "Pitch conditions influence how players perform. Some pitches support fast bowlers, while others help spinners or aggressive batters." },
            { q: "How does weather affect cricket matches?", a: "Weather can impact batting conditions, bowling performance, match duration, and overall gameplay. Rain, humidity, and moisture can change match strategies." },
            { q: "What makes T20 cricket different?", a: "T20 cricket is shorter and faster, requiring teams to score quickly and make aggressive tactical decisions within limited overs." },
            { q: "Why is player form important?", a: "Recent player form shows current confidence and performance levels. A player performing consistently may have a greater impact on upcoming matches." },
            { q: "Why choose SkyExchFast Cricket?", a: "SkyExchFast Cricket offers a complete cricket experience with match information, statistics, updates, and easy access for cricket fans who want to stay connected with the game." },
          ].map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-gradient-card border border-border">
              <h3 className="font-bold text-lg mb-3 text-gradient-gold">{faq.q}</h3>
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Cricket;
