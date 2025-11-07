/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import * as s from "./RecipeDetail.css";
import {
  parseRecipeMarkup,
  type ParsedRecipe,
  type Section,
} from "../../utils/recipeMarkup";
import StepsCarousel, { type Step } from "./StepsCarousel";
import IngredientIcon from "../../assets/ingredient-icon.svg";
import {
  DEFAULT_RANKING_IMAGE,
  getRankingImage,
} from "../../utils/rankingImage";

type Props = {
  data: {
    ranking: number;
    recipe_name?: string;
    recipe_name_ko?: string | null;
    recipe_name_en?: string | null;
    recipe_detail_ko?: string | null;
    recipe_detail_en?: string | null;
    image_url?: string | null;
    description?: string | null;
    description_ko?: string | null;
    description_en?: string | null;
    cook_time?: string | number | null;
  };
  locale?: "ko" | "en";
};

export default function RecipeDetail({
  data,
  locale: initialLocale = "ko",
}: Props) {
  const [locale, setLocale] = useState<"ko" | "en">(initialLocale);
  const recipeDetailContent =
    locale === "ko" ? data.recipe_detail_ko || "" : data.recipe_detail_en || "";
  const parsed: ParsedRecipe = parseRecipeMarkup(recipeDetailContent);

  const ingredientsSec = parsed.sections.find((sec) => "ingredients" in sec) as
    | Extract<Section, { ingredients: string[] }>
    | undefined;

  const stepsSec = parsed.sections.find((sec) => "steps" in sec) as
    | Extract<Section, { steps: Step[] }>
    | undefined;

  const tipSec = parsed.sections.find((sec) => "tip" in sec) as any;
  const recSec = parsed.sections.find((sec) => "recommendation" in sec) as any;

  // 언어별 recipe_name: parsed.title 우선, 없으면 data에서 가져오기
  const recipeName =
    parsed.title ||
    (locale === "ko"
      ? data.recipe_name_ko || data.recipe_name
      : data.recipe_name_en || data.recipe_name) ||
    "";

  // 언어별 description
  const description =
    locale === "ko"
      ? data.description_ko || data.description
      : data.description_en || data.description;

  return (
    <article className={s.wrap}>
      <h1 className={s.h1}>{recipeName}</h1>
      {description && <p className={s.sub}>{description}</p>}
      <button
        className={s.langToggle}
        type="button"
        aria-pressed={locale === "ko"}
        onClick={() => setLocale(locale === "ko" ? "en" : "ko")}
      >
        <span
          className={s.langToggleOption}
          data-active={locale === "ko" ? "true" : "false"}
        >
          kor
        </span>
        <span
          className={s.langToggleOption}
          data-active={locale === "en" ? "true" : "false"}
        >
          eng
        </span>
        <div
          className={s.langToggleSlider}
          aria-hidden
          style={{
            left: locale === "ko" ? "4px" : "calc(50% + 4px)",
          }}
        />
      </button>

      <img
        className={s.heroImg}
        src={getRankingImage(
          data.ranking,
          data.image_url ?? DEFAULT_RANKING_IMAGE
        )}
        alt={data.recipe_name}
      />

      {/* Ingredients */}
      {ingredientsSec && (
        <section>
          <div className={s.sectionTitleRow}>
            <img src={IngredientIcon} />{" "}
            {ingredientsSec.title.replace(/^\d+\.\s*/, "")}
          </div>
          <div className={s.card}>
            <div className={s.chips}>
              {ingredientsSec.ingredients.map((line, i) => {
                const trimmed = line.trim();

                // 숫자나 괄호 + 숫자로 시작하는 부분을 기준으로 나누기
                const match = trimmed.match(/^(.*?)(\s*\(?\d.*)$/);
                const name = match ? match[1].trim() : trimmed;
                const amount = match
                  ? match[2].trim().replace(/^\(|\)$/g, "")
                  : "";

                return (
                  <div key={i} className={s.ingredientPair}>
                    <span className={s.ingredientName}>{name}</span>
                    {amount && (
                      <span className={s.ingredientAmount}>{amount}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Steps - react-slick 캐러셀 */}
      {stepsSec && stepsSec.steps?.length > 0 && (
        <section style={{ marginTop: 24, marginBottom: 24 }}>
          <StepsCarousel steps={stepsSec.steps} />
        </section>
      )}

      {/* Recommendation / Tip */}
      {recSec && (
        <section>
          <div className={s.sectionTitleRow}>
            {recSec.title.replace(/^\d+\.\s*/, "")}
          </div>
          <div className={s.card}>
            {recSec.recommendation.map((r: string, i: number) => (
              <div key={i}>• {r}</div>
            ))}
          </div>
        </section>
      )}

      {tipSec && (
        <section>
          <div className={s.sectionTitleRow}>
            {tipSec.title.replace(/^\d+\.\s*/, "") ?? "💡 Tip"}
          </div>
          <div className={s.card}>{tipSec.tip}</div>
        </section>
      )}
    </article>
  );
}
