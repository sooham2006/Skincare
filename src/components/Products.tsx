import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import toast from 'react-hot-toast';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: string;
  priceNumber: number;
  image: string;
  description: string;
}

const Products: React.FC = () => {
  const productsRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { dispatch } = useCart();

  const products: Product[] = [
    {
      id: 1,
      name: "Vitamin C Serum",
      price: "$89",
      priceNumber: 89,
      image: "https://www.google.com/imgres?q=skincare%20products%20natural%20beauty&imgurl=https%3A%2F%2F5.imimg.com%2Fdata5%2FPA%2FLO%2FMY-599775%2Fnatural-skincare-products.jpg&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fbio-organic-natural-cosmetic-products-19140824697.html%3Fsrsltid%3DAfmBOoqMbYmpER06BiwM13g9HJ5O2fkTBBplSwnNBYVITsvWXwpelHuN&docid=NZWzCc3UK0phAM&tbnid=ZoL5q07ngVVRmM&vet=12ahUKEwjPhMHDjbSOAxXqSGwGHaJXLskQM3oECFMQAA..i&w=4208&h=2712&hcb=2&ved=2ahUKEwjPhMHDjbSOAxXqSGwGHaJXLskQM3oECFMQAA",
      description: "Brightening serum with 20% Vitamin C"
    },
    {
      id: 2,
      name: "Hyaluronic Moisturizer",
      price: "$76",
      priceNumber: 76,
      image: "https://www.google.com/imgres?q=skincare%20products%20natural%20beauty&imgurl=https%3A%2F%2Fimageio.forbes.com%2Fspecials-images%2Fimageserve%2F62e2bec1b31b95c870b0c774%2FScientist-with-natural-drug-research--Natural-organic-botany-and-scientific%2F960x0.jpg%3Fformat%3Djpg%26width%3D960&imgrefurl=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fpamdanziger%2F2022%2F08%2F02%2Fconfused-by-clean-natural-beauty-how-korres-clears-up-the-confusion%2F&docid=XNN6cHrlfA0hSM&tbnid=mjX15bulsf9kiM&vet=12ahUKEwjPhMHDjbSOAxXqSGwGHaJXLskQM3oECHIQAA..i&w=958&h=638&hcb=2&ved=2ahUKEwjPhMHDjbSOAxXqSGwGHaJXLskQM3oECHIQAA",
      description: "Deep hydration with hyaluronic acid"
    },
    {
      id: 3,
      name: "Retinol Night Cream",
      price: "$95",
      priceNumber: 95,
      image: "https://www.google.com/imgres?q=skincare%20products%20natural%20beauty&imgurl=https%3A%2F%2Fwww.shopkhoj.com%2Fwp-content%2Fuploads%2F2019%2F06%2FTop-5-Organic-Beauty-Brands-In-India-for-that-%25E2%2580%2598Au-Natural%25E2%2580%2599-Look.jpg&imgrefurl=https%3A%2F%2Fwww.shopkhoj.com%2Ftop-5-organic-beauty-brands-in-india%2F&docid=ksmG-cD-280OAM&tbnid=-UMK5ycGmDlNmM&vet=12ahUKEwjPhMHDjbSOAxXqSGwGHaJXLskQM3oECH0QAA..i&w=618&h=403&hcb=2&ved=2ahUKEwjPhMHDjbSOAxXqSGwGHaJXLskQM3oECH0QAA",
      description: "Anti-aging night treatment"
    },
    {
      id: 4,
      name: "Gentle Cleanser",
      price: "$54",
      priceNumber: 54,
      image: "https://www.google.com/imgres?q=skincare%20products%20natural%20beauty&imgurl=https%3A%2F%2Fmygreencloset.com%2Fwp-content%2Fuploads%2F2018%2F07%2Fsmall-batch-beauty-2.jpg&imgrefurl=https%3A%2F%2Fmygreencloset.com%2Fsmall-batch-beauty-brands%2F&docid=5ePD41o6WhcnLM&tbnid=XnHht5r04w_HPM&vet=12ahUKEwjPhMHDjbSOAxXqSGwGHaJXLskQM3oECCcQAA..i&w=1500&h=844&hcb=2&ved=2ahUKEwjPhMHDjbSOAxXqSGwGHaJXLskQM3oECCcQAA",
      description: "Gentle daily face cleanser"
    },
    {
      id: 5,
      name: "Niacinamide Serum",
      price: "$68",
      priceNumber: 68,
      image: "https://www.google.com/imgres?q=skincare%20products%20natural%20beauty&imgurl=https%3A%2F%2Feuropeanbeautytoronto.com%2Fwp-content%2Fuploads%2F2024%2F04%2F5fff.jpg&imgrefurl=https%3A%2F%2Feuropeanbeautytoronto.com%2Fembracing-natural-beauty-the-benefits-of-chemical-free-skincare%2F&docid=vxPUMLjmz0EdhM&tbnid=CMRF3zAiPJpAoM&vet=12ahUKEwjPhMHDjbSOAxXqSGwGHaJXLskQM3oECFkQAA..i&w=612&h=408&hcb=2&ved=2ahUKEwjPhMHDjbSOAxXqSGwGHaJXLskQM3oECFkQAA",
      description: "Pore minimizing and oil control"
    },
    {
      id: 6,
      name: "Peptide Eye Cream",
      price: "$112",
      priceNumber: 112,
      image: "https://www.google.com/imgres?q=skincare%20products%20natural%20beauty&imgurl=https%3A%2F%2Flatafa.net%2Fwp-content%2Fuploads%2F2019%2F03%2FOrganic-Skin-Care.jpg&imgrefurl=https%3A%2F%2Flatafa.net%2F2019%2F02%2Fbeauty-with-natural-and-organic-products%2F&docid=ZYezjxTaZ1akhM&tbnid=Vuc7JQ_1EfNyxM&vet=12ahUKEwjPhMHDjbSOAxXqSGwGHaJXLskQM3oECHwQAA..i&w=800&h=424&hcb=2&ved=2ahUKEwjPhMHDjbSOAxXqSGwGHaJXLskQM3oECHwQAA",
      description: "Anti-aging eye treatment"
    },
    {
      id: 7,
      name: "AHA/BHA Exfoliant",
      price: "$82",
      priceNumber: 82,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDqmm8TKmVsJGBPVXvwxZj1hwgVCFYi5z7g&s",
      description: "Chemical exfoliant for smooth skin"
    },
    {
      id: 8,
      name: "Ceramide Barrier Cream",
      price: "$91",
      priceNumber: 91,
      image: "https://www.google.com/imgres?q=skincare%20products%20natural%20beauty&imgurl=https%3A%2F%2Fmoderndiplomacy.eu%2Fwp-content%2Fuploads%2F2021%2F05%2Fbeauty-products.jpg&imgrefurl=https%3A%2F%2Fmoderndiplomacy.eu%2F2021%2F05%2F19%2Fwhat-are-the-benefits-of-natural-beauty-products%2F&docid=epchbUyG8-vllM&tbnid=_TjLdWXKpDT2sM&vet=12ahUKEwjPhMHDjbSOAxXqSGwGHaJXLskQM3oECEsQAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwjPhMHDjbSOAxXqSGwGHaJXLskQM3oECEsQAA",
      description: "Skin barrier repair and protection"
    },
    {
      id: 9,
      name: "Vitamin E Face Oil",
      price: "$73",
      priceNumber: 73,
      image: "https://www.shankara.in/?srsltid=AfmBOoodIIUwzvBtaO8Kx19XD-In61R99TwtiE2rz2U1qu2ExmR0LxYS",
      description: "Nourishing facial oil blend"
    },
    {
      id: 10,
      name: "Collagen Mask Set",
      price: "$45",
      priceNumber: 45,
      image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.toiimg.com%2Fthumb%2Fimgsize-23456%2Cmsid-114948280%2Cwidth-600%2Cresizemode-4%2F114948280.jpg&tbnid=R_ynqXmJli8O8M&vet=10CAIQxiAoAGoXChMI4JSDjI-0jgMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Ftimesofindia.indiatimes.com%2Flife-style%2Fbeauty%2Fayurvedic-skin-care-vs-korean-skincare-which-is-better%2Farticleshow%2F114948246.cms&docid=I3-Y1CMfp4E-NM&w=600&h=338&itg=1&q=ayurveda%20skincare%20products%20natural%20beauty&ved=0CAIQxiAoAGoXChMI4JSDjI-0jgMVAAAAAB0AAAAAEAc",
      description: "Hydrating sheet mask collection"
    },
    {
      id: 11,
      name: "Sunscreen SPF 50",
      price: "$38",
      priceNumber: 38,
      image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oand3.com%2Fwp-content%2Fuploads%2F2024%2F03%2Ftea-tree-essential-oil-small-bottle-selective-focus-min-scaled.jpg&tbnid=Bz26ekwfEQzhVM&vet=10CAYQxiAoAmoXChMI4JSDjI-0jgMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.oand3.com%2Fstories%2Fwhat-is-the-difference-between-ayurvedic-beauty-and-clean-beauty%2F&docid=BsIdqXueHTF8xM&w=2560&h=1660&itg=1&q=ayurveda%20skincare%20products%20natural%20beauty&ved=0CAYQxiAoAmoXChMI4JSDjI-0jgMVAAAAAB0AAAAAEAc",
      description: "Broad spectrum UV protection"
    },
    {
      id: 12,
      name: "Rose Hip Toner",
      price: "$56",
      priceNumber: 56,
      image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oand3.com%2Fwp-content%2Fuploads%2F2024%2F03%2Ftea-tree-essential-oil-small-bottle-selective-focus-min-scaled.jpg&tbnid=Bz26ekwfEQzhVM&vet=10CAYQxiAoAmoXChMI4JSDjI-0jgMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.oand3.com%2Fstories%2Fwhat-is-the-difference-between-ayurvedic-beauty-and-clean-beauty%2F&docid=BsIdqXueHTF8xM&w=2560&h=1660&itg=1&q=ayurveda%20skincare%20products%20natural%20beauty&ved=0CAYQxiAoAmoXChMI4JSDjI-0jgMVAAAAAB0AAAAAEAc",
      description: "Hydrating and balancing toner"
    }
  ];

  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  const [currentBreakpoint, setCurrentBreakpoint] = useState('desktop');
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCurrentBreakpoint('mobile');
        setItemsToShow(1);
      } else if (width < 1024) {
        setCurrentBreakpoint('tablet');
        setItemsToShow(2);
      } else {
        setCurrentBreakpoint('desktop');
        setItemsToShow(4);
      }
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  useEffect(() => {
    if (productsRef.current) {
      gsap.fromTo(productsRef.current.querySelectorAll('.product-element'), 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: productsRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  const maxIndex = Math.max(0, products.length - itemsToShow);

  const nextProduct = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    
    setIsAnimating(true);
    const newIndex = Math.min(currentIndex + itemsToShow, maxIndex);
    setCurrentIndex(newIndex);
    
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: -newIndex * (100 / itemsToShow) + '%',
        duration: 0.4,
        ease: 'power2.out',
        onComplete: () => setIsAnimating(false)
      });
    }
  };

  const prevProduct = () => {
    if (isAnimating || currentIndex <= 0) return;
    
    setIsAnimating(true);
    const newIndex = Math.max(currentIndex - itemsToShow, 0);
    setCurrentIndex(newIndex);
    
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: -newIndex * (100 / itemsToShow) + '%',
        duration: 0.4,
        ease: 'power2.out',
        onComplete: () => setIsAnimating(false)
      });
    }
  };

  const addToCart = (product: Product) => {
    dispatch({ 
      type: 'ADD_ITEM', 
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        priceNumber: product.priceNumber,
        image: product.image
      }
    });
    
    toast.success(`${product.name} added to cart!`, {
      icon: '🛍️',
      duration: 2000,
    });
  };

  return (
    <section id="products" ref={productsRef} className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="product-element text-3xl md:text-5xl font-light text-gray-900 mb-4">
            Best Selling Products
          </h2>
          <p className="product-element text-lg text-gray-600">
            Discover our most loved skincare essentials
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-element group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-400"
              style={{ width: `${(products.length / itemsToShow) * 100}%` }}
            >
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="px-2"
                  style={{ width: `${100 / products.length * itemsToShow}%` }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                        <button 
                          onClick={() => addToCart(product)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              onClick={prevProduct}
              disabled={currentIndex <= 0 || isAnimating}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-50 transition-all duration-300 transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronLeft className="w-6 h-6 text-emerald-600" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(products.length / itemsToShow) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setCurrentIndex(index * itemsToShow);
                      if (carouselRef.current) {
                        gsap.to(carouselRef.current, {
                          x: -(index * itemsToShow) * (100 / itemsToShow) + '%',
                          duration: 0.4,
                          ease: 'power2.out'
                        });
                      }
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsToShow) === index ? 'bg-emerald-600 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextProduct}
              disabled={currentIndex >= maxIndex || isAnimating}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-50 transition-all duration-300 transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronRight className="w-6 h-6 text-emerald-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;