
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 heading-gradient">404</h1>
        <p className="text-xl text-foreground/80 mb-6">
          {language === 'ar' 
            ? "عذراً، الصفحة غير موجودة"
            : "Oops! Page non trouvée"
          }
        </p>
        <Link to="/">
          <Button>
            {language === 'ar' ? "العودة للصفحة الرئيسية" : "Retour à la page d'accueil"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
