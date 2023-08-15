import Image from 'next/image'
import Link from 'next/link';
import { Hero, CustomButton } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div> photo stuff here
                <CustomButton
                    title='collection'
                    btnType='button'
                    containerStyles='text-white rounded-full bg-black main-w-[130px]'
                >
                <Link href='/collection'></Link>
                </CustomButton>
      </div>
    </main>
  )
}
