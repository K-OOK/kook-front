export interface HotRecipeIngredient {
  name: string;
  amount?: string | null;
}

export interface HotRecipe {
  ranking: number;
  recipe_name: string;
  score?: number | null;
  recipe_detail_ko?: string | null;
  recipe_detail_en?: string | null;
  image_url?: string | null;
  cook_time_minutes?: number | null;
  ingredients?: HotRecipeIngredient[] | null;
  description?: string | null;
  cook_time?: string | number | null;
}

