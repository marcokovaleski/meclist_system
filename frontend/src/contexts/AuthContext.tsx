// Contexto de autenticação da aplicação, responsável por login e logout
import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

// Define o tipo de dados do usuário
interface User {
    id: string;
    username: string;
}

// Interface com os dados e métodos disponíveis no contexto
interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

// Cria o contexto de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props esperadas pelo Provider
interface AuthProviderProps {
    children: ReactNode;
}

// Provider do contexto de autenticação
export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    // Carrega dados salvos do usuário no localStorage ao iniciar a aplicação
    useEffect(() => {
        const storedUser = localStorage.getItem("authUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Função para logar e salvar dados no localStorage
    const login = (userData: User) => {
        setUser(userData);
        localStorage.setItem("authUser", JSON.stringify(userData));
    };

    // Função para logout
    const logout = () => {
        setUser(null);
        localStorage.removeItem("authUser");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook customizado para consumir o contexto com segurança
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
}