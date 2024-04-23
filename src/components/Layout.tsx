// import { Dispatch, SetStateAction, useState } from "react";
// import logo from '../images/logo.png'


// interface menuProp {
//   setMenu: Dispatch<SetStateAction<string>>;
//   setSearch: Dispatch<SetStateAction<boolean>>;
//   setOpen: Dispatch<SetStateAction<boolean>>;
//   search: boolean;
// }

// const Sidebar = (props:menuProp) => {
//   const [open,setOpen] = useState(true)
//   const Menu = [
//     { title: "Series", src:"tv"},
//     { title: "Movie", src:"movie"},
//     { title: "Fav", src:"love"},
//     { title: "User", src:"user"},
//   ]
//   return (
//     <div className="flex">
//         <div className={`${open ? 'w-72' : 'w-20' } duration-300 h-screen bg-black`}>
//             <img src={logo} alt="logo"
//             className={`cursor-pointer duration-500`}
//             onMouseEnter={() => setOpen(true)}
//             onMouseLeave={() => setOpen(false)}
//             />
//         </div>
//         <div>
//             <ul className="pt-6">
//                 {Menu.map((menu,index)=>(
//                     <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2">
//                         <img src={`../images/${menu.src}.png`} />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//         <div className="p-7 text-2x1 font-semibold flex-1 h-screen">
//             <h1>Home Page</h1>
//         </div>
//     </div>
//   );
// };

// export default Sidebar;
