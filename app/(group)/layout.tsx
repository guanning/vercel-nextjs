import Header from "@/components/header";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      {children}
    </>

  );
}
