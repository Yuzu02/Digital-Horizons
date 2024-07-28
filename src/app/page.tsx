export default function Home() {
  const blogName = "Tech Blog"; //* Delete me later

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <p className="text-lg">Welcome to {blogName} </p>
      </div>
    </main>
  );
}
