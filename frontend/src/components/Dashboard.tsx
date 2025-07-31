'use client'

import { useUserStore } from '@/store/userStore'
import ModeToggle from './ModeToggle'
import BuyerDashboard from './BuyerDashboard'
import ArtistDashboard from './ArtistDashboard'
import { Bell, Settings, LogOut } from 'lucide-react'

export default function Dashboard() {
  const { user, logout } = useUserStore()

  if (!user) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Cargando...</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">
                🎵 Music Rights Platform
              </h1>
              <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                Hola, {user.firstName}!
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Toggle de Modo */}
              <ModeToggle />
              
              {/* Notificaciones */}
              <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              
              {/* Configuraciones */}
              <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                <Settings size={20} />
              </button>
              
              {/* Logout */}
              <button 
                onClick={logout}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-md border hover:bg-gray-50"
              >
                <LogOut size={16} />
                Salir
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {user.currentMode === 'buyer' ? (
          <BuyerDashboard />
        ) : (
          <ArtistDashboard />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 Music Rights Platform. Proyecto educativo.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700">Ayuda</a>
              <a href="#" className="hover:text-gray-700">Términos</a>
              <a href="#" className="hover:text-gray-700">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}