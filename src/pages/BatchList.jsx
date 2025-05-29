import React, { useEffect, useState } from 'react';

const sampleBatchData = [
  {
    _id: "batch-1",
    batchName: "Batch Alpha",
    kg: 120,
    chemicals: [
      { chemicalId: "CHEM-6C32E2C3", quantity: 20, _id: "chem-1-1" },
      { chemicalId: "CHEM-4974DC7F", quantity: 30, _id: "chem-1-2" }
    ],
    createdAt: "2025-05-29T06:29:42.592Z",
    updatedAt: "2025-05-29T06:29:42.592Z",
    batchCode: "BATCH-ALPHA001"
  },
  {
    _id: "batch-2",
    batchName: "Batch Beta",
    kg: 200,
    chemicals: [
      { chemicalId: "CHEM-AACE6BA1", quantity: 25, _id: "chem-2-1" },
      { chemicalId: "CHEM-56F08A5D", quantity: 35, _id: "chem-2-2" }
    ],
    createdAt: "2025-05-29T07:00:00.000Z",
    updatedAt: "2025-05-29T07:00:00.000Z",
    batchCode: "BATCH-BETA002"
  },
  {
    _id: "batch-3",
    batchName: "Batch Gamma",
    kg: 180,
    chemicals: [
      { chemicalId: "CHEM-6C32E2C3", quantity: 40, _id: "chem-3-1" }
    ],
    createdAt: "2025-05-29T08:15:00.000Z",
    updatedAt: "2025-05-29T08:15:00.000Z",
    batchCode: "BATCH-GAMMA003"
  },
  {
    _id: "batch-4",
    batchName: "Batch Delta",
    kg: 150,
    chemicals: [
      { chemicalId: "CHEM-4974DC7F", quantity: 20, _id: "chem-4-1" },
      { chemicalId: "CHEM-AACE6BA1", quantity: 10, _id: "chem-4-2" }
    ],
    createdAt: "2025-05-29T09:00:00.000Z",
    updatedAt: "2025-05-29T09:00:00.000Z",
    batchCode: "BATCH-DELTA004"
  },
  {
    _id: "batch-5",
    batchName: "Batch Epsilon",
    kg: 210,
    chemicals: [
      { chemicalId: "CHEM-6C32E2C3", quantity: 50, _id: "chem-5-1" }
    ],
    createdAt: "2025-05-29T10:00:00.000Z",
    updatedAt: "2025-05-29T10:00:00.000Z",
    batchCode: "BATCH-EPS005"
  },
  {
    _id: "batch-6",
    batchName: "Batch Zeta",
    kg: 130,
    chemicals: [
      { chemicalId: "CHEM-4974DC7F", quantity: 25, _id: "chem-6-1" },
      { chemicalId: "CHEM-AACE6BA1", quantity: 25, _id: "chem-6-2" }
    ],
    createdAt: "2025-05-29T11:00:00.000Z",
    updatedAt: "2025-05-29T11:00:00.000Z",
    batchCode: "BATCH-ZETA006"
  },
  {
    _id: "batch-7",
    batchName: "Batch Eta",
    kg: 170,
    chemicals: [
      { chemicalId: "CHEM-56F08A5D", quantity: 45, _id: "chem-7-1" }
    ],
    createdAt: "2025-05-29T12:00:00.000Z",
    updatedAt: "2025-05-29T12:00:00.000Z",
    batchCode: "BATCH-ETA007"
  },
  {
    _id: "batch-8",
    batchName: "Batch Theta",
    kg: 190,
    chemicals: [
      { chemicalId: "CHEM-AACE6BA1", quantity: 30, _id: "chem-8-1" }
    ],
    createdAt: "2025-05-29T13:00:00.000Z",
    updatedAt: "2025-05-29T13:00:00.000Z",
    batchCode: "BATCH-THETA008"
  },
  {
    _id: "batch-9",
    batchName: "Batch Iota",
    kg: 110,
    chemicals: [
      { chemicalId: "CHEM-6C32E2C3", quantity: 22, _id: "chem-9-1" }
    ],
    createdAt: "2025-05-29T14:00:00.000Z",
    updatedAt: "2025-05-29T14:00:00.000Z",
    batchCode: "BATCH-IOTA009"
  },
  {
    _id: "batch-10",
    batchName: "Batch Kappa",
    kg: 160,
    chemicals: [
      { chemicalId: "CHEM-56F08A5D", quantity: 33, _id: "chem-10-1" },
      { chemicalId: "CHEM-4974DC7F", quantity: 17, _id: "chem-10-2" }
    ],
    createdAt: "2025-05-29T15:00:00.000Z",
    updatedAt: "2025-05-29T15:00:00.000Z",
    batchCode: "BATCH-KAPPA010"
  }
];

const itemsPerPage = 4;

const BatchList = () => {
  const [batches, setBatches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Replace with actual API call later
    setBatches(sampleBatchData);
  }, []);

   const totalPages = Math.ceil(batches.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBatches = batches.slice(startIndex, startIndex + itemsPerPage);

    const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage => currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage => currentPage + 1);
  };

  return (
   <div className="p-4 w-full">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">#</th>
              <th className="p-2">Batch Name</th>
              <th className="p-2">KG</th>
              <th className="p-2">Chemicals Used</th>
              <th className="p-2">Batch Code</th>
            </tr>
          </thead>
          <tbody>
            {paginatedBatches.map((batch, index) => (
              <tr key={batch._id} className="hover:bg-gray-50">
                <td className="p-2">{startIndex + index + 1}</td>
                <td className="p-2">{batch.batchName}</td>
                <td className="p-2">{batch.kg}</td>
                <td className="p-2">
                  <ul className="list-disc pl-4">
                    {batch.chemicals.map((chem) => (
                      <li key={chem._id}>
                        Chemical ID: <span className="font-mono">{chem.chemicalId}</span>, Qty: {chem.quantity}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="p-2">{batch.batchCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4 items-center">
        <button
          className="px-4 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="px-4 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BatchList;
