import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="dark:bg-gray-700 ">
      <AuthProvider>
        <Header />
        <AllRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
