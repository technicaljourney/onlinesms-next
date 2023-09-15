import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import Autosuggest from "react-autosuggest";
import zipcodes from "../../constants/zipcodes.json";

const modeList = {
  INPUT_INITIAL: "INPUT_INITIAL",
  INPUT_AREA_CODE: "INPUT_AREA_CODE",
  INPUT_ZIP_CODE: "INPUT_ZIP_CODE",
  INPUT_ADDRESS: "INPUT_ADDRESS",
};

// InputMode
let inputMode = modeList.INPUT_INITIAL;

const Searchdata = () => {
  const [showData, setShowData] = useState(false);
  // Search field value
  const [zipCode, setZipCode] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [address, setAddress] = useState("");
  // Search autoComplete
  const [autoZipCode, setAutoZipCode] = useState([]);
  const [autoAreaCode, setAutoAreaCode] = useState([]);
  const [autoAddress, setAutoAddress] = useState([]);

  const handleCheckFilter = (e) => {
    setShowData(e.target.checked);
  };

  const sortArray = (newValue) => (a, b) => {
    if (a.includes(newValue) && b.includes(newValue)) {
      return a.indexOf(newValue) - b.indexOf();
    } else if (a.includes(newValue) && !b.includes(newValue)) {
      return -1;
    } else if (!a.includes(newValue) && b.includes(newValue)) {
      return 1;
    } else {
      return 0;
    }
  };

  const handleChangeAreaCode = (e, { newValue, method }) => {
    setAreaCode(newValue);
    if (inputMode === modeList.INPUT_INITIAL) {
      inputMode = modeList.INPUT_AREA_CODE;
    }
    if (inputMode === modeList.INPUT_AREA_CODE) {
      setZipCode("");
      setAddress("");
      setAutoAreaCode([]);
      setAutoZipCode([]);
      setAutoAddress([]);
      if (newValue === "") {
        inputMode = modeList.INPUT_INITIAL;
      } else {
        const tmpAreaCode = Number(newValue);
        if (tmpAreaCode !== NaN && newValue.length === 3) {
          const findResult = zipcodes.filter(
            (item) => item.area_codes && item.area_codes.includes(newValue)
          );
          const addressResult = findResult.map(
            (item) => item.primary_city + ", " + item.state
          );
          const zipcodeResult = findResult.map((item) => item.zip);
          setAutoAddress([...new Set(addressResult)]);
          setAutoZipCode([...zipcodeResult]);
        }
      }
    }
    if (
      inputMode === modeList.INPUT_ADDRESS ||
      inputMode === modeList.INPUT_ZIP_CODE
    ) {
      // TODO something
    }
  };

  const handleChangeAddress = (e, { newValue, method }) => {
    setAddress(newValue);
    if (inputMode === modeList.INPUT_INITIAL) {
      inputMode = modeList.INPUT_ADDRESS;
    }
    if (inputMode === modeList.INPUT_ADDRESS) {
      setZipCode("");
      setAreaCode("");
      setAutoAreaCode([]);
      setAutoZipCode([]);
      setAutoAddress([]);
      if (newValue === "") {
        inputMode = modeList.INPUT_INITIAL;
      } else {
        const tmpAddress = newValue;
        if (tmpAddress !== "") {
          const findResult = zipcodes.filter(
            (item) => item.primary_city + ", " + item.state === tmpAddress
          );
          const areacodeResult = [];
          findResult.forEach((item) => {
            areacodeResult = [...areacodeResult, ...item.area_codes.split(",")];
            areacodeResult = [...new Set(areacodeResult)];
          })
          const zipcodeResult = findResult.map((item) => item.zip);
          setAutoAreaCode(areacodeResult);
          setAutoZipCode([...zipcodeResult]);
        }
      }
    }
    if (
      inputMode === modeList.INPUT_AREA_CODE ||
      inputMode === modeList.INPUT_ZIP_CODE
    ) {
    }
  };

  const handleChangeZipCode = (e, { newValue, method }) => {
    setZipCode(newValue);
    if (inputMode === modeList.INPUT_INITIAL) {
      inputMode = modeList.INPUT_ZIP_CODE;
    }
    if (inputMode === modeList.INPUT_ZIP_CODE) {
      setAddress("");
      setAreaCode("");
      setAutoAreaCode([]);
      setAutoZipCode([]);
      setAutoAddress([]);
      if (newValue === "") {
        inputMode = modeList.INPUT_INITIAL;
      } else {
        const tmpZipCode = Number(newValue);
        if (tmpZipCode !== NaN && newValue.length === 5) {
          let findResult = zipcodes.find(
            (item) => item.zip === newValue
          );
          const addressResult = findResult.primary_city + ", " + findResult.state;
          setAutoAddress([addressResult]);

          findResult = zipcodes.filter(
            (item) => item.primary_city + ", " + item.state === addressResult
          );
          const areacodeResult = [];
          findResult.forEach((item) => {
            areacodeResult = [...areacodeResult, ...item.area_codes.split(",")];
            areacodeResult = [...new Set(areacodeResult)];
          })
          const zipcodeResult = findResult.map((item) => item.zip).filter(item => item.zip !== newValue);
          setAutoAreaCode(areacodeResult);
          setAutoZipCode([newValue, ...zipcodeResult]);
        }
      }
    }
    if (
      inputMode === modeList.INPUT_AREA_CODE ||
      inputMode === modeList.INPUT_ADDRESS
    ) {
    }
  };

  const onSuggestionsFetchRequested = (field) => ({ value }) => {
    if (field === "address") {
      autoAddress.sort(sortArray(value));
    } else if (field === "areacode") {
      autoAreaCode.sort(sortArray(value));
    } else if (field === "zipcode") {
      autoZipCode.sort(sortArray(value));
    }
  };

  const onSuggestionsClearRequested = () => {};

  const getSuggestionValue = (suggestion) => {
    return suggestion;
  };
/* eslint-disable */
  const renderSuggestion = (value) => (suggestion) => {
    if (value === suggestion) {
      return <span className="fw-bold">{suggestion}</span>;
    } else {
      return <span>{suggestion}</span>;
    }
  };
/* eslint-enable */
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="sms-text-sec">
              <h4>Short-term / temporary numbers</h4>
              <div className="searchbox mb-3 d-flex align-items-center">
                <InputGroup>
                  <InputGroup.Text id="basic-addon2" className="p-0 bg-remove">
                    <Button className="searchbtn">
                      <Search />
                    </Button>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search.."
                    aria-label="Search.."
                    aria-describedby="basic-addon2"
                    className="search-input"
                  />
                </InputGroup>
                <div className="sms-accordian">
                  <div>
                    <Form.Check
                      className="dropdownform"
                      type="switch"
                      id="custom-switch"
                      label="Filters"
                      onChange={handleCheckFilter}
                    />
                  </div>
                </div>
              </div>
              <div className={showData ? "show-sect option-sec" : "option-sec"}>
                <Row>
                  <Col className="col-md-12 col-lg-4">
                    <div className="mb-3">
                      <Form.Label htmlFor="inputPassword5">
                        <strong>Search by Number:</strong>
                      </Form.Label>
                      <InputGroup className="mb-1">
                        <Autosuggest
                          suggestions={autoAreaCode}
                          onSuggestionsFetchRequested={onSuggestionsFetchRequested(
                            "areacode"
                          )}
                          onSuggestionsClearRequested={
                            onSuggestionsClearRequested
                          }
                          getSuggestionValue={getSuggestionValue}
                          renderSuggestion={renderSuggestion(areaCode)}
                          inputProps={{
                            value: areaCode,
                            onChange: handleChangeAreaCode,
                            className: "form-control",
                          }}
                        />
                        <Button variant="primary">Search</Button>
                      </InputGroup>
                      <Form.Text muted className="fw-bold">
                        Enter &quot;3-Digit Area Code&quot;
                      </Form.Text>
                    </div>
                  </Col>
                  <Col className="col-md-12 col-lg-4">
                    <div className="mb-3">
                      <Form.Label htmlFor="inputPassword5">
                        <strong>Search by City:</strong>
                      </Form.Label>
                      <InputGroup className="mb-1">
                        <Autosuggest
                          suggestions={autoAddress}
                          onSuggestionsFetchRequested={onSuggestionsFetchRequested(
                            "address"
                          )}
                          onSuggestionsClearRequested={
                            onSuggestionsClearRequested
                          }
                          getSuggestionValue={getSuggestionValue}
                          renderSuggestion={renderSuggestion(address)}
                          inputProps={{
                            value: address,
                            onChange: handleChangeAddress,
                            className: "form-control",
                          }}
                        />
                        <Button variant="primary">Search</Button>
                      </InputGroup>
                      <Form.Text muted className="fw-bold">
                        Enter &quot;City, State&quot;
                      </Form.Text>
                    </div>
                  </Col>
                  <Col className="col-md-12 col-lg-4">
                    <div className="mb-3">
                      <Form.Label htmlFor="inputPassword5">
                        <strong>Search by ZipCode:</strong>
                      </Form.Label>
                      <InputGroup className="mb-1">
                        <Autosuggest
                          suggestions={autoZipCode}
                          onSuggestionsFetchRequested={onSuggestionsFetchRequested(
                            "zipcode"
                          )}
                          onSuggestionsClearRequested={
                            onSuggestionsClearRequested
                          }
                          getSuggestionValue={getSuggestionValue}
                          renderSuggestion={renderSuggestion(zipCode)}
                          inputProps={{
                            value: zipCode,
                            onChange: handleChangeZipCode,
                            className: "form-control",
                          }}
                        />
                        <Button variant="primary">Search</Button>
                      </InputGroup>
                      <Form.Text muted className="fw-bold">
                        {<span>Enter &quot;5-Digit ZIP Code&quot;</span>}
                      </Form.Text>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Searchdata;
