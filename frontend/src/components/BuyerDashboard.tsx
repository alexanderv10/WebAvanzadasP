'use client'

import { Music, MessageCircle, FileText, Search } from 'lucide-react'

export default function BuyerDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🛒 Dashboard Comprador
        </h2>
        <p className="text-gray-600">
          Explora canciones y adquiere derechos musicales
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Canciones Disponibles */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Canciones Disponibles
            </h3>
            <Music className="text-blue-600" size={24} />
          </div>
          
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Buscar canciones..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="border rounded-lg p-3 hover:bg-gray-50">
              <h4 className="font-medium">Summer Vibes</h4>
              <p className="text-sm text-gray-600">Por: Juan Artista</p>
              <p className="text-xs text-gray-500">Género: Pop</p>
              <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                Solicitar Derechos
              </button>
            </div>
            <div className="border rounded-lg p-3 hover:bg-gray-50">
              <h4 className="font-medium">Night Dreams</h4>
              <p className="text-sm text-gray-600">Por: María Songwriter</p>
              <p className="text-xs text-gray-500">Género: Electronic</p>
              <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                Solicitar Derechos
              </button>
            </div>
          </div>
        </div>

        {/* Chats Activos */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Chats Activos
            </h3>
            <MessageCircle className="text-green-600" size={24} />
          </div>
          <div className="space-y-3">
            <div className="border rounded-lg p-3 hover:bg-gray-50">
              <h4 className="font-medium">Chat con Juan Artista</h4>
              <p className="text-sm text-gray-600">Sobre: Summer Vibes</p>
              <p className="text-xs text-gray-500">Último mensaje: hace 2h</p>
              <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                Ver Chat
              </button>
            </div>
          </div>
        </div>

        {/* Derechos Adquiridos */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Mis Derechos
            </h3>
            <FileText className="text-purple-600" size={24} />
          </div>
          <div className="space-y-3">
            <div className="border rounded-lg p-3">
              <h4 className="font-medium">Ocean Waves</h4>
              <p className="text-sm text-gray-600">Artista: Pedro Music</p>
              <p className="text-xs text-gray-500">Derechos: Sync</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                Activo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}