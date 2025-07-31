'use client'

import { useUserStore } from '@/store/userStore'
import { User, Music } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function ModeToggle() {
  const { user, switchMode } = useUserStore()
  const [isLoading, setIsLoading] = useState(false)

  if (!user) return null

  const handleModeSwitch = async (newMode: 'buyer' | 'artist') => {
    if (newMode === 'artist' && !user.isArtistModeEnabled) {
      toast.error('Necesitas habilitar el modo artista primero')
      return
    }

    setIsLoading(true)
    try {
      // Comentado para desarrollo, después conectar con API
      // await axios.patch('/api/users/switch-mode', { mode: newMode })
      switchMode(newMode)
      toast.success(`Cambiado a modo ${newMode === 'artist' ? 'Artista' : 'Comprador'}`)
    } catch (error) {
      toast.error('Error al cambiar de modo')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Modo actual:</span>
        <span className="font-semibold text-blue-600">
          {user.currentMode === 'artist' ? '🎨 Artista' : '🛒 Comprador'}
        </span>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={() => handleModeSwitch('buyer')}
          disabled={isLoading || user.currentMode === 'buyer'}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
            user.currentMode === 'buyer'
              ? 'bg-blue-100 text-blue-700 cursor-not-allowed'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          <User size={16} />
          Comprador
        </button>
        
        <button
          onClick={() => handleModeSwitch('artist')}
          disabled={isLoading || user.currentMode === 'artist' || !user.isArtistModeEnabled}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
            user.currentMode === 'artist'
              ? 'bg-blue-100 text-blue-700 cursor-not-allowed'
              : user.isArtistModeEnabled
              ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              : 'bg-gray-50 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Music size={16} />
          Artista
        </button>
      </div>

      {!user.isArtistModeEnabled && (
        <div className="text-xs text-gray-500 ml-4">
          <span>¿Eres artista? </span>
          <button className="text-blue-600 hover:underline">
            Habilitar modo artista
          </button>
        </div>
      )}
    </div>
  )
}