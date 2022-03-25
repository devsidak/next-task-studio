import Link from "next/link";
import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';

function Index() {
  return (
    <div>
      <div>
        <h3>Task Studio 🔥 </h3>
      </div>
      <div>
        <div>
            <DeleteIcon />
            <Link href="/tasks">
                <a>Tasks</a>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
