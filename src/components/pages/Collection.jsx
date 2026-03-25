import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { productsData } from '../../data/products'
import { Filter, ArrowRight } from 'lucide-react'

export default function Collection() {
  // --- STATE (DURUM) YÖNETİMİ ---
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]); 
  const [sortOption, setSortOption] = useState("En Yeniler");
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 9; 
  
  const categories = ["Damla Kehribar", "Sıkma Kehribar", "Ateş Kehribar", "Oltu Taşı", "Ağaç Grubu"];
  
  const priceRanges = [
    { label: "1.000₺ - 2.500₺", min: 1000, max: 2500 },
    { label: "2.500₺ - 5.000₺", min: 2500, max: 5000 },
    { label: "5.000₺ - 10.000₺", min: 5000, max: 10000 },
    { label: "10.000₺ ve üzeri", min: 10000, max: Infinity }
  ];

  // --- SEÇİM MANTIĞI ---
  const handleCategoryChange = (cat) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
    setCurrentPage(1); 
  };

  const handlePriceRangeChange = (label) => {
    setSelectedPriceRanges(prev => prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRanges([]); 
    setSortOption("En Yeniler");
    setCurrentPage(1);
  };

  // Filtrelerin aktif olup olmadığını kontrol eden değişken (Buton rengi için)
  const isFilterActive = selectedCategories.length > 0 || selectedPriceRanges.length > 0 || sortOption !== "En Yeniler";

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[₺.\s]/g, ''), 10);
  };

  // --- ANA FİLTRELEME VE SIRALAMA ---
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...productsData];

    if (selectedCategories.length > 0) {
      result = result.filter(product => {
        const searchString = `${product.name} ${product.specs?.Malzeme || ''}`.toLowerCase();
        return selectedCategories.some(cat => searchString.includes(cat.toLowerCase()));
      });
    }

    if (selectedPriceRanges.length > 0) {
      result = result.filter(product => {
        const productPrice = parsePrice(product.price);
        return selectedPriceRanges.some(selectedLabel => {
          const range = priceRanges.find(r => r.label === selectedLabel);
          return productPrice >= range.min && productPrice <= range.max;
        });
      });
    }

    if (sortOption === "Fiyata Göre Artan") {
      result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortOption === "Fiyata Göre Azalan") {
      result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortOption === "En Yeniler") {
       result.sort((a, b) => {
          if (a.badge === "Yeni" && b.badge !== "Yeni") return -1;
          if (a.badge !== "Yeni" && b.badge === "Yeni") return 1;
          return b.id - a.id;
       });
    }

    return result;
  }, [selectedCategories, selectedPriceRanges, sortOption]);

  // --- SAYFALAMA (PAGINATION) ---
  const totalItems = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-stone-200 pb-8">
          <h1 className="font-serif text-4xl text-stone-900 mb-4 tracking-wide">Tüm Koleksiyon</h1>
          <p className="text-stone-500 font-light max-w-2xl">Usta ellerden çıkan, her biri kendi hikayesine sahip özel tasarım tesbihlerimizi keşfedin.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* SOL: FİLTRELEME SÜTUNU */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="flex items-center gap-2 mb-6 text-stone-900 font-serif text-xl border-b border-stone-200 pb-4">
              <Filter className="w-5 h-5 text-emerald-900" />
              <h2>Filtreler</h2>
            </div>

            {/* Kategori Filtresi */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-4">Kategoriler</h3>
              <div className="space-y-3">
                {categories.map((cat, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 accent-emerald-900 cursor-pointer" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                    />
                    <span className="text-sm text-stone-600 group-hover:text-emerald-900 transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Fiyat Filtresi */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-4">Fiyat Aralığı</h3>
              <div className="space-y-3">
                {priceRanges.map((range, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 accent-emerald-900 cursor-pointer"
                      checked={selectedPriceRanges.includes(range.label)}
                      onChange={() => handlePriceRangeChange(range.label)}
                    />
                    <span className="text-sm text-stone-600 group-hover:text-emerald-900 transition-colors">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* DİNAMİK RENKLİ BUTON */}
            <button 
              onClick={clearFilters}
              className={`w-full py-3 text-xs tracking-widest uppercase transition-all duration-300 ${
                isFilterActive 
                  ? 'bg-emerald-900 text-white hover:bg-emerald-950 shadow-md' 
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
            >
              Filtreleri Temizle
            </button>
          </aside>

          {/* SAĞ: ÜRÜN VİTRİNİ */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6 text-sm text-stone-500">
              <span>Toplam <b>{totalItems}</b> ürün listeleniyor</span>
              
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-transparent border-none outline-none text-stone-700 cursor-pointer font-medium"
              >
                <option value="En Yeniler">En Yeniler</option>
                <option value="Fiyata Göre Artan">Fiyata Göre Artan</option>
                <option value="Fiyata Göre Azalan">Fiyata Göre Azalan</option>
              </select>
            </div>

            {currentProducts.length === 0 ? (
                <div className="text-center py-20 text-stone-500 font-serif text-xl">
                    Seçtiğiniz kriterlere uygun ürün bulunamadı.
                </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProducts.map((item) => (
                  <Link to={`/urun/${item.id}`} key={item.id} className="group cursor-pointer flex flex-col">
                    <div className="relative overflow-hidden bg-stone-200 aspect-square mb-4 border border-stone-200/50">
                      {item.badge && (
                        <div className="absolute top-4 left-4 z-10 bg-stone-50 text-stone-900 px-3 py-1 text-xs tracking-widest uppercase shadow-sm">
                          {item.badge}
                        </div>
                      )}
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="font-serif text-lg text-stone-900 mb-1 truncate">{item.name}</h3>
                      <p className="text-sm text-stone-500 mb-4">{item.desc}</p>
                      <div className="mt-auto flex justify-between items-center border-t border-stone-200 pt-4">
                        <span className="font-medium text-stone-900 tracking-wide">{item.price}</span>
                        <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-900 transition-colors" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            
            {/* Dinamik Sayfalama */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNum = index + 1;
                  return (
                    <button 
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 border flex items-center justify-center text-sm transition-colors ${
                        currentPage === pageNum 
                          ? 'border-emerald-900 bg-emerald-900 text-white' 
                          : 'border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  )
}