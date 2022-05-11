const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracks: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracks();
    },
    // get a single track based on id, for the track page
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
    module: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getModule(id);
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    //
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
    durationInSeconds: ({ length }) => length,
  },

  Module: {
    durationInSeconds: ({ length }) => length,
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (e) {
        return {
          code: e.extensions.response.status,
          success: false,
          message: e.extensions.response.body,
          track: null,
        };
      }
    },
  },
};

module.exports = resolvers;
