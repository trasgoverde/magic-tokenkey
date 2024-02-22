import { useState, useEffect, createContext, useContext, useCallback } from "react";
import { fetchNFTs, getUserData } from "@/lib/utils";
import { useWeb3 } from "./Web3Context";

interface UserData {
  address?: string;
  shortAddress?: string;
  balance?: string;
  collectibles?: string[];
  isLoggedIn?: boolean;
  loading?: boolean;
  refreshCollectibles?: boolean;
  tokenIdForModal?: number;
}

type UserContextType = {
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | undefined>> | null;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: null,
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { web3, contract, isAccountChanged } = useWeb3();

  const [user, setUser] = useState<UserData>();

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching user data");
      if (!web3) return;
      setUser({ loading: true });

      const account = await web3.eth.getAccounts();
      console.log(account);

      if (account.length > 0) {
        const data = await getUserData(web3);
        setUser(data);
      } else {
        setUser({ loading: false });
      }
    };

    fetchData();
  }, [web3, isAccountChanged]);

  const fetchAndUpdateNFTs = useCallback(async () => {
    if (!user?.address || !user?.refreshCollectibles) return;

    setUser({ ...user, refreshCollectibles: true });

    try {
      const res = await fetchNFTs(user.address, contract);

      if (Array.isArray(res)) {
        setUser({
          ...user,
          collectibles: res.reverse(),
          refreshCollectibles: false,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, [user, contract]);

  useEffect(() => {
    fetchAndUpdateNFTs();
  }, [fetchAndUpdateNFTs]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
