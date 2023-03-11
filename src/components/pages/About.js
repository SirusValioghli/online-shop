import React, { Component } from "react";
import styles from "./About.module.css";

class About extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.bg}>
          <h1>About Us</h1>
        </div>
        <div className={styles.textContainer}>
          <p>
            My Shop is the fastest-growing startup in Iran and is powered by a
            young team that wants to take Iran’s IT industry to the next level.
            We are always looking for young talent that wants to make a better
            tomorrow and have a positive impact on the lifestyle of people.
            Today we are proud to announce that Snapp is the first and biggest
            ride-hailing service in Iran with more than 30 million passengers
            and 2 million drivers in its fleet. We are always expanding the team
            to reach our ambitious objectives! So if you want to be a part of
            the best transportation in Iran, just Send your Resume.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
