import Mainlist from "../components/mainlist/mainlist";
import Sidenav from "../components/sidenav/sidenav";

export default function Home() {
  return (
    <div className="flex h-screen">
        <Sidenav/>
        <Mainlist/>
    </div>
  );
}