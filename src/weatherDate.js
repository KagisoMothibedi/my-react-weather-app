import React from "react";

export default function weatherDate(props) {
  console.log(props.date);
  //   let myDate = new Date();
  //   let day = myDate.getDay();

  let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
