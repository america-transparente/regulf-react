function SkeletonCard() {
  return (
    <div className="min-h-64 h-full rounded-2xl border border-light-neutral-100 bg-light-neutral-200 p-4 shadow dark:border-dark-neutral-100 dark:bg-dark-neutral-200">
      <div className="mt-2 flex animate-pulse flex-col gap-4">
        <div className="h-6 rounded-2xl bg-light-neutral-100 dark:bg-dark-neutral-100" />
        <div className="space-y-4">
          <div className="min-h-6 rounded-2xl bg-light-neutral-100 dark:bg-dark-neutral-100" />
          <div className="h-6 w-48 rounded-2xl bg-light-neutral-100 dark:bg-dark-neutral-100" />
          <div className="h-6 w-32 rounded-2xl bg-light-neutral-100 dark:bg-dark-neutral-100" />
          <div className="h-6 w-52 rounded-2xl bg-light-neutral-100 dark:bg-dark-neutral-100" />
          <div className="h-6 w-40 rounded-2xl bg-light-neutral-100 dark:bg-dark-neutral-100" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
