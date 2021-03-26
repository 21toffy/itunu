import Axios from "../utils/axios";

export const getAllCases = async () => {
  const res = Axios.get("/cases");
  return res;
};

export const getCaseDetail = async (caseId) => {
  const res = Axios.get(`/cases/${caseId}`);
  return res;
};

export const createCase = async (data) => {
  const res = Axios.post("/cases", data);
  return res;
};

export const updateCase = async (data, assetId) => {
  // const res = Axios.put("/cases/1", data);
  const res = Axios.put(`/cases/${assetId}`, data);

  return res;
};

//GET//cases
//GET//cases/1
// POST//cases{name, legacy_id, expiring_date}

export const getAllAssets = async () => {
  const res = Axios.get("/assets");

  return res;
};

// export const getCaseAssets = async (caseId) => {
//   const res = Axios.get(`/assets?case_id=${caseId}`);
//   return res;
// };

//this shuld be renamed to getAssetDetail, because it as the endpoint to get asset detail
export const getAssetDetail = async (assetId) => {
  const res = Axios.get(`/assets/${assetId}`);
  return res;
};

//this shuld be renamed to getCaseAssets, because it as the endpoint to get a assets belonging to a case

export const getCaseAssets = async (assetId) => {
  const res = Axios.get(`/assets?case_id=${assetId}`);
  return res;
};

export const createAsset = async (data) => {
  const res = Axios.post("/assets", data);
  return res;
};

export const updateAsset = async (data) => {
  const res = Axios.put(`/assets/${data}`, data);
  return res;
};

//GET//assets
//GET///assets?case_id=1
//GET///assets/1
//POST//assets {name,case_id, description,, location, type}

//dashboard fillers

// initial cases list
export const initialCasesList = async () => {
  const res = Axios.get("/cases?status=INITIAL_FORFEITURE");
  return res;
};

// // initial cases list
// export const initialCasesList = async () => {
//   const res = Axios.get("/cases?status=INITIAL_FORFEITURE");
//   return res;
// };

export const finalCasesList = async () => {
  const res = Axios.get("/cases?status=FINAL_FORFEITURE");
  return res;
};

export const closedCasesList = async () => {
  const res = Axios.get("/cases?status=CLOSED");
  return res;
};

export const resolvedCasesList = async () => {
  const res = Axios.get("/cases?status=RESORVED");
  return res;
};

// export const nearingExpiryCasesList = async (assetId) => {
//   const res = Axios.get("/cases?expiring_from=2021-03-26&expiring_to=2021-04-01");
//   return res;
// };
