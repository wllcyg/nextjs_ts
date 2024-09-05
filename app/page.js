import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
        <div className='flex flex-col justify-center items-center h-screen text-3xl font-bold'>
          <h1 className='text-amber-500'>
            this is static
          </h1>
          <div className='flex gap-2.5 text-blue-200'>
            <Link href="/meals">Meals</Link>
            <Link href="/community">Community</Link>
            <Link href="/meals/share">Share</Link>
          </div>
        </div>
  );
}
