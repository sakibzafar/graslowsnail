import Image from 'next/image';
import Link from 'next/link';

import { footerLinks } from '@/constants';

const Footer = () => (
  <footer className='mt-auto'>
    <div className='justify-between items-center flex-wrap mt-5 sm:px-16 px-6 py-10'>

    <div className="text-center">
    {footerLinks.map((item) => (
        <div key={item.title} className="">
            <div className="flex flex-row justify-center gap-3">
                {item.links.map((link) => (
                    <a
                        key={link.title}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[86px] h-8 text-center text-black text-xl font-normal font-koulen"
                    >
                        {link.title}
                    </a>
                ))}
            </div>
        </div>
    ))}
</div>

    </div>
  </footer>
);
<div className="w-[86px] h-8 text-center text-black text-xl font-normal font-['Koulen']">Instagram </div>

export default Footer;

