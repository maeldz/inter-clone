import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { AppLoading } from "expo";

interface User {
  id: number;
  email: string;
  name: string;
}
interface PromiseResponse {
  data: {
    user: User;
  };
}

interface AuthContextData {
  signed: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): Promise<void>;
  loading: boolean;
  user: User | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signIn(email: string, password: string) {
    const response: PromiseResponse = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            user: {
              id: 1,
              email: "mael.dazareia@gmail.com",
              name: "ismael de jesus",
            },
          },
        });
      }, 2000);
    });

    const { user } = response.data;

    await AsyncStorage.setItem("@inter-clone:user", JSON.stringify(user));

    setUser(user);
  }

  async function signOut() {
    await AsyncStorage.removeItem("@inter-clone:user");
    setUser(null);
  }

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@inter-clone:user");

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  if (loading) return <AppLoading />;

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
