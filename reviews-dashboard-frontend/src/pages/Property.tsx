// src/pages/Property.tsx
import {
  Calendar,
  Users,
  BedDouble,
  Bath,
  Home,
  Tv,
  Wifi,
  Utensils,
  WashingMachine,
  Wind,
  Thermometer,
  ShieldCheck,
  Shield,
  Clock,
  Ban,
  PawPrint,
  PartyPopper,
} from "lucide-react";

export default function Property() {
  return (
    <div className="bg-[#FCFAF6]    min-h-screen py-10 px-6  lg:px-16 ">
      <h1 className="text-2xl font-bold flex justify-center items-center">
        Lavish 1 Bed Flat near Broadway Market
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-3 text-gray-700">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" /> 4 guests
        </div>
        <div className="flex items-center gap-2">
          <Home className="w-4 h-4" /> 1 bedrooms
        </div>
        <div className="flex items-center gap-2">
          <Bath className="w-4 h-4" /> 1 bathrooms
        </div>
        <div className="flex items-center gap-2">
          <BedDouble className="w-4 h-4" /> 3 beds
        </div>
      </div>

      <hr className="my-6" />

      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8" >
        <div className="  lg:col-span-2 space-y-6 ">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">About this property</h2>
            <p className="text-gray-600">
              Spacious 1-bedroom apartment in the heart of Hackney. It’s a
              perfect spot for anyone looking to enjoy the best of East London.
              You’re right by cafes, restaurants, and great transport links to
              the city. The apartment has a lot of space, modern amenities, and
              everything you need for a comfortable stay…
            </p>
            <button className="mt-2 text-sm font-medium text-green-800 hover:underline">
              Read more
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Amenities</h2>
              <button className="text-sm font-medium text-green-800 hover:underline">
                View all amenities →
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 text-gray-700">
              <div className="flex items-center gap-2">
                <Tv className="w-4 h-4" /> Cable TV
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4" /> Wireless
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4" /> Kitchen
              </div>
              <div className="flex items-center gap-2">
                <WashingMachine className="w-4 h-4" /> Washing Machine
              </div>
              <div className="flex items-center gap-2">
                <Wind className="w-4 h-4" /> Hair Dryer
              </div>
              <div className="flex items-center gap-2">
                <Thermometer className="w-4 h-4" /> Heating
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Smoke Detector
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" /> Carbon Monoxide Detector
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4" /> Essentials
              </div>
            </div>
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
                    <p className="font-medium">3:00 PM</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow text-center">
                    <p className="text-gray-500 text-sm">Check-out time</p>
                    <p className="font-medium">10:00 AM</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F1F3EE] p-6 rounded-lg">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-green-900">
                  <Shield className="w-5 h-5" /> House Rules
                </h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-md shadow flex items-center gap-2">
                    <Ban className="w-4 h-4" /> No smoking
                  </div>
                  <div className="bg-white p-3 rounded-md shadow flex items-center gap-2">
                    <PawPrint className="w-4 h-4" /> No pets
                  </div>
                  <div className="bg-white p-3 rounded-md shadow flex items-center gap-2">
                    <PartyPopper className="w-4 h-4" /> No parties or events
                  </div>
                  <div className="bg-white p-3 rounded-md shadow flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Security deposit
                    required
                  </div>
                </div>
              </div>

              <div className="bg-[#F1F3EE] p-6 rounded-lg">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-green-900">
                  <Calendar className="w-5 h-5" /> Cancellation Policy
                </h2>
                <div className="space-y-4 mt-4">
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="font-semibold text-gray-800">
                      For stays less than 28 days
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>● Full refund up to 14 days before check-in</li>
                      <li>
                        ● No refund for bookings less than 14 days before
                        check-in
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="font-semibold text-gray-800">
                      For stays of 28 days or more
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>● Full refund up to 30 days before check-in</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
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
      </div>
    </div>
  );
}
