const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getTracks() {
    return this.get("tracks");
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }

  getTrackModules(trackId) {
    return this.get(`/track/${trackId}/modules`);
  }
  getModule(moduleId) {
    return this.get(`/module/${moduleId}`);
  }
  incrementTrackViews(rackId) {
    return this.patch(`/track/${rackId}/numberOfViews`);
  }
}

module.exports = TrackAPI;
