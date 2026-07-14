import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Dice5, Spade, Plane, Crown } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { applySeo } from "@/lib/seo";
import casino from "@/assets/sport-casino.jpg";
import andar from "@/assets/sport-andarbahar.jpg";
import teen from "@/assets/sport-teenpatti.jpg";
import aviator from "@/assets/sport-aviator.jpg";
import slots from "@/assets/sport-slots.jpg";

const Casino = () => {
  useEffect(() => {
    applySeo({
      title: "SkyExchFast Casino | Premium Online Casino Games & Entertainment",
      description:
        "Explore SkyExchFast Casino for a premium online gaming experience with exciting casino games, live casino options, smooth navigation, and modern entertainment features.",
      canonical: "https://www.skyexchfast.live/casino",
      keywords:
        "SkyExchFast Casino, SkyExchFast casino games, online casino, live casino, casino gaming platform, casino entertainment, SkyExchFast games, online gaming experience",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Live Casino on Skyexchfast",
          url: "https://www.skyexchfast.live/casino",
          description: "1000+ live casino games on the Skyexchfast online platform — playable in INR.",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skyexchfast.live/" },
            { "@type": "ListItem", position: 2, name: "Casino", item: "https://www.skyexchfast.live/casino" },
          ],
        },
      ],
    });
  }, []);

  const games = [
    { img: andar, t: "Andar Bahar", d: "Indian classic · 2.15% house edge", tag: "LIVE" },
    { img: teen, t: "Teen Patti", d: "3 Patti live · up to 1000x payouts", tag: "HOT" },
    { img: aviator, t: "Aviator", d: "Crash multiplier · 10x+ wins" },
    { img: casino, t: "Live Roulette", d: "European & Auto · 24x7 dealers" },
    { img: casino, t: "Dragon Tiger", d: "Fast 30-second rounds" },
    { img: slots, t: "Mega Slots 777", d: "Jackpot ₹1 Cr+" },
    { img: andar, t: "Lucky 7", d: "Quick-win card game" },
    { img: teen, t: "Live Poker", d: "Tournaments & cash tables" },
  ];

  const categories = [
    { icon: Spade, t: "Indian Card Games", d: "Andar Bahar, Teen Patti, Lucky 7 — the classics every Indian player loves." },
    { icon: Plane, t: "Crash Games", d: "Aviator and instant-win games with auto cash-out and 1000x potential." },
    { icon: Crown, t: "Live Dealer", d: "Roulette, Baccarat, Blackjack, Dragon Tiger — streamed in HD 24x7." },
    { icon: Dice5, t: "Slots & Jackpots", d: "1000+ slot titles — from ₹10 spins to ₹1 Cr+ progressive jackpots." },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative border-b border-border">
        <div className="container py-12 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/70">Casino</span>
          </nav>

          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Premium Online Gaming</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              SkyExchFast Casino <span className="text-gradient-gold">Premium Online Gaming Experience</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-7 max-w-2xl">
              Welcome to SkyExchFast Casino, where entertainment, innovation, and excitement come together in one modern gaming destination. Explore a wide collection of casino games designed to provide an engaging experience with smooth navigation, attractive features, and a user-friendly interface.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <div key={c.t} className="p-6 rounded-2xl bg-gradient-card border border-border text-center">
              <div className="h-12 w-12 mx-auto rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-3">
                <c.icon />
              </div>
              <h3 className="font-bold mb-1">{c.t}</h3>
              <p className="text-xs text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <div className="prose prose-invert max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Key Features of SkyExchFast Casino</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-extrabold mb-3 text-gradient-gold">Wide Range of Casino Games</h3>
              <p className="text-muted-foreground mb-4">
                SkyExchFast Casino offers access to multiple game categories, allowing users to explore different styles of gameplay.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✓ Live Casino Games</li>
                <li>✓ Table Games</li>
                <li>✓ Card Games</li>
                <li>✓ Roulette Style Games</li>
                <li>✓ Slot Games</li>
                <li>✓ Virtual Gaming Options</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-3 text-gradient-gold">Smooth & User-Friendly Platform</h3>
              <p className="text-muted-foreground mb-4">
                SkyExchFast Casino is designed with simplicity in mind, providing easy navigation and fast access to games.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✓ Simple interface design</li>
                <li>✓ Fast access to games</li>
                <li>✓ Mobile-friendly experience</li>
                <li>✓ Easy account management</li>
                <li>✓ Convenient navigation</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-card border border-border">
            <h3 className="text-xl font-extrabold mb-3 text-gradient-gold">Live Casino Experience</h3>
            <p className="text-muted-foreground mb-4">
              Live casino gaming brings a more interactive experience by connecting users with real-time gameplay environments.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✓ Real-time dealer interaction</li>
              <li>✓ Live game sessions</li>
              <li>✓ Professional presentation</li>
              <li>✓ Interactive gameplay atmosphere</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-2xl bg-gradient-card border border-border">
            <h3 className="text-xl font-extrabold mb-4 text-gradient-gold">How to Get Started</h3>
            <ol className="text-sm text-muted-foreground space-y-3">
              <li><strong>1. Registration:</strong> Create your SkyExchFast account by completing the registration process.</li>
              <li><strong>2. Account Login:</strong> Access your account using your login details securely.</li>
              <li><strong>3. Explore Games:</strong> Visit the casino section and explore available games by category.</li>
              <li><strong>4. Enjoy Gaming:</strong> Select your favourite games and enjoy the features available.</li>
              <li><strong>5. Support:</strong> Contact customer support if you need assistance.</li>
            </ol>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-card border border-border">
            <h3 className="text-xl font-extrabold mb-4 text-gradient-gold">Why Choose SkyExchFast Casino?</h3>
            <ul className="text-sm text-muted-foreground space-y-3">
              <li><strong>Variety:</strong> Multiple gaming options for different preferences.</li>
              <li><strong>Modern Environment:</strong> Updated features and convenient access.</li>
              <li><strong>Easy Accessibility:</strong> Works on smartphones, tablets, and desktops.</li>
              <li><strong>Dedicated Support:</strong> Customer assistance whenever required.</li>
              <li><strong>Responsible Gaming:</strong> Tools and guidance for safe entertainment.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Most popular <span className="text-gradient-gold">casino games</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {games.map((g) => (
            <div key={g.t} className="relative rounded-2xl overflow-hidden border border-border bg-gradient-card group hover:border-primary/60 transition">
              <div className="aspect-square overflow-hidden">
                <img src={g.img} alt={`Play ${g.t} live online at skyexchfast.live - online sports gaming platform`} title={`${g.t} — play ${g.t} live at Skyexchfast`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
            Play live casino in <span className="text-gradient-gold">₹ today</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Instant ID on WhatsApp. UPI deposits. 5-minute withdrawals. 24x7 live dealers.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Frequently Asked Questions About SkyExchFast Casino</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: "What is SkyExchFast Casino?", a: "SkyExchFast Casino is an online gaming platform offering a variety of casino entertainment options, including different game categories and interactive features." },
            { q: "What types of games are available?", a: "The platform includes various casino-style games such as card games, table games, live casino options, and digital gaming experiences." },
            { q: "How can I access SkyExchFast Casino?", a: "Users can access the casino section through the SkyExchFast platform and explore available gaming options after completing account access." },
            { q: "Is SkyExchFast Casino mobile friendly?", a: "Yes, the platform is designed to provide convenient access across smartphones, tablets, and desktop devices." },
            { q: "Does SkyExchFast offer live casino games?", a: "SkyExchFast focuses on providing engaging gaming experiences, including interactive casino-style options where available." },
            { q: "How do I create a SkyExchFast account?", a: "Users can follow the registration process by providing the required details and completing account setup instructions." },
            { q: "Is account information secure?", a: "Users should follow recommended security practices, including using strong passwords and protecting their login information." },
            { q: "Can beginners use SkyExchFast Casino?", a: "Yes, beginners can explore available games, learn game rules, and gradually become familiar with the platform features." },
            { q: "What makes online casino gaming popular?", a: "Online casino platforms provide convenience, variety, and access to different entertainment options from anywhere." },
            { q: "Why is game variety important?", a: "A wide selection of games allows users to explore different styles and choose experiences that match their interests." },
            { q: "What are live casino games?", a: "Live casino games use real-time interaction features to create a more immersive experience similar to traditional casino environments." },
            { q: "Can I access SkyExchFast Casino anytime?", a: "Online platforms generally provide flexible access, allowing users to explore available features whenever convenient." },
            { q: "What devices support SkyExchFast Casino?", a: "Users can typically access the platform through modern devices including mobile phones, tablets, and computers." },
            { q: "Why is a simple interface important?", a: "A clean interface helps users easily navigate different sections and quickly find available features." },
            { q: "How can users play responsibly?", a: "Responsible gaming involves setting limits, understanding gameplay, and treating casino activities as entertainment." },
            { q: "Does SkyExchFast provide customer support?", a: "Users can contact customer support for assistance with platform navigation and general account-related questions." },
            { q: "Are casino games based on luck or strategy?", a: "Different games involve different levels of chance and strategy. Understanding game rules can improve the overall experience." },
            { q: "Why do users prefer online casinos?", a: "Online casinos offer convenience, accessibility, and a wide selection of entertainment options." },
            { q: "How often are casino features updated?", a: "Gaming platforms regularly improve features and user experience to provide better accessibility and performance." },
            { q: "Why choose SkyExchFast Casino?", a: "SkyExchFast Casino provides a modern gaming environment with diverse entertainment options, easy access, and a focus on user experience." },
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

export default Casino;
