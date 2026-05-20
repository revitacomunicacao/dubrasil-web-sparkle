import { useQuery } from "@tanstack/react-query";
import { fetchHomePageContent } from "@/lib/cms-api";
import { CMS_HOME_FALLBACK } from "@/lib/cms-fallback";
import type { HomePageContent } from "@/types/cms";

export function useHomePage() {
  return useQuery({
    queryKey: ["cms", "home"],
    queryFn: fetchHomePageContent,
    placeholderData: CMS_HOME_FALLBACK,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
}

export function useHomePageContent(): HomePageContent {
  const { data } = useHomePage();
  return data ?? CMS_HOME_FALLBACK;
}
