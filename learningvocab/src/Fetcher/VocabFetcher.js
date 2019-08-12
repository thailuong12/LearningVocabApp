import Fetcher from "./HttpFetch";

const getAllVocabs = () => {
  return Fetcher.to(`api/vocab`).asyncGet();
};

const addVocab = data => {
  return Fetcher.to("api/vocab").asyncPost(data);
};
const editVocab = (data) => {
  return Fetcher.to("api/vocab").asyncPut(data);
};
const deleteVocab = data => {
  return Fetcher.to("api/vocab").asyncDelete(data);
};

export default {
  getAllVocabs,
  addVocab,
  editVocab,
  deleteVocab
};
