import React from "react";
import Loading from "components/Utils/Loading";
import { loader } from "graphql.macro";
import Debug from "components/Test/Debug";
import CmsBlock from "./component";
import { useQuery } from "@apollo/react-hooks";

const cmsBlockQuery = loader("src/state/graphql/queries/cmsBlock.graphql");

const CmsBlockQueryContainer = props => {
  const { loading, error, data } = useQuery(cmsBlockQuery, {
    variables: { id: props.id }
  });

  if (loading) return <Loading />;
  if (error) return <Debug data={error.message} />;
  const cmsBlock = data.cmsBlocks.items[0];

  return <CmsBlock title={cmsBlock.title} content={cmsBlock.content} />;
};

export default CmsBlockQueryContainer;
