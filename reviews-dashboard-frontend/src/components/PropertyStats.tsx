export default function PropertyStats({ reviews }: { reviews: any[] }) {
  const grouped = reviews.reduce((acc: any, r: any) => {
    if (!acc[r.listing]) acc[r.listing] = [];
    acc[r.listing].push(r);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(grouped).map(([listing, revs]: [string, any]) => {
        const avgRating = (
          revs.reduce((sum: number, r: any) => sum + r.rating, 0) / revs.length
        ).toFixed(1);

        return (
          <div key={listing} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">{listing}</h2>
            <p className="text-gray-700">⭐ {avgRating} avg from {revs.length} reviews</p>
            <p className="text-sm text-gray-500">Channel: {revs[0].channel}</p>
          </div>
        );
      })}
    </>
  );
}
