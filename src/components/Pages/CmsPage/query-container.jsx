import React from "react";
import { Query } from "react-apollo";
import Loading from "components/Utils/Loading";
import { loader } from "graphql.macro";
import Debug from "components/Test/Debug";
import CmsPage from "./component";

const CmsPageQueryContainer = props => {
  const cmsPageQuery = loader("state/graphql/queries/cmsPage.graphql");

  return (
    <Query query={cmsPageQuery} variables={{ id: props.id }}>
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

export default CmsPageQueryContainer;
