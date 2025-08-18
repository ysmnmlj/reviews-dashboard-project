import type { Property } from "../components/PropertyDetails"; // ✅ on importe le type, pas le composant

export const properties: Property[] = [
  {
    id: "1", // ⚠️ à ajouter dans l’interface Property aussi (voir plus bas)
    title: "Lavish 1 Bed Flat near Broadway Market",
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    beds: 3,
    aboutShort:
      "Spacious 1-bedroom apartment in the heart of Hackney. It’s a perfect spot for anyone looking to enjoy the best of East London…",
    aboutFull: `
      Spacious 1-bedroom apartment in the heart of Hackney. It’s a perfect spot for anyone
      looking to enjoy the best of East London. You’re right by cafes, restaurants, and great
      transport links to the city. The apartment has a lot of space, modern amenities, and
      everything you need for a comfortable stay…
    `,
    amenities: {
      living: ["Cable TV", "Private Living Room"],
      internet: ["Wireless", "Free WiFi"],
      kitchen: ["Kitchen", "Microwave", "Refrigerator", "Dining Area"],
      bedroom: ["Washing Machine", "Dryer", "Hangers"],
    },
    stayPolicies: {
      checkIn: "3:00 PM",
      checkOut: "10:00 AM",
      houseRules: [
        { icon: "Ban", text: "No smoking" },
        { icon: "PawPrint", text: "No pets" },
        { icon: "PartyPopper", text: "No parties or events" },
        { icon: "ShieldCheck", text: "Security deposit required" },
      ],
      cancellation: [
        {
          title: "For stays less than 28 days",
          rules: [
            "Full refund up to 14 days before check-in",
            "No refund if booked less than 14 days before check-in",
          ],
        },
        {
          title: "For stays of 28 days or more",
          rules: [
            "Full refund up to 30 days before check-in",
            "No refund for bookings less than 30 days before check-in",
          ],
        },
      ],
    },
  },
];
