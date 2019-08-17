import React from "react";
import { Query } from "react-apollo";
import Loading from "components/Utils/Loading";
import { loader } from "graphql.macro";
import Debug from "components/Test/Debug";
import CmsBlock from "./component";

const CmsBlockQueryContainer = (props) => {
  const cmsBlockQuery = loader("state/graphql/queries/cmsBlock.graphql");

  return (
    <Query query={cmsBlockQuery} variables={{ id: props.id }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <Debug data={error.message} />;
        const cmsBlock = data.cmsBlocks.items[0];
        return (
            <CmsBlock title={cmsBlock.title} content={cmsBlock.content}/>
        );
      }}
    </Query>
  );
};

export default CmsBlockQueryContainer;
