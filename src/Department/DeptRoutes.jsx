import { Routes, Route } from "react-router-dom";
import DepartmentLayout from "./layout/Dptlayout";

import Dashboard from "./pages/Dashboard";
import LaptopDeclaration from "./pages/LaptopDeclaration";
import ViewStudents from "./pages/ViewStudents";
import AddStudent from "./pages/AddStudent";
import ViewLaptops from "./pages/ViewLaptops";
import ViewDeclarations from "./pages/ViewDeclaration";
import MyAccount from "./pages/MyAccount";

function DepartmentRoutes(){

return(

<Routes>

<Route element={<DepartmentLayout />}>

<Route index element={<Dashboard />} />

<Route path="declare" element={<LaptopDeclaration />} />

<Route path="students" element={<ViewStudents />} />

<Route path="students/add" element={<AddStudent />} />

<Route path="laptops" element={<ViewLaptops />} />

<Route path="declarations" element={<ViewDeclarations />} />

<Route path="account" element={<MyAccount />} />

</Route>

</Routes>

)

}

export default DepartmentRoutes
