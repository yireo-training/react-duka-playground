import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loading from "../Utils/Loading";

const HOMEPAGE_QUERY = gql`
  {
    cmsPage(id: 2) {
      content
      title
      content_heading
    }
  }
`;

const HomePage = () => {
  return (
    <div className="HomePage">
      <Query query={HOMEPAGE_QUERY}>
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
    </div>
  );
};

export default HomePage;
