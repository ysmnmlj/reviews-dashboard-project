export default function ReviewsSection({ reviews }: any) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Guest Reviews</h2>
      <div className="grid gap-6">
        {reviews.length === 0 && (
          <p className="text-gray-500">No reviews available yet.</p>
        )}
        {reviews.map((r: any) => (
          <div
            key={r.id}
            className="bg-white rounded-xl shadow p-6 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{r.guestName}</h3>
              <span className="text-yellow-500">⭐ {r.rating}/10</span>
            </div>
            <p className="text-gray-700">{r.reviewText}</p>
            <p className="text-sm text-gray-400 mt-2">
              {new Date(r.date).toLocaleDateString()} • {r.channel}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
