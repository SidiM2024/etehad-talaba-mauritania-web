
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import MainLayout from "@/components/layout/MainLayout";
import { institutions } from "@/data/educationData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const EducationGuide = () => {
  const { language, t } = useLanguage();
  const [expandedInstitution, setExpandedInstitution] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center heading-gradient">
          {t('nav.educationGuide')}
        </h1>
        
        <p className="text-lg mb-8 max-w-3xl mx-auto text-center text-foreground/80">
          {language === 'ar' 
            ? "دليل شامل لمؤسسات التعليم العالي في موريتانيا، يتضمن معلومات عن التخصصات المتاحة والشعب الموجهة."
            : "Guide complet des établissements d'enseignement supérieur en Mauritanie, comprenant des informations sur les spécialités disponibles et les filières orientées."
          }
        </p>

        <div className="space-y-6 max-w-4xl mx-auto">
          {institutions.map((institution) => (
            <Card 
              key={institution.id} 
              className="overflow-hidden" 
              id={institution.id}
            >
              <Accordion 
                type="single" 
                collapsible
                value={expandedInstitution === institution.id ? institution.id : undefined}
                onValueChange={(value) => setExpandedInstitution(value)}
              >
                <AccordionItem value={institution.id} className="border-none">
                  <AccordionTrigger className="px-6 py-4 bg-muted/50 hover:bg-muted transition-colors">
                    <h2 className="text-xl font-semibold text-left">
                      {institution.name[language]}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <CardContent className="space-y-4">
                      {/* Eligible Profiles */}
                      {institution.eligibleProfiles && (
                        <div className="mb-4 p-3 bg-muted rounded-md">
                          <span className="font-semibold">
                            {language === 'ar' ? "الشعب الموجهة:" : "Filières orientées:"}
                          </span>{" "}
                          {institution.eligibleProfiles[language]}
                        </div>
                      )}

                      {/* Specializations */}
                      {institution.specializations.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {institution.specializations.map((specialization) => (
                            <div 
                              key={specialization.id}
                              className="p-4 border border-border rounded-md hover:border-primary/50 transition-colors"
                            >
                              <h3 className="font-semibold mb-2">
                                {specialization.name[language]}
                              </h3>
                              {specialization.description && (
                                <p className="text-sm text-foreground/70">
                                  {specialization.description[language]}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-foreground/70 italic">
                          {language === 'ar' 
                            ? "تفاصيل التخصصات قيد الإضافة..."
                            : "Les détails des spécialités sont en cours d'ajout..."
                          }
                        </p>
                      )}
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default EducationGuide;
