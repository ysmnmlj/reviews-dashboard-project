import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  X,
  Clock,
  Shield,
  Ban,
  PawPrint,
  PartyPopper,
  ShieldCheck,
  Calendar,
  Users,
} from "lucide-react";

type HouseRuleIcon = "Ban" | "PawPrint" | "PartyPopper" | "ShieldCheck";

interface StayPolicies {
  checkIn: string;
  checkOut: string;
  houseRules: { icon: HouseRuleIcon; text: string }[];
  cancellation: { title: string; rules: string[] }[];
}

export interface Property {
  id: string; // ✅ ajouté
  title: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  beds: number;
  aboutShort: string;
  aboutFull: string;
  amenities: {
    living: string[];
    internet: string[];
    kitchen: string[];
    bedroom: string[];
  };
  stayPolicies: StayPolicies;
}


export default function PropertyDetails({ property }: { property: Property }) {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);

  const iconMap: Record<HouseRuleIcon, React.ComponentType<{ className?: string }>> = {
    Ban,
    PawPrint,
    PartyPopper,
    ShieldCheck,
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="col-span-2 space-y-6">
        <h1 className="text-2xl font-bold">{property.title}</h1>
        <p className="text-gray-600">
          {property.guests} guests · {property.bedrooms} bedrooms ·{" "}
          {property.bathrooms} bathrooms · {property.beds} beds
        </p>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">About this property</h2>
          <p className="text-gray-600">{property.aboutShort}</p>
          <button
            onClick={() => setIsAboutOpen(true)}
            className="text-green-800 font-medium mt-2 hover:underline"
          >
            Read more
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Amenities</h2>
          <div className="grid grid-cols-2 gap-2 text-gray-600">
            {Object.values(property.amenities)
              .flat()
              .slice(0, 4)
              .map((a) => (
                <span key={a}>• {a}</span>
              ))}
          </div>
          <button
            onClick={() => setIsAmenitiesOpen(true)}
            className="text-green-800 font-medium mt-3 hover:underline"
          >
            View all amenities →
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Stay Policies</h2>

          <div className="space-y-6">
            <div className="bg-[#F1F3EE] p-6 rounded-lg">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-green-900">
                <Clock className="w-5 h-5" /> Check-in & Check-out
              </h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded-md shadow text-center">
                  <p className="text-gray-500 text-sm">Check-in time</p>
                  <p className="font-medium">{property.stayPolicies.checkIn}</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow text-center">
                  <p className="text-gray-500 text-sm">Check-out time</p>
                  <p className="font-medium">{property.stayPolicies.checkOut}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F1F3EE] p-6 rounded-lg">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-green-900">
                <Shield className="w-5 h-5" /> House Rules
              </h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {property.stayPolicies.houseRules.map((rule) => {
                  const Icon = iconMap[rule.icon];
                  return (
                    <div
                      key={rule.text}
                      className="bg-white p-3 rounded-md shadow flex items-center gap-2"
                    >
                      {Icon && <Icon className="w-4 h-4" />} {rule.text}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#F1F3EE] p-6 rounded-lg">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-green-900">
                <Calendar className="w-5 h-5" /> Cancellation Policy
              </h2>
              <div className="space-y-4 mt-4">
                {property.stayPolicies.cancellation.map((policy) => (
                  <div
                    key={policy.title}
                    className="bg-white p-4 rounded-md shadow"
                  >
                    <h3 className="font-semibold text-gray-800">{policy.title}</h3>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      {policy.rules.map((r) => (
                        <li key={r}>● {r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <div className="bg-white rounded-lg shadow p-6 sticky top-6">
          <h2 className="text-lg font-semibold bg-[#284E4C] text-white p-3 rounded-md -mx-6 -mt-6 mb-4">
            Book your stay
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Select dates to see the total price
          </p>

          <div className="flex items-center gap-2 mb-4">
            <button className="flex-1 border px-3 py-2 rounded-md flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" /> Select dates
            </button>
            <button className="flex items-center border px-3 py-2 rounded-md text-gray-600">
              <Users className="w-4 h-4 mr-1" /> 1
            </button>
          </div>

          <button className="w-full bg-[#284E4C] text-white py-2 rounded-md mb-3 flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" /> Check availability
          </button>

          <button className="w-full border py-2 rounded-md flex items-center justify-center gap-2 text-gray-700">
            💬 Send Inquiry
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            ○ Instant confirmation
          </p>
        </div>
      </div>

      {/* -------- MODALS -------- */}

      <Transition appear show={isAboutOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsAboutOpen(false)}
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-lg max-w-2xl p-6 shadow-lg">
              <div className="flex justify-between items-center">
                <Dialog.Title className="text-lg font-bold">
                  About this property
                </Dialog.Title>
                <button onClick={() => setIsAboutOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4 space-y-4 text-gray-600 text-sm whitespace-pre-line">
                {property.aboutFull}
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isAmenitiesOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsAmenitiesOpen(false)}
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-lg max-w-3xl w-full p-6 shadow-lg">
              <div className="flex justify-between items-center">
                <Dialog.Title className="text-lg font-bold">
                  All amenities
                </Dialog.Title>
                <button onClick={() => setIsAmenitiesOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-4 text-sm text-gray-700">
                {Object.entries(property.amenities).map(([section, items]) => (
                  <div key={section}>
                    <h4 className="font-semibold mb-2 capitalize">{section}</h4>
                    <ul className="space-y-1">
                      {items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
