import { motion } from 'framer-motion';
import { HiCreditCard, HiDeviceMobile, HiShoppingCart, HiGlobe, HiCheck, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'POS Terminal',
    description: 'Güvenli ve hızlı ödeme işlemleri için modern POS terminal çözümü.',
    icon: HiCreditCard,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
    features: [
      'Kredi kartı ve banka kartı desteği',
      'Hızlı işlem süresi',
      'Güvenli altyapı',
      '7/24 teknik destek',
      'Çoklu dil desteği',
      'Detaylı raporlama',
    ],
    benefits: [
      'İşlem hızını %40 artırın',
      'Müşteri memnuniyetini yükseltin',
      'Operasyonel maliyetleri düşürün',
    ],
    price: '₺1,999\'dan başlayan fiyatlarla',
  },
  {
    name: 'Mobil Ödeme',
    description: 'Mobil cihazlar üzerinden güvenli ödeme işlemleri.',
    icon: HiDeviceMobile,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
    features: [
      'QR kod ile ödeme',
      'NFC desteği',
      'Mobil uygulama entegrasyonu',
      'Anlık bildirimler',
      'Çoklu cihaz desteği',
      'Offline çalışma modu',
    ],
    benefits: [
      'Mobil satışları %60 artırın',
      'Müşteri deneyimini iyileştirin',
      'Satış noktalarınızı genişletin',
    ],
    price: 'Aylık ₺299\'dan başlayan fiyatlarla',
  },
  {
    name: 'E-Ticaret Çözümü',
    description: 'Online mağazanız için güvenli ödeme altyapısı.',
    icon: HiShoppingCart,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
    features: [
      'Çoklu ödeme seçeneği',
      'Otomatik fatura',
      'Stok takibi',
      'Detaylı raporlama',
      'Fraud koruması',
      'API entegrasyonu',
    ],
    benefits: [
      'Online satışları %80 artırın',
      'Dönüşüm oranlarını yükseltin',
      'Müşteri sadakatini artırın',
    ],
    price: 'İşlem başına %1.5 komisyon',
  },
  {
    name: 'Uluslararası Ödemeler',
    description: 'Global işlemler için güvenli ödeme çözümü.',
    icon: HiGlobe,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
    features: [
      'Çoklu para birimi desteği',
      'Düşük işlem ücretleri',
      'Hızlı transfer',
      'Güvenli altyapı',
      'Global ödeme ağı',
      'Döviz kuru koruması',
    ],
    benefits: [
      'Uluslararası satışları %200 artırın',
      'Döviz riskini minimize edin',
      'Global pazarlara açılın',
    ],
    price: 'İşlem başına %1 komisyon',
  },
];

export default function Products() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
        {/* Animated background shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -top-32 -left-32 z-0 h-[500px] w-[500px] rounded-full bg-primary-200 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="pointer-events-none absolute top-1/2 right-0 z-0 h-[300px] w-[300px] rounded-full bg-primary-100 blur-2xl"
        />
        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Ürünlerimiz
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              İşletmenizin ihtiyaçlarına özel, modern ve güvenli ödeme çözümleri sunuyoruz.
              Dijital dönüşümünüzü posNox ile gerçekleştirin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm">
                        <product.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-lg text-gray-600">{product.description}</p>
                  
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                      Özellikler
                    </h4>
                    <ul className="mt-4 grid grid-cols-2 gap-3">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <HiCheck className="h-5 w-5 text-primary-600" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                      Faydalar
                    </h4>
                    <ul className="mt-4 space-y-2">
                      {product.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary-600" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <div className="text-lg font-semibold text-primary-600">
                      {product.price}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700 transition-colors"
                    >
                      Detaylı Bilgi
                      <HiArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-400">
        <div className="container py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Size Özel Çözümler
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              İşletmenizin ihtiyaçlarına özel çözümler için bizimle iletişime geçin
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary-600 shadow-xl hover:bg-primary-50 hover:scale-105 transition-all"
              >
                İletişime Geçin
                <HiArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 