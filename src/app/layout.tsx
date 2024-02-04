import '@mantine/core/styles.css';
import { AuthProvider } from "@/context/AuthContext";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import ProtectedRoute from '@/components/protectedRoute';

export const metadata = {
  title: 'E-commerce app',
  description: 'Shopping',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AuthProvider>
            <ProtectedRoute>
            {children}
            </ProtectedRoute>
          </AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}