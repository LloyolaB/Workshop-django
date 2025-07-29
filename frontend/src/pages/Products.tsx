import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const Products: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Productos</h1>
          <p className="text-gray-600">Gestiona tu catálogo de productos</p>
        </div>
        <Button>Agregar Producto</Button>
      </div>
      
      <Card className="p-6">
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No hay productos</h3>
          <p className="text-gray-500 mb-4">Comienza agregando tu primer producto al sistema</p>
          <Button variant="outline">Agregar Primer Producto</Button>
        </div>
      </Card>
    </div>
  );
};
