import { FaPlusCircle, FaUsers, FaTrash } from "react-icons/fa";

import { useState } from "react";

export default function QueueM() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [queue, setQueue] = useState([]);

  // Add the Customer
  const handleAddCustomer = () => {
    if (!name || !service) {
      alert("please enter the required fields");
    } else {
      let newCustomer = {
        id: Date.now(),

        name: name,
        service: service,
        status: "waiting",
      };
      const updatedQueue = [...queue, newCustomer];

      setQueue(updatedQueue);
      setName("");
      setService("");
    }
  };
  const handleServe = (id) => {
    const updatedQueue = queue.map((customer) =>
      customer.id === id ? { ...customer, status: "Serving" } : customer,
    );

    setQueue(updatedQueue);
  };
  const handleComplete = (id) => {
    const updatedQueue = queue.map((customer) =>
      customer.id === id ? { ...customer, status: "Completed" } : customer,
    );

    setQueue(updatedQueue);
  };
  const handleDelete = (id) => {
    const updatedQueue = queue.filter((customer) => {
      customer.id !== id;
    });

    setQueue(updatedQueue);
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-950 to-slate-800 p-10">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          Queue Management System
        </h1>

        <p className="text-gray-300 mt-2 pt-2">
          Smart customer queue handling dashboard
        </p>
      </header>

      {/* Main Container */}
      <div className="flex gap-8 items-start">
        {/* Add Queue Card */}
        <div className="w-96 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Add to Queue
          </h3>

          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Enter customer name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:ring-2 focus:ring-cyan-400"
            />

            <select
              className="p-4 rounded-xl bg-white/20
             text-white outline-none border border-white/20 focus:ring-2
              focus:ring-cyan-400"
              value={service}
              onChange={(e) => {
                setService(e.target.value);
              }}
            >
              <option className="text-black">Select Service</option>

              <option className="text-black">Consultation</option>

              <option className="text-black">Payment</option>

              <option className="text-black">Support</option>
            </select>

            <button
              className="flex items-center justify-center gap-2 bg-cyan-500
             hover:bg-cyan-400 text-white font-semibold py-4 rounded-xl
              transition duration-300 shadow-lg"
              onClick={handleAddCustomer}
            >
              <FaPlusCircle size={20} />
              Add Customer
            </button>
          </div>
        </div>

        {/* Queue Display Card */}
        <div className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <FaUsers size={24} className="text-cyan-400" />

            <h3 className="text-2xl font-semibold text-white">Current Queue</h3>
          </div>

          <div>
            {queue.map((customer) => (
              <div
                key={customer.id}
                className="bg-white/10 border border-white/10 rounded-2xl p-5 mt-2"
              >
                {/* Customer Details */}
                <div className="space-y-2 text-left">
                  <h1 className="text-lg text-white">
                    <span className="font-bold text-cyan-400">Name:</span>{" "}
                    {customer.name}
                  </h1>

                  <p className="text-gray-300">
                    <span className="font-bold text-cyan-400">Service:</span>{" "}
                    {customer.service}
                  </p>
                  {customer.status === "waiting" && (
                    <p className="text-red-400">
                      <span className="font-bold text-cyan-400">Status: </span>{" "}
                      {customer.status}
                    </p>
                  )}
                  {customer.status === "Serving" && (
                    <p className=" text-pink-400">
                      <span className="font-bold text-cyan-400">Status: </span>{" "}
                      {customer.status}
                    </p>
                  )}
                  {customer.status === "Completed" && (
                    <p className=" text-green-400">
                      <span className="font-bold text-cyan-400">Status: </span>{" "}
                      {customer.status}
                    </p>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-5">
                  {/* If Waiting */}
                  {customer.status === "waiting" && (
                    <>
                      <button
                        onClick={() => handleServe(customer.id)}
                        className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm"
                      >
                        Serve
                      </button>

                      <button
                        className="bg-red-500 hover:bg-red-400 text-white p-2 rounded-lg"
                        onClick={() => handleDelete(customer.id)}
                      >
                        <FaTrash size={14} />
                      </button>
                    </>
                  )}

                  {/* If Serving */}
                  {customer.status === "Serving" && (
                    <>
                      <button
                        className="bg-green-500 hover:bg-green-400 text-white px-4 
                      py-2 rounded-lg text-sm"
                        onClick={() => handleComplete(customer.id)}
                      >
                        Complete
                      </button>

                      <button
                        className="bg-red-500 hover:bg-red-400 text-white p-2 rounded-lg"
                        onClick={() => handleDelete(customer.id)}
                      >
                        <FaTrash size={14} />
                      </button>
                    </>
                  )}
                  {customer.status === "Completed" && (
                    <>
                      <button
                        className="bg-red-500 hover:bg-red-400 text-white p-2 rounded-lg"
                        onClick={() => handleDelete(customer.id)}
                      >
                        <FaTrash size={14} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
