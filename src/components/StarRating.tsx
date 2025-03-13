export default function StarRating({ rating }: { rating: number }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <img key={`full-${i}`} src="/assets/images/icons/Star 1.svg" className="w-5 h-5" alt="Full star" />
        ))}
        {hasHalfStar && (
          <svg key="half" className="w-5 h-5">
            <defs>
              <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#D3D3D3" />
              </linearGradient>
            </defs>
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#halfStar)" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <img key={`empty-${i}`} src="/assets/images/icons/Star 5.svg" className="w-5 h-5" alt="Empty star" />
        ))}
      </div>
    );
  }
  