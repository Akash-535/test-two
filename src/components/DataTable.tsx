// import React from "react";

// const DataTable = () => {
//   const TH_ARRAY_LIST = ["Email", "Phone", "Password", "Delete"];
//   return (
//     <div>
//       <table className="table-auto w-full text-white">
//         <thead>
//           {TH_ARRAY_LIST.map((obj, i) => (
//             <tr key={i}>
//               <td className="px-3 py-3 text-center whitespace-nowrap">{obj}</td>
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {data.map((obj, i) => (
//             <tr key={i} className="bg-gray-700">
//               <td className="border px-4 py-3 text-center text-white">
//                 {obj.firstName}
//               </td>
//               <td className="border px-4 py-3 text-center text-white">
//                 {obj.email}
//               </td>
//               <td className="border px-4 py-3 text-center text-white">
//                 {obj.phone}
//               </td>
//               <td className="border px-4 py-3 text-center text-white">
//                 {obj.password}
//               </td>
//               <td className="border px-4 py-3 text-center text-white">
//                 <button
//                   onClick={() => handleDelete(obj.email)}
//                   className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-800 transition-all duration-300"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTable;
