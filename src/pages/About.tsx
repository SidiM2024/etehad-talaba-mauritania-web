
import { useLanguage } from "@/contexts/LanguageContext";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const { language, t } = useLanguage();

  const aboutPoints = [
    {
      title: language === 'ar' ? "النشأة والترخيص" : "Fondation et Autorisation",
      content: language === 'ar'
        ? "الاتحاد العام للطلاب الموريتانين أول نقابة طلابية تم ترخيصها تحت البند 058 _ 2006"
        : "L'Union Générale des Étudiants Mauritaniens est le premier syndicat étudiant autorisé sous l'article 058 - 2006"
    },
    {
      title: language === 'ar' ? "النطاق والشراكات" : "Portée et Partenariats",
      content: language === 'ar'
        ? "تمارس أنشطتها الطلابية والنقابية على عموم مؤسسات التعليم العالي الوطنية ولها روابط وعلاقات وثيقة مع الاتحادات والروابط الطلابية في الخارج"
        : "Elle exerce ses activités étudiantes et syndicales dans toutes les institutions d'enseignement supérieur nationales et entretient des liens et des relations étroites avec les unions et associations étudiantes à l'étranger"
    },
    {
      title: language === 'ar' ? "الرسالة والأهداف" : "Mission et Objectifs",
      content: language === 'ar'
        ? "يصل مناضلو الاتحاد الليل بالنهار من أجل خدمة الطلاب وتذليل الصعاب أمامهم ويدافع عن القضية الطلابية وذلك صيانة للمكتسبات وفرضا لانتزاع الحقوق"
        : "Les militants de l'Union travaillent jour et nuit pour servir les étudiants, surmonter les difficultés auxquelles ils sont confrontés et défendre la cause étudiante, préservant ainsi les acquis et imposant la revendication des droits"
    },
    {
      title: language === 'ar' ? "الخطة السنوية" : "Plan Annuel",
      content: language === 'ar'
        ? "يقدم الاتحاد العام خطة سنوية شاملة محتوية على جوانب خدمية وأكاديمية وترفيهية"
        : "L'Union Générale présente un plan annuel complet comprenant des aspects de service, académiques et récréatifs"
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4 text-center heading-gradient">
          {t('about.title')}
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-muted p-6 rounded-lg mb-8">
            <p className="text-center text-lg italic">
              {t('about.content')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {aboutPoints.map((point, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                  <p className="text-foreground/80">{point.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                {language === 'ar' ? "اتصل بنا" : "Contactez-nous"}
              </h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Email:</span> contact@ugetm.mr
                </p>
                <p>
                  <span className="font-medium">{language === 'ar' ? "الهاتف" : "Téléphone"}:</span> +222 45 25 XX XX
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
