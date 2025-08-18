import { useParams } from "react-router-dom";
import { properties } from "../data/properties";
import PropertyDetails from "../components/PropertyDetails";

export default function PropertyPage() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <div className="p-6 text-red-500">Property not found</div>;
  }

return <PropertyDetails property={property!} />;
}
