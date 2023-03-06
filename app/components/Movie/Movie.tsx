'use client'

import { WithMovie } from '@/app/interfaces'
import Link from 'next/link'
import Image from 'next/image'

const Movie: React.FC<WithMovie> = ({ id, title, poster_path: posterPath }) => {
  const imagePath = 'https://image.tmdb.org/t/p/original/'
  return (
    <div>
      <h1>{title}</h1>
      <h2>Release Date</h2>
      <Link href={`/${id}`}>
        <Image src={imagePath + posterPath} width={220} height={330} alt={title} />
      </Link>
    </div>
  )
}

export default Movie