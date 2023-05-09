import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { logoIcon } from "../../../Assets";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "./Model.css";
import { toast } from "react-toastify";
import axios from "axios";

function MyVerticallyCenteredModal(props) {
  const [ inqary, setInquary ] = useState({
    firstName:"",
    lastName:"",
    email:"",
    instrested:"",
    industry:"",
    budget:"",
    message:""
  });

  const handleChange = (e) => {
    setInquary({...inqary, instrested:e.target.value})
  };

  const handleIndustry = (e) => {
    setInquary({...inqary, industry:e.target.value})
  };

  const handleBudget = (e) => {
    setInquary({...inqary, budget:e.target.value})
  };

  const handleInput = (e) => {
    setInquary({...inqary, [e.target.name] : e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const validation = inqary?.firstName &&  inqary?.lastName && inqary?.email && inqary?.instrested && inqary?.industry && inqary?.budget && inqary?.message
      if(!validation){
        toast.error("All Field Are Required")
      } else{
        await axios.post('https://new-era-inqury-default-rtdb.firebaseio.com/inquary.json', {...inqary, date: new Date()})
        props.onHide()
      }
    } catch (error){
      console.log(error);
    }
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
                  name="firstName"
                  value={inqary?.firstName}
                  className="model-input"
                  onChange={handleInput}
                />
              </div>
              <div className="col-12 col-md-6 mb-4">
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  value={inqary?.lastName}
                  className="model-input"
                  onChange={handleInput}
                />
              </div>
              <div className="col-12 col-md-6 mb-4">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className="model-input"
                  name="email"
                  value={inqary?.email}
                  onChange={handleInput}
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
                    value={inqary?.instrested}
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
                    value={inqary?.industry}
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
                    value={inqary?.budget}
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
                  name="message"
                  value={inqary?.message}
                  onChange={handleInput}
                />
              </div>
              <div className="col-12  text-center">
                <button className="font-bodyFont bg-neweraBlue text-white hover:bg-neweraOrange duration-300 py-2 px-5 rounded-lg" >
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
