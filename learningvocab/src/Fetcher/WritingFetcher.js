import Fetcher from "./HttpFetch";

const getAllWritings = () => {
  return Fetcher.to(`api/writing`).asyncGet();
};

const getWritingById = id => {
  return Fetcher.to(`api/writing/${id}`).asyncGet();
}

const addWriting = data => {
  return Fetcher.to("api/writing").asyncPost(data);
};
const editWriting = (data) => {
  return Fetcher.to("api/writing").asyncPut(data);
};
const deleteWriting = data => {
  return Fetcher.to("api/writing").asyncDelete(data);
};

export default {
  getAllWritings,
  addWriting,
  editWriting,
  deleteWriting,
  getWritingById
};
