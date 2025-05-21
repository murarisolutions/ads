
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import Home from "./pages/home/Home";
import DscPage from "./components/dsc/DscPage";
import DSCOWN from "./components/services/DSC/dscown";
import DSC from "./components/services/DSC/dsc.jsx"
import DscUp from "./components/services/DscUp/dscup";
import AccPage from "./components/acc/AccPage";
import ConsultingPage from "./components/services/Consulting/Consulting.jsx";
import TaxesDemo from "./components/services/taxes/TaxesDemo";
import PayrollDemo from "./components/services/Payroll/PayrollDemo";
import BookkeepingDemo from "./components/services/BookKeeping/BookkeepingDemo";
import BusinessFormationDemo from "./components/services/bussiness/BusinessFormationDemo.jsx"
import AuditingServicesPage from "./components/services/Auditing/AuditingDemo";
import FinancialPlanningPage from './components/services/FinancialPlanning/Financial.jsx';
import InvestmentAdvisorPage from './components/services/Investmentad/Investment Adviser.jsx';
import AdvisorServices from "./components/services/Advisor/Advisor services.jsx";
import InsuranceServicesPage from './components/services/insurance/insurance.jsx';
import About from "./pages/about/About";
import ContactPage from '../src/pages/contact/contact .jsx';
import RetirementPlanningPage from "./components/services/Retirement/Retirement planning.jsx"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounting-services" element={<AccPage />} />
        <Route path="/dsc" element={<DscPage />} />
        <Route path="/upload-video" element={<DscUp />} />
        <Route path="/consulting-page" element={<DSC/>} />
        <Route path="/dsc-india" element={<DSCOWN />} />
        <Route path="/financial-planning" element={<FinancialPlanningPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        <Route path="/taxes" element={<TaxesDemo />} />
        <Route path="/investment-advisor" element={<InvestmentAdvisorPage />} />
        <Route path="/payroll" element={<PayrollDemo />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/advisor" element={<AdvisorServices/>}/>
        <Route path="/bookkeeping" element={<BookkeepingDemo />} />
        <Route path="/retirement" element={<RetirementPlanningPage/>} />
        <Route path="/business-formation" element={<BusinessFormationDemo />} />
        <Route path="/auditing" element={<AuditingServicesPage />} />
        <Route path="/insurance-services" element={<InsuranceServicesPage />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
