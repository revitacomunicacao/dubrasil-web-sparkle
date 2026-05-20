import { parseHomePage } from "@/lib/cms-parser";
import type { CmsApiResponse, HomePageContent } from "@/types/cms";

export const CMS_HOME_API_URL =
  import.meta.env.VITE_CMS_HOME_API_URL ??
  "https://revitacomunicacao.com.br/admindbs/api/pages/home";

export async function fetchHomePageContent(): Promise<HomePageContent> {
  const res = await fetch(CMS_HOME_API_URL);

  if (!res.ok) {
    throw new Error(`CMS home: HTTP ${res.status}`);
  }

  const json = (await res.json()) as CmsApiResponse;

  if (!json.success || !json.data) {
    throw new Error(json.message || "CMS home: resposta inválida");
  }

  return parseHomePage(json.data);
}
