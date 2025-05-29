import React, { useState } from 'react';
import BatchForm from './BatchForm';
import BatchList from './BatchList';

const Batch = () => {
  const [activeTab, setActiveTab] = useState('form');

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex space-x-4 mb-6 border-b pb-2">
        <button
          onClick={() => setActiveTab('form')}
          className={`px-4 py-2 ${activeTab === 'form' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
        >
          Add
        </button>
        <button
          onClick={() => setActiveTab('view')}
          className={`px-4 py-2 ${activeTab === 'view' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
        >
          View Batches
        </button>
      </div>

      {activeTab === 'form' ? <BatchForm /> : <BatchList />}
    </div>
  );
};

export default Batch;
