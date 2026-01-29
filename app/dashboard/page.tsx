// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import FreeAi_Girl from "../Components/FreeAi_Girl";
import ExploreCreative from "../Components/ExploreCreative";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white">
      
    <ExploreCreative/>  
    <FreeAi_Girl/>
    </div>
  );
}
