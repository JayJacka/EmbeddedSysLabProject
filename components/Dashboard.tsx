import { LineGraph } from "./charts/LineGraph";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

interface waypoint {
  id: number;
  name: string;
  TDS: number[];
  current: number[];
  temp: number;
  position: { lat: number; lng: number };
  safe: boolean;
}

interface dashboardInterface {
  waypoint: waypoint;
}

export const Dashboard = (props: dashboardInterface) => {
  return (
    <div className="px-4 text-black flex flex-col gap-10">
      <div className="w-[100px] h-[100px]">
        <>Last sampled Temperature</>
        <br></br>
        <b>{props.waypoint.temp} °C</b>
        {/* <CircularProgressbar
          value={props.waypoint.temp}
          maxValue={20}
          text={`${props.waypoint.temp}`}
          styles={buildStyles({
            rotation: 0,
            textSize: "20px",
            pathTransitionDuration: 0.5,
            pathColor: `rgba(62, 152, 199, ${props.waypoint.temp / 20})`,
            textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        /> */}
      </div>
      <div className="flex flex-row">
        <div className="w-[50%]">
          <b>Power Usage (Watts)</b>
          <LineGraph
            label="Power Consumption"
            data={props.waypoint.current}
          ></LineGraph>
        </div>
        <div className="w-[50%]">
          <b>Total Dissolved Solid (ppm)</b>
          <LineGraph label="TDS" data={props.waypoint.TDS}></LineGraph>
        </div>
      </div>
    </div>
  );
};
