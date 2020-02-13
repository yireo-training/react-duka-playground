import React from "react";
import { loader } from "graphql.macro";
import { useQuery } from '@apollo/react-hooks';

import CmsPage from "./component";
import Loading from "components/Utils/Loading";
import Debug from "components/Test/Debug";

const cmsPageQuery = loader("state/graphql/queries/cmsPage.graphql");

const CmsPageQueryContainer = ({ id }) => {
  const { loading, error, data } = useQuery(cmsPageQuery, { variables: { id } });
  if (loading) return <Loading />;
  if (error) return <Debug data={error.message} />;

  return (
    <CmsPage title={data.cmsPage.title} content={data.cmsPage.content} />
  );
};

export default CmsPageQueryContainer;
