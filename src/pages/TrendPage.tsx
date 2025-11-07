import { useCallback, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/axios";
import TrendRecipeModal from "../components/trend/TrendRecipeModal";
import timer from "../assets/timer.svg";
import {
  card,
  cardBody,
  cardDescription,
  cardGrid,
  cardImage,
  cardMeta,
  cardName,
  cardOverlay,
  emptyState,
  spinner,
  trendHeader,
  trendRoot,
  trendSubtitle,
  trendTitle,
} from "../styles/trend.css";
import type { HotRecipe } from "../types/hotRecipe";

const getRecipeDescription = (recipe: HotRecipe) => {
  const fallback = "준비 중";
  const detail = recipe.description ?? recipe.recipe_detail_en ?? recipe.recipe_detail_ko ?? "";
  if (!detail) {
    return fallback;
  }

  const plain = detail.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (!plain) {
    return fallback;
  }

  return plain.length > 90 ? `${plain.slice(0, 87)}...` : plain;
};

const getCookTimeLabel = (recipe: HotRecipe) => {
  const raw = recipe.cook_time ?? recipe.cook_time_minutes;
  if (raw == null || `${raw}`.trim() === "") {
    return "준비 중";
  }

  if (typeof raw === "number") {
    return `${raw} min`;
  }

  const trimmed = `${raw}`.trim();
  if (/^\d+$/.test(trimmed)) {
    return `${trimmed} min`;
  }

  return trimmed;
};

const TrendPage = () => {
  const { data, isLoading, isError } = useQuery<HotRecipe[]>({
    queryKey: ["hotRecipes"],
    queryFn: async () => {
      const response = await apiClient.get<HotRecipe[]>("/api/hot-recipes");
      return response.data;
    },
  });

  const [selectedRecipe, setSelectedRecipe] = useState<HotRecipe | null>(null);

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

  const handleCardSelect = useCallback((recipe: HotRecipe) => {
    setSelectedRecipe(recipe);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedRecipe(null);
  }, []);

  return (
    <div className={trendRoot}>
      <header className={trendHeader}>
        <h1 className={trendTitle}>K-FOOD on trend</h1>
        <p className={trendSubtitle}>Cook the hottest Korean food right now!</p>
      </header>

      {isLoading && <div className={spinner} aria-label="Loading hot recipes" />}

      {isError && (
        <p className={emptyState}>Unable to load trending recipes. Please try again.</p>
      )}

      {!isLoading && !isError && recipes.length === 0 && (
        <p className={emptyState}>Trending recipes will appear here soon.</p>
      )}

      {!isLoading && !isError && recipes.length > 0 && (
        <section className={cardGrid}>
          {recipes.map((recipe) => (
            <article
              key={`${recipe.ranking}-${recipe.recipe_name}`}
              className={card}
              role="button"
              tabIndex={0}
              onClick={() => handleCardSelect(recipe)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleCardSelect(recipe);
                }
              }}
              aria-haspopup="dialog"
              aria-label={`View details for ${recipe.recipe_name}`}
            >
              <img className={cardImage} src={recipe.image_url ?? ""} alt={recipe.recipe_name} loading="lazy" />
              <div className={cardOverlay} aria-hidden={true} />
              <div className={cardBody}>
                <h3 className={cardName}>{recipe.recipe_name}</h3>
                <p className={cardDescription}>{getRecipeDescription(recipe)}</p>
                <span className={cardMeta}>
                  <img src={timer} alt="" aria-hidden={true} /> {getCookTimeLabel(recipe)}
                </span>
              </div>
            </article>
          ))}
        </section>
      )}

      {selectedRecipe && <TrendRecipeModal recipe={selectedRecipe} onClose={handleCloseModal} />}
    </div>
  );
};

export default TrendPage;
