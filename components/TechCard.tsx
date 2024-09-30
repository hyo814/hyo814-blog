import React, { useState } from 'react'
import Image from 'next/image'

interface TechCardProps {
  frontContent: string
  backContent: string
  imageSrc: string
}

const TechCard: React.FC<TechCardProps> = ({ frontContent, backContent, imageSrc }) => {
  const [flipped, setFlipped] = useState(false)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setFlipped(!flipped)
    }
  }

  return (
    <div
      className="flex h-72 w-52 cursor-pointer items-center justify-center md:h-80 md:w-64"
      onClick={() => setFlipped(!flipped)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      style={{ perspective: '1000px' }}
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 ${flipped ? 'rotate-y-180 transform' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-500 p-4 shadow-lg"
          style={{ backfaceVisibility: 'hidden', zIndex: flipped ? 0 : 1 }}
        >
          <Image src={imageSrc} alt={frontContent} className="mb-4 h-16 w-16" />
          <h2 className="break-words text-center text-xl text-white">{frontContent}</h2>
        </div>
        <div
          className="rotate-y-180 absolute flex h-full w-full transform items-center justify-center rounded-lg bg-green-500 shadow-lg"
          style={{ backfaceVisibility: 'hidden', zIndex: flipped ? 1 : 0 }}
        >
          <p className="text-xl text-white">{backContent}</p>
        </div>
      </div>
    </div>
  )
}

export default TechCard
