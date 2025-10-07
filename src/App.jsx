import { Navbar } from "react-bootstrap";
import HomePage from "./pages/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RayaInsurance from "./pages/rayaInsuPage";
import CrmPage from "./pages/crmPage";
import EdiSysPage from "./pages/ediSysPage";
import SpmPage from "./pages/spmPage";
import CustomDigitalApp from "./pages/customDigitalAppPage";
import ApplicationDevelopment from "./pages/applDevPage";
import CloudPage from "./pages/cloudPage";
import ChatBotPage from "./pages/chatBotPage";
import MobAppPage from "./pages/mobAppPage";
import OrcaleFormsPage from "./pages/oracleFormsPage";
import IntgMainPage from "./pages/intgMainPage";
import IntegPage from "./pages/integPage";
import IdentityIntegPage from "./pages/indentityIntegPage";
import ProcessAutoPage from "./pages/pautomPage";
import CloudIntegPage from "./pages/cloudIntegPage";
import DataManageMainPage from "./pages/dataManageMainPage";
import DataIntegPage from "./pages/dataIntePage";
import MachinegLearningPage from "./pages/machLearnPage";
import DataVisualPage from "./pages/dataVisuaPage";
import ContentManagePage from "./pages/contentManagePage";
import ManagedServicesPage from "./pages/managedServicesPage";
import SupportPage from "./pages/supportPage";
import AboutPage from "./pages/aboutPage";
import OutsourcingPage from "./pages/outsourcingPage";
import TrainingPage from "./pages/trainPage";
import ConsultingPage from "./pages/consultPage";
import ContactPage from "./pages/contactPage";
import TechnologiesPage from "./pages/techPage";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
                <Route path="/aboutPage" element={<AboutPage />}></Route>

        <Route path="/rayaInsuPage" element={<RayaInsurance />}></Route>
        <Route path="/crmPage" element={<CrmPage />}></Route>
        <Route path="/ediSysPage" element={<EdiSysPage />}></Route>
        <Route path="/spmPage" element={<SpmPage />}></Route>
        <Route path="/customDigitalAppPage" element={<CustomDigitalApp />}></Route>
        <Route path="/applDevPage" element={<ApplicationDevelopment />}></Route>
        <Route path="/cloudPage" element={<CloudPage />}></Route>
        <Route path="/chatBotPage" element={<ChatBotPage />}></Route>
        <Route path="/mobAppPage" element={<MobAppPage />}></Route>
        <Route path="/oracleFormsPage" element={<OrcaleFormsPage />}></Route>
        <Route path="/intMainPage" element={<IntgMainPage />}></Route>
        <Route path="/integPage" element={<IntegPage />}></Route>
        <Route path="/identityIntegPage" element={<IdentityIntegPage />}></Route>
        <Route path="/pautoPage" element={<ProcessAutoPage />}></Route>
        <Route path="/cloudIntegPage" element={<CloudIntegPage />}></Route>
        <Route path="/dataManageMainPage" element={<DataManageMainPage />}></Route>
        <Route path="/dataIntePage" element={<DataIntegPage />}></Route>
        <Route path="/machLearnPage" element={<MachinegLearningPage />}></Route>
        <Route path="/dataVisuaPage" element={<DataVisualPage />}></Route>
        <Route path="/contentManagePage" element={<ContentManagePage />}></Route>
        <Route path="/managedServicesPage" element={<ManagedServicesPage/>}></Route>
        <Route path="/supportPage" element={<SupportPage/>}></Route>
        <Route path="/outsourcingPage" element={<OutsourcingPage/>}></Route>
        <Route path="/trainPage" element={<TrainingPage/>}></Route>
        <Route path="/consultPage" element={<ConsultingPage/>}></Route>
        <Route path="/contactPage" element={<ContactPage/>}></Route>
        <Route path="techPage" element={<TechnologiesPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
