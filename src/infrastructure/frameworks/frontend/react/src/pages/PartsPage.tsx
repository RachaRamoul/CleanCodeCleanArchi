import React, { useState } from 'react';
import PartForm from '../components/PartForm';
import PartList from '../components/PartList';

const PartsPage = () => {
  const [parts, setParts] = useState<any[]>([]);

  const handleAddPart = (part: any) => {
    setParts([...parts, part]);
  };

  return (
    <div className="container">
      <PartForm onAdd={handleAddPart} />
      <PartList parts={parts} />
    </div>
  );
};

export default PartsPage;
