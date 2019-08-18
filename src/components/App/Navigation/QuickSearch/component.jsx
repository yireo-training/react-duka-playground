import React from "react";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router";

const QuickSearch = (props) => {
  const onChange = (event) => {
    props.history.replace('/search');
    const searchValue = event.target.value;
    props.onSearch(searchValue);
  }

  return (
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" onChange={onChange} />
    </Form>
  );
};

export default withRouter(QuickSearch);
