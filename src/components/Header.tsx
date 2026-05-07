import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { t } = useTranslation();

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/schemes", label: t("nav.schemes") },
    { path: "/news", label: t("nav.news") },
    { path: "/know-india", label: t("nav.knowIndia") },
    { path: "/citizen-services", label: t("nav.services") },
    { path: "/about", label: t("nav.about") },
  ];

  const handleSignOut = async () => {
    await signOut();
    toast.success(t("nav.signOut"));
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="flex h-1">
        <div className="flex-1 bg-saffron" />
        <div className="flex-1 bg-card" />
        <div className="flex-1 bg-green-india" />
      </div>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🇮🇳</span>
          <span className="text-xl font-bold text-foreground">
            Jan<span className="text-primary">Sewa</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-1 ml-2">
              <LanguageSwitcher />
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-1" /> {t("nav.signOut")}
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-1 ml-2">
              <LanguageSwitcher />
              <Link to="/auth">
                <Button variant="outline" size="sm">
                  <LogIn className="h-4 w-4 mr-1" /> {t("nav.signIn")}
                </Button>
              </Link>
            </div>
          )}
        </nav>

        <div className="md:hidden flex items-center gap-1">
          <LanguageSwitcher compact />
          <button className="p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t bg-card p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {user ? (
            <button onClick={() => { handleSignOut(); setMobileOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-destructive hover:bg-muted">
              {t("nav.signOut")}
            </button>
          ) : (
            <Link to="/auth" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-sm font-medium text-primary hover:bg-muted">
              {t("nav.signIn")}
            </Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
