// page.tsx is the ui for the / path
import Image from 'next/image'
import Link from 'next/link';
import { AlbumList } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
    <AlbumList />
      <div> 
      </div>
    </main>
  )
}
