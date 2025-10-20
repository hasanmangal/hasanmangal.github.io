import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';

const contactInfo = [
  {
    name: 'Telefon',
    value: '+90 (212) 123 45 67',
    icon: HiPhone,
  },
  {
    name: 'E-posta',
    value: 'info@posnox.com',
    icon: HiMail,
  },
  {
    name: 'Adres',
    value: 'Levent, İstanbul',
    icon: HiLocationMarker,
  },
];

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="container py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              İletişim
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Sorularınız için bizimle iletişime geçin
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Bize Ulaşın
              </h2>
              <p className="mt-4 text-gray-600">
                Formu doldurun, size en kısa sürede dönüş yapalım.
              </p>
              <form className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    E-posta
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    Gönder
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                İletişim Bilgileri
              </h2>
              <p className="mt-4 text-gray-600">
                Aşağıdaki kanallardan bize ulaşabilirsiniz.
              </p>
              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.name} className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 aspect-w-16 aspect-h-9 rounded-2xl bg-gray-100">
                {/* Placeholder for map */}
                <div className="h-full w-full rounded-lg bg-gray-200" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 