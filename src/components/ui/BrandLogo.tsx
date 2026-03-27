"use client"

import Image from "next/image"

interface BrandLogoProps {
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: string
    useImage?: boolean
}

export default function BrandLogo({ size = 'lg', className = '', useImage = true }: BrandLogoProps) {
    const sizeConfig = {
        sm: { container: 'w-28 h-28', text: 'text-2xl', ring: 'p-1', icon: 'w-6 h-6 text-xs -top-1 -right-1' },
        md: { container: 'w-36 h-36', text: 'text-3xl', ring: 'p-1.5', icon: 'w-7 h-7 text-sm -top-1 -right-1' },
        lg: { container: 'w-44 h-44', text: 'text-4xl', ring: 'p-2', icon: 'w-8 h-8 text-sm -top-2 -right-2' },
        xl: { container: 'w-52 h-52 md:w-60 md:h-60', text: 'text-5xl', ring: 'p-2', icon: 'w-10 h-10 text-base -top-2 -right-2' }
    }

    const config = sizeConfig[size]

    return (
        <div className={`flex flex-col items-center ${className}`}>
            {/* Contenedor con anillo animado */}
            <div className="relative group">
                {/* Glow effect */}
                <div className={`absolute inset-0 ${config.container} bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-spin-slow`} />
                
                {/* Anillo exterior con gradiente */}
                <div className={`relative ${config.ring} bg-gradient-to-tr from-primary via-accent to-primary rounded-full shadow-2xl shadow-primary/30`}>
                    {/* Contenedor de imagen */}
                    <div className={`${config.container} bg-card rounded-full flex items-center justify-center overflow-hidden ring-4 ring-background`}>
                        {useImage ? (
                            <Image
                                src="/profile.webp"
                                alt="Isaac Llanda"
                                width={240}
                                height={240}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                priority
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none'
                                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                                    if (nextElement) nextElement.style.display = 'flex'
                                }}
                            />
                        ) : null}
                        <span className={`${config.text} ${useImage ? 'hidden' : 'flex'} items-center justify-center w-full h-full font-bold bg-gradient-to-br from-primary to-accent text-transparent bg-clip-text`}>
                            IL
                        </span>
                    </div>
                </div>
                
                {/* Badge de estado */}
                <div className={`absolute ${config.icon} bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-background`}>
                    <span className="animate-pulse">✓</span>
                </div>

                {/* Decoración orbital */}
                <div className="absolute inset-0 rounded-full animate-spin-very-slow pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 bg-primary rounded-full opacity-60" />
                </div>
            </div>
        </div>
    )
}
