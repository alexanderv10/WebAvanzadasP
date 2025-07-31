'use client'

import { useEffect, useState } from 'react'
import { useUserStore } from '@/store/userStore'
import { Toaster } from 'react-hot-toast'
import Dashboard from '@/components/Dashboard'
import LoginForm from '@/components/LoginForm'

export default function Home() {
  const { user } = useUserStore()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      {user ? <Dashboard /> : <LoginForm />}
    </>
  )
}