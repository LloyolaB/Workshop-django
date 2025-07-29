import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { Layout } from '@/layout/Layout';
import { ProtectedRoute } from '@/components/ui/auth/ProtectedRoute';
import { Dashboard, Products, Inventory, Login } from '@/pages';
import { ROUTES } from '@/utils/constants';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Ruta pública de login */}
          <Route path={ROUTES.LOGIN} element={<Login />} />

          {/* Rutas protegidas con Layout */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route path={ROUTES.INVENTORY} element={<Inventory />} />
          </Route>

          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
