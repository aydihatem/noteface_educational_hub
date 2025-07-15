import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [activeRole, setActiveRole] = useState(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const heroContent = {
    en: {
      title: "Where Knowledge Meets Heart",
      subtitle: "Discover educational resources that honor tradition while embracing growth",
      description: "Your trusted bridge to transformative learning experiences across Islamic studies, literature, and scientific exploration.",
      cta: "Start Exploring"
    },
    ar: {
      title: "حيث تلتقي المعرفة بالقلب",
      subtitle: "اكتشف الموارد التعليمية التي تكرم التقليد وتحتضن النمو",
      description: "جسرك الموثوق إلى تجارب التعلم التحويلية عبر الدراسات الإسلامية والأدب والاستكشاف العلمي.",
      cta: "ابدأ الاستكشاف"
    },
    ur: {
      title: "جہاں علم دل سے ملتا ہے",
      subtitle: "تعلیمی وسائل دریافت کریں جو روایت کا احترام کرتے ہوئے ترقی کو اپناتے ہیں",
      description: "اسلامی مطالعات، ادب، اور سائنسی تحقیق میں تبدیلی لانے والے تعلیمی تجربات کا آپ کا قابل اعتماد پل۔",
      cta: "تلاش شروع کریں"
    },
    fr: {
      title: "Où la Connaissance Rencontre le Cœur",
      subtitle: "Découvrez des ressources éducatives qui honorent la tradition tout en embrassant la croissance",
      description: "Votre pont de confiance vers des expériences d'apprentissage transformatrices à travers les études islamiques, la littérature et l'exploration scientifique.",
      cta: "Commencer l\'Exploration"
    }
  };

  const roleCards = [
    {
      id: 'teachers',
      title: currentLanguage === 'ar' ? 'للمعلمين' : currentLanguage === 'ur' ? 'اساتذہ کے لیے' : currentLanguage === 'fr' ? 'Pour les Enseignants' : 'For Teachers',
      description: currentLanguage === 'ar' ? 'موارد تعليمية متخصصة وأدوات تخطيط المناهج' : currentLanguage === 'ur' ? 'خصوصی تعلیمی وسائل اور نصاب کی منصوبہ بندی کے آلات' : currentLanguage === 'fr' ? 'Ressources pédagogiques spécialisées et outils de planification' : 'Specialized educational resources and curriculum planning tools',
      icon: 'GraduationCap',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop',
      link: '/teacher-resource-center-professional-hub',
      color: 'bg-primary'
    },
    {
      id: 'parents',
      title: currentLanguage === 'ar' ? 'للآباء' : currentLanguage === 'ur' ? 'والدین کے لیے' : currentLanguage === 'fr' ? 'Pour les Parents' : 'For Parents',
      description: currentLanguage === 'ar' ? 'هدايا تعليمية مدروسة ومناسبة للعمر' : currentLanguage === 'ur' ? 'عمر کے مطابق تعلیمی تحائف اور وسائل' : currentLanguage === 'fr' ? 'Cadeaux éducatifs réfléchis et adaptés à l\'âge' : 'Thoughtful educational gifts and age-appropriate resources',
      icon: 'Heart',
      image: 'https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?w=400&h=300&fit=crop',
      link: '/gift-creation-studio-personalization-experience',
      color: 'bg-secondary'
    },
    {
      id: 'students',
      title: currentLanguage === 'ar' ? 'للطلاب' : currentLanguage === 'ur' ? 'طلباء کے لیے' : currentLanguage === 'fr' ? 'Pour les Étudiants' : 'For Students',
      description: currentLanguage === 'ar' ? 'اكتشف عوالم المعرفة والتعلم التفاعلي' : currentLanguage === 'ur' ? 'علم کی دنیا اور انٹرایکٹو سیکھنے کی دریافت' : currentLanguage === 'fr' ? 'Découvrez des mondes de connaissance et d\'apprentissage interactif' : 'Discover worlds of knowledge and interactive learning',
      icon: 'BookOpen',
      image: 'https://images.pixabay.com/photo/2016/11/29/06/15/student-1867758_1280.jpg?w=400&h=300&fit=crop',
      link: '/product-categories-knowledge-universe',
      color: 'bg-accent'
    },
    {
      id: 'gifts',
      title: currentLanguage === 'ar' ? 'باحثو الهدايا' : currentLanguage === 'ur' ? 'تحفہ تلاش کرنے والے' : currentLanguage === 'fr' ? 'Chercheurs de Cadeaux' : 'Gift Seekers',
      description: currentLanguage === 'ar' ? 'دفاتر مخصصة وهدايا تعليمية ذات معنى' : currentLanguage === 'ur' ? 'ذاتی نوٹ بکس اور بامعنی تعلیمی تحائف' : currentLanguage === 'fr' ? 'Carnets personnalisés et cadeaux éducatifs significatifs' : 'Personalized notebooks and meaningful educational gifts',
      icon: 'Gift',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      link: '/gift-creation-studio-personalization-experience',
      color: 'bg-success'
    }
  ];

  const handleRoleHover = (roleId) => {
    setActiveRole(roleId);
  };

  const handleRoleLeave = () => {
    setActiveRole(null);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-surface-warm to-primary/5 pt-20 lg:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container-educational relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Hero Content */}
          <div className={`space-y-8 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`}>
            {/* Logo Integration */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-educational-strong">
                  <Icon name="BookOpen" size={32} color="white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={12} color="var(--color-text-primary)" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-primary">
                  Noteface
                </span>
                <span className="text-sm text-text-secondary font-medium -mt-1">
                  {currentLanguage === 'ar' ? 'مركز تعليمي' : currentLanguage === 'ur' ? 'تعلیمی مرکز' : currentLanguage === 'fr' ? 'Hub Éducatif' : 'Educational Hub'}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="hero-text text-shadow-soft">
                {heroContent[currentLanguage].title}
              </h1>
              
              <p className="text-xl lg:text-2xl text-text-secondary font-medium leading-relaxed">
                {heroContent[currentLanguage].subtitle}
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                {heroContent[currentLanguage].description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="default"
                size="lg"
                iconName="BookOpen"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 shadow-educational-strong hover-lift"
              >
                {heroContent[currentLanguage].cta}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary/5"
              >
                {currentLanguage === 'ar' ? 'شاهد العرض التوضيحي' : currentLanguage === 'ur' ? 'ڈیمو دیکھیں' : currentLanguage === 'fr' ? 'Voir la Démo' : 'Watch Demo'}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8 border-t border-border">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} color="var(--color-success)" />
                <span className="text-sm text-text-secondary">
                  {currentLanguage === 'ar' ? 'موثوق تعليمياً' : currentLanguage === 'ur' ? 'تعلیمی طور پر قابل اعتماد' : currentLanguage === 'fr' ? 'Approuvé Éducativement' : 'Educationally Trusted'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={20} color="var(--color-primary)" />
                <span className="text-sm text-text-secondary">
                  {currentLanguage === 'ar' ? 'متعدد الثقافات' : currentLanguage === 'ur' ? 'کثیر الثقافتی' : currentLanguage === 'fr' ? 'Multiculturel' : 'Multicultural'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} color="var(--color-accent)" />
                <span className="text-sm text-text-secondary">
                  {currentLanguage === 'ar' ? 'معتمد' : currentLanguage === 'ur' ? 'تصدیق شدہ' : currentLanguage === 'fr' ? 'Certifié' : 'Certified'}
                </span>
              </div>
            </div>
          </div>

          {/* Role-Based Entry Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {roleCards.map((role) => (
              <Link
                key={role.id}
                to={role.link}
                className="group block"
                onMouseEnter={() => handleRoleHover(role.id)}
                onMouseLeave={handleRoleLeave}
              >
                <div className={`card-educational p-6 h-full transition-all duration-300 hover-lift ${
                  activeRole === role.id ? 'shadow-educational-strong scale-105' : ''
                }`}>
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={role.image}
                      alt={role.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute top-3 right-3 w-10 h-10 ${role.color} rounded-lg flex items-center justify-center shadow-educational`}>
                      <Icon name={role.icon} size={20} color="white" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {role.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span className="mr-2">
                        {currentLanguage === 'ar' ? 'استكشف' : currentLanguage === 'ur' ? 'دریافت کریں' : currentLanguage === 'fr' ? 'Explorer' : 'Explore'}
                      </span>
                      <Icon name="ArrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;