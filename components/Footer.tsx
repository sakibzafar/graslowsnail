import Image from 'next/image';
import Link from 'next/link';

import { footerLinks } from '@/constants';

const Footer = () => (
  <footer className='mt-auto'>
    <div className='justify-between items-center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-10'>

      <div className="footer__links text-center">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-sans">{item.title}</h3>
            <div className="flex flex-row justify-center gap-3">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;

