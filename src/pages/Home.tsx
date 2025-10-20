import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiShieldCheck, HiCreditCard, HiChartBar } from 'react-icons/hi';

const features = [
  {
    name: 'Güvenli Ödeme',
    description: 'En son güvenlik teknolojileri ile işlemlerinizi güvende tutuyoruz.',
    icon: HiShieldCheck,
  },
  {
    name: 'Kolay Entegrasyon',
    description: 'Mevcut sistemlerinize kolayca entegre olabilen çözümler sunuyoruz.',
    icon: HiCreditCard,
  },
  {
    name: 'Detaylı Raporlama',
    description: 'İşletmenizin performansını anlık olarak takip edebilirsiniz.',
    icon: HiChartBar,
  },
];



export default function Home() {
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
        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl leading-tight">
                <span className="text-primary-700">posNox</span> ile <span className="text-primary-500">Geleceğin Ödemesi</span>
              </h1>
              <p className="mt-6 text-xl text-gray-700 max-w-xl">
                Kurumsal işletmeler için <span className="font-semibold text-primary-600">güvenli</span>, <span className="font-semibold text-primary-600">hızlı</span> ve <span className="font-semibold text-primary-600">yenilikçi</span> ödeme çözümleri. Dijital dönüşümde bir adım önde olun.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  to="/contact"
                  className="btn btn-primary text-lg px-8 py-3 shadow-lg hover:scale-105 transition-transform"
                >
                  Hemen Başlayın
                  <HiArrowRight className="ml-2 h-6 w-6" />
                </Link>
                <Link
                  to="/products"
                  className="btn btn-secondary text-lg px-8 py-3 shadow-lg hover:scale-105 transition-transform"
                >
                  Ürünlerimizi Keşfedin
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex justify-center"
            >
              {/* Product/Concept Image */}
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                alt="posNox ödeme terminali"
                className="w-[350px] h-[350px] object-contain rounded-3xl shadow-2xl border-8 border-white"
                style={{ background: 'linear-gradient(135deg, #bae6fd 0%, #0ea5e9 100%)' }}
              />
              {/* Decorative floating card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl px-6 py-3 flex items-center gap-3 border border-primary-100"
              >
                <HiShieldCheck className="text-primary-600 h-6 w-6" />
                <span className="font-semibold text-primary-700">PCI-DSS Sertifikalı Güvenlik</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
        {/* Decorative background shape */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="pointer-events-none absolute -top-32 right-0 z-0 h-[400px] w-[400px] rounded-full bg-primary-200 blur-3xl"
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Neden <span className="text-primary-600">posNox?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              İşletmeniz için en iyi ödeme çözümlerini sunuyoruz
            </p>
          </motion.div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-3xl bg-white/80 p-10 shadow-xl ring-1 ring-primary-100 border border-primary-50 hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Icon background */}
                <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-primary-100 opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-300" />
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-primary-50 mb-6 shadow-md">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600 text-lg">
                  {feature.description}
                </p>
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
              Hemen Başlayın
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              İşletmeniz için en uygun çözümü bulmak için bizimle iletişime geçin
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-white px-8 py-4 text-lg font-semibold text-primary-600 shadow-xl hover:bg-primary-50 hover:scale-105 transition-transform"
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