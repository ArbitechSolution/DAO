import Modal from "react-bootstrap/Modal";
import { IoMdClose } from "react-icons/io";
import "./Settings.css";
import { FormControl, Form, InputGroup } from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
  return (
    <div style={{ backgroundColor: "rgb(247,247,247)" }}>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="settingcontanier"
      >
        <Modal.Header
          style={{
            backgroundColor: "rgb(23, 25, 27)",
            color: "white",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-2">
                <IoMdClose onClick={props.onHide} size={28} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h3 className="settingh5">Settings</h3>
              </div>
            </div>
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Slippage</Form.Label>
                  <InputGroup>
                    <FormControl className="formcontrol p-2" />
                    <InputGroup.Text
                      style={{
                        backgroundColor: "rgb(108,117,125)",
                        border: "1px solid rgb(108,117,125)",
                      }}
                    >
                      %
                    </InputGroup.Text>
                  </InputGroup>
                  <Form.Text className="text-muted">
                    Transaction may revert if price changes by more than
                    slippage %
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Recipient Address</Form.Label>
                  <InputGroup>
                    <FormControl
                      className="formcontrol p-2"
                      value="0x6B74232b019D22F386852090769E88d62FB70a97"
                    />
                  </InputGroup>
                  <Form.Text className="text-muted">
                    Choose recipient address. By default, this is your currently
                    connected address
                  </Form.Text>
                </Form.Group>
              </Form>
            </div>
          </div>
        </Modal.Header>
      </Modal>
    </div>
  );
}

function SettingOne({ showone, setshowone }) {
  return (
    <>
      <MyVerticallyCenteredModal
        show={showone}
        onHide={() => setshowone(false)}
      />
    </>
  );
}
export default SettingOne;
