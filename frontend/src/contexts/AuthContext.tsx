import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

// Define o tipo do usuário
interface User {
    id: string;
    username: string;
}

// Define os métodos e dados disponíveis no contexto
interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Tipagem das props do provider
interface AuthProviderProps {
    children: ReactNode;
}

// Provider responsável por controlar login e logout
export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    // Carrega usuário do localStorage ao iniciar
    useEffect(() => {
        const storedUser = localStorage.getItem("authUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Recupera o usuário salvo
        }
    }, []);

    const login = (userData: User) => {
        setUser(userData);
        localStorage.setItem("authUser", JSON.stringify(userData)); // Salva no localStorage
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("authUser"); // Remove do localStorage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook customizado para consumir o contexto
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
}