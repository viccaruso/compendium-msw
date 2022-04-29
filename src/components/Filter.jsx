import { useState } from 'react';

export default function Filter({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input placeholder="Filter foods" value={search} onChange={handleChange} />
  );
}
