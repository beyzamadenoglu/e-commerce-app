import '@mantine/core/styles.css';
import { AuthProvider } from "@/context/AuthContext";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import ProtectedRoute from '@/components/protectedRoute';
import Layout from '@/components/Layout/Layout';

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
              <Layout>
            {children}
            </Layout>
            </ProtectedRoute>
          </AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}