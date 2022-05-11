import React from "react";
import { gql, useQuery } from "@apollo/client";
import Layout from "../components/layout";
import QueryResult from "../components/query-result";
import TrackDetails from "../components/track-detail";

export const GET_TRACK = gql`
  query Query($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        name
        id
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      description
      modules {
        id
        title
        length
      }
    }
  }
`;

const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });
  console.log(data);
  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <TrackDetails track={data?.track} />
      </QueryResult>
    </Layout>
  );
};
export default Track;
