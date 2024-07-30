import Dashboard from "@/components/auth/Dashboard";

export default function DashboardPage() {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <Dashboard />
    </section>
  );
}
