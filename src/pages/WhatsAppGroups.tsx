
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/components/ui/use-toast";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const WhatsAppGroups = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [phone, setPhone] = useState("");
  const [bacNumber, setBacNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Input validation
    if (!phone || !bacNumber) {
      toast({
        title: language === 'ar' ? "خطأ" : "Erreur",
        description: language === 'ar' 
          ? "يرجى ملء جميع الحقول المطلوبة"
          : "Veuillez remplir tous les champs requis",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real app, this would send the data to a server or use an email service
      // Here we're just simulating success after a delay
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success toast
      toast({
        title: language === 'ar' ? "تم بنجاح!" : "Succès!",
        description: t('whatsapp.success'),
        variant: "default",
      });
      
      // Reset form
      setPhone("");
      setBacNumber("");

      // Here you would actually send the data to the provided email:
      // sidimohameda524@gmail.com
      // Using a service like EmailJS, a backend endpoint, or a serverless function

    } catch (error) {
      toast({
        title: language === 'ar' ? "خطأ" : "Erreur",
        description: language === 'ar'
          ? "حدث خطأ أثناء إرسال النموذج. الرجاء المحاولة مرة أخرى."
          : "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4 text-center heading-gradient">
          {t('whatsapp.title')}
        </h1>
        
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
          {t('whatsapp.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Information Card */}
          <Card className="h-full">
            <CardContent className="p-6 h-full flex flex-col justify-center">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  {language === 'ar' 
                    ? "لماذا تنضم إلى مجموعاتنا؟"
                    : "Pourquoi rejoindre nos groupes ?"
                  }
                </h2>
                
                <ul className="space-y-2 list-disc list-inside text-foreground/80">
                  <li>
                    {language === 'ar'
                      ? "تواصل مع زملائك الطلاب"
                      : "Communiquer avec vos camarades étudiants"
                    }
                  </li>
                  <li>
                    {language === 'ar'
                      ? "احصل على معلومات وإشعارات مهمة"
                      : "Obtenir des informations et notifications importantes"
                    }
                  </li>
                  <li>
                    {language === 'ar'
                      ? "شارك المراجع والموارد التعليمية"
                      : "Partager des références et des ressources éducatives"
                    }
                  </li>
                  <li>
                    {language === 'ar'
                      ? "استفسر وناقش مع طلاب من نفس التخصص"
                      : "Poser des questions et discuter avec des étudiants de la même spécialité"
                    }
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          {/* Form Card */}
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    {t('whatsapp.phone')}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={language === 'ar' ? "أدخل رقم هاتفك" : "Entrez votre numéro de téléphone"}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bacNumber">
                    {t('whatsapp.bacNumber')}
                  </Label>
                  <Input
                    id="bacNumber"
                    type="text"
                    value={bacNumber}
                    onChange={(e) => setBacNumber(e.target.value)}
                    placeholder={language === 'ar' ? "أدخل رقم الباكالوريا" : "Entrez votre numéro de baccalauréat"}
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting 
                    ? (language === 'ar' ? "جاري الإرسال..." : "Envoi en cours...") 
                    : t('whatsapp.submit')
                  }
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default WhatsAppGroups;
