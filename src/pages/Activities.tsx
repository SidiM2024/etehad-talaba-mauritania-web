
import { useLanguage } from "@/contexts/LanguageContext";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Music, Users } from "lucide-react";

const Activities = () => {
  const { language, t } = useLanguage();

  const culturalActivities = [
    {
      title: language === 'ar' ? "المسابقات الثقافية" : "Concours Culturels",
      description: language === 'ar' 
        ? "مسابقات متنوعة في مجالات الأدب والفنون والمعرفة العامة لتشجيع المواهب الطلابية" 
        : "Concours variés dans les domaines de la littérature, des arts et des connaissances générales pour encourager les talents étudiants",
      icon: <Music className="h-8 w-8 text-accent mb-2" />
    },
    {
      title: language === 'ar' ? "المعارض والفعاليات" : "Expositions et Événements",
      description: language === 'ar'
        ? "معارض فنية وفعاليات ثقافية تبرز إبداعات الطلاب وتساهم في إثراء الحياة الجامعية"
        : "Expositions artistiques et événements culturels qui mettent en valeur la créativité des étudiants et contribuent à enrichir la vie universitaire",
      icon: <Calendar className="h-8 w-8 text-accent mb-2" />
    },
    {
      title: language === 'ar' ? "المحاضرات والندوات" : "Conférences et Séminaires",
      description: language === 'ar'
        ? "محاضرات وندوات في مختلف المجالات لتوسيع آفاق المعرفة وتبادل الخبرات"
        : "Conférences et séminaires dans divers domaines pour élargir les horizons de connaissance et échanger des expériences",
      icon: <Users className="h-8 w-8 text-accent mb-2" />
    }
  ];

  const sportsActivities = [
    {
      title: language === 'ar' ? "بطولات كرة القدم" : "Tournois de Football",
      description: language === 'ar'
        ? "بطولات كرة قدم بين الكليات والمعاهد لتعزيز روح المنافسة والتعاون بين الطلاب"
        : "Tournois de football entre facultés et instituts pour promouvoir l'esprit de compétition et de coopération entre les étudiants",
      icon: <Calendar className="h-8 w-8 text-accent mb-2" />
    },
    {
      title: language === 'ar' ? "الألعاب الرياضية المتنوعة" : "Sports Variés",
      description: language === 'ar'
        ? "أنشطة رياضية متنوعة تشمل كرة السلة والطائرة وألعاب القوى لتشجيع اللياقة البدنية"
        : "Activités sportives variées incluant basketball, volleyball et athlétisme pour encourager la forme physique",
      icon: <Users className="h-8 w-8 text-accent mb-2" />
    }
  ];

  const socialActivities = [
    {
      title: language === 'ar' ? "حملات التوعية والتطوع" : "Campagnes de Sensibilisation et Bénévolat",
      description: language === 'ar'
        ? "مبادرات اجتماعية وتطوعية لخدمة المجتمع وتعزيز المسؤولية الاجتماعية لدى الطلاب"
        : "Initiatives sociales et bénévoles pour servir la communauté et promouvoir la responsabilité sociale chez les étudiants",
      icon: <Users className="h-8 w-8 text-accent mb-2" />
    },
    {
      title: language === 'ar' ? "الرحلات والأنشطة الترفيهية" : "Excursions et Activités Récréatives",
      description: language === 'ar'
        ? "رحلات ترفيهية وأنشطة اجتماعية لتخفيف ضغوط الدراسة وبناء علاقات اجتماعية"
        : "Excursions récréatives et activités sociales pour réduire le stress académique et construire des relations sociales",
      icon: <Calendar className="h-8 w-8 text-accent mb-2" />
    },
    {
      title: language === 'ar' ? "حفلات التعارف واستقبال الطلاب الجدد" : "Cérémonies d'Accueil des Nouveaux Étudiants",
      description: language === 'ar'
        ? "فعاليات لاستقبال وتعريف الطلاب الجدد بالحياة الجامعية وتسهيل اندماجهم"
        : "Événements pour accueillir et familiariser les nouveaux étudiants avec la vie universitaire et faciliter leur intégration",
      icon: <Music className="h-8 w-8 text-accent mb-2" />
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4 text-center heading-gradient">
          {t('activities.title')}
        </h1>
        
        <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
          {t('activities.subtitle')}
        </p>
        
        <Tabs defaultValue="cultural" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cultural">{t('activities.cultural')}</TabsTrigger>
            <TabsTrigger value="sports">{t('activities.sports')}</TabsTrigger>
            <TabsTrigger value="social">{t('activities.social')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cultural" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {culturalActivities.map((activity, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center">
                      {activity.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                    <p className="text-sm text-foreground/70">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sports" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sportsActivities.map((activity, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center">
                      {activity.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                    <p className="text-sm text-foreground/70">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="social" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialActivities.map((activity, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center">
                      {activity.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                    <p className="text-sm text-foreground/70">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Activities;
