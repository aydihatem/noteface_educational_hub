import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProductImageGallery from './components/ProductImageGallery';
import ProductInfo from './components/ProductInfo';
import PurchaseSection from './components/PurchaseSection';
import ProductDescription from './components/ProductDescription';
import ReviewsSection from './components/ReviewsSection';
import EducationalSupport from './components/EducationalSupport';
import RelatedProducts from './components/RelatedProducts';

const ProductDetailPage = () => {
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock product data
  const product = {
    id: 'islamic-children-stories-1',
    title: 'Beautiful Stories from the Quran for Children',
    author: 'Dr. Sarah Al-Mahmoud',
    price: 24.99,
    originalPrice: 32.99,
    discount: 24,
    rating: 4.8,
    reviewCount: 342,
    soldCount: 1247,
    inStock: true,
    stockCount: 23,
    readingLevel: 'Elementary (Grades 2-5)',
    ageRange: '6-10 years',
    subject: 'Islamic Studies',
    language: 'English',
    curriculumAlignment: ['Islamic Education Standards', 'Character Development', 'Reading Comprehension'],
    culturalContext: `This collection presents timeless Quranic stories with cultural sensitivity and age-appropriate language. Each story is carefully adapted to help young readers understand Islamic values while developing their reading skills. The book includes beautiful illustrations that respect Islamic artistic traditions.`,
    scholarlyEndorsements: ['Islamic Education Council', 'Al-Azhar University', 'International Islamic Academy'],
    keyFeatures: [
      'Age-appropriate language and storytelling',
      'Beautiful, culturally sensitive illustrations',
      'Discussion questions for family engagement',
      'Moral lessons clearly highlighted',
      'Pronunciation guide for Arabic terms',
      'Glossary of Islamic concepts'
    ],
    description: `This beautifully illustrated collection brings together some of the most beloved stories from the Quran, carefully adapted for young readers. Each story is presented with age-appropriate language while maintaining the spiritual essence and moral teachings that make these narratives so powerful.\n\nThe book serves as an excellent introduction to Islamic heritage for children, helping them understand fundamental values such as compassion, honesty, courage, and faith through engaging storytelling. Parents and teachers will find this resource invaluable for both home reading and classroom instruction.`,
    learningOutcomes: [
      'Develop understanding of Islamic values and principles',
      'Improve reading comprehension and vocabulary',
      'Learn about prophets and their teachings',
      'Build character through moral examples',
      'Enhance cultural and religious awareness'
    ],
    pedagogicalApproach: `The book employs a narrative-based learning approach that combines storytelling with interactive elements. Each story includes pre-reading questions to activate prior knowledge, comprehension checks throughout the text, and post-reading discussions that encourage critical thinking about the moral lessons presented.`,
    cognitiveSkills: [
      'Reading comprehension and fluency',
      'Vocabulary development',
      'Critical thinking and analysis',
      'Memory and retention skills',
      'Sequencing and story structure understanding'
    ],
    socialEmotionalSkills: [
      'Empathy and compassion development',
      'Moral reasoning and ethical thinking',
      'Cultural identity and pride',
      'Respect for diversity and differences',
      'Self-reflection and personal growth'
    ],
    classroomApplications: [
      'Circle time reading and discussion',
      'Character education lessons',
      'Cross-curricular connections with history and geography',
      'Art projects inspired by story themes',
      'Role-playing and dramatic interpretation'
    ],
    tableOfContents: [
      { title: 'The Story of Prophet Adam (AS)', description: 'The first human and the beginning of humanity', pages: 12 },
      { title: 'Prophet Nuh (AS) and the Great Flood', description: 'Lessons about faith and perseverance', pages: 14 },
      { title: 'Prophet Ibrahim (AS) and His Faith', description: 'The story of unwavering belief', pages: 16 },
      { title: 'Prophet Yusuf (AS) and His Brothers', description: 'Forgiveness and family bonds', pages: 18 },
      { title: 'Prophet Musa (AS) and Pharaoh', description: 'Standing up for justice and truth', pages: 20 },
      { title: 'Prophet Isa (AS) and His Miracles', description: 'Compassion and healing', pages: 15 },
      { title: 'The People of the Cave', description: 'Faith and divine protection', pages: 13 }
    ],
    additionalResources: [
      'Audio narration in Arabic and English',
      'Coloring pages for each story',
      'Family discussion guide',
      'Teacher\'s lesson plans',
      'Interactive online activities'
    ],
    authorInfo: {
      name: 'Dr. Sarah Al-Mahmoud',
      title: 'Islamic Education Specialist',
      credentials: 'PhD in Islamic Studies, MA in Child Psychology',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b332c3db?w=200&h=200&fit=crop&crop=face',
      biography: `Dr. Sarah Al-Mahmoud is a renowned Islamic education specialist with over 15 years of experience in developing age-appropriate Islamic learning materials. She holds a PhD in Islamic Studies from Al-Azhar University and a Master's degree in Child Psychology. Her work focuses on making Islamic teachings accessible and engaging for young learners while maintaining authenticity and cultural sensitivity.`,
      otherWorks: [
        { title: 'My First Arabic Letters', year: '2022' },
        { title: 'Islamic Values for Young Hearts', year: '2021' },
        { title: 'Prayers for Little Muslims', year: '2020' }
      ],
      awards: [
        'Islamic Education Excellence Award 2023','Children\'s Book of the Year 2022',
        'Cultural Heritage Preservation Award 2021'
      ]
    },
    formats: [
      { type: 'Hardcover', price: 24.99, description: 'Premium hardcover edition with dust jacket' },
      { type: 'Paperback', price: 18.99, description: 'Lightweight paperback for easy handling' },
      { type: 'Digital', price: 12.99, description: 'Interactive digital edition with audio' }
    ],
    coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=800&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=800&fit=crop'
    ],
    reviews: [
      {
        id: 1,
        userName: 'Fatima Ahmed',
        userType: 'teacher',
        rating: 5,
        title: 'Excellent Resource for Islamic Education',
        content: `This book has been a wonderful addition to our Islamic studies curriculum. The stories are beautifully told and age-appropriate. My students are always engaged during story time, and the discussion questions help them think deeply about the moral lessons. The illustrations are respectful and beautiful.`,
        educationalContext: 'Used in Grade 3 Islamic Studies class with 25 students. Perfect for circle time and character education lessons.',
        pros: ['Engaging storytelling', 'Beautiful illustrations', 'Great discussion questions', 'Culturally sensitive'],
        cons: ['Could use more interactive elements'],
        date: '2024-06-15',
        verified: true,
        helpfulCount: 23
      },
      {
        id: 2,
        userName: 'Omar Hassan',
        userType: 'parent',
        rating: 5,
        title: 'My Children Love These Stories',
        content: `I bought this book for my 7 and 9-year-old children, and they absolutely love it. We read one story each night before bed, and it has become our favorite family time. The stories teach important values while being entertaining. The language is perfect for their age level.`,
        educationalContext: 'Used for bedtime reading with children ages 7 and 9. Great for family bonding and value education.',
        pros: ['Perfect for bedtime reading', 'Teaches good values', 'Age-appropriate language', 'Quality illustrations'],
        cons: ['Wish there were more stories'],
        date: '2024-06-10',
        verified: true,
        helpfulCount: 18
      },
      {
        id: 3,
        userName: 'Aisha Rahman',
        userType: 'teacher',
        rating: 4,
        title: 'Good Resource with Room for Improvement',
        content: `This is a solid resource for teaching Islamic stories to young children. The content is well-researched and the presentation is appropriate. However, I would have liked to see more interactive elements and perhaps some activities included in the book itself.`,
        educationalContext: 'Used in Sunday school with mixed age groups (6-10 years). Works well for group reading sessions.',
        pros: ['Well-researched content', 'Appropriate for age group', 'Good moral lessons'],
        cons: ['Limited interactive elements', 'Could use more activities'],
        date: '2024-06-05',
        verified: true,
        helpfulCount: 12
      },
      {
        id: 4,
        userName: 'Mariam Ali',
        userType: 'parent',
        rating: 5,
        title: 'Beautiful Book for Young Muslims',
        content: `This book is exactly what I was looking for to introduce my daughter to Islamic stories. The illustrations are gorgeous and the stories are told in a way that captures her attention. She asks for these stories every night now!`,
        educationalContext: 'Reading with 6-year-old daughter at home. Great for introducing Islamic heritage and values.',
        pros: ['Beautiful illustrations', 'Engaging for children', 'Educational value', 'High quality printing'],
        cons: [],
        date: '2024-05-28',
        verified: true,
        helpfulCount: 15
      },
      {
        id: 5,
        userName: 'Ahmed Malik',
        userType: 'student',
        rating: 4,
        title: 'I Really Like These Stories',
        content: `My teacher reads these stories to us in class and I really like them. The pictures are pretty and the stories teach us good things. My favorite is the story about Prophet Yusuf.`,
        educationalContext: 'Grade 4 student enjoying stories during class reading time.',
        pros: ['Interesting stories', 'Pretty pictures', 'Learn good lessons'],
        cons: ['Some words are hard'],
        date: '2024-05-20',
        verified: false,
        helpfulCount: 8
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb Navigation */}
        <div className="container-educational py-4">
          <nav className="flex items-center space-x-2 text-sm text-text-secondary">
            <a href="/homepage-educational-e-commerce-hub" className="hover:text-primary transition-colors">
              Home
            </a>
            <Icon name="ChevronRight" size={14} />
            <a href="/product-categories-knowledge-universe" className="hover:text-primary transition-colors">
              Islamic Studies
            </a>
            <Icon name="ChevronRight" size={14} />
            <span className="text-foreground">Children's Books</span>
          </nav>
        </div>

        {/* Product Overview Section */}
        <div className="container-educational py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Product Images */}
            <div className="lg:col-span-1">
              <ProductImageGallery product={product} />
            </div>

            {/* Middle Column - Product Information */}
            <div className="lg:col-span-1">
              <ProductInfo product={product} />
            </div>

            {/* Right Column - Purchase Section */}
            <div className="lg:col-span-1">
              <PurchaseSection product={product} />
            </div>
          </div>
        </div>

        {/* Detailed Information Sections */}
        <div className="container-educational py-8 space-y-8">
          {/* Product Description */}
          <ProductDescription product={product} />

          {/* Educational Support Resources */}
          <EducationalSupport product={product} />

          {/* Reviews Section */}
          <ReviewsSection product={product} />

          {/* Related Products */}
          <RelatedProducts currentProduct={product} />
        </div>

        {/* Quick Actions Bar (Mobile) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 z-40">
          <div className="flex space-x-3">
            <Button
              variant="outline"
              iconName="Heart"
              className="flex-shrink-0"
            />
            <Button
              variant="outline"
              iconName="Share2"
              className="flex-shrink-0"
            />
            <Button
              variant="default"
              fullWidth
              iconName="ShoppingCart"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90"
            >
              Add to Cart - ${product.price}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;