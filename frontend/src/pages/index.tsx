import Layout from "@/components/Layout";

import LoadingWrapper from "@/components/LoadingWrapper";
import CollectibleCard from "@/components/CollectibleCard";
import FaucetSection from "@/components/FaucetSection";
import ConnectOrMint from "@/components/ConnectOrMint";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link"
import { cn } from "@/lib/utils"

// store a default listing of NFT images from the collection for display on the page
const tokens = [
  { id: 0, image: "/rectangle-6@2x.png" },
  { id: 3, image: "/rectangle-7@2x.png" },
  { id: 9, image: "/rectangle-8@2x.png" },
  { id: 4, image: "/rectangle-6@2x.png" },
];

export default function Home() {
  return (
    <Layout title="Home" className="">
      <section className="hero">
        <h1 className="hidden custom-breakpoint-500:block">
          TokenKey | Real World Assets
        </h1>
        <h1 className="block custom-breakpoint-500:hidden">
        TokenKey | Real World Assets
        </h1>
        <p>
          Follow our{" "}
          <a
            href="https://github.com/trasgoverde/magic-tokenkey"
            rel="noreferrer"
            target="_blank"
            className="text-brand-purple underline"
          >
            Potencia la Evolución Empresarial en el Universo Blockchain
          </a>{" "}
          World Token es mucho más que un evento; es una plataforma integral diseñada para catalizar el crecimiento y la adopción de la tecnología blockchain y la tokenización en el ámbito empresarial. Aquí algunas de las herramientas que nos permiten comunicar los beneficios de la tokenización en la economía real.
        </p>
      </section>

      <LoadingWrapper>
        <section className="space-t-4 mx-auto text-center">
          <ConnectOrMint />
        </section>

        <section className="mx-auto text-center">
          <FaucetSection />
        </section>

        <div className="flex justify-center">
          <section className="inline-grid place-items-center gap-8 md:grid-cols-3 lg:grid-cols-4">
            {tokens.slice(0, 4).map((item, id) => (
              <CollectibleCard key={id} item={item} />
            ))}
          </section>
        </div>
        <header className="text-center py-10">
        <h1 className="text-6xl font-bold">TokenKey</h1>
        <p className="mt-4 text-lg text-gray-600">El presente de la inversión en el sector inmobiliario</p>
        <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto">
          Nuestro sistema de tokenización, permite dividir una gran inversión en proporciones pequeñas de esta,
          permitiendo así que pequeños inversores puedan acceder a grandes beneficios.
        </p>
        <Button className="mt-4" variant="secondary">
          En breve estará disponible
        </Button>
      </header>
      <div className="flex justify-center items-center py-10">
        <img
          alt="Tokenization illustration"
          className="max-w-full h-auto"
          src="/group-10@2x.png"
        />
      </div>
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center">
          Puedes invertir como los grandes inversores, desde solo 100€.
        </h2>
        <div className="mt-6 max-w-4xl mx-auto text-center text-gray-600">
          <p>
            Los tokens de inversión en inmuebles también se benefician de la seguridad y transparencia de las
            blockchains, lo que aumenta la confianza de los inversores y reduce el riesgo de fraude.
          </p>
          <p className="mt-4">
            La tokenización de inversión en inmuebles es una forma innovadora de democratizar el acceso al mercado
            inmobiliario y brindar nuevas oportunidades de inversión a una audiencia más amplia.
          </p>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="w-full">
            <CardContent>
              <img
                alt="Residential property"
                className="w-full h-auto"
                src="/rectangle-6@2x.png"
              />
              <h3 className="mt-4 text-xl font-semibold">Residencial</h3>
              <p className="text-gray-600">
                Viviendas para uso residencial, principalmente en zonas de playa y en su gran mayoría provenientes de
                adjudicaciones.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent>
              <img
                alt="Industrial property"
                className="w-full h-auto"
                src="/rectangle-8@2x.png"
              />
              <h3 className="mt-4 text-xl font-semibold">Industrial</h3>
              <p className="text-gray-600">
                Naves industriales en polígonos altamente demandados, provenientes de adjudicaciones.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent>
              <img
                alt="Commercial property"
                className="w-full h-auto"
                src="/rectangle-7@2x.png"
              />
              <h3 className="mt-4 text-xl font-semibold">Comercial</h3>
              <p className="text-gray-600">Principalmente edificaciones comerciales en zonas prime.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center">Gestionamos todo el proceso</h2>
        <div className="flex justify-center items-center mt-6">
          <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center">
              <ArrowRight className="h-12 w-12 mx-auto text-blue-500" />
              <h3 className="mt-2 font-semibold">Localizamos</h3>
              <p className="text-sm text-gray-600">
                Disponemos de expertos en la localización de los mejores productos inmobiliarios.
              </p>
            </div>
            <div className="text-center">
              <ArrowRight className="h-12 w-12 mx-auto text-blue-500" />
              <h3 className="mt-2 font-semibold">Gestionamos la compra</h3>
              <p className="text-sm text-gray-600">
                Somos expertos en la negociación de condiciones las mejores condiciones posibles.
              </p>
            </div>
            <div className="text-center">
              <ArrowRight className="h-12 w-12 mx-auto text-blue-500" />
              <h3 className="mt-2 font-semibold">Reformamos</h3>
              <p className="text-sm text-gray-600">
                Disponemos de profesionales de alto nivel para proceder a la reforma necesaria para obtener el máximo
                rendimiento de mercado.
              </p>
            </div>
            <div className="text-center">
              <ArrowRight className="h-12 w-12 mx-auto text-blue-500" />
              <h3 className="mt-2 font-semibold">Vendemos</h3>
              <p className="text-sm text-gray-600">
                Debido a nuestro conocimiento y experiencia, proporcionamos buenos precios de venta, incluso para
                inversores.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-10">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">TokenKey</span>
          <Button variant="secondary">En breve estará disponible</Button>
        </div>
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
      </footer>
      </LoadingWrapper>
    </Layout>
  );
}
