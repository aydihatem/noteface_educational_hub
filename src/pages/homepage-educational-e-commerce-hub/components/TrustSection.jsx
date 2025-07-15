import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSection = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const trustContent = {
    en: {
      title: "Trusted by Educators Worldwide",
      subtitle: "Join thousands of teachers, parents, and students who trust Noteface for quality educational resources",
      stats: {
        teachers: "Teachers",
        students: "Students",
        resources: "Resources",
        countries: "Countries"
      }
    },
    ar: {
      title: "موثوق من قبل المعلمين في جميع أنحاء العالم",
      subtitle: "انضم إلى آلاف المعلمين والآباء والطلاب الذين يثقون في نوت فيس للحصول على موارد تعليمية عالية الجودة",
      stats: {
        teachers: "معلم",
        students: "طالب",
        resources: "مورد",
        countries: "دولة"
      }
    },
    ur: {
      title: "دنیا بھر کے اساتذہ کا اعتماد",
      subtitle: "ہزاروں اساتذہ، والدین، اور طلباء کے ساتھ شامل ہوں جو معیاری تعلیمی وسائل کے لیے نوٹ فیس پر بھروسہ کرتے ہیں",
      stats: {
        teachers: "اساتذہ",
        students: "طلباء",
        resources: "وسائل",
        countries: "ممالک"
      }
    },
    fr: {
      title: "Approuvé par les Éducateurs du Monde Entier",
      subtitle: "Rejoignez des milliers d'enseignants, parents et étudiants qui font confiance à Noteface pour des ressources éducatives de qualité",
      stats: {
        teachers: "Enseignants",
        students: "Étudiants",
        resources: "Ressources",
        countries: "Pays"
      }
    }
  };

  const statistics = [
    { number: "15,000+", key: "teachers", icon: "GraduationCap", color: "text-primary" },
    { number: "50,000+", key: "students", icon: "Users", color: "text-secondary" },
    { number: "2,500+", key: "resources", icon: "BookOpen", color: "text-accent" },
    { number: "45+", key: "countries", icon: "Globe", color: "text-success" }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Dr. Aisha Rahman",
      role: {
        en: "Islamic Studies Teacher",
        ar: "معلمة الدراسات الإسلامية",
        ur: "اسلامی مطالعات کی استاذہ",
        fr: "Professeure d\'Études Islamiques"
      },
      school: "Al-Noor Academy",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: {
        en: "Noteface has transformed how I teach Islamic studies. The resources are authentic, age-appropriate, and my students are more engaged than ever.",
        ar: "لقد غيّر نوت فيس طريقة تدريسي للدراسات الإسلامية. الموارد أصيلة ومناسبة للعمر وطلابي أكثر تفاعلاً من أي وقت مضى.",
        ur: "نوٹ فیس نے میرے اسلامی مطالعات پڑھانے کے طریقے کو تبدیل کر دیا ہے۔ وسائل مستند، عمر کے مطابق ہیں اور میرے طلباء پہلے سے کہیں زیادہ دلچسپی لے رہے ہیں۔",
        fr: "Noteface a transformé ma façon d'enseigner les études islamiques. Les ressources sont authentiques, adaptées à l'âge et mes étudiants sont plus engagés que jamais."
      },
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: {
        en: "Parent & Homeschool Educator",
        ar: "والدة ومعلمة منزلية",
        ur: "والدہ اور گھریلو تعلیم کی استاذہ",
        fr: "Parent & Éducatrice à Domicile"
      },
      school: "Homeschool Network",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: {
        en: "The personalized notebooks from Noteface made perfect gifts for my children. They're not just beautiful, but educationally meaningful too.",
        ar: "الدفاتر المخصصة من نوت فيس كانت هدايا مثالية لأطفالي. إنها ليست جميلة فحسب، بل ذات معنى تعليمي أيضاً.",
        ur: "نوٹ فیس کی ذاتی نوٹ بکس میرے بچوں کے لیے بہترین تحائف تھیں۔ یہ نہ صرف خوبصورت ہیں بلکہ تعلیمی طور پر بھی بامعنی ہیں۔",
        fr: "Les carnets personnalisés de Noteface ont fait des cadeaux parfaits pour mes enfants. Ils ne sont pas seulement beaux, mais aussi éducativement significatifs."
      },
      rating: 5
    },
    {
      id: 3,
      name: "Ahmed Al-Mansouri",
      role: {
        en: "Literature Professor",
        ar: "أستاذ الأدب",
        ur: "ادب کے پروفیسر",
        fr: "Professeur de Littérature"
      },
      school: "University of Dubai",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: {
        en: "The literature collection at Noteface bridges traditional and contemporary works beautifully. My students appreciate the cultural sensitivity.",
        ar: "مجموعة الأدب في نوت فيس تربط بين الأعمال التقليدية والمعاصرة بشكل جميل. طلابي يقدرون الحساسية الثقافية.",
        ur: "نوٹ فیس کا ادبی مجموعہ روایتی اور جدید کاموں کو خوبصورتی سے جوڑتا ہے۔ میرے طلباء ثقافتی حساسیت کی تعریف کرتے ہیں۔",
        fr: "La collection littéraire de Noteface fait le pont entre les œuvres traditionnelles et contemporaines magnifiquement. Mes étudiants apprécient la sensibilité culturelle."
      },
      rating: 5
    }
  ];

  const partnerships = [
    {
      name: "Islamic Education Foundation",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      type: "certification"
    },
    {
      name: "Global Literature Society",
      logo: "https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?w=120&h=60&fit=crop",
      type: "partnership"
    },
    {
      name: "Educational Excellence Award",
      logo: "https://images.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png?w=120&h=60&fit=crop",
      type: "award"
    },
    {
      name: "Cultural Authenticity Seal",
      logo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=120&h=60&fit=crop",
      type: "certification"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-educational">
        {/* Section Header */}
        <div className={`text-center mb-16 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {trustContent[currentLanguage].title}
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {trustContent[currentLanguage].subtitle}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-')}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon name={stat.icon} size={32} className={stat.color} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-text-secondary font-medium">
                {trustContent[currentLanguage].stats[stat.key]}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            {currentLanguage === 'ar' ? 'ما يقوله المعلمون' : currentLanguage === 'ur' ? 'اساتذہ کیا کہتے ہیں' : currentLanguage === 'fr' ? 'Ce que Disent les Enseignants' : 'What Educators Say'}
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card-educational p-6 bg-surface-warm">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-text-secondary">{testimonial.role[currentLanguage]}</p>
                    <p className="text-xs text-text-secondary">{testimonial.school}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                  ))}
                </div>
                
                <blockquote className={`text-text-secondary italic leading-relaxed ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`}>
                  "{testimonial.quote[currentLanguage]}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Partnerships & Certifications */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            {currentLanguage === 'ar' ? 'شراكات وشهادات موثوقة' : currentLanguage === 'ur' ? 'قابل اعتماد شراکت داریاں اور سرٹیفیکیشنز' : currentLanguage === 'fr' ? 'Partenariats et Certifications de Confiance' : 'Trusted Partnerships & Certifications'}
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {partnerships.map((partner, index) => (
              <div key={index} className="flex flex-col items-center space-y-3">
                <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-xs text-text-secondary text-center leading-tight">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} color="var(--color-success)" />
              <span className="text-sm text-text-secondary">
                {currentLanguage === 'ar' ? 'دفع آمن' : currentLanguage === 'ur' ? 'محفوظ ادائیگی' : currentLanguage === 'fr' ? 'Paiement Sécurisé' : 'Secure Payment'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Truck" size={20} color="var(--color-primary)" />
              <span className="text-sm text-text-secondary">
                {currentLanguage === 'ar' ? 'شحن مجاني' : currentLanguage === 'ur' ? 'مفت ڈیلیوری' : currentLanguage === 'fr' ? 'Livraison Gratuite' : 'Free Shipping'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="RotateCcw" size={20} color="var(--color-accent)" />
              <span className="text-sm text-text-secondary">
                {currentLanguage === 'ar' ? 'إرجاع سهل' : currentLanguage === 'ur' ? 'آسان واپسی' : currentLanguage === 'fr' ? 'Retour Facile' : 'Easy Returns'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Headphones" size={20} color="var(--color-warning)" />
              <span className="text-sm text-text-secondary">
                {currentLanguage === 'ar' ? 'دعم 24/7' : currentLanguage === 'ur' ? '24/7 سپورٹ' : currentLanguage === 'fr' ? 'Support 24/7' : '24/7 Support'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;