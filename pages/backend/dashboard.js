import RequireAuth from '../../components/auth/RequireAuth';
import Dashboard  from "../../components/backend/Dashboard";

function DashboardPage (){
    return <Dashboard/>
}

export default RequireAuth(DashboardPage);