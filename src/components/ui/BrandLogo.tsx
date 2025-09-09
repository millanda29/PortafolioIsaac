"use client"

interface BrandLogoProps {
    size?: 'sm' | 'md' | 'lg' | 'xl'
    showTagline?: boolean
    className?: string
    useImage?: boolean
}

export default function BrandLogo({ size = 'lg', showTagline = true, className = '', useImage = true }: BrandLogoProps) {
    const sizeClasses = {
        sm: 'w-32 h-32',
        md: 'w-40 h-40',
        lg: 'w-48 h-48',
        xl: 'w-56 h-56'
    }

    const textSizes = {
        sm: 'text-3xl',
        md: 'text-4xl',
        lg: 'text-5xl',
        xl: 'text-6xl'
    }

    return (
        <div className={`flex flex-col items-center gap-4 ${className}`}>
            {/* Logo principal */}
            <div className="relative">
                <div className={`${sizeClasses[size]} bg-gradient-primary rounded-2xl flex items-center justify-center text-white font-bold shadow-2xl overflow-hidden`}>
                     {useImage ? (
                         <img
                             src="/profile.webp"
                             alt="Isaac Llanda Logo"
                             className="w-full h-full object-contain"
                             onError={(e) => {
                                 // Fallback a las iniciales si no existe la imagen
                                 e.currentTarget.style.display = 'none'
                                 const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                                 if (nextElement) {
                                     nextElement.style.display = 'flex'
                                 }
                             }}
                         />
                     ) : null}
                    <span className={`${textSizes[size]} ${useImage ? 'hidden' : 'flex'} items-center justify-center w-full h-full`}>
                        IL
                    </span>
                </div>
                
                {/* Efecto decorativo */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-sm animate-pulse">
                    💻
                </div>
            </div>
            
            {/* Texto del brand */}
            <div className="text-center">
                <h1 className={`${textSizes[size]} font-bold text-foreground mb-2`}>
                    Isaac Llanda
                </h1>
                {showTagline && (
                    <p className="text-muted-foreground text-sm md:text-base">
                        Fullstack Developer & Systems Engineer
                    </p>
                )}
            </div>
        </div>
    )
}
