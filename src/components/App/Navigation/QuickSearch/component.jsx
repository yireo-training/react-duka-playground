import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const QuickSearch = props => {
  const [searchWord, setSearchWord] = useState(props.search);

  const onSearch = event => {
    props.history.replace("/search");
    setSearchWord(event.target.value);
    props.onSearch(event.target.value);
  };

  const onSubmit = () => {
    props.history.replace("/search");
    props.onSearch(searchWord);
  };

  return (
    <Form inline>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchWord}
          onChange={onSearch}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={onSubmit}>
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default withRouter(QuickSearch);
