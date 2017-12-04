import axios from "axios";

export default {
  getDatabase: function(userId) {
    console.log(userId);
    return axios.get("api/getgames/" + userId);
  },
  getUser: function() {
    return axios.get("/user");
  },
  createUser: function(userId) {
    return axios.post("/api/newuser", { id: userId.uid });
  },
  newGame: function(nTitle, nOwner, nCp, nDesc, nId) {
    return axios.post("/api/newgame", {
      title: nTitle,
      owner: nOwner,
      cp: nCp,
      desc: nDesc,
      userid: nId
    });
  }
};
