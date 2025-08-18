export const normalizeReviews = (reviews: any[]) => {
  return reviews.map((r) => ({
    id: r.id,
    guestName: r.guestName || "Anonymous",
    listing: r.listingName || "Unknown Property", // par listing
    type: r.type || "host-to-guest",              // par type
    channel: r.channel || "Hostaway",             // par channel (default Hostaway)
    reviewText: r.publicReview || "",
    categories: (r.reviewCategory || []).map((c: any) => ({
      category: c.category,
      rating: c.rating,
    })),                                          // parse categories
    date: r.submittedAt ? new Date(r.submittedAt).toISOString() : null, // par date ISO
    rating: r.rating ?? null,
  }));
};
