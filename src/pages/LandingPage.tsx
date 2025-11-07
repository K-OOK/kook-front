import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SplashScreen from "../components/landing/SplashScreen";
import Header from "../components/layout/Header";
import landingRecipeImage from "../assets/landing_recipe.svg";
import landingTrendingImage from "../assets/landing_trending.svg";
import { apiClient } from "../lib/axios";
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
  trendIndicatorButton,
  trendControls,
  trendSpinner,
  trendMessage,
  trendInfo,
  trendMain,
  trendMainInteractive,
  trendName,
} from "../styles/landing.css";
import type { HotRecipe } from "../types/hotRecipe";
import { DEFAULT_RANKING_IMAGE, getRankingImage } from "../utils/rankingImage";

const getRecipeDescription = (recipe: HotRecipe) => {
  const fallback = "준비 중";
  const detail =
    recipe.description ??
    recipe.recipe_detail_en ??
    recipe.recipe_detail_ko ??
    "";

  if (!detail) {
    return fallback;
  }

  const plain = detail
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!plain) {
    return fallback;
  }

  return plain;
};

const LandingPage = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);

  const { data, isLoading, isError } = useQuery<HotRecipe[]>({
    queryKey: ["hotRecipes"],
    queryFn: async () => {
      const response = await apiClient.get<HotRecipe[]>("/api/hot-recipes");
      return response.data;
    },
    staleTime: 1000 * 60,
  });

  const ctaItems = [
    {
      id: "personal",
      eyebrow: "Cook Korean food\nwith the ingredients\nyou have.",
      title: "Your own\nK-recipe",
      image: landingRecipeImage,
      alt: "Illustration of Korean sauce bottle",
      to: "/recipe",
    },
    {
      id: "trending",
      eyebrow: "Check out\nthe latest trending\nKorean recipes.",
      title: "Trending\nRecipes",
      image: landingTrendingImage,
      alt: "Illustration of bowl with chopsticks",
      to: "/trend",
    },
  ];

  const recipes = useMemo(() => {
    if (!data?.length) {
      return [] as HotRecipe[];
    }

    return [...data]
      .sort((a, b) => {
        if (a.ranking == null && b.ranking == null) {
          return 0;
        }
        if (a.ranking == null) {
          return 1;
        }
        if (b.ranking == null) {
          return -1;
        }
        return a.ranking - b.ranking;
      })
      .slice(0, 4);
  }, [data]);

  useEffect(() => {
    if (recipes.length === 0) {
      setCurrentRecipeIndex(0);
      return;
    }

    setCurrentRecipeIndex((prev) => {
      if (prev >= recipes.length) {
        return 0;
      }
      return prev;
    });
  }, [recipes]);

  const handleSelectRecipe = useCallback((index: number) => {
    setCurrentRecipeIndex(index);
  }, []);

  const handleNextRecipe = useCallback(() => {
    setCurrentRecipeIndex((prev) => {
      if (recipes.length === 0) {
        return prev;
      }
      return prev === recipes.length - 1 ? 0 : prev + 1;
    });
  }, [recipes.length]);

  useEffect(() => {
    if (recipes.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentRecipeIndex((prev) =>
        prev === recipes.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [recipes.length]);

  const currentRecipe = recipes[currentRecipeIndex];

  const navigate = useNavigate();

  console.log(recipes);
  return (
    <div className={landingRoot}>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      {!showSplash && <Header />}
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

            {isLoading && (
              <div className={trendSpinner} aria-label="Loading hot recipes" />
            )}

            {isError && !isLoading && (
              <p className={trendMessage}>
                Unable to load trending recipes. Please try again.
              </p>
            )}

            {!isLoading && !isError && recipes.length === 0 && (
              <p className={trendMessage}>
                Trending recipes will appear here soon.
              </p>
            )}

            {!isLoading && !isError && currentRecipe && (
              <>
                <div
                  className={
                    recipes.length > 1
                      ? `${trendMain} ${trendMainInteractive}`
                      : trendMain
                  }
                  role={recipes.length > 1 ? "button" : undefined}
                  tabIndex={recipes.length > 1 ? 0 : undefined}
                  onClick={() => navigate(`/trend/${currentRecipe.ranking}`)}
                  onKeyDown={(event) => {
                    if (recipes.length <= 1) {
                      return;
                    }
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleNextRecipe();
                    }
                  }}
                  aria-label={
                    recipes.length > 1
                      ? `View next trending recipe, currently ${currentRecipe.recipe_name}`
                      : undefined
                  }
                >
                  <img
                    className={trendImage}
                    src={getRankingImage(
                      currentRecipe.ranking,
                      currentRecipe.image_url ?? DEFAULT_RANKING_IMAGE
                    )}
                    alt={currentRecipe.recipe_name}
                    loading="lazy"
                  />
                  <div className={trendInfo}>
                    <h3 className={trendName}>{currentRecipe.recipe_name}</h3>
                    <p className={trendDescription}>
                      {getRecipeDescription(currentRecipe)}
                    </p>
                  </div>
                </div>

                <div className={trendControls}>
                  <div className={trendIndicator}>
                    {recipes.map((recipe, index) => (
                      <button
                        key={`${recipe.ranking}-${recipe.recipe_name}`}
                        type="button"
                        className={trendIndicatorButton}
                        onClick={() => handleSelectRecipe(index)}
                        aria-label={`View trending recipe ${recipe.recipe_name}`}
                        aria-pressed={index === currentRecipeIndex}
                      >
                        <span
                          className={
                            index === currentRecipeIndex ? dotActive : dot
                          }
                          aria-hidden
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </article>
        </section>

        <section className={ctaGrid}>
          {ctaItems.map((item) => (
            <Link key={item.id} to={item.to} className={ctaCard}>
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
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
