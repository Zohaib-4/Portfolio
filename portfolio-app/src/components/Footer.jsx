import React from "react";

const Footer = ({ socialLinks = [] }) => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        <div className="flex justify-center space-x-4 mt-2">
          {socialLinks.length > 0 ? (
            socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {link.name}
              </a>
            ))
          ) : (
            <p>No social media links available.</p>
          )}
        </div>
      </footer>
    );
  };
  
  export default Footer;

  
// const Footer = ({ socialLinks }) => {
//   return (
//     <footer className="bg-gray-900 text-white text-center py-6">
//       <div className="container mx-auto">
//         <p className="text-lg">Connect with me:</p>
//         <div className="flex justify-center gap-4 mt-3">
//           {socialLinks.map((link, index) => (
//             <a
//               key={index}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-400 hover:text-blue-600"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//         <p className="mt-4 text-gray-400">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
