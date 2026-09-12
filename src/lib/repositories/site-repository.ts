import { SiteSettings } from "@/types/site"
import { siteSettings } from "@/data/site-settings"

export async function getSiteSettings(): Promise<SiteSettings> {
  await new Promise((resolve) => setTimeout(resolve, 50))
  return siteSettings
}
