import Hits from "./Hits";
import SkeletonCard from "./SkeletonCard";

function Results() {
  return (
    <div>
      <Hits />
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </section>
    </div>
  );
}

export default Results;
