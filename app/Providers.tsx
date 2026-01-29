
'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from './Components/ThemeContext'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}
