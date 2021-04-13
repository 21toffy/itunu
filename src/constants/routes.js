import {
  DashboardInitial,
  Login,
  CaseDetail,
  AddCasePage,
  AllAssets,
  AssetDetailPage,
  CaseAssets,
  ForefeitedCases,
  CreateCase,
  InitialCases,
  ClosedCases,
  HqReport,
} from "../pages";
import Test from "../pages/Test/Test";

const routes = [
  {
    name: "Login",
    path: "/login",
    component: Login,
    protected: false,
    exact: true,
  },
  {
    name: "DashboardInitial",
    path: "/",
    component: DashboardInitial,
    roles: ["INITIAL_FORFEITURE", "ADMIN"],
    protected: true,
    exact: true,
  },
  {
    name: "expiredCases",
    path: "/expired-cases",
    component: ForefeitedCases,
    roles: ["INITIAL_FORFEITURE", "ADMIN"],
    protected: true,
    exact: true,
  },
  {
    name: "CaseDetail",
    path: "/case/:id",
    component: CaseDetail,
    roles: ["ADMIN"],
    protected: true,
    exact: true,
  },

  {
    name: "AllAssets",
    path: "/all-assets",
    component: AllAssets,
    roles: ["INITIAL_FORFEITURE", "ADMIN"],
    protected: true,
    exact: true,
  },
  {
    name: "AssetDetailPage",
    path: "/asset/:id",
    component: AssetDetailPage,
    roles: ["INITIAL_FORFEITURE", "ADMIN"],
    protected: true,
    exact: true,
  },

  {
    name: "CaseAssets",
    path: "/asset/:id",
    component: CaseAssets,
    roles: ["INITIAL_FORFEITURE", "ADMIN"],
    protected: true,
    exact: true,
  },
  {
    name: "CreateCase",
    path: "/create-case",
    component: CreateCase,
    roles: ["INITIAL_FORFEITURE", "ADMIN"],
    protected: true,
    exact: true,
  },
  {
    name: "InitialCases",
    path: "/initial-forfeitre",
    component: InitialCases,
    roles: ["INITIAL_FORFEITURE", "ADMIN"],
    protected: true,
    exact: true,
  },

  {
    name: "closedcases",
    path: "/closed-cases",
    component: ClosedCases,
    roles: ["INITIAL_FORFEITURE", "ADMIN"],
    protected: true,
    exact: true,
  },

  {
    name: "HqReport",
    path: "/case-history/:id",
    component: HqReport,
    roles: ["HQ", "INITIAL_FORFEITURE", "ADMIN"],
    protected: true,
    exact: true,
  },

  {
    name: "Test",
    path: "/test",
    component: Test,
    roles: ["HQ", "INITIAL_FORFEITURE", "ADMIN"],
    protected: false,
    exact: true,
  },
];
export default routes;

//where does the roles come in (how to check roles to route to pages)
// how toimplement other pages to check logged in users
//hoe to use his api key for now he uses api key
//
