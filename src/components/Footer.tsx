import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-lg mb-2">
              🇮🇳 Jan<span className="text-primary">Sewa</span>
            </h3>
            <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t("footer.quickLinks")}</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li><a href="https://india.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary">India.gov.in</a></li>
              <li><a href="https://pmjay.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Ayushman Bharat</a></li>
              <li><a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary">PM-KISAN</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t("footer.disclaimer")}</h4>
            <p className="text-xs text-muted-foreground">{t("footer.disclaimerText")}</p>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} JanSewa — {t("footer.madeFor")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
