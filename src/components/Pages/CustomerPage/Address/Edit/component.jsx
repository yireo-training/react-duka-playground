import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddressEdit = props => {
  const address = props.address;

  const [city, setCity] = useState(address.city || "");
  const [company, setCompany] = useState(address.company || "");
  const [countryId, setCountryId] = useState(address.country_id || "");
  const [postcode, setPostcode] = useState(address.postcode || "");
  const [street, setStreet] = useState(address.street.join());
  const [telephone, setTelephone] = useState(address.telephone || "");
  const [vatId, setVatId] = useState(address.vat_id || "");

  const fields = [
    {
      name: "city",
      label: "City",
      getter: city,
      setter: setCity
    },
    {
      name: "company",
      label: "Company",
      getter: company,
      setter: setCompany
    },
    {
      name: "countryId",
      label: "Country",
      getter: countryId,
      setter: setCountryId
    },
    {
      name: "postcode",
      label: "Postcode",
      getter: postcode,
      setter: setPostcode
    },
    {
      name: "street",
      label: "Street",
      getter: street,
      setter: setStreet
    },
    {
      name: "telephone",
      label: "Phone",
      getter: telephone,
      setter: setTelephone
    },
    {
      name: "vat_id",
      label: "VAT ID",
      getter: vatId,
      setter: setVatId
    }
  ];

  const onSave = () => {
    let data = {};
    Object.keys(fields).forEach(key => {
      const field = fields[key];
      data[field.name] = field.getter;
    });
    props.onSaveAddress(data);
  };

  return (
    <div className="address">
      {fields.map(field => {
        return (
          <Form.Group controlId={field.name} key={field.name}>
            <Form.Label>{field.label}</Form.Label>
            <input
              required
              type="text"
              className="form-control"
              value={field.getter}
              onChange={event => field.setter(event.target.value)}
            />
          </Form.Group>
        );
      })}

      <Button variant="primary" type="submit" onClick={onSave}>
        Save
      </Button>
    </div>
  );
};

export default AddressEdit;
