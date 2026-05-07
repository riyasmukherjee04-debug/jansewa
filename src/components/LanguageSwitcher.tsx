import { Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES } from "@/i18n";

const LanguageSwitcher = ({ compact = false }: { compact?: boolean }) => {
  const { i18n, t } = useTranslation();
  const current =
    LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) ?? LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1.5 px-2" aria-label={t("nav.language")}>
          <Globe className="h-4 w-4" />
          <span className={compact ? "text-xs" : "text-xs font-medium"}>
            {current.native}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 bg-popover">
        <DropdownMenuLabel className="text-xs">{t("nav.language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>
              <span className="font-medium">{lang.native}</span>
              {lang.code !== "en" && (
                <span className="text-xs text-muted-foreground ml-1.5">
                  ({lang.label})
                </span>
              )}
            </span>
            {i18n.resolvedLanguage === lang.code && (
              <Check className="h-3.5 w-3.5 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
