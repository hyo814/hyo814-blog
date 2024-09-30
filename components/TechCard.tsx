import React, { useState } from 'react';

interface TechCardProps {
	frontContent: string;
	backContent: string;
	imageSrc: string;
}

const TechCard: React.FC<TechCardProps> = ({ frontContent, backContent, imageSrc }) => {
	const [flipped, setFlipped] = useState(false);
	
	return (
		<div
			className="w-52 h-72 md:w-64 md:h-80 flex items-center justify-center cursor-pointer"
			onClick={() => setFlipped(!flipped)}
			style={{ perspective: '1000px' }}
		>
			<div
				className={`relative w-full h-full transition-transform duration-500 ${flipped ? 'transform rotate-y-180' : ''}`}
				style={{ transformStyle: 'preserve-3d' }}
			>
				<div
					className="absolute w-full h-full bg-blue-500 flex flex-col items-center justify-center rounded-lg shadow-lg p-4"
					style={{ backfaceVisibility: 'hidden', zIndex: flipped ? 0 : 1 }}
				>
					<img src={imageSrc} alt={frontContent} className="w-16 h-16 mb-4" /> {/* 이미지 배지 */}
					<h2 className="text-white text-xl text-center break-words">{frontContent}</h2>
				</div>
				<div
					className="absolute w-full h-full bg-green-500 flex items-center justify-center rounded-lg shadow-lg transform rotate-y-180"
					style={{ backfaceVisibility: 'hidden', zIndex: flipped ? 1 : 0 }}
				>
					<p className="text-white text-xl">{backContent}</p>
				</div>
			</div>
		</div>
	);
};

export default TechCard;
