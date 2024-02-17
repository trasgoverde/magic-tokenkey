import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { Image } from "next/image";
import Logo from '@/components/icons/Logo';
import MobileNav from '@/components/MobileNav';
import { ArrowRight } from "lucide-react";

export default function InmueblesPage() {
  return (
    <div className="bg-white">
      <header className="bg-[#f8f9fa] py-4">

          <div className="flex items-center space-x-4">
            <div className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper> 
          <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
            <Logo />
            <Link
              href='/'
              className='flex z-30 font-bold pr-10 text-lg'>
              <span>TokenKey | Real World Assets</span>
            </Link>
            <MobileNav />
            <div className='hidden items-center text-lg space-x-8 sm:flex'>
            <Link
                href='/'
                >
                Inicio
              </Link>
              <Link
                href='/company'
                >
                Compañia
              </Link>
              <Link
                href='/inmuebles'
               >
                Inmuebles
              </Link>
              <Link
                href='/ayuda'
                >
                Ayuda
                </Link>

              <Link
                href='/sign-up' // Provide the href attribute here
                >
                Empezar{' '}
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      </div>
      </header>
      <main className="container mx-auto px-4">
        <section className="py-12">
          <h1 className="text-3xl font-bold text-gray-900">Inmuebles</h1>
          <p className="mt-4 text-sm text-gray-600">
            Nuestro sistema de tokenización, permite dividir una gran inversión en proporciones pequeñas de esta,
            permitiendo así que pequeños inversores puedan acceder a grandes beneficios.
          </p>
          <div className="mt-6 flex items-center justify-between">
            <Input className="w-full max-w-xs" placeholder="Buscar..." type="search" />
              <Button variant="outline">Mostrar filtros</Button>
            </div>
        </section>
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" />
        <footer className="mt-12 py-8">
          <div className="container mx-auto flex flex-col items-center space-y-4 px-4">
          <Logo />
            <p className="text-center text-sm text-gray-600">
              Invierte como los grandes del mercado inmobiliario, con un riesgo extremadamente controlado mediante un
              activo real y a partir de una aportación mínima, que te traerá proporcionalmente el mismo porcentaje de
              beneficio que la inversión total.
            </p>
            <Button variant="outline">En breve estará disponible</Button>
            <div className="flex justify-center space-x-4 mt-4">
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            Política de Privacidad
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            Uso de Cookies
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            Aviso Legal
          </Link>
        </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
