import { useEffect, useState } from "react";
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  BarChart, Bar, ResponsiveContainer
} from "recharts";
import Filters from "../components/Filters";
import ReviewTable from "../components/ReviewTable";
import SearchBar from "../components/SearchBar";


export default function Dashboard() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    rating: null,
    channel: null,
    category: null,
    startDate: null,
    endDate: null,
  });
  const [approved, setApproved] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  const toggleApprove = (id: string) => {
    setApproved(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalReviews = reviews.length;
  const avgRating = reviews.length
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : 0;
  const byChannel = reviews.reduce((acc: any, r: any) => {
    acc[r.channel] = (acc[r.channel] || 0) + 1;
    return acc;
  }, {});

  const trendData = reviews.map(r => ({
    date: new Date(r.date).toLocaleDateString(),
    rating: r.rating,
  }));

  const categoryData: any = {};
  reviews.forEach(r => {
    r.categories.forEach((c: any) => {
      if (!categoryData[c.category]) categoryData[c.category] = [];
      categoryData[c.category].push(c.rating);
    });
  });

  const categoryChartData = Object.keys(categoryData).map(cat => ({
    category: cat,
    avg: (
      categoryData[cat].reduce((a: number, b: number) => a + b, 0) /
      categoryData[cat].length
    ).toFixed(1),
  }));

  return (
    <div className="p-8 bg-[#FFFDF6] min-h-screen">

      <h1 className="text-3xl font-bold mb-2">📊 Manager Dashboard</h1>
      <p className="text-gray-600 mb-6">
        Monitor guest reviews, approve them, and analyze property performance.
      </p>
        <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500">Total Reviews</h2>
          <p className="text-2xl font-bold">{totalReviews}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500">Average Rating</h2>
          <p className="text-2xl font-bold">{avgRating}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500">By Channel</h2>
          <ul>
            {Object.keys(byChannel).map(c => (
              <li key={c} className="text-sm">
                {c}: <strong>{byChannel[c]}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Filter Reviews</h2>
        <Filters filters={filters} setFilters={setFilters} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Ratings Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <Line type="monotone" dataKey="rating" stroke="#4F46E5" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Category Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avg" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">All Reviews</h2>
        <ReviewTable
          reviews={reviews}
          filters={filters}
          approved={approved}
          toggleApprove={toggleApprove}
        />
      </div>
    </div>
  );
}
