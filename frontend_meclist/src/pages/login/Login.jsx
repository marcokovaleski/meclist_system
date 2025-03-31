import React, { useState } from 'react';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você implementaria a lógica de autenticação
        console.log('Login tentado com:', username);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-background-dark relative overflow-hidden">
            {/* Background circles */}
            <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-blue-300/30 -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-blue-300/20 -translate-x-1/4 translate-y-1/4"></div>

            {/* Wave shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-bl-full"></div>
            <div className="absolute bottom-0 right-0 w-full h-32 bg-blue-300/10 rounded-tl-full"></div>

            <div className="w-full max-w-md p-8 z-10">
                <div className="flex justify-center mb-12">
                    <div className="text-5xl font-bold">
                        <span className="text-primary">M</span>
                        <span className="flex items-center text-primary">
                            <span className="text-secondary text-xs mr-1">☑</span>
                            <span className="text-secondary text-xs mr-1">☑</span>
                            <span className="text-secondary text-xs mr-1">☑</span>
                        </span>
                        <span className="text-primary">C</span>
                        <span className="text-secondary">LIST</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <div className="flex items-center bg-white rounded-md">
                            <div className="p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="USERNAME"
                                className="w-full p-3 outline-none bg-transparent"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center bg-white rounded-md">
                            <div className="p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="password"
                                placeholder="PASSWORD"
                                className="w-full p-3 outline-none bg-transparent"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-secondary py-3 rounded-md text-primary font-bold hover:bg-secondary/90 transition-all"
                    >
                        LOGIN
                    </button>
                </form>

                <div className="text-center mt-4">
                    <button className="text-white text-sm hover:text-primary transition-colors">Esqueceu a senha?</button>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;