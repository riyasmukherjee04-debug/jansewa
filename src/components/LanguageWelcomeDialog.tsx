import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LANGUAGES } from "@/i18n";

const STORAGE_KEY = "jansewa_lang_chosen";

const LanguageWelcomeDialog = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const chosen = localStorage.getItem(STORAGE_KEY);
    if (!chosen) setOpen(true);
  }, []);

  const choose = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem(STORAGE_KEY, code);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => {
      // Only allow close after a choice is recorded
      if (!v && localStorage.getItem(STORAGE_KEY)) setOpen(false);
    }}>
      <DialogContent className="max-w-md" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center text-xl">
            Choose your language / अपनी भाषा चुनें
          </DialogTitle>
          <DialogDescription className="text-center">
            Select a language to continue. You can change it anytime from the header.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-2 mt-2">
          {LANGUAGES.map((lang) => (
            <Button
              key={lang.code}
              variant="outline"
              className="justify-between h-12 text-base hover:bg-primary hover:text-primary-foreground hover:border-primary"
              onClick={() => choose(lang.code)}
            >
              <span className="font-semibold">{lang.native}</span>
              <span className="text-xs opacity-70">{lang.label}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LanguageWelcomeDialog;
