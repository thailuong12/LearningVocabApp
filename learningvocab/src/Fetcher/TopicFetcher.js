import Fetcher from "./HttpFetch";

const getAllTopics = () => {
  return Fetcher.to("api/topics").asyncGet();
};

const addTopic = data => {
  return Fetcher.to("api/topics").asyncPost(data);
};
const editTopic = data => {
  return Fetcher.to("api/topics").asyncPut(data);
};
const deleteTopic = data => {
  return Fetcher.to("api/topics").asyncDelete(data);
};

export default {
  getAllTopics,
  addTopic,
  editTopic,
  deleteTopic
};
