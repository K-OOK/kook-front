import { useState } from "react";
import SplashScreen from "../components/landing/SplashScreen";
import landingRecipeImage from "../assets/landing_recipe.svg";
import landingTrendingImage from "../assets/landing_trending.svg";
import {
  ctaCard,
  ctaCardTop,
  ctaEyebrow,
  ctaGrid,
  ctaIllustration,
  ctaIllustrationWrapper,
  ctaTitle,
  dot,
  dotActive,
  heroEmoji,
  heroLine,
  heroSection,
  heroTitle,
  landingContent,
  landingRoot,
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

  const ctaItems = [
    {
      id: "personal",
      eyebrow: "Cook Korean food\nwith the ingredients\nyou have.",
      title: "Your own\nK-recipe",
      image: landingRecipeImage,
      alt: "Illustration of Korean sauce bottle",
    },
    {
      id: "trending",
      eyebrow: "Check out\nthe latest trending\nKorean recipes.",
      title: "Trending\nRecipes",
      image: landingTrendingImage,
      alt: "Illustration of bowl with chopsticks",
    },
  ];

  return (
    <div className={landingRoot}>
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}
      <main className={landingContent}>
        <section className={heroSection}>
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
              <div className={ctaCardTop}>
                <span className={ctaEyebrow}>{item.eyebrow}</span>
                <div className={ctaIllustrationWrapper}>
                  <img
                    className={ctaIllustration}
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
              </div>
              <h3 className={ctaTitle}>{item.title}</h3>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default LandingPage;