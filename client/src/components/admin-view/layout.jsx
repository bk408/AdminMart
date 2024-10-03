import { Outlet } from "react-router-dom";
import AdminHeader from "./header";
import AdminSideBar from "./sidebar";

function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/*Admin Sidebar */}

      <AdminSideBar />

      {/*Admin Header */}
      <div className="flex flex-1 flex-col">
        <AdminHeader />

        <main className="flex flex-col flex-1 bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
