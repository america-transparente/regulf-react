function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-grayscale-3 bg-grayscale-2 p-4 shadow h-full min-h-64">
      <div className="flex flex-col gap-4 animate-pulse mt-2">
        <div className="h-6 bg-grayscale-3 rounded-2xl" />
        <div className="space-y-4">
          <div className="min-h-6 bg-grayscale-3 rounded-2xl" />
          <div className="h-6 bg-grayscale-3 rounded-2xl w-48" />
          <div className="h-6 bg-grayscale-3 rounded-2xl w-32" />
          <div className="h-6 bg-grayscale-3 rounded-2xl w-52" />
          <div className="h-6 bg-grayscale-3 rounded-2xl w-40" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
