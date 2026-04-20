export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section
        className="flex min-h-screen items-center justify-center px-6"
        aria-labelledby="hello-world-title"
      >
        <div className="text-center">
          <h1
            id="hello-world-title"
            className="text-balance text-[clamp(2.5rem,8vw,5rem)] font-bold tracking-tight"
          >
            Hello World
          </h1>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            A minimal, accessible starter page with responsive typography.
          </p>
        </div>
      </section>
    </main>
  );
}
