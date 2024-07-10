import React, { useState, useEffect } from 'react';


const Today = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [search, setSearch] = useState("");

 

  


  const item = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < Math.ceil(item.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderItems = currentItems.filter((item) =>{
    return search.toLowerCase() === '' ? item : item.first_name.toLowerCase().include(search)

  }).map((item, index) => (
   
    <tr key={item}>
      <td className='th-data'>{item.id}</td>
      <td className='th-data'>{item.first_name}</td>
      <td className='th-data'>{item.last_name}</td>
      <td className='th-data'>{item.email}</td>
      <td className='th-data'>{item.phone}</td>
     <td className='th-data'>{item.image}</td>
     <td className='th-data'>{item.state}</td>
    <td className='th-data'>{item.city}</td>
    <td className='th-data'>{item.address}</td>

    </tr>
  ));


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://cities-qd9i.onrender.com/agents');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 
 

  return (
    <div className="table-container">
      <h2>User Data Table</h2>
       <div>
        <div>
        <input
        type="text"
        placeholder="Search by name, email, phone, or website..."
        value=""
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <button className='search-btn'>Search</button>
        </div>
       </div>
      <table>
        <thead>
          <tr>
            <th className='th-header'>Id</th>
            <th className='th-header'>First Name</th>
            <th className='th-header'>Last Name</th>
            <th className='th-header'>Email</th>
            <th className='th-header'>Phone</th>
            <th className='th-header'>image</th>
            <th className='th-header'>State</th>
            <th className='th-header'>City</th>
            <th className='th-header'>Address</th>
       
          </tr>
        </thead>
        <tbody>

      
         {renderItems}
        </tbody>
       
      </table>
      <div className="pagination">
        <button className='prev-btn' onClick={handlePrevClick} disabled={currentPage === 1}>
          Prev
        </button>
        <span className='pge'>Page {currentPage}</span>
        <button className='nxt-btn' onClick={handleNextClick} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>
          Next
        </button>
       
      </div>
      <button className='print-btn'>Print</button>
      <button className='print-btn'>Export</button>
   

    </div>
  );
};

export default Today;