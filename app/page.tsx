import Image from 'next/image'
import Link from 'next/link';
import { Hero, CustomButton, AlbumList } from '@/components';

async function getData() {
  const res = await fetch('https://cpne3m3l9f.execute-api.us-east-2.amazonaws.com/v1/users')
  //the return value is not serialized
  //you can return Date, Map, Set, etc.

  if(!res.ok) {
    // this will activeate the closest error.js error baoudery
    throw new Error('Failed to fetch data')
  }

  return res.json()
};

export default async function Home() {
  const data = await getData();
  return (
    <main className="overflow-hidden">
    <AlbumList data={data} />
      <div> 
      </div>
    </main>
  )
}
