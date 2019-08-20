import React from "react";
import { Query } from "react-apollo";
import { loader } from "graphql.macro";

import CmsPage from "./CmsPage";
import Loading from "components/Utils/Loading";
import Debug from "components/Test/Debug";

const CmsPageQueryContainer = ({ id }) => {
  const cmsPageQuery = loader("state/graphql/queries/cmsPage.graphql");
  const queryVars = {
    id: id
  };

  return (
    <Query query={cmsPageQuery} variables={queryVars}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <Debug data={error.message} />;

        return (
          <CmsPage title={data.cmsPage.title} content={data.cmsPage.content} />
        );
      }}
    </Query>
  );
};
