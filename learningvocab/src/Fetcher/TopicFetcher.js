import Fetcher from "./HttpFetch";

const  getAllTopics= () => {
  return Fetcher.to('api/topics').asyncGet();
}

export default {
  getAllTopics
}
