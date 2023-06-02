import React from "react";
import "./CSS/HomePage.css";
import { AssessmentOutlined } from "@mui/icons-material";
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function HomePage() {
  return (
    <div className="hp">
      <nav>
        <h2>SplitMe</h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#howWorks">How it works</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#support">Support</a>
          </li>
        </ul>
        <button className="signIn_hp">Sign In</button>
        <button className="createAccount_hp">Create Account</button>
      </nav>
      <div className="hp_content">
        <div className="hp_hiButton">
          <button>Hi, Everyone👋🏻</button>
        </div>
      </div>
      <span className="hp_content_title">
        Simplify Expense Sharing <br /> and Settle Bills Effortlessly
      </span>
      <div className="hp_content_intro">
        SplitMe is a free app that helps you split bills with friends and family
        and much more, <br /> from anywhere, anytime.
      </div>
      <div className="getWatch_hp">
        <button className="getStarted_hp">
          Get Started
          <ArrowRightAltIcon className="getStarted_hp_icon" />
        </button>
        <button className="watchVideos_hp">Watch Videos</button>
      </div>
      <img
        src="https://i.ibb.co/CBmwfkV/homepage-bg.png"
        alt="homepage-bg"
        border="0"
        className="bg_img1_hp"
      ></img>
      <img
        src="https://i.ibb.co/CBmwfkV/homepage-bg.png"
        alt="homepage-bg"
        border="0"
        className="bg_img2_hp"
      ></img>
      <span className="bgmobilehp">
        <span className="bgmobilehp_img">
          <img
            src="https://i.ibb.co/WfcK7Tw/homepage-mobile.png"
            alt="homepage-mobile"
            border="0"
            className="bgmobile_hp"
          ></img>
          <img
            src="https://i.ibb.co/CBmwfkV/homepage-bg.png"
            alt="homepage-bg"
            border="0"
            className="bg_img3_hp"
          ></img>
        </span>
        <p className="bgmobilehp_title">
          Has potential of over 1.5 million users per day. <br />
        </p>
      </span>
      <div className="hp_features" id="features">
        <span className="hp_features_title">
          Various features that you <br /> can get in SplitMe{" "}
        </span>
        <span className="hp_features_title_description">
          Multiple features provided to cater to your specific needs <br /> and
          facilitate seamless navigation
        </span>
        <div className="hp_features_content">
          <div className="hp_features_card">
            <AssessmentOutlined className="hp_features_card1_icon" />
            <span className="hp_features_card_title">Expense Tracker</span>
            <span className="hp_features_card_description">
              Track your expenses and manage your <br/> budget with ease using our app 
            </span>
          </div>
          <div className="hp_features_card">
            <ReceiptOutlinedIcon className="hp_features_card2_icon" />
            <span className="hp_features_card_title">Bill Splitting</span>
            <span className="hp_features_card_description">
              Split bills with your friends and family <br/> and settle them effortlessly
            </span>
          </div>
          <div className="hp_features_card">
            <CreditScoreOutlinedIcon className="hp_features_card1_icon" />
            <span className="hp_features_card_title">Secure and Private Transanctions</span>
            <span className="hp_features_card_description">
              Your data is safe with us and we <br/> ensure that your privacy is maintained
            </span>
          </div>
          <div className="hp_features_card">
            <MarkAsUnreadOutlinedIcon className="hp_features_card2_icon" />
            <span className="hp_features_card_title">Real-time Updates</span>
            <span className="hp_features_card_description">
              Get real-time updates on your <br/> transactions and bills
            </span>
          </div>
        </div>
        <div className="hp_features_transanctions">
          <img src="https://i.ibb.co/2sHq9dk/morphis-payment-by-smartphone-by-qr-code.png" className="hp_features_transanctions_img"/>
          <div className="hp_features_transanctions_detail">
            <div className="hp_features_transanctions_detail_title">
              Make transactions with <br /> your friends
            </div>
            <div className="hp_features_transanctions_detail_desc">
              Effortlessly split bills and settle expenses with friends. Simplify the financial collaboration and make transactions seamlessly. Start sharing expenses with ease today!
            </div>
            <div className="hp_features_transanctions_detail_buttons">
              <button className="hp_features_transanctions_detail_buttons_learn_more">
                Learn More
              </button>
              <button className="hp_features_transanctions_detail_buttons_directions">
                See Directions
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hp_howWorks" id="howWorks">
        <span className="hp_howWorks_title">
          How SplitMe Works
        </span>
      </div>
    </div>
  );
}

export default HomePage;
