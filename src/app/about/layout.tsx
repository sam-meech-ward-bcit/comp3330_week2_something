import React from 'react';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1>About page layout</h1>
      <main>
        {children}
      </main>
      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
