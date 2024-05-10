'use client'


import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import { ReactNode } from 'react'

interface Props extends ThemeProviderProps {
    children: React.ReactNode
}

const Providers = ({ children, ...props }: Props) => {
  return (
    <NextThemesProvider {...props}>
        {children}
    </NextThemesProvider>
  )
}

export default Providers