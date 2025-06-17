
import React, { createContext, useContext, ReactNode } from 'react';

interface Translations {
  [key: string]: string;
}

interface LanguageContextType {
  language: 'ar' | 'fr';
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<'ar' | 'fr', Translations> = {
  ar: {
    'ring.sizer': 'مقياس الخاتم',
    'ring.sizer.description': 'اعثر على مقاس خاتمك المثالي باستخدام أدوات القياس الدقيقة لدينا',
    'tab.with.ring': 'باستخدام خاتم',
    'tab.with.finger': 'باستخدام الإصبع',
    'tab.offline': 'غير متصل',
    'ring.diameter': 'قطر الخاتم',
    'finger.width': 'عرض الإصبع',
    'diameter': 'القطر',
    'width': 'العرض',
    'circumference': 'المحيط',
    'with.ring.instruction': 'ضع خاتماً موجوداً فوق الدائرة أعلاه. اضبط القطر حتى تطابق الدائرة القطر الداخلي لخاتمك.',
    'with.finger.instruction': 'ضع إصبعك أفقياً عبر المنطقة المميزة. اضبط العرض حتى يطابق الشريط الأزرق عرض إصبعك.',
    'finger.placement.guide': 'ضع إصبعك هنا ↑',
    'printable.ring.sizer': 'مقياس خاتم قابل للطباعة',
    'download.description': 'حمّل واطبع مقياس الخاتم الخاص بنا بنسبة 100% (بدون تصغير) على ورق عادي.',
    'download.pdf': 'تحميل مقياس خاتم PDF',
    'instructions': 'التعليمات:',
    'instruction.1': 'حمّل واطبع مقياس الخاتم بنسبة 100%',
    'instruction.2': 'اقطع مقياس الخاتم على طول الخطوط المنقطة',
    'instruction.3': 'أدخل الطرف المدبب من خلال الفتحة',
    'instruction.4': 'ضعه حول إصبعك واضبطه للراحة',
    'instruction.5': 'اقرأ المقاس حيث يتداخل المقياس',
    'important': 'مهم:',
    'print.warning': 'تأكد من الطباعة بنسبة 100%. لا تستخدم "ملائم للصفحة" أو "تصغير للملائمة".'
  },
  fr: {
    'ring.sizer': 'Mesureur de Bague',
    'ring.sizer.description': 'Trouvez votre taille de bague parfaite avec nos outils de mesure précis',
    'tab.with.ring': 'Avec une Bague',
    'tab.with.finger': 'Avec un Doigt',
    'tab.offline': 'Hors ligne',
    'ring.diameter': 'Diamètre de la bague',
    'finger.width': 'Largeur du doigt',
    'diameter': 'Diamètre',
    'width': 'Largeur',
    'circumference': 'Circonférence',
    'with.ring.instruction': 'Placez une bague existante sur le cercle ci-dessus. Ajustez le diamètre jusqu\'à ce que le cercle corresponde au diamètre intérieur de votre bague.',
    'with.finger.instruction': 'Placez votre doigt horizontalement sur la zone surlignée. Ajustez la largeur jusqu\'à ce que la bande bleue corresponde à la largeur de votre doigt.',
    'finger.placement.guide': 'Placez votre doigt ici ↑',
    'printable.ring.sizer': 'Mesureur de Bague Imprimable',
    'download.description': 'Téléchargez et imprimez notre mesureur de bague à 100% d\'échelle (sans mise à l\'échelle) sur papier standard.',
    'download.pdf': 'Télécharger le PDF du Mesureur',
    'instructions': 'Instructions:',
    'instruction.1': 'Téléchargez et imprimez le mesureur de bague à 100% d\'échelle',
    'instruction.2': 'Découpez le mesureur le long des lignes pointillées',
    'instruction.3': 'Insérez l\'extrémité pointue dans la fente',
    'instruction.4': 'Placez autour de votre doigt et ajustez pour le confort',
    'instruction.5': 'Lisez la taille où le mesureur se chevauche',
    'important': 'Important:',
    'print.warning': 'Assurez-vous d\'imprimer à 100% d\'échelle. N\'utilisez pas "ajuster à la page" ou "mise à l\'échelle".'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Detect language from URL - check if it ends with /fr
  const language: 'ar' | 'fr' = window.location.pathname.endsWith('/fr') ? 'fr' : 'ar';
  const isRTL = language === 'ar';

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, isRTL }}>
      <div className={isRTL ? 'rtl' : 'ltr'} dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
