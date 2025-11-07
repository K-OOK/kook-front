const RANKING_IMAGE_BASE_URL =
  "https://smct-ht-05-kook.s3.us-east-1.amazonaws.com";
const RANKING_IMAGE_EXTENSION = ".jpg";
const RANKING_IMAGE_MAX = 15;

export const DEFAULT_RANKING_IMAGE =
  "https://images.unsplash.com/photo-1604908176997-431621d9e1d1?q=80&w=1200&auto=format&fit=crop";

const toRankingNumber = (ranking?: number | string | null) => {
  if (ranking == null) {
    return null;
  }
  const parsed =
    typeof ranking === "string" ? Number.parseInt(ranking, 10) : ranking;
  if (!Number.isFinite(parsed)) {
    return null;
  }
  if (parsed < 1 || parsed > RANKING_IMAGE_MAX) {
    return null;
  }
  return parsed;
};

export const getRankingImage = (
  ranking?: number | string | null,
  fallback: string = DEFAULT_RANKING_IMAGE
) => {
  const normalized = toRankingNumber(ranking);
  if (normalized == null) {
    return fallback;
  }
  return `${RANKING_IMAGE_BASE_URL}/${normalized}${RANKING_IMAGE_EXTENSION}`;
};


