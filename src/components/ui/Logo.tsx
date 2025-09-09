"use client"

interface LogoProps {
    size?: 'sm' | 'md' | 'lg' | 'xl'
    showText?: boolean
    className?: string
    useImage?: boolean
}

export default function Logo({ size = 'md', showText = true, className = '', useImage = true }: LogoProps) {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-20 h-20'
    }

    const textSizes = {
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl',
        xl: 'text-3xl'
    }

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Logo/Icono */}
            <div className={`${sizeClasses[size]} bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold  overflow-hidden`}>
                {useImage ? (
                    <img
                        src="/icon.png"
                        alt="Isaac Llanda Logo"
                        className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.6)]"
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
                <span className={`text-lg ${useImage ? 'hidden' : 'flex'} items-center justify-center w-full h-full`}>
                    IL
                </span>
            </div>
            
            {/* Texto del logo */}
            {showText && (
                <div className="flex flex-col">
                    <span className={`${textSizes[size]} font-bold text-foreground`}>
                        Isaac.dev
                    </span>
                    <span className="text-xs text-muted-foreground -mt-1">
                        Fullstack Developer
                    </span>
                </div>
            )}
        </div>
    )
}
