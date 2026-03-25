"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="largeSmall"
        background="none"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "About Us",          id: "about"},
        {
          name: "Services",          id: "services"},
        {
          name: "Projects",          id: "projects"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Art Scene Contracting"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Art Scene"
      description="Transforming visions into luxurious realities with unparalleled gypsum and interior finishing."
      buttons={[
        {
          text: "Explore Services",          href: "#services"},
        {
          text: "Get a Quote",          href: "#contact"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/part-interior-kitchen-black-modern-minimalism_169016-20012.jpg",          imageAlt: "Luxurious living room with intricate gypsum ceiling"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/confident-young-indian-man-black-shirt-standing-cafe_627829-5462.jpg",          imageAlt: "Modern commercial office interior with sophisticated gypsum partitions"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/contemporary-decorations-placed-as-inspiration-creativity-new-artwork_482257-112079.jpg",          imageAlt: "Minimalist bedroom with elegant gypsum feature wall"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dining-set-modern-luxury-dining-room_105762-1797.jpg",          imageAlt: "Classic dining room interior with detailed gypsum cornice"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flower-vase-kitchen-island-with-open-drawer-cozy-homedecor_169016-70897.jpg",          imageAlt: "Contemporary kitchen with modern gypsum ceiling design"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/eco-friendly-cleaning-products-set-basket-with-brushes_23-2148818498.jpg",          imageAlt: "Spa-like bathroom interior with waterproof gypsum ceiling"},
      ]}
      autoplayDelay={4000}
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Crafting Exquisite Interiors with Precision"
      description="At Art Scene Contracting, we blend artistry with expertise to deliver exceptional gypsum works and comprehensive interior finishing solutions. Led by Mr. Anas, our knowledgeable team is dedicated to bringing your vision to life with meticulous attention to detail and a commitment to superior quality. For any interior works, you should try us."
      tag="Our Story"
      bulletPoints={[
        {
          title: "Unmatched Gypsum Expertise",          description: "Specializing in very good gypsum works, our team delivers flawless finishes and intricate designs."},
        {
          title: "Professional & Knowledgeable",          description: "Mr. Anas and our team are renowned for their expertise and down-to-earth approach, ensuring a smooth project experience."},
        {
          title: "Meticulous Interior Finishing",          description: "We ensure excellent finishing in all interior works, transforming spaces into elegant and professional environments."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-working-wood-engraving-workshop_23-2149185406.jpg"
      imageAlt="Artisan working on intricate gypsum details"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Advanced Gypsum Board Installation",          description: "From ceiling designs to wall partitions, our gypsum work is precise, durable, and aesthetically superior.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/vertical-view-vases-cross-table-room-with-concrete-wall_181624-6306.jpg",            imageAlt: "Raw gypsum board installation before finishing"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/close-up-wallpaper-texture_1339-949.jpg",            imageAlt: "Smooth, finished gypsum wall"},
        },
        {
          id: 2,
          title: "Custom Ceiling Designs & Moldings",          description: "Elevate your space with bespoke gypsum false ceilings, cornices, and intricate decorative moldings that captivate.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/low-angle-shot-inside-old-building-with-geometrical-walls-domes_181624-4368.jpg",            imageAlt: "Intricate gypsum ceiling design with patterns"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/chandelier_74190-3718.jpg",            imageAlt: "Gypsum ceiling with integrated LED lighting"},
        },
        {
          id: 3,
          title: "Luxurious Wall Paneling & Finishes",          description: "Transform ordinary walls into works of art with our luxurious paneling, textures, and decorative plaster finishes.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/light-lamp-decoration-interior_74190-6672.jpg",            imageAlt: "Luxurious gypsum wall paneling in a living room"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/photo-wall-texture-pattern_58702-15365.jpg",            imageAlt: "Textured gypsum wall art with modern design"},
        },
      ]}
      showStepNumbers={true}
      title="Our Specialized Interior Services"
      description="We offer a comprehensive suite of interior contracting services, ensuring every detail reflects luxury and professional craftsmanship. Our interesting group provides good finishing in gypsum work, always professional."
      tag="Expertise"
    />
  </div>

  <div id="projects" data-section="projects">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "project-1",          name: "Luxury Villa Interior Renovation",          price: "Private Residence",          imageSrc: "http://img.b2bpic.net/free-photo/beige-colored-interior-dining-room_114579-2540.jpg",          imageAlt: "Interior of a luxury villa with high-end gypsum finishes"},
        {
          id: "project-2",          name: "Modern Corporate Office Fit-out",          price: "Commercial Space",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-black-dress-man-white-shirt_1153-3648.jpg",          imageAlt: "Sleek and professional modern office interior with gypsum elements"},
        {
          id: "project-3",          name: "Elegant Residential Apartment",          price: "Urban Dwelling",          imageSrc: "http://img.b2bpic.net/free-photo/modern-styled-small-entryway_23-2150713049.jpg",          imageAlt: "Interior of an elegant apartment with sophisticated gypsum decor"},
      ]}
      title="Signature Projects: Where Art Meets Engineering"
      description="Explore our portfolio of meticulously executed projects, demonstrating our dedication to perfection in gypsum and interior finishes. Each project is a testament to our skill and commitment to client satisfaction."
      tag="Our Portfolio"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sana Munshi",          role: "Client",          company: "Residential Project",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-man-with-backpack_23-2149915917.jpg",          videoAriaLabel: "Testimonial from Sana Munshi"},
        {
          id: "2",          name: "Ahmed Khan",          role: "Property Developer",          company: "Commercial Projects",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-businesswoman_329181-11388.jpg",          videoAriaLabel: "Testimonial from Ahmed Khan"},
        {
          id: "3",          name: "Fatima Zahra",          role: "Interior Designer",          company: "Design Collective",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1598.jpg",          videoAriaLabel: "Testimonial from Fatima Zahra"},
        {
          id: "4",          name: "David Smith",          role: "Homeowner",          company: "Private Residence",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-pretty-lady-with-short-curly-hair-wireless-earphones_574295-1285.jpg",          videoAriaLabel: "Testimonial from David Smith"},
      ]}
      kpiItems={[
        {



          title: "Experience",          value: "15+"},
        {



          title: "Projects",          value: "250+"},
        {



          title: "Satisfaction",          value: "98%"},
      ]}
      title="Client Success Stories"
      description="Discover what our satisfied clients say about our craftsmanship and dedication, building trust through their authentic experiences."
      tag="Trusted Reviews"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Get in Touch"
      title="Ready to Start Your Project?"
      description="Connect with Art Scene Contracting today for a personalized consultation. Our experts are ready to transform your vision into reality, ensuring a seamless and high-quality experience from start to finish."
      imageSrc="http://img.b2bpic.net/free-photo/room-business-meeting_1098-19955.jpg"
      imageAlt="Modern interior design studio office"
      mediaAnimation="slide-up"
      mediaPosition="right"
      inputPlaceholder="Your Name or Email"
      buttonText="Send Inquiry"
      termsText="By sending an inquiry, you agree to our privacy policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Art Scene Contracting"
      copyrightText="© 2024 Art Scene Contracting. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "https://facebook.com/artscenecontracting",          ariaLabel: "Facebook"},
        {
          icon: Instagram,
          href: "https://instagram.com/artscenecontracting",          ariaLabel: "Instagram"},
        {
          icon: Linkedin,
          href: "https://linkedin.com/company/artscenecontracting",          ariaLabel: "LinkedIn"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
