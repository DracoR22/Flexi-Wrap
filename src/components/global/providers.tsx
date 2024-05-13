'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface Props extends ThemeProviderProps {
    children: React.ReactNode
}

const client = new QueryClient()

const Providers = ({ children, ...props }: Props) => {
  return (
     <NextThemesProvider {...props}>
       <QueryClientProvider client={client}>
         {children}
       </QueryClientProvider>
     </NextThemesProvider>
  )
}

export default Providers