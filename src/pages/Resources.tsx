
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import MainLayout from "@/components/layout/MainLayout";
import { institutions } from "@/data/educationData";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Book, FilePlus2 } from "lucide-react";

const Resources = () => {
  const { language, t } = useLanguage();
  const [selectedInstitution, setSelectedInstitution] = useState("");

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4 text-center heading-gradient">
          {t('resources.title')}
        </h1>
        
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
          {t('resources.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {institutions.map((institution) => (
            <Dialog key={institution.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer card-hover">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Book className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-medium">{institution.name[language]}</h3>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {institution.name[language]}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="flex flex-col items-center py-8 space-y-6">
                  <FilePlus2 className="h-16 w-16 text-muted-foreground" />
                  
                  <p className="text-center text-lg">
                    {t('resources.comingSoon')}
                  </p>
                </div>
                
                <DialogFooter>
                  <Button type="button" variant="outline">
                    {t('general.close')}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Resources;
