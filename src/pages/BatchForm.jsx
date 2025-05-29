import React, { useState } from 'react';

const mockChemicals = [
  {
            "_id": "6837f97336213baa95b4a216",
            "chemicalName": "N1",
            "description": "This is just a dummy description of the chemical",
            "createdAt": "2025-05-29T06:06:43.155Z",
            "updatedAt": "2025-05-29T06:06:43.155Z",
            "code": "CHEM-6C32E2C3",
            "__v": 0
        },
        {
            "_id": "6837f98f36213baa95b4a218",
            "chemicalName": "N2",
            "description": "This is just a dummy description of the chemical2",
            "createdAt": "2025-05-29T06:07:11.300Z",
            "updatedAt": "2025-05-29T06:07:11.300Z",
            "code": "CHEM-4974DC7F",
            "__v": 0
        },
        {
            "_id": "6837f99736213baa95b4a21a",
            "chemicalName": "N3",
            "description": "This is just a dummy description of the chemical3",
            "createdAt": "2025-05-29T06:07:19.414Z",
            "updatedAt": "2025-05-29T06:07:19.414Z",
            "code": "CHEM-AACE6BA1",
            "__v": 0
        },
        {
            "_id": "6837f99f36213baa95b4a21c",
            "chemicalName": "N4",
            "description": "This is just a dummy description of the chemical4",
            "createdAt": "2025-05-29T06:07:27.975Z",
            "updatedAt": "2025-05-29T06:07:27.975Z",
            "code": "CHEM-56F08A5D",
            "__v": 0
        }
];

const BatchForm = () => {
  const [formData, setFormData] = useState({
    batchName: '',
    kg: '',
    chemicals: [],
  });

  const handleChemicalToggle = (id) => {
    setFormData((prev) => {
      const exists = prev.chemicals.find((chem) => chem.chemicalId === id);
      if (exists) {
        return {
          ...prev,
          chemicals: prev.chemicals.filter((chem) => chem.chemicalId !== id),
        };
      } else {
        return {
          ...prev,
          chemicals: [...prev.chemicals, { chemicalId: id, quantity: '' }],
        };
      }
    });
  };

  const handleQuantityChange = (id, qty) => {
    setFormData((prev) => ({
      ...prev,
      chemicals: prev.chemicals.map((chem) =>
        chem.chemicalId === id ? { ...chem, quantity: qty } : chem
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final Batch Data:', formData);
    // Replace this with an actual API call
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 border p-4 rounded">
       
      <div >
        <label className="block font-medium mb-1 flex">Batch Name</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2"
          value={formData.batchName}
          onChange={(e) => setFormData({ ...formData, batchName: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1 flex">KG</label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={formData.kg}
          onChange={(e) => setFormData({ ...formData, kg: Number(e.target.value) })}
          required
        />
      </div>
      <div className='text-start'>
        <label className="block font-medium mb-2">Select Chemicals</label>
        {mockChemicals.map((chem) => {
          const isSelected = formData.chemicals.some((c) => c.chemicalId === chem._id);
          return (
            <div key={chem._id} className="mb-3">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={isSelected}
                  onChange={() => handleChemicalToggle(chem._id)}
                />
                {chem.chemicalName}
              </label>
              {isSelected && (
                <input
                  type="number"
                  placeholder="Quantity"
                  className="ml-4 border rounded px-2 py-1 w-40"
                  value={
                    formData.chemicals.find((c) => c.chemicalId === chem._id)?.quantity || ''
                  }
                  onChange={(e) =>
                    handleQuantityChange(chem._id, Number(e.target.value))
                  }
                  required
                />
              )}
            </div>
          );
        })}
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default BatchForm;
