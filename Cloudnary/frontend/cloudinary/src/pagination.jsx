// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   MdOutlineKeyboardArrowRight,
//   MdOutlineKeyboardArrowLeft,
// } from "react-icons/md";
// import "./App.css";
// const App = () => {
//   const [items, setItems] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchItems(currentPage);
//   }, [currentPage]);

//   const fetchItems = async (page) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3000/api/items?page=${page}`
//       );
//       setItems(response.data.items);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error("Error fetching items:", error);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handlePageClick = (page) => {
//     setCurrentPage(page);
//   };

//   const pageNumbers = Array.from(
//     { length: totalPages },
//     (_, index) => index + 1
//   );
//   console.log(currentPage);
//   return (
//     <div>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       <div className="pagination-container">
//         {currentPage > 1 && (
//           <span onClick={handlePrevPage}>
//             <MdOutlineKeyboardArrowLeft />
//           </span>
//         )}
//         {pageNumbers.map((page) => (
//           <span
//             className={`${
//               currentPage === page ? "active-btn" : "non-active-btn"
//             }`}
//             key={page}
//             onClick={() => handlePageClick(page)}
//           >
//             {page}
//           </span>
//         ))}
//         {currentPage < totalPages && (
//           <span onClick={handleNextPage}>
//             <MdOutlineKeyboardArrowRight />
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import "./App.css";
import { SerialIdFunction } from "./SerialIdFunction";
const App = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8;
  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage]);

  const fetchItems = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/items?page=${page}`
      );
      setItems(response.data.items);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="main">
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item, index) => (
              <tr key={index}>
                <td>
                  {SerialIdFunction(
                    (currentPage - 1) * itemsPerPage + index + 1
                  )}
                </td>
                <td>{item.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination-container">
        {currentPage > 1 && (
          <span
            className="span-btn"
            style={{ display: "flex" }}
            onClick={handlePrevPage}
          >
            <MdOutlineKeyboardArrowLeft fontSize={25} />
          </span>
        )}
        {pageNumbers.map((page, index) => {
          if (
            page === 1 ||
            page === totalPages ||
            (index + 1 <= currentPage + 1 && index + 1 >= currentPage - 1)
          ) {
            return (
              <span
                className={`${
                  currentPage === page
                    ? "active-btn"
                    : "non-active-btn span-btn"
                }`}
                key={page}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </span>
            );
          } else if (
            (index + 1 === currentPage + 2 && index + 2 < totalPages) ||
            (index + 1 === currentPage - 2 && index > 1)
          ) {
            return (
              <span style={{ fontSize: "25px" }} key={page}>
                ...
              </span>
            );
          }
          return null;
        })}
        {currentPage < totalPages && (
          <span
            className="span-btn"
            style={{ display: "flex" }}
            onClick={handleNextPage}
          >
            <MdOutlineKeyboardArrowRight fontSize={25} />
          </span>
        )}
      </div>
    </div>
  );
};

export default App;