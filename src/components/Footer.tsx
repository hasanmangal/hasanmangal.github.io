import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Ürünlerimiz', href: '/products' },
    { name: 'İletişim', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: FaFacebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: FaTwitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: FaLinkedin,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: FaInstagram,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-white">
              posNox
            </Link>
            <p className="text-sm text-gray-400">
              Modern ve güvenilir ödeme çözümleri ile işletmenizi geleceğe taşıyoruz.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Hızlı Erişim
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-base text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              İletişim
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-base text-gray-300">
                info@posnox.com
              </li>
              <li className="text-base text-gray-300">
                +90 (531) 778 36 54
              </li>
              <li className="text-base text-gray-300">
                +90 (553) 109 72 66
              </li>
              <li className="text-base text-gray-300">
                İstanbul, Türkiye
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Bizi Takip Edin
            </h3>
            <ul className="mt-4 flex space-x-6">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} posNox. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
} 