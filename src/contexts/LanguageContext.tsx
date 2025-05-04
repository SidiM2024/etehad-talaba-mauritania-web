
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  // Navigation
  'nav.home': {
    ar: 'الرئيسية',
    fr: 'Accueil'
  },
  'nav.educationGuide': {
    ar: 'دليل التعليم',
    fr: 'Guide Éducatif'
  },
  'nav.registration': {
    ar: 'الإستمارة والتوجيه',
    fr: 'Formulaire et Orientation'
  },
  'nav.whatsappGroups': {
    ar: 'المجموعات الواتسابية',
    fr: 'Groupes WhatsApp'
  },
  'nav.resources': {
    ar: 'المراجع والدروس',
    fr: 'Ressources et Cours'
  },
  'nav.schedules': {
    ar: 'الجداول',
    fr: 'Horaires'
  },
  'nav.activities': {
    ar: 'الأنشطة الطلابية',
    fr: 'Activités Étudiantes'
  },
  'nav.about': {
    ar: 'عن الإتحاد',
    fr: 'À Propos de l\'Union'
  },
  
  // Home Page
  'home.welcome': {
    ar: 'مرحباً بكم في الاتحاد العام للطلاب الموريتانيين',
    fr: 'Bienvenue à l\'Union Générale des Étudiants Mauritaniens'
  },
  'home.subtitle': {
    ar: 'نتمنى لكم حياة جامعية مليئة بالنجاح والتفوق',
    fr: 'Nous vous souhaitons une vie universitaire pleine de succès et d\'excellence'
  },
  'home.explore': {
    ar: 'استكشف المزيد',
    fr: 'Explorer Plus'
  },
  
  // WhatsApp Groups
  'whatsapp.title': {
    ar: 'المجموعات الواتسابية',
    fr: 'Groupes WhatsApp'
  },
  'whatsapp.subtitle': {
    ar: 'انضم إلى مجموعات الواتساب الخاصة بكليتك',
    fr: 'Rejoignez les groupes WhatsApp de votre faculté'
  },
  'whatsapp.phone': {
    ar: 'رقم الهاتف',
    fr: 'Numéro de téléphone'
  },
  'whatsapp.bacNumber': {
    ar: 'رقم الباكالوريا',
    fr: 'Numéro de Baccalauréat'
  },
  'whatsapp.submit': {
    ar: 'إرسال',
    fr: 'Envoyer'
  },
  'whatsapp.success': {
    ar: 'تم إرسال المعلومات بنجاح ✓',
    fr: 'Informations envoyées avec succès ✓'
  },
  
  // Resources
  'resources.title': {
    ar: 'المراجع والدروس',
    fr: 'Ressources et Cours'
  },
  'resources.subtitle': {
    ar: 'مراجع ودروس لجميع الكليات والمعاهد',
    fr: 'Ressources et cours pour toutes les facultés et instituts'
  },
  'resources.comingSoon': {
    ar: 'سيتم إضافة الأرشيف قريبًا 📚 ✨',
    fr: 'L\'archive sera ajoutée prochainement 📚 ✨'
  },
  
  // Schedules
  'schedules.title': {
    ar: 'الجداول الدراسية',
    fr: 'Horaires des Cours'
  },
  'schedules.subtitle': {
    ar: 'جداول دراسية لجميع الكليات والمعاهد',
    fr: 'Horaires de cours pour toutes les facultés et instituts'
  },
  'schedules.comingSoon': {
    ar: 'سيتم إضافة الجداول الدراسية قريبًا 📅 ✨',
    fr: 'Les horaires seront ajoutés prochainement 📅 ✨'
  },
  
  // Activities
  'activities.title': {
    ar: 'الأنشطة الطلابية',
    fr: 'Activités Étudiantes'
  },
  'activities.subtitle': {
    ar: 'تنظيم الأنشطة والفعاليات الثقافية والرياضية والإجتماعية التي تسهم في تنمية شخصية الطالب',
    fr: 'Organisation d\'activités culturelles, sportives et sociales qui contribuent au développement de la personnalité de l\'étudiant'
  },
  'activities.cultural': {
    ar: 'الأنشطة الثقافية',
    fr: 'Activités Culturelles'
  },
  'activities.sports': {
    ar: 'الأنشطة الرياضية',
    fr: 'Activités Sportives'
  },
  'activities.social': {
    ar: 'الأنشطة الإجتماعية',
    fr: 'Activités Sociales'
  },
  
  // About
  'about.title': {
    ar: 'عن الإتحاد',
    fr: 'À Propos de l\'Union'
  },
  'about.content': {
    ar: 'الاتحاد العام للطلاب الموريتانين أول نقابة طلابية تم ترخيصها تحت البند 058 _ 2006 .. تمارس أنشطتها الطلابية والنقابية على عموم مؤسسات التعليم العالي الوطنية ولها روابط وعلاقات وثيقة مع الاتحادات والروابط الطلابية في الخارج. يصل مناضلو الاتحاد الليل بالنهار من أجل خدمة الطلاب وتذليل الصعاب أمامهم ويدافع عن القضية الطلابية وذلك صيانة للمكتسبات وفرضا لانتزاع الحقوق ويقدم الاتحاد العام خطة سنوية شاملة محتوية على جوانب خدمية وأكاديمية وترفيهية',
    fr: 'L\'Union Générale des Étudiants Mauritaniens est le premier syndicat étudiant autorisé sous l\'article 058 - 2006. Elle exerce ses activités étudiantes et syndicales dans toutes les institutions d\'enseignement supérieur nationales et entretient des liens et des relations étroites avec les unions et associations étudiantes à l\'étranger. Les militants de l\'Union travaillent jour et nuit pour servir les étudiants, surmonter les difficultés auxquelles ils sont confrontés et défendre la cause étudiante, préservant ainsi les acquis et imposant la revendication des droits. L\'Union Générale présente un plan annuel complet comprenant des aspects de service, académiques et récréatifs.'
  },
  
  // General
  'general.readMore': {
    ar: 'قراءة المزيد',
    fr: 'Lire Plus'
  },
  'general.close': {
    ar: 'إغلاق',
    fr: 'Fermer'
  },
  'general.switchToArabic': {
    ar: 'العربية',
    fr: 'العربية'
  },
  'general.switchToFrench': {
    ar: 'Français',
    fr: 'Français'
  }
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  // Function to translate text based on current language
  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  useEffect(() => {
    // Update HTML lang and dir attributes when language changes
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Add appropriate text direction class to body
    document.body.classList.toggle('rtl', language === 'ar');
    document.body.classList.toggle('ltr', language === 'fr');
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
