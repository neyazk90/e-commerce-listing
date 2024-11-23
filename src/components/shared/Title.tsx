import { iTitleProps } from "../../models/interface";

const Title: React.FC<iTitleProps> = ({ heading, subHeading, color = "black", bold = false }) => {
    const headingStyle: React.CSSProperties = {
      color: color,
      fontWeight: bold ? "bold" : "normal",
    };
  
    const subHeadingStyle: React.CSSProperties = {
      color: color,
      fontWeight: "normal",
      fontSize: "0.9em",
    };
  
    return (
      <div>
        <h1 style={headingStyle}>{heading}</h1>
      </div>
    );
  };
  
  export default Title;