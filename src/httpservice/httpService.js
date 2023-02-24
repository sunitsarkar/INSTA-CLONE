import axios from "axios";

const apiURL = "https://bakend-instaclone.onrender.com";


export async function addPost(task) {
  try {
    let response;
    await axios.post(apiURL + "/create", task).then((res) => {
      response = res.data;
    });
    return response;
  } catch (error) {
    console.error("ERROR:-" + error.message);
  }
}