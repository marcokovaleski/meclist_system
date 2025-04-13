import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./dasboard.css"

// Componente principal da dashboard
export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <main className="dashboard-content">
                <h1>Dashboard</h1>
            </main>
        </div>
    );
}