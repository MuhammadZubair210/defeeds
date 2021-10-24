import PropTypes from "prop-types";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";
import "./SideNav.css";

const Sidenav = ({ history, profilePic }) => {
  const { publicKey } = useWallet();
  let pubKey = publicKey?.toBase58();

  return (
    <div className="main-code">
      <div className="fixed">
        <div className="logo-notification">
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <img
              onClick={() => history.push("/home")}
              className="logo"
              src={
                "data:image/png;base64,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"
              }
              alt="slooth"
            />
            <div style={{ margin: "0% 5%" }}>
              <div>DeFeeds</div>
              <div style={{ fontSize: "9px" }}>Powered by DeGods</div>
            </div>
          </div>
        </div>

        <div className="home">
          <div
            className="sidenav sidenav-user"
            onClick={() => history.push("/home")}
          >
            <div className="side-icons">
              <img
                className="user-profile"
                src={
                  profilePic !== "" && profilePic !== undefined
                    ? profilePic
                    : require("../../assets/profile.jpg")
                }
              ></img>
            </div>
            <div className="side-text">
              <a className="anchor user">Defeeds Home</a>
            </div>
          </div>
          {Array(1)
            .fill()
            .map((i) => {
              return (
                <div
                  key={i}
                  className="sidenav sidenav-user"
                  onClick={() => history.push("/profile")}
                >
                  <div className="side-icons">
                    <img
                      className="user-profile"
                      src={
                        profilePic !== "" && profilePic !== undefined
                          ? profilePic
                          : require("../../assets/profile.jpg")
                      }
                    ></img>
                  </div>
                  <div className="side-text">
                    <a className="anchor user">Profile</a>
                  </div>
                </div>
              );
            })}
          {pubKey ? (
            <div
              className="sidenav sidenav-out"
              onClick={() => history.push("/home")}
            >
              <div type="button" className="main-btn ">
                <span className="comming-soon-text">DeGods</span>
              </div>
            </div>
          ) : (
            <div>
              <WalletMultiButton />
              {/* <WalletDisconnectButton /> */}
            </div>
          )}
        </div>
        {pubKey ? (
          <div className="connected-text-defeed">
            <div>
              <img src={require("../../assets/connected.png")} />
            </div>
            <div>
              <div>
                <span className="connected-text">You are now connected</span>
              </div>
              <div className="connected-text">
                {pubKey.slice(0, 5)}..{pubKey.slice(pubKey.length - 5)}
              </div>
            </div>
          </div>
        ) : (
          <div className="connected-text-defeed">
            <div>
              <div className="connected-text">Please connect your wallet</div>
              <div className="connected-text">to enable features</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Sidenav.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  profilePic: PropTypes.string,
};

export default Sidenav;
