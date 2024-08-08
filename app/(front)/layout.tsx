// This is a functional component that serves as a layout wrapper for pages or components in a Next.js application
export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // The `main` element acts as a semantic wrapper for the main content of the page.
  // `container` and `flex-grow` are likely utility classes (e.g., from Tailwind CSS) to handle styling.
  return <main className='container flex-grow'>{children}</main>;
}

