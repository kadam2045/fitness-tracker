import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 pb-24 lg:pb-6">
      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-[120px] w-full rounded-2xl" />
        ))}
      </div>

      {/* Main Content Area Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Activity Skeleton */}
        <div className="lg:col-span-2">
          <Skeleton className="h-[350px] w-full rounded-2xl" />
        </div>

        {/* Right Sidebar Skeleton */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          <Skeleton className="h-[250px] w-full rounded-2xl" />
          <Skeleton className="h-[150px] w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
