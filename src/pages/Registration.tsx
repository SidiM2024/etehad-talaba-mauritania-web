
import { useLanguage } from "@/contexts/LanguageContext";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Registration = () => {
  const { language, t } = useLanguage();

  const handleRedirect = () => {
    window.location.href = "https://www.tewjih.com/rescnb-2024778sgqtsrffe45qsHusydu.php";
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4 text-center heading-gradient">
          {t('nav.registration')}
        </h1>
        
        <Card className="max-w-3xl mx-auto mt-8">
          <CardContent className="p-6 md:p-8">
            <div className="text-center space-y-6">
              <div className="bg-muted rounded-full h-24 w-24 flex items-center justify-center mx-auto">
                <ExternalLink className="h-10 w-10 text-primary" />
              </div>
              
              <h2 className="text-2xl font-semibold">
                {language === 'ar' 
                  ? "الإستمارة والتوجيه"
                  : "Formulaire et Orientation"
                }
              </h2>
              
              <p className="text-foreground/70 max-w-lg mx-auto">
                {language === 'ar' 
                  ? "سيتم تحويلك إلى نظام التسجيل والتوجيه، حيث يمكنك إكمال طلبك وإرساله."
                  : "Vous serez redirigé vers le système d'inscription et d'orientation, où vous pourrez compléter et soumettre votre demande."
                }
              </p>
              
              <Button size="lg" onClick={handleRedirect}>
                {language === 'ar'
                  ? "انتقل إلى صفحة التسجيل"
                  : "Aller à la page d'inscription"
                } <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-sm text-foreground/60">
                {language === 'ar'
                  ? "ملاحظة: سيتم توجيهك إلى موقع خارجي"
                  : "Note : Vous serez redirigé vers un site externe"
                }
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Registration;
