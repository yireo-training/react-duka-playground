import React from "react";
import { Query } from "react-apollo";
import Loading from "../../Utils/Loading";
import { loader } from "graphql.macro";
import "./component.css";

const HomePage = () => {
  const cmsPageQuery = loader("state/graphql/queries/cmsPage.graphql");
  const cmsBlockQuery = loader("state/graphql/queries/cmsBlock.graphql");

  return (
    <div className="HomePage">
      <Query query={cmsPageQuery} variables={{id: 2}}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return `Error! ${error.message}`;
          return (
            <div className="cmsPage">
              <h1>{data.cmsPage.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: data.cmsPage.content }} />
            </div>
          );
        }}
      </Query>

      <Query query={cmsBlockQuery} variables={{id: "example"}}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return `Error! ${error.message}`;
          const cmsBlock = data.cmsBlocks.items[0];
          return (
            <div className="sidebar">
              <h4>{cmsBlock.title}</h4>
              <div dangerouslySetInnerHTML={{ __html: cmsBlock.content }} />
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default HomePage;
