import React from 'react';
import { Card } from '@/components/ui/card';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Bienvenido al sistema de inventario</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Total de Productos</h3>
          <p className="text-3xl font-bold text-blue-600">0</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Items en Inventario</h3>
          <p className="text-3xl font-bold text-green-600">0</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Ubicaciones</h3>
          <p className="text-3xl font-bold text-purple-600">0</p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
          <p className="text-gray-500">No hay actividad reciente</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Alertas de Stock</h3>
          <p className="text-gray-500">No hay alertas de stock</p>
        </Card>
      </div>
    </div>
  );
};
