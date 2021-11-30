import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import { useState, useEffect } from "react";

interface Props {
  value: number;
}

const Progress = ({ value }: Props) => {
  const [color, setColor] = useState("#9e8d8f");

  useEffect(() => {
    const colors = [
      { min: 75, color: "#3397D3" },
      { min: 50, color: "#24B47E" },
      { min: 25, color: "#FCD669" },
      { min: 0, color: "#C23D4B" },
    ];

    const color = colors.find((c) => value >= c.min);

    setColor(color ? color.color : "#9e8d8f");
  }, [value]);

  return (
    <ProgressBar percent={value} filledBackground={color}>
      <Step>
        {({ accomplished, index }: any) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }: any) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }: any) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default Progress;
