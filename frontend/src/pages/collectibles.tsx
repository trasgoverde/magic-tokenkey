import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";

import LoadingWrapper from "@/components/LoadingWrapper";
import CollectibleCard from "@/components/CollectibleCard";
import LoginWithMagic from "@/components/LoginWithMagic";
import MintNFTButton from "@/components/MintNFTButton";

export default function CollectiblesPage() {
  const { user } = useUser();

  // initialize the state used to track the current page's data
  const [loading, setLoading] = useState(user?.refreshCollectibles);

  useEffect(() => {
    // do nothing if the user is not logged in
    if (!user?.address) {
      setLoading(true);
      return;
    }

    // disable the loading after collectibles have already been loaded
    if (user?.address && !user?.refreshCollectibles && user?.collectibles) {
      setLoading(false);
      return;
    }
  }, [user?.address, user?.refreshCollectibles, user?.collectibles]);

  return (
    <Layout title="Inversiones" className="">
      <section className="hero">
        <h1>Inversiones</h1>

        <p>Los usuarios pueden consultar sus tokens</p>
      </section>

      <LoadingWrapper>
        {user?.address ? (
          <>
            <MintNFTButton
              buttonText={
                user?.collectibles?.length > 0
                  ? "Invertir en otro activo"
                  : "Invertir"
              }
              className="mx-auto text-center"
            />

            <LoadingWrapper loading={loading}>
              <div className="flex justify-center">
                <section className="mx-auto inline-grid gap-8 md:grid-cols-3 lg:grid-cols-4">
                  {user?.collectibles?.map((uri, id) => (
                    <CollectibleCard key={id} tokenURI={uri} />
                  ))}
                </section>
              </div>
            </LoadingWrapper>
          </>
        ) : (
          <section className="space-y-3 py-10 text-center">
            <LoginWithMagic />
          </section>
        )}
      </LoadingWrapper>
    </Layout>
  );
}
