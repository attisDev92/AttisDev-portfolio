export const PixelHeart = ({ className = '' }: { className?: string }) => (
  <div className={`w-6 h-6 relative ${className}`}>
    <div className="absolute w-2 h-2 bg-primary top-0 left-1"></div>
    <div className="absolute w-2 h-2 bg-primary top-0 right-1"></div>
    <div className="absolute w-6 h-2 bg-primary top-2 left-0"></div>
    <div className="absolute w-4 h-2 bg-primary top-4 left-1"></div>
    <div className="absolute w-2 h-2 bg-primary top-6 left-2"></div>
  </div>
)

export const PixelStar = ({ className = '' }: { className?: string }) => (
  <div className={`w-7 h-7 relative ${className}`}>
    <div className="absolute w-1 h-1 bg-primary top-0 left-3"></div>
    <div className="absolute w-7 h-1 bg-primary top-2 left-0"></div>
    <div className="absolute w-3 h-1 bg-primary top-3 left-2"></div>
    <div className="absolute w-1 h-3 bg-primary top-3 left-3"></div>
    <div className="absolute w-3 h-1 bg-primary top-5 left-2"></div>
    <div className="absolute w-1 h-1 bg-primary top-6 left-3"></div>
  </div>
)

export const PixelCoin = ({ className = '' }: { className?: string }) => (
  <div className={`w-6 h-6 relative ${className}`}>
    <div className="absolute w-4 h-1 bg-yellow-400 top-0 left-1"></div>
    <div className="absolute w-6 h-4 bg-yellow-400 top-1 left-0"></div>
    <div className="absolute w-4 h-1 bg-yellow-400 top-5 left-1"></div>
    <div className="absolute w-2 h-2 bg-yellow-600 top-2 left-2"></div>
  </div>
)

export const PixelController = ({ className = '' }: { className?: string }) => (
  <div className={`w-10 h-6 relative ${className}`}>
    <div className="absolute w-10 h-4 bg-gray-800 top-1 left-0 rounded-sm"></div>
    <div className="absolute w-3 h-3 bg-gray-700 top-0 left-1 rounded-full"></div>
    <div className="absolute w-3 h-3 bg-gray-700 top-0 right-1 rounded-full"></div>
    <div className="absolute w-1 h-1 bg-primary top-1 left-2 rounded-full"></div>
    <div className="absolute w-1 h-1 bg-secondary top-1 right-2 rounded-full"></div>
    <div className="absolute w-2 h-1 bg-accent top-3 left-4"></div>
  </div>
)

export const PixelMushroom = ({ className = '' }: { className?: string }) => (
  <div className={`w-8 h-8 relative ${className}`}>
    <div className="absolute w-6 h-1 bg-red-500 top-0 left-1"></div>
    <div className="absolute w-8 h-3 bg-red-500 top-1 left-0"></div>
    <div className="absolute w-2 h-1 bg-white top-2 left-2"></div>
    <div className="absolute w-2 h-1 bg-white top-2 right-2"></div>
    <div className="absolute w-4 h-4 bg-tan-200 top-4 left-2"></div>
  </div>
)
