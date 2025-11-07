import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import type { HotRecipe } from "../../types/hotRecipe";
import chefIcon from "../../assets/chef.svg";
import timer from "../../assets/timer.svg";
import arrowRight from "../../assets/arrow.svg";
import ingredients from "../../assets/ingredients.svg";
import type { HotRecipeDetail } from "../../types/hotRecipeDetail";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../lib/axios";
import {
  parseRecipeMarkup,
  type ParsedRecipe,
  type Section,
} from "../../utils/recipeMarkup";
import {
  ingredientAmount,
  ingredientItem,
  ingredientList,
  ingredientNameBadge,
  ingredientsHeading,
  ingredientsSection,
  modalContent,
  modalDescription,
  modalFooter,
  modalHeroImage,
  modalOverlay,
  modalPrimaryButton,
  modalTitle,
  modalTitleIcon,
  modalTitleIconImage,
  modalTitleLeading,
  modalTitleMainRow,
  modalTitleRow,
  modalHeader,
  modalMetaIcon,
  modalTimeChip,
} from "../../styles/trendModal.css";
import { useNavigate } from "react-router-dom";

interface TrendRecipeModalProps {
  recipe: HotRecipe;
  onClose: () => void;
}

const TrendRecipeModal = ({ recipe, onClose }: TrendRecipeModalProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const rankingNum = recipe.ranking;

  // 재료 받아오는 api
  const { data } = useQuery<HotRecipeDetail>({
    queryKey: ["hotRecipesdetail", rankingNum], // 파라미터를 키에 포함
    queryFn: async () => {
      const res = await apiClient.get<HotRecipeDetail>(
        "/api/hot-recipes/detail",
        { params: { ranking: rankingNum } } // params로 전달
      );
      return res.data;
    },
  });

  console.log(data);

  const fallbackLabel = "준비 중";

  const description = useMemo(() => {
    const detail =
      recipe.description ??
      recipe.recipe_detail_en ??
      recipe.recipe_detail_ko ??
      "";
    if (!detail) {
      return fallbackLabel;
    }

    const plain = detail
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return plain || fallbackLabel;
  }, [recipe, fallbackLabel]);

  const cookTimeLabel = useMemo(() => {
    const cookTimeRaw = recipe.cook_time ?? recipe.cook_time_minutes;
    if (cookTimeRaw == null) {
      return `time ${fallbackLabel}`;
    }

    const cookTimeString = `${cookTimeRaw}`.trim();
    if (!cookTimeString) {
      return `time ${fallbackLabel}`;
    }

    if (/^\d+$/.test(cookTimeString)) {
      return `time ${cookTimeString} min`;
    }

    return `time ${cookTimeString}`;
  }, [recipe, fallbackLabel]);

  // 상세 데이터로부터 파싱된 ingredients 섹션 얻기
  const parsedRecipe = useMemo<ParsedRecipe | null>(() => {
    const detail =
      (data && (data.recipe_detail_en ?? data.recipe_detail_ko)) ?? "";
    if (!detail) return null;
    return parseRecipeMarkup(detail);
  }, [data]);

  const ingredientsSec = useMemo<
    (Extract<Section, { ingredients: string[] }> | undefined) | undefined
  >(() => {
    if (!parsedRecipe) return undefined;
    return parsedRecipe.sections.find((sec) => "ingredients" in sec) as
      | Extract<Section, { ingredients: string[] }>
      | undefined;
  }, [parsedRecipe]);

  // 화면에 렌더할 ingredient lines (ingredientSec 우선, 없으면 recipe.ingredients 폴백)
  const ingredientLines: string[] = useMemo(() => {
    if (ingredientsSec && ingredientsSec.ingredients?.length) {
      return ingredientsSec.ingredients;
    }
    // 기존 recipe.ingredients 형식이 { name, amount }라면 name 사용
    if (recipe.ingredients && recipe.ingredients.length) {
      return recipe.ingredients
        .filter((it) => it && it.name)
        .map((it) => `${it.name}${it.amount ? " " + it.amount : ""}`);
    }
    return [];
  }, [ingredientsSec, recipe.ingredients]);

  return createPortal(
    <div
      className={modalOverlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="trend-recipe-modal-title"
      onClick={onClose}
    >
      <div
        className={modalContent}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={modalHeader}>
          <div className={modalTitleRow}>
            <div className={modalTitleMainRow}>
              <div className={modalTitleLeading}>
                <span className={modalTitleIcon} aria-hidden={true}>
                  <img src={chefIcon} alt="" className={modalTitleIconImage} />
                </span>
                <h2 id="trend-recipe-modal-title" className={modalTitle}>
                  {recipe.recipe_name}
                </h2>
              </div>
              {cookTimeLabel && (
                <span className={modalTimeChip}>
                  <span className={modalMetaIcon} aria-hidden={true}>
                    <img src={timer} alt="" />
                  </span>
                  {cookTimeLabel}
                </span>
              )}
            </div>
            {description && <p className={modalDescription}>{description}</p>}
          </div>
        </header>

        <img
          className={modalHeroImage}
          src={recipe.image_url ?? ""}
          alt={recipe.recipe_name}
          loading="lazy"
        />

        <section className={ingredientsSection} aria-label="Recipe ingredients">
          <h3 className={ingredientsHeading}>
            <img src={ingredients} alt="" /> Ingredients{" "}
          </h3>

          {ingredientLines && ingredientLines.length > 0 ? (
            <div className={ingredientList}>
              {ingredientLines.map((line, index) => {
                const trimmed = line.trim();
                const match = trimmed.match(/^(.*?)(\s*\(?\d.*)$/);
                const name = match ? match[1].trim() : trimmed;
                const amount = match
                  ? match[2].trim().replace(/^\(|\)$/g, "")
                  : "";

                return (
                  <div className={ingredientItem} key={`${name}-${index}`}>
                    <span className={ingredientNameBadge}>{name}</span>
                    {amount && (
                      <span className={ingredientAmount}>{amount}</span>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className={modalDescription}>
              Ingredient details will appear here soon.
            </p>
          )}
        </section>

        <footer className={modalFooter}>
          <button
            className={modalPrimaryButton}
            type="button"
            aria-label="Start cooking"
            onClick={() => {
              onClose(); // 모달 먼저 닫기
              // 클라이언트 라우팅을 원하면 아래 대신 router.push('/trend/ranking') 사용
              navigate(`/trend/${rankingNum}`);
            }}
          >
            <img src={arrowRight} alt="" />
          </button>
        </footer>
      </div>
    </div>,
    document.body
  );
};

export default TrendRecipeModal;
