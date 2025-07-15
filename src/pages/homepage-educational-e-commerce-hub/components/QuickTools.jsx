import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const QuickTools = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [giftRecipientAge, setGiftRecipientAge] = useState('');
  const [curriculumSubject, setCurriculumSubject] = useState('');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const toolsContent = {
    en: {
      title: "Quick Educational Tools",
      subtitle: "Fast-track your educational journey with our instant tools",
      giftCreator: {
        title: "Quick Gift Creator",
        description: "Create personalized educational gifts in minutes",
        ageLabel: "Recipient\'s Age",
        agePlaceholder: "Enter age (e.g., 8)",
        button: "Create Gift"
      },
      curriculumFinder: {
        title: "Curriculum Finder",
        description: "Find resources aligned with your teaching needs",
        subjectLabel: "Subject Area",
        subjectPlaceholder: "Enter subject (e.g., Islamic Studies)",
        button: "Find Resources"
      }
    },
    ar: {
      title: "أدوات تعليمية سريعة",
      subtitle: "سرّع رحلتك التعليمية بأدواتنا الفورية",
      giftCreator: {
        title: "منشئ الهدايا السريع",
        description: "أنشئ هدايا تعليمية مخصصة في دقائق",
        ageLabel: "عمر المستلم",
        agePlaceholder: "أدخل العمر (مثال: 8)",
        button: "إنشاء هدية"
      },
      curriculumFinder: {
        title: "باحث المناهج",
        description: "اعثر على موارد متوافقة مع احتياجاتك التعليمية",
        subjectLabel: "مجال الموضوع",
        subjectPlaceholder: "أدخل الموضوع (مثال: الدراسات الإسلامية)",
        button: "البحث عن الموارد"
      }
    },
    ur: {
      title: "فوری تعلیمی آلات",
      subtitle: "ہمارے فوری آلات کے ساتھ اپنے تعلیمی سفر کو تیز کریں",
      giftCreator: {
        title: "فوری تحفہ بنانے والا",
        description: "منٹوں میں ذاتی تعلیمی تحائف بنائیں",
        ageLabel: "وصول کنندہ کی عمر",
        agePlaceholder: "عمر درج کریں (مثال: 8)",
        button: "تحفہ بنائیں"
      },
      curriculumFinder: {
        title: "نصاب تلاش کنندہ",
        description: "اپنی تدریسی ضروریات کے مطابق وسائل تلاش کریں",
        subjectLabel: "مضمون کا علاقہ",
        subjectPlaceholder: "مضمون درج کریں (مثال: اسلامی مطالعات)",
        button: "وسائل تلاش کریں"
      }
    },
    fr: {
      title: "Outils Éducatifs Rapides",
      subtitle: "Accélérez votre parcours éducatif avec nos outils instantanés",
      giftCreator: {
        title: "Créateur de Cadeaux Rapide",
        description: "Créez des cadeaux éducatifs personnalisés en minutes",
        ageLabel: "Âge du Destinataire",
        agePlaceholder: "Entrez l'âge (ex: 8)",
        button: "Créer un Cadeau"
      },
      curriculumFinder: {
        title: "Chercheur de Curriculum",
        description: "Trouvez des ressources alignées avec vos besoins d\'enseignement",
        subjectLabel: "Domaine de Matière",
        subjectPlaceholder: "Entrez la matière (ex: Études Islamiques)",
        button: "Trouver des Ressources"
      }
    }
  };

  const handleGiftCreation = () => {
    if (giftRecipientAge) {
      // Store the age for the gift creation page
      localStorage.setItem('giftRecipientAge', giftRecipientAge);
    }
  };

  const handleCurriculumSearch = () => {
    if (curriculumSubject) {
      // Store the subject for the teacher resource page
      localStorage.setItem('curriculumSubject', curriculumSubject);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-surface-warm">
      <div className="container-educational">
        {/* Section Header */}
        <div className={`text-center mb-12 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {toolsContent[currentLanguage].title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {toolsContent[currentLanguage].subtitle}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Quick Gift Creator */}
          <div className="card-educational p-8 bg-background">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shadow-educational">
                <Icon name="Gift" size={24} color="var(--color-text-primary)" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {toolsContent[currentLanguage].giftCreator.title}
                </h3>
                <p className="text-text-secondary">
                  {toolsContent[currentLanguage].giftCreator.description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Input
                label={toolsContent[currentLanguage].giftCreator.ageLabel}
                type="number"
                placeholder={toolsContent[currentLanguage].giftCreator.agePlaceholder}
                value={giftRecipientAge}
                onChange={(e) => setGiftRecipientAge(e.target.value)}
                min="1"
                max="18"
                className="mb-4"
              />

              <Link to="/gift-creation-studio-personalization-experience">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Sparkles"
                  iconPosition="left"
                  className="w-full bg-secondary hover:bg-secondary/90 text-text-primary"
                  onClick={handleGiftCreation}
                >
                  {toolsContent[currentLanguage].giftCreator.button}
                </Button>
              </Link>
            </div>

            {/* Quick Gift Examples */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-text-secondary mb-3">
                {currentLanguage === 'ar' ? 'أمثلة سريعة:' : currentLanguage === 'ur' ? 'فوری مثالیں:' : currentLanguage === 'fr' ? 'Exemples Rapides:' : 'Quick Examples:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {['5-7 years', '8-10 years', '11-13 years', '14+ years'].map((ageRange) => (
                  <button
                    key={ageRange}
                    onClick={() => setGiftRecipientAge(ageRange.split('-')[0])}
                    className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-md hover:bg-secondary/20 transition-colors"
                  >
                    {ageRange}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Curriculum Finder */}
          <div className="card-educational p-8 bg-background">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-educational">
                <Icon name="Search" size={24} color="white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {toolsContent[currentLanguage].curriculumFinder.title}
                </h3>
                <p className="text-text-secondary">
                  {toolsContent[currentLanguage].curriculumFinder.description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Input
                label={toolsContent[currentLanguage].curriculumFinder.subjectLabel}
                type="text"
                placeholder={toolsContent[currentLanguage].curriculumFinder.subjectPlaceholder}
                value={curriculumSubject}
                onChange={(e) => setCurriculumSubject(e.target.value)}
                className="mb-4"
              />

              <Link to="/teacher-resource-center-professional-hub">
                <Button
                  variant="default"
                  size="lg"
                  iconName="BookOpen"
                  iconPosition="left"
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handleCurriculumSearch}
                >
                  {toolsContent[currentLanguage].curriculumFinder.button}
                </Button>
              </Link>
            </div>

            {/* Quick Subject Examples */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-text-secondary mb-3">
                {currentLanguage === 'ar' ? 'مواضيع شائعة:' : currentLanguage === 'ur' ? 'مقبول مضامین:' : currentLanguage === 'fr' ? 'Sujets Populaires:' : 'Popular Subjects:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { en: 'Islamic Studies', ar: 'الدراسات الإسلامية', ur: 'اسلامی مطالعات', fr: 'Études Islamiques' },
                  { en: 'Arabic Language', ar: 'اللغة العربية', ur: 'عربی زبان', fr: 'Langue Arabe' },
                  { en: 'Literature', ar: 'الأدب', ur: 'ادب', fr: 'Littérature' },
                  { en: 'Science', ar: 'العلوم', ur: 'سائنس', fr: 'Science' }
                ].map((subject) => (
                  <button
                    key={subject.en}
                    onClick={() => setCurriculumSubject(subject[currentLanguage])}
                    className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-md hover:bg-primary/20 transition-colors"
                  >
                    {subject[currentLanguage]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-background rounded-lg shadow-educational">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} color="white" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">
              {currentLanguage === 'ar' ? 'نتائج فورية' : currentLanguage === 'ur' ? 'فوری نتائج' : currentLanguage === 'fr' ? 'Résultats Instantanés' : 'Instant Results'}
            </h4>
            <p className="text-sm text-text-secondary">
              {currentLanguage === 'ar' ? 'احصل على توصيات مخصصة في ثوانٍ' : currentLanguage === 'ur' ? 'سیکنڈوں میں ذاتی سفارشات حاصل کریں' : currentLanguage === 'fr' ? 'Obtenez des recommandations personnalisées en secondes' : 'Get personalized recommendations in seconds'}
            </p>
          </div>

          <div className="text-center p-6 bg-background rounded-lg shadow-educational">
            <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={24} color="white" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">
              {currentLanguage === 'ar' ? 'موثوق تعليمياً' : currentLanguage === 'ur' ? 'تعلیمی طور پر قابل اعتماد' : currentLanguage === 'fr' ? 'Approuvé Éducativement' : 'Educationally Trusted'}
            </h4>
            <p className="text-sm text-text-secondary">
              {currentLanguage === 'ar' ? 'جميع التوصيات معتمدة من خبراء التعليم' : currentLanguage === 'ur' ? 'تمام سفارشات تعلیمی ماہرین کی طرف سے تصدیق شدہ' : currentLanguage === 'fr' ? 'Toutes les recommandations sont approuvées par des experts éducatifs' : 'All recommendations are vetted by education experts'}
            </p>
          </div>

          <div className="text-center p-6 bg-background rounded-lg shadow-educational">
            <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} color="white" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">
              {currentLanguage === 'ar' ? 'مدعوم من المجتمع' : currentLanguage === 'ur' ? 'کمیونٹی سپورٹ' : currentLanguage === 'fr' ? 'Soutenu par la Communauté' : 'Community Supported'}
            </h4>
            <p className="text-sm text-text-secondary">
              {currentLanguage === 'ar' ? 'استفد من تجارب المعلمين والآباء الآخرين' : currentLanguage === 'ur' ? 'دوسرے اساتذہ اور والدین کے تجربات سے فائدہ اٹھائیں' : currentLanguage === 'fr' ? 'Bénéficiez des expériences d\'autres enseignants et parents' : 'Benefit from other teachers and parents experiences'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickTools;