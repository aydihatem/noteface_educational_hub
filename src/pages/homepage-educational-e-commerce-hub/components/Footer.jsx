import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const Footer = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [email, setEmail] = useState('');
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const footerContent = {
    en: {
      tagline: "Where Knowledge Meets Heart",
      description: "Empowering educators, parents, and students with quality educational resources that honor tradition while embracing growth.",
      newsletter: {
        title: "Stay Updated",
        description: "Get the latest educational resources and insights delivered to your inbox.",
        placeholder: "Enter your email",
        button: "Subscribe"
      },
      links: {
        explore: "Explore",
        support: "Support",
        company: "Company",
        connect: "Connect"
      },
      copyright: "All rights reserved. Noteface Educational Hub"
    },
    ar: {
      tagline: "حيث تلتقي المعرفة بالقلب",
      description: "تمكين المعلمين والآباء والطلاب بموارد تعليمية عالية الجودة تكرم التقليد وتحتضن النمو.",
      newsletter: {
        title: "ابق على اطلاع",
        description: "احصل على أحدث الموارد التعليمية والرؤى المرسلة إلى صندوق الوارد الخاص بك.",
        placeholder: "أدخل بريدك الإلكتروني",
        button: "اشترك"
      },
      links: {
        explore: "استكشف",
        support: "الدعم",
        company: "الشركة",
        connect: "تواصل"
      },
      copyright: "جميع الحقوق محفوظة. مركز نوت فيس التعليمي"
    },
    ur: {
      tagline: "جہاں علم دل سے ملتا ہے",
      description: "اساتذہ، والدین، اور طلباء کو معیاری تعلیمی وسائل فراہم کرنا جو روایت کا احترام کرتے ہوئے ترقی کو اپناتے ہیں۔",
      newsletter: {
        title: "اپ ڈیٹ رہیں",
        description: "تازہ ترین تعلیمی وسائل اور بصیرت اپنے ای میل میں حاصل کریں۔",
        placeholder: "اپنا ای میل درج کریں",
        button: "سبسکرائب کریں"
      },
      links: {
        explore: "دریافت کریں",
        support: "سپورٹ",
        company: "کمپنی",
        connect: "رابطہ"
      },
      copyright: "تمام حقوق محفوظ ہیں۔ نوٹ فیس ایجوکیشنل ہب"
    },
    fr: {
      tagline: "Où la Connaissance Rencontre le Cœur",
      description: "Autonomiser les éducateurs, parents et étudiants avec des ressources éducatives de qualité qui honorent la tradition tout en embrassant la croissance.",
      newsletter: {
        title: "Restez Informé",
        description: "Recevez les dernières ressources éducatives et insights dans votre boîte de réception.",
        placeholder: "Entrez votre email",
        button: "S\'abonner"
      },
      links: {
        explore: "Explorer",
        support: "Support",
        company: "Entreprise",
        connect: "Connecter"
      },
      copyright: "Tous droits réservés. Hub Éducatif Noteface"
    }
  };

  const footerLinks = {
    explore: [
      { name: { en: "Islamic Studies", ar: "الدراسات الإسلامية", ur: "اسلامی مطالعات", fr: "Études Islamiques" }, path: "/product-categories-knowledge-universe" },
      { name: { en: "Literature", ar: "الأدب", ur: "ادب", fr: "Littérature" }, path: "/product-categories-knowledge-universe" },
      { name: { en: "Science", ar: "العلوم", ur: "سائنس", fr: "Science" }, path: "/product-categories-knowledge-universe" },
      { name: { en: "Teacher Resources", ar: "موارد المعلمين", ur: "اساتذہ کے وسائل", fr: "Ressources Enseignants" }, path: "/teacher-resource-center-professional-hub" },
      { name: { en: "Gift Creator", ar: "منشئ الهدايا", ur: "تحفہ بنانے والا", fr: "Créateur de Cadeaux" }, path: "/gift-creation-studio-personalization-experience" }
    ],
    support: [
      { name: { en: "Help Center", ar: "مركز المساعدة", ur: "مدد کا مرکز", fr: "Centre d\'Aide" }, path: "#" },
      { name: { en: "Contact Us", ar: "اتصل بنا", ur: "رابطہ کریں", fr: "Nous Contacter" }, path: "#" },
      { name: { en: "Shipping Info", ar: "معلومات الشحن", ur: "شپنگ کی معلومات", fr: "Info Livraison" }, path: "#" },
      { name: { en: "Returns", ar: "المرتجعات", ur: "واپسی", fr: "Retours" }, path: "#" },
      { name: { en: "FAQ", ar: "الأسئلة الشائعة", ur: "عام سوالات", fr: "FAQ" }, path: "#" }
    ],
    company: [
      { name: { en: "About Us", ar: "من نحن", ur: "ہمارے بارے میں", fr: "À Propos" }, path: "#" },
      { name: { en: "Our Mission", ar: "مهمتنا", ur: "ہمارا مشن", fr: "Notre Mission" }, path: "#" },
      { name: { en: "Careers", ar: "الوظائف", ur: "کیریئر", fr: "Carrières" }, path: "#" },
      { name: { en: "Press", ar: "الصحافة", ur: "پریس", fr: "Presse" }, path: "#" },
      { name: { en: "Privacy Policy", ar: "سياسة الخصوصية", ur: "پرائیویسی پالیسی", fr: "Politique de Confidentialité" }, path: "#" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", url: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: "Twitter", url: "#", color: "hover:text-blue-400" },
    { name: "Instagram", icon: "Instagram", url: "#", color: "hover:text-pink-600" },
    { name: "LinkedIn", icon: "Linkedin", url: "#", color: "hover:text-blue-700" },
    { name: "YouTube", icon: "Youtube", url: "#", color: "hover:text-red-600" }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', email);
      setEmail('');
      // Show success message
    }
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container-educational py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Icon name="BookOpen" size={24} color="var(--color-text-primary)" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Noteface</h3>
                <p className="text-sm opacity-80">Educational Hub</p>
              </div>
            </div>
            
            <p className="text-secondary font-medium">
              {footerContent[currentLanguage].tagline}
            </p>
            
            <p className="text-sm opacity-80 leading-relaxed">
              {footerContent[currentLanguage].description}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-8">
            {/* Explore Links */}
            <div>
              <h4 className="font-semibold text-secondary mb-4">
                {footerContent[currentLanguage].links.explore}
              </h4>
              <ul className="space-y-3">
                {footerLinks.explore.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
                    >
                      {link.name[currentLanguage]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-secondary mb-4">
                {footerContent[currentLanguage].links.support}
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
                    >
                      {link.name[currentLanguage]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-secondary mb-4">
                {footerContent[currentLanguage].links.company}
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
                    >
                      {link.name[currentLanguage]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h4 className="font-semibold text-secondary mb-2">
                {footerContent[currentLanguage].newsletter.title}
              </h4>
              <p className="text-sm opacity-80 leading-relaxed">
                {footerContent[currentLanguage].newsletter.description}
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder={footerContent[currentLanguage].newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Button
                type="submit"
                variant="secondary"
                size="sm"
                iconName="Send"
                iconPosition="right"
                className="w-full"
              >
                {footerContent[currentLanguage].newsletter.button}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="pt-4 border-t border-white/20">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Mail" size={16} />
                <span className="text-sm">info@noteface.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container-educational py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © {currentYear} {footerContent[currentLanguage].copyright}
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span className="text-sm opacity-80">
                  {currentLanguage === 'ar' ? 'آمن ومحمي' : currentLanguage === 'ur' ? 'محفوظ اور تحفظ' : currentLanguage === 'fr' ? 'Sûr et Sécurisé' : 'Safe & Secure'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span className="text-sm opacity-80">
                  {currentLanguage === 'ar' ? 'معتمد تعليمياً' : currentLanguage === 'ur' ? 'تعلیمی طور پر تصدیق شدہ' : currentLanguage === 'fr' ? 'Certifié Éducativement' : 'Educationally Certified'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;