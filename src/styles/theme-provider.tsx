'use client'

import { ThemeProvider as NextThemeProvider, type ThemeProviderProps } from 'next-themes'

export default function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode
  props: ThemeProviderProps
}) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}
