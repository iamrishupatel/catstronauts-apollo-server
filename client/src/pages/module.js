import React from "react";
import { gql, useQuery } from "@apollo/client";
import Layout from "../components/layout";
import QueryResult from "../components/query-result";
import { ModuleDetail } from "../components";

const GET_MODULE_AND_PARENT_TRACK = gql`
  query Query($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      title
      length
      content
      videoUrl
      id
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`;

const Module = ({ trackId, moduleId }) => {
  const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: { moduleId, trackId },
  });
  return (
    <Layout fullWidth>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
