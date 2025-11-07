import { useState } from "react";
import SplashScreen from "../components/landing/SplashScreen";
import Header from "../components/layout/Header";
import {
  ctaCard,
  ctaEyebrow,
  ctaGrid,
  ctaIllustration,
  ctaTitle,
  dot,
  dotActive,
  heroEmoji,
  heroLine,
  heroSection,
  heroTitle,
  landingContent,
  landingRoot,
  sectionLabel,
  trendCard,
  trendDescription,
  trendHeader,
  trendImage,
  trendIndicator,
  trendInfo,
  trendMain,
  trendName,
} from "../styles/landing.css";

const LandingPage = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  const ctaItems = [
    {
      id: "personal",
      eyebrow: "Cook Korean food with the ingredients you have.",
      title: "Your own K-recipe",
      icon: "🍲",
    },
    {
      id: "trending",
      eyebrow: "Check out the latest trending Korean recipes.",
      title: "Trending Recipes",
      icon: "🥢",
    },
  ];

  return (
    <div className={landingRoot}>
      <Header />
      <main className={landingContent}>
        <section className={heroSection}>
          <span className={sectionLabel}>Discover</span>
          <h1 className={heroTitle}>
            <span>Enjoy your</span>
            <span className={heroLine}>
              own K-FOOD <span className={heroEmoji}>🇰🇷</span>
            </span>
          </h1>
        </section>

        <section>
          <article className={trendCard}>
            <header>
              <h2 className={trendHeader}>Now trending</h2>
            </header>
            <div className={trendMain}>
              <img
                className={trendImage}
                src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&w=256&q=80"
                alt="Bibimbap"
              />
              <div className={trendInfo}>
                <h3 className={trendName}>Bibimbap</h3>
                <p className={trendDescription}>
                  A dish made by mixing rice with meat, vegetables, and various
                  seasonings.
                </p>
              </div>
            </div>
            <div className={trendIndicator}>
              <span className={dotActive} aria-hidden />
              <span className={dot} aria-hidden />
              <span className={dot} aria-hidden />
            </div>
          </article>
        </section>

        <section className={ctaGrid}>
          {ctaItems.map((item) => (
            <article key={item.id} className={ctaCard}>
              <span className={ctaEyebrow}>{item.eyebrow}</span>
              <div>
                <span className={ctaIllustration} role="img" aria-hidden>
                  {item.icon}
                </span>
                <h3 className={ctaTitle}>{item.title}</h3>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
