import ContentChart from "./Contents/ContentChart";
import ContentTable from './Contents/ContentTable';
import ContentCTA from './Contents/ContentCTA';
import Users from './UserTable/Users';

const LandingPage = () => (
    <>
        <Users />
        <ContentChart />
        <ContentTable />
        <ContentCTA />
    </>
);

export default LandingPage;