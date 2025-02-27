import Image from "next/image";

export function Header() {
    return (
        <div className="w-full flex justify-center md:justify-start items-center px-10 h-16 bg-alyment-primary drop-shadow-xl">
            <Image
                src="/logo_alyment.svg"
                alt='Alymente logo'
                width={120}
                height={120}
                quality={100}
            />
        </div>
    )
}