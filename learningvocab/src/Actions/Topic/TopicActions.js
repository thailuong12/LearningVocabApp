import { GET_TOPICS, ADD_TOPIC } from "./TopicActionContants";

export const getTopics = () => ({ type: GET_TOPICS });

// export const addTopic = postData => dispatch => {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json"
//     },
//     body: JSON.stringify(postData)
//   })
//     .then(res => res.json())
//     .then(data =>
//       dispatch({
//         type: NEW_POST,
//         payload: data
//       })
//     );
// };
