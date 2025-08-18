import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { CalendarIcon, UserIcon, FilterIcon, MapPinIcon } from "lucide-react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function SearchBar() {
  const [dateRange, setDateRange] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [guests, setGuests] = useState(1);

  return (
    <div className="w-full bg-[#FCFAF6] shadow-md rounded-lg p-3">
      <div className="flex items-center gap-2">
        {/* City Selector */}
        <Menu as="div" className="relative flex-1">
          <Menu.Button className="w-full flex items-center justify-between gap-2 px-4 py-2 border rounded-md bg-white">
            <span className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" /> LONDON
            </span>
          </Menu.Button>
          <Transition as={Fragment}>
            <Menu.Items className="absolute mt-2 w-40 bg-white shadow-lg rounded-md p-2 z-50">
              {["London", "Paris", "Algiers"].map((city) => (
                <Menu.Item key={city}>
                  {({ active }) => (
                    <button
                      className={`block w-full text-left px-2 py-1 ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      {city}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Date Picker */}
        <Menu as="div" className="relative flex-1">
          <Menu.Button className="w-full flex items-center justify-between gap-2 px-4 py-2 border rounded-md bg-white">
            <span className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" /> Dates
            </span>
          </Menu.Button>
          <Transition as={Fragment}>
            <Menu.Items className="absolute mt-2 bg-white shadow-lg rounded-md p-4 z-50">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                rangeColors={["#284E4C"]}
              />
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Guests Counter */}
        <div className="flex-1 flex items-center justify-between px-4 py-2 border rounded-md bg-white">
          <div className="flex items-center gap-2">
            <UserIcon className="w-4 h-4" />
            <span>{guests} guest{guests > 1 ? "s" : ""}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="px-2 border rounded"
            >
              -
            </button>
            <button
              onClick={() => setGuests(guests + 1)}
              className="px-2 border rounded"
            >
              +
            </button>
          </div>
        </div>

        {/* Filters Dropdown */}
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center gap-2 px-6 py-2 border rounded-md bg-white">
            <FilterIcon className="w-4 h-4" /> Filters
          </Menu.Button>
          <Transition as={Fragment}>
            <Menu.Items className="absolute right-0 mt-2 w-[650px] bg-white shadow-lg rounded-md p-6 z-50">
              {/* Price Range */}
              <div>
                <label className="font-medium">Price Range (EUR)</label>
                <input type="range" min="0" max="11700" className="w-full mt-2" />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>€0</span> <span>€11700</span>
                </div>
              </div>

              {/* Bedrooms & Bathrooms */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="font-medium">Bedrooms</h4>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {["Any", 0, 1, 2, 3, "4+"].map((b) => (
                      <button key={b} className="px-3 py-1 border rounded">{b}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Bathrooms</h4>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {["Any", 1, 2, 3, "4+"].map((b) => (
                      <button key={b} className="px-3 py-1 border rounded">{b}</button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mt-4">
                <h4 className="font-medium">Amenities</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <label><input type="checkbox" /> Elevator</label>
                  <label><input type="checkbox" /> Balcony</label>
                  <label><input type="checkbox" /> Dishwasher</label>
                </div>
              </div>

              {/* Reset Button */}
              <div className="mt-4 text-right">
                <button className="text-red-500 text-sm">Reset Filters</button>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
