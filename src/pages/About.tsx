import { motion } from 'framer-motion';
import { HiUserGroup, HiLightBulb, HiGlobe, HiChartBar, HiCheckCircle } from 'react-icons/hi';

const stats = [
  { label: 'Aktif Müşteri', value: '10,000+', icon: HiUserGroup },
  { label: 'Yıllık İşlem Hacmi', value: '₺1B+', icon: HiChartBar },
  { label: 'Başarı Oranı', value: '%99.9', icon: HiCheckCircle },
];

const team = [
  {
    name: 'Ahmet Yılmaz',
    role: 'CEO & Kurucu',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    linkedin: '#',
  },
  {
    name: 'Ayşe Demir',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    linkedin: '#',
  },
  {
    name: 'Mehmet Kaya',
    role: 'Ürün Müdürü',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    linkedin: '#',
  },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
        {/* Animated background shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -top-32 -left-32 z-0 h-[400px] w-[400px] rounded-full bg-primary-200 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="pointer-events-none absolute top-1/2 right-0 z-0 h-[300px] w-[300px] rounded-full bg-primary-100 blur-2xl"
        />
        <div className="container relative z-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-700 via-primary-500 to-primary-400 drop-shadow-lg sm:text-6xl">
              Hakkımızda
            </h1>
            <div className="flex justify-center mt-4 mb-2">
              <span className="block h-1 w-24 rounded-full bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400 opacity-70"></span>
            </div>
            <p className="mt-6 text-2xl font-light text-gray-700 max-w-2xl mx-auto leading-relaxed drop-shadow-sm animate-fade-in">
              posNox olarak, işletmelerin dijital dönüşümüne öncülük ediyor ve modern ödeme çözümleri sunuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center rounded-2xl bg-white shadow-xl p-8 border border-primary-100 hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-primary-50 mb-4 shadow">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-4xl font-extrabold text-primary-700">{stat.value}</div>
                <div className="mt-2 text-lg text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Misyonumuz
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                İşletmelerin dijital dönüşümüne öncülük ederek, modern ve güvenli ödeme çözümleri sunmak. Müşterilerimizin ihtiyaçlarını en iyi şekilde karşılayarak, işlerini büyütmelerine yardımcı olmak.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <HiLightBulb className="h-6 w-6 text-primary-600" />
                  <p className="ml-3 text-gray-600">
                    Yenilikçi çözümler ile sektöre yön veriyoruz
                  </p>
                </div>
                <div className="flex items-start">
                  <HiUserGroup className="h-6 w-6 text-primary-600" />
                  <p className="ml-3 text-gray-600">
                    Müşteri odaklı yaklaşım ile hizmet veriyoruz
                  </p>
                </div>
                <div className="flex items-start">
                  <HiGlobe className="h-6 w-6 text-primary-600" />
                  <p className="ml-3 text-gray-600">
                    Global standartlarda hizmet sunuyoruz
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 p-1 shadow-xl">
                <div className="h-full w-full rounded-xl bg-white p-4 flex items-center justify-center">
                  {/* Realistic mission image */}
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                    alt="posNox ekip çalışması"
                    className="h-full w-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Ekibimiz
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Deneyimli ve uzman ekibimiz ile yanınızdayız
            </p>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group text-center rounded-2xl bg-white p-8 shadow-xl border border-primary-100 hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative mx-auto h-40 w-40 mb-4">
                  <img
                    className="h-full w-full rounded-full object-cover border-4 border-primary-100 group-hover:border-primary-400 transition-all"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <div className="flex justify-center gap-3 mt-2">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 