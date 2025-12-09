import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
return (
<>
<header>sono header</header>
<main><Outlet/></main>
<footer>sono footer</footer>
</>

)
}