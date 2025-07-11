# 🌿 Premium Skincare Landing Page

A modern, responsive skincare e-commerce landing page built with React, TypeScript, Tailwind CSS, and GSAP animations.

## ✨ Features

### 🎨 Design & UI
- **Premium Aesthetic**: Luxury skincare brand design with clean typography
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Modern Animations**: Smooth GSAP-powered animations throughout
- **Professional Photography**: High-quality product images with botanical styling

### 🛒 E-commerce Functionality
- **Shopping Cart**: Full cart system with add/remove/quantity controls
- **Product Catalog**: 12 premium skincare products with varied pricing
- **Success Notifications**: Toast messages for user feedback
- **Real-time Updates**: Live cart count and total calculations

### 🎭 Advanced Animations
- **Loading Screen**: Premium loading animation with spinning rings
- **Smooth Page Reveal**: Elegant transition from loading to main content
- **Text Fill Animation**: Word-by-word reveal effect on scroll
- **Interactive Buttons**: Hover effects with scale and shadow animations
- **FAQ Accordion**: Smooth expand/collapse with height transitions
- **Carousel Navigation**: Touch-friendly product slider with smooth transitions

### 🔧 Technical Features
- **React + TypeScript**: Type-safe component architecture
- **Context API**: Global state management for cart functionality
- **GSAP Integration**: Professional animations with ScrollTrigger
- **Tailwind CSS**: Utility-first styling with responsive design
- **Performance Optimized**: Lazy loading, hardware acceleration, and optimized animations

## 🏗️ Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section with text reveal animation
│   ├── Cart.tsx           # Shopping cart sidebar component
│   ├── FAQ.tsx            # Expandable FAQ accordion
│   ├── Footer.tsx         # Site footer with links
│   ├── Header.tsx         # Navigation header with cart icon
│   ├── Hero.tsx           # Landing hero section
│   ├── LoadingScreen.tsx  # Premium loading animation
│   └── Products.tsx       # Product catalog with carousel
├── context/
│   └── CartContext.tsx    # Global cart state management
├── App.tsx                # Main application component
├── index.css              # Global styles and animations
└── main.tsx               # Application entry point
```

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Animations**: GSAP with ScrollTrigger plugin
- **State Management**: React Context API
- **Build Tool**: Vite for fast development and building
- **Notifications**: React Hot Toast for user feedback
- **Icons**: Lucide React for consistent iconography

## 📱 Responsive Design

### Mobile (< 768px)
- Single product carousel with touch navigation
- Optimized touch targets and spacing
- Mobile-first responsive design approach

### Tablet (768px - 1024px)
- Two-column product grid with carousel navigation
- Enhanced touch interactions
- Balanced layout for medium screens

### Desktop (> 1024px)
- Four-column product grid
- Hover effects and micro-interactions
- Full-featured desktop experience

## 🎯 Key Animations

1. **Smooth Reveal Animation**: Premium page load transition
2. **Text Fill Effect**: Word-by-word darkening on scroll
3. **Interactive Product Buttons**: Hover and active state animations
4. **FAQ Smooth Expand**: Height-based accordion animations
5. **Cart Slide Animation**: Smooth sidebar transitions
6. **Loading Screen**: Multi-ring spinning animation

## 🚀 Performance Optimizations

- **Lazy Loading**: Images load only when needed
- **Hardware Acceleration**: CSS transforms for smooth animations
- **Optimized Bundle**: Tree-shaking and code splitting
- **Reduced Motion**: Accessibility support for motion preferences
- **Fast Interactions**: Debounced handlers and optimized re-renders

## 📦 Installation & Development

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Colors
- **Primary**: Emerald (Green) - #10b981
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: White for clean contrast

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Spacing
- **System**: 8px base unit for consistent spacing
- **Breakpoints**: Mobile-first responsive design

## 🌟 Product Catalog

12 premium skincare products including:
- Vitamin C Serum ($89)
- Hyaluronic Moisturizer ($76)
- Retinol Night Cream ($95)
- Gentle Cleanser ($54)
- Niacinamide Serum ($68)
- Peptide Eye Cream ($112)
- AHA/BHA Exfoliant ($82)
- Ceramide Barrier Cream ($91)
- Vitamin E Face Oil ($73)
- Collagen Mask Set ($45)
- Sunscreen SPF 50 ($38)
- Rose Hip Toner ($56)

## 📄 License

This project is created for demonstration purposes.

## 🤝 Contributing

This is a showcase project. Feel free to fork and modify for your own use.

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and GSAP**
