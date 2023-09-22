import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <header className='w-full absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href='/'>
            <h1 className="text-2xl navbar-h1 font-normal font-['Koulen']">GRASLOWSNAIL</h1>
        </Link>

        <div className="flex space-x-4"> {/* New container */}
            <Link href='/about'>
                <h1 className="text-2xl navbar-h1 font-normal font-['Koulen']">ABOUT</h1>
            </Link>
            <Link href='/faq'>
                <h1 className="text-2xl navbar-h1 font-normal font-['Koulen']">FAQ</h1>
            </Link>
        </div>
    </nav>
</header>


    );
};

export default Navbar;

