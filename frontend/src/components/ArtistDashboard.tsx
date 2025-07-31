'use client'

import { Upload, Music, MessageCircle, Award, Edit, Trash2, Eye } from 'lucide-react'

export default function ArtistDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🎨 Dashboard Artista
        </h2>
        <p className="text-gray-600">
          Gestiona tus canciones y otorga derechos musicales
        </p>
      </div>

      {/* Botón de subir canción */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Subir Nueva Canción</h3>
            <p className="opacity-90">Comparte tu música con el mundo</p>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
            <Upload size={20} />
            Subir Canción
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mis Canciones */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Mis Canciones
            </h3>
            <Music className="text-blue-600" size={24} />
          </div>
          <div className="space-y-3">
            <div className="border rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Summer Vibes</h4>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  Publicada
                </span>
              </div>
              <p className="text-sm text-gray-600">Género: Pop</p>
              <p className="text-xs text-gray-500">Subida: hace 2 días</p>
              <p className="text-xs text-blue-600">3 solicitudes de derechos</p>
              <div className="flex gap-2 mt-3">
                <button className="text-blue-600 text-sm hover:underline flex items-center gap-1">
                  <Eye size={12} />
                  Ver
                </button>
                <button className="text-orange-600 text-sm hover:underline flex items-center gap-1">
                  <Edit size={12} />
                  Editar
                </button>
                <button className="text-red-600 text-sm hover:underline flex items-center gap-1">
                  <Trash2 size={12} />
                  Eliminar
                </button>
              </div>
            </div>
            
            <div className="border rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Night Dreams</h4>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  Borrador
                </span>
              </div>
              <p className="text-sm text-gray-600">Género: Electronic</p>
              <p className="text-xs text-gray-500">Subida: hace 1 semana</p>
              <p className="text-xs text-gray-500">0 solicitudes</p>
              <div className="flex gap-2 mt-3">
                <button className="text-blue-600 text-sm hover:underline flex items-center gap-1">
                  <Eye size={12} />
                  Ver
                </button>
                <button className="text-orange-600 text-sm hover:underline flex items-center gap-1">
                  <Edit size={12} />
                  Editar
                </button>
                <button className="text-green-600 text-sm hover:underline">
                  Publicar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Solicitudes de Derechos */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Solicitudes Pendientes
            </h3>
            <MessageCircle className="text-orange-600" size={24} />
          </div>
          <div className="space-y-3">
            <div className="border rounded-lg p-3 bg-orange-50">
              <h4 className="font-medium">María solicita "Summer Vibes"</h4>
              <p className="text-sm text-gray-600">Derechos: Sync</p>
              <p className="text-xs text-gray-500">hace 1 hora</p>
              <div className="flex gap-2 mt-3">
                <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                  Ver Chat
                </button>
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                  Otorgar
                </button>
              </div>
            </div>
            
            <div className="border rounded-lg p-3">
              <h4 className="font-medium">Carlos solicita "Summer Vibes"</h4>
              <p className="text-sm text-gray-600">Derechos: Master</p>
              <p className="text-xs text-gray-500">hace 3 horas</p>
              <div className="flex gap-2 mt-3">
                <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                  Ver Chat
                </button>
                <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700">
                  Rechazar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Derechos Otorgados */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Derechos Otorgados
            </h3>
            <Award className="text-green-600" size={24} />
          </div>
          <div className="space-y-3">
            <div className="border rounded-lg p-3">
              <h4 className="font-medium">Ocean Waves → Pedro</h4>
              <p className="text-sm text-gray-600">Derechos: Sync</p>
              <p className="text-xs text-gray-500">Otorgado: hace 1 mes</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                Activo
              </span>
            </div>
            
            <div className="border rounded-lg p-3">
              <h4 className="font-medium">Midnight Jazz → Ana</h4>
              <p className="text-sm text-gray-600">Derechos: Publishing</p>
              <p className="text-xs text-gray-500">Otorgado: hace 2 meses</p>
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