import PinchZoomWithPins from "./components/PinchZoomWithPins";
import styled from "styled-components";

const CustomPin = styled.button`
  background-color: red;
  color: #fff;
  border-radius: 10%;
`;

function callback(pin) {
  alert(`click on ${pin.label}`);
}

const App = () => {
  const pins = [
    {
      label: "BL 0",
      top: 1500,
      left: 1450,
    },
    {
      label: "BL 1",
      top: 1500,
      left: 1800,
    },
    {
      label: "BL 2",
      top: 1000,
      left: 1950,
    },
  ];
  return (
    <div>
      <h1> Hello!! this is an example!!!</h1>
      <div style={{ width: "500px", height: "500px", border: "1px dotted #000000" }}>
        <PinchZoomWithPins PinStyle={CustomPin} pins={pins} callback={callback}>
          <img alt="planta baixa" src="https://rniecomdev.blob.core.windows.net/rni-econ-dev-container/planta_implantacao_3d7c1a6062.jpg"></img>
        </PinchZoomWithPins>
      </div>
    </div>
  );
};

export default App;
