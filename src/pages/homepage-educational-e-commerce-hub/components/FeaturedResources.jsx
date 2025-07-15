import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedResources = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [activeCategory, setActiveCategory] = useState('islamic');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const categories = [
    {
      id: 'islamic',
      name: {
        en: 'Islamic Studies',
        ar: 'الدراسات الإسلامية',
        ur: 'اسلامی مطالعات',
        fr: 'Études Islamiques'
      },
      icon: 'Mosque',
      color: 'text-primary'
    },
    {
      id: 'literature',
      name: {
        en: 'Literature',
        ar: 'الأدب',
        ur: 'ادب',
        fr: 'Littérature'
      },
      icon: 'BookOpen',
      color: 'text-secondary'
    },
    {
      id: 'science',
      name: {
        en: 'Science',
        ar: 'العلوم',
        ur: 'سائنس',
        fr: 'Science'
      },
      icon: 'Microscope',
      color: 'text-accent'
    }
  ];

  const featuredResources = {
    islamic: [
      {
        id: 1,
        title: {
          en: "Quran for Young Minds",
          ar: "القرآن للعقول الشابة",
          ur: "نوجوانوں کے لیے قرآن",
          fr: "Coran pour Jeunes Esprits"
        },
        author: "Dr. Amina Hassan",
        price: "$24.99",
        rating: 4.9,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&h=400&fit=crop",
        badge: {
          en: "Bestseller",
          ar: "الأكثر مبيعاً",
          ur: "بہترین فروخت",
          fr: "Bestseller"
        },
        description: {
          en: "Interactive Quranic studies designed for children aged 8-12",
          ar: "دراسات قرآنية تفاعلية مصممة للأطفال من سن 8-12",
          ur: "8-12 سال کے بچوں کے لیے انٹرایکٹو قرآنی مطالعات",
          fr: "Études coraniques interactives conçues pour les enfants de 8-12 ans"
        }
      },
      {
        id: 2,
        title: {
          en: "Islamic History Chronicles",
          ar: "سجلات التاريخ الإسلامي",
          ur: "اسلامی تاریخ کی تواریخ",
          fr: "Chroniques d\'Histoire Islamique"
        },
        author: "Prof. Omar Al-Rashid",
        price: "$32.50",
        rating: 4.8,
        reviews: 89,
        image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?w=300&h=400&fit=crop",
        badge: {
          en: "New Release",
          ar: "إصدار جديد",
          ur: "نئی ریلیز",
          fr: "Nouvelle Sortie"
        },
        description: {
          en: "Comprehensive guide to Islamic civilization and heritage",
          ar: "دليل شامل للحضارة الإسلامية والتراث",
          ur: "اسلامی تہذیب اور ورثے کی جامع رہنمائی",
          fr: "Guide complet de la civilisation et du patrimoine islamiques"
        }
      }
    ],
    literature: [
      {
        id: 3,
        title: {
          en: "Poetry of the Heart",
          ar: "شعر القلب",
          ur: "دل کی شاعری",
          fr: "Poésie du Cœur"
        },
        author: "Layla Mahmoud",
        price: "$19.99",
        rating: 4.7,
        reviews: 203,
        image: "https://images.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg?w=300&h=400&fit=crop",
        badge: {
          en: "Award Winner",
          ar: "فائز بجائزة",
          ur: "ایوارڈ یافتہ",
          fr: "Lauréat de Prix"
        },
        description: {
          en: "Contemporary poetry collection exploring themes of identity and belonging",
          ar: "مجموعة شعرية معاصرة تستكشف موضوعات الهوية والانتماء",
          ur: "شناخت اور تعلق کے موضوعات کو دریافت کرنے والا معاصر شعری مجموعہ",
          fr: "Collection de poésie contemporaine explorant les thèmes d\'identité et d\'appartenance"
        }
      },
      {
        id: 4,
        title: {
          en: "Classic Tales Retold",
          ar: "حكايات كلاسيكية معاد سردها",
          ur: "کلاسیکی کہانیاں دوبارہ بیان",
          fr: "Contes Classiques Racontés"
        },
        author: "Sarah Johnson",
        price: "$27.75",
        rating: 4.6,
        reviews: 134,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
        badge: {
          en: "Editor\'s Choice",
          ar: "اختيار المحرر",
          ur: "ایڈیٹر کی پسند",
          fr: "Choix de l\'Éditeur"
        },
        description: {
          en: "Timeless stories reimagined for modern young readers",
          ar: "قصص خالدة معاد تخيلها للقراء الشباب المعاصرين",
          ur: "جدید نوجوان قارئین کے لیے لازوال کہانیوں کا نیا تصور",
          fr: "Histoires intemporelles réimaginées pour les jeunes lecteurs modernes"
        }
      }
    ],
    science: [
      {
        id: 5,
        title: {
          en: "Wonders of Creation",
          ar: "عجائب الخلق",
          ur: "تخلیق کے عجائبات",
          fr: "Merveilles de la Création"
        },
        author: "Dr. Ahmed Farouk",
        price: "$35.00",
        rating: 4.9,
        reviews: 178,
        image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?w=300&h=400&fit=crop",
        badge: {
          en: "Trending",
          ar: "رائج",
          ur: "مقبول",
          fr: "Tendance"
        },
        description: {
          en: "Exploring the natural world through an Islamic scientific perspective",
          ar: "استكشاف العالم الطبيعي من منظور علمي إسلامي",
          ur: "اسلامی سائنسی نقطہ نظر سے قدرتی دنیا کی تلاش",
          fr: "Explorer le monde naturel à travers une perspective scientifique islamique"
        }
      },
      {
        id: 6,
        title: {
          en: "Young Scientist\'s Guide",
          ar: "دليل العالم الشاب",
          ur: "نوجوان سائنسدان کی رہنمائی",
          fr: "Guide du Jeune Scientifique"
        },
        author: "Dr. Fatima Al-Zahra",
        price: "$28.99",
        rating: 4.8,
        reviews: 92,
        image: "https://images.pixabay.com/photo/2017/05/10/19/29/chemistry-2301641_1280.jpg?w=300&h=400&fit=crop",
        badge: {
          en: "Interactive",
          ar: "تفاعلي",
          ur: "انٹرایکٹو",
          fr: "Interactif"
        },
        description: {
          en: "Hands-on experiments and discoveries for curious young minds",
          ar: "تجارب عملية واكتشافات للعقول الشابة الفضولية",
          ur: "متجسس نوجوان ذہنوں کے لیے عملی تجربات اور دریافتیں",
          fr: "Expériences pratiques et découvertes pour les jeunes esprits curieux"
        }
      }
    ]
  };

  const sectionTitle = {
    en: "Featured Educational Resources",
    ar: "الموارد التعليمية المميزة",
    ur: "نمایاں تعلیمی وسائل",
    fr: "Ressources Éducatives en Vedette"
  };

  const viewAllText = {
    en: "View All",
    ar: "عرض الكل",
    ur: "سب دیکھیں",
    fr: "Voir Tout"
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-educational">
        {/* Section Header */}
        <div className={`text-center mb-12 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {sectionTitle[currentLanguage]}
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {currentLanguage === 'ar' ?'اكتشف مجموعتنا المنسقة من الموارد التعليمية عالية الجودة'
              : currentLanguage === 'ur' ?'اعلیٰ معیار کے تعلیمی وسائل کا ہمارا منتخب کردہ مجموعہ دریافت کریں'
              : currentLanguage === 'fr' ?'Découvrez notre collection soigneusement sélectionnée de ressources éducatives de haute qualité' :'Discover our curated collection of high-quality educational resources'
            }
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-muted p-1 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all ${
                  activeCategory === category.id
                    ? 'bg-background shadow-educational text-primary'
                    : 'text-text-secondary hover:text-foreground'
                }`}
              >
                <Icon name={category.icon} size={18} className={category.color} />
                <span className="font-medium">{category.name[currentLanguage]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {featuredResources[activeCategory]?.map((resource) => (
            <Link
              key={resource.id}
              to="/product-detail-educational-resource-showcase"
              className="group block"
            >
              <div className="card-educational p-0 overflow-hidden hover-lift">
                <div className="relative">
                  <Image
                    src={resource.image}
                    alt={resource.title[currentLanguage]}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-accent text-white px-2 py-1 rounded-md text-xs font-medium">
                    {resource.badge[currentLanguage]}
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-background/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="Heart" size={16} className="text-text-secondary hover:text-error" />
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {resource.title[currentLanguage]}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {resource.author}
                    </p>
                    <p className="text-xs text-text-secondary line-clamp-2">
                      {resource.description[currentLanguage]}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={i < Math.floor(resource.rating) ? 'text-warning fill-current' : 'text-muted'}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-text-secondary">
                        ({resource.reviews})
                      </span>
                    </div>
                    <span className="font-bold text-primary">
                      {resource.price}
                    </span>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ShoppingCart"
                    iconPosition="left"
                    className="w-full"
                  >
                    {currentLanguage === 'ar' ? 'أضف للسلة' : currentLanguage === 'ur' ? 'ٹوکری میں ڈالیں' : currentLanguage === 'fr' ? 'Ajouter au Panier' : 'Add to Cart'}
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/product-categories-knowledge-universe">
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="border-primary text-primary hover:bg-primary/5"
            >
              {viewAllText[currentLanguage]}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;