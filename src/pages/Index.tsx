
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";
import { institutions } from "@/data/educationData";

const Index = () => {
  const { t } = useLanguage();

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-mauritania-green/10 via-mauritania-yellow/10 to-mauritania-red/10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 heading-gradient">
              {t('home.welcome')}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-foreground/80">
              {t('home.subtitle')}
            </p>
            <Link to="/education-guide">
              <Button size="lg">
                {t('home.explore')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Education Guide */}
            <Link to="/education-guide">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t('nav.educationGuide')}</h3>
                  <p className="text-sm text-foreground/70">
                    {t('nav.educationGuide')}
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Activities */}
            <Link to="/activities">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t('nav.activities')}</h3>
                  <p className="text-sm text-foreground/70">
                    {t('activities.subtitle')}
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* WhatsApp Groups */}
            <Link to="/whatsapp-groups">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t('nav.whatsappGroups')}</h3>
                  <p className="text-sm text-foreground/70">
                    {t('whatsapp.subtitle')}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Institutions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">{t('nav.educationGuide')}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {institutions.slice(0, 8).map((institution) => (
              <Link to={`/education-guide#${institution.id}`} key={institution.id}>
                <Card className="card-hover h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium">{institution.name.ar}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/education-guide">
              <Button variant="outline">
                {t('general.readMore')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">{t('nav.about')}</h2>
            <p className="mb-6 text-foreground/80">
              {t('about.content').substring(0, 300)}...
            </p>
            <Link to="/about">
              <Button variant="outline">
                {t('general.readMore')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
