import Fetcher from "./HttpFetch";

const getAllTopics = () => {
  return Fetcher.to("api/topics").asyncGet();
};

const addTopic = (data) => {
  return Fetcher.to("api/topics").asyncPost(data);
};

export default {
  getAllTopics,
  addTopic
};
