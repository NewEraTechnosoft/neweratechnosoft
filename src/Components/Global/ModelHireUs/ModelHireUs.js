import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { logoIcon } from "../../../Assets";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "./Model.css";
import { useNavigate } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  const [interest, setInterest] = useState("");
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInterest(e.target.value);
  };

  const handleIndustry = (e) => {
    setIndustry(e.target.value);
  };

  const handleBudget = (e) => {
    setBudget(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const interestDepart = ["Designing", "Engineering", "Development", "Sales"];

  const industryMenu = [
    "Website Development",
    "Software Development",
    "E-Commerce Development",
    "Mobile Apps",
    "App Development",
    "Game Development",
  ];

  const budgetList = [
    "Less than $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 and above",
  ];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="model-container p-3">
        <div className="model-header">
          <div className="row justify-content-center align-items-center py-2">
            <div className="col-12 col-md-2">
              <img
                src={logoIcon}
                alt=""
                className="h-16 w-auto mx-auto mx-md-0"
              />
            </div>
            <div className="col-8 text-center">
              <h3 className=" font-bodyFont mb-0 font-bold text-neweraBlue">
                Grow Your Business With Us!
              </h3>
            </div>
            <div className="col-2 text-end">
              <button
                className="p-3 rounded-full text-gray-600 hover:text-red-800 duration-300"
                onClick={props.onHide}
              >
                <i className="fa-solid fa-xmark font-bold text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="model-form py-4">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  className="model-input"
                />
              </div>
              <div className="col-12 col-md-6 mb-4">
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  className="model-input"
                />
              </div>
              <div className="col-12 col-md-6 mb-4">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className="model-input"
                />
              </div>
              <div className="col-12 col-md-6 mb-4">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Interested in
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={interest}
                    label="Interested in"
                    onChange={handleChange}
                    className="model-select"
                  >
                    {interestDepart?.map((item, index) => {
                      return (
                        <MenuItem value={item} key={index}>
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Industry
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={industry}
                    label="Industry"
                    onChange={handleIndustry}
                    className="model-select"
                  >
                    {industryMenu?.map((item, index) => {
                      return (
                        <MenuItem value={item} key={index}>
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Your Budget
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={budget}
                    label="Your Budget"
                    onChange={handleBudget}
                    className="model-select"
                  >
                    {budgetList?.map((item, index) => {
                      return (
                        <MenuItem value={item} key={index}>
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div className="col-12 mb-4">
                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  multiline
                  maxRows={4}
                  className="model-input"
                />
              </div>
              <div className="col-12  text-center">
                <button className="font-bodyFont bg-neweraBlue text-white hover:bg-neweraOrange duration-300 py-2 px-5 rounded-lg">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <Button onClick={props.onHide}>Close</Button> */}
    </Modal>
  );
}

export default function ModelHireUs({ model, setmodel }) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setModalShow(model);
  }, [model]);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setmodel(false)}
      />
    </>
  );
}
