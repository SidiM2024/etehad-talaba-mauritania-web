
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('nav.about')}
            </h3>
            <p className="text-sm text-primary-foreground/80">
              {t('about.content').substring(0, 150)}...
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('nav.home')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="/education-guide" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('nav.educationGuide')}
                </a>
              </li>
              <li>
                <a href="/activities" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('nav.activities')}
                </a>
              </li>
              <li>
                <a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('nav.about')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('nav.whatsappGroups')}
            </h3>
            <div className="space-y-2">
              <a 
                href="/whatsapp-groups" 
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="mailto:contact@ugem.mr" 
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                contact@ugem.mr
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-4 text-sm text-primary-foreground/70 text-center">
          <p>© {currentYear} UGEM - {t('about.title')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
