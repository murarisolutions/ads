
import React from 'react';
import './AccPage.css'; 
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/card';
import BusinessIcon from '@mui/icons-material/Business';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BookIcon from '@mui/icons-material/Book';
import FormationIcon from '@mui/icons-material/AccountTree';
import PlanningIcon from '@mui/icons-material/Calculate';
import InvestmentIcon from '@mui/icons-material/ShowChart';
import RetirementIcon from '@mui/icons-material/Accessibility';
import AdvisorIcon from '@mui/icons-material/Person';
import InsuranceIcon from '@mui/icons-material/HealthAndSafety';
import { Analytics as AuditIcon } from '@mui/icons-material'; 

const AccPage = () => {
  const navigate = useNavigate();

  return (
    <div className="accountantpage">
    
      <main className="main1">
        <section className="hero1">
          <h1>Explore Our <span>Accounting / Financial Services</span></h1>
          <div className="cards1">
            <Card title="Consulting" description="Get expert business consulting for your business" link="/consulting" icon={<BusinessIcon />} />
            <Card title="Taxes" description="File your taxes with a CA, your way" link="/taxes" icon={<AttachMoneyIcon />} />
            <Card title="Bookkeeping" description="Schedule a bookkeeping consultation" link="/bookkeeping" icon={<BookIcon />} />
            <Card title="Business Formation" description="Get help with forming your business" link="/business-formation" icon={<FormationIcon />} />
            <Card title="Auditing" description="Comprehensive auditing services" link="/auditing" icon={<AuditIcon style={{ color: '#161717' }} />} />
            <Card title="Financial Planning" description="Plan your finances with our experts" link="/financial-planning" icon={<PlanningIcon />} />
            <Card title="Investment Advice" description="Get professional investment advice" link="/investment-advisor" icon={<InvestmentIcon />} />
            <Card title="Retirement Planning" description="Secure your retirement with expert planning" link="/retirement" icon={<RetirementIcon />} />
            <Card title="Advisor Services" description="Optimize your tax strategy by saving your money" link="/advisor" icon={<AdvisorIcon />} />
            <Card title="Payroll" description="Manage your payroll efficiently with your CA" link="/payroll" icon={<AttachMoneyIcon />} />
            <Card title="Insurance Services" description="Comprehensive wealth management services" link="/insurance-services" icon={<InsuranceIcon />} />
          </div>
        </section>

        <div className="advisor">
          <button onClick={() => navigate('/')}>Go back</button>
        </div>
      </main>
    </div>
  );
};

export default AccPage;
