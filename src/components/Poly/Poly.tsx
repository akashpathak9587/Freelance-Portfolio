import { Polygon } from "@html-polygon/react";

const Poly = () => {
  return (
    <Polygon
      sides={6}
      padding={5}
      stable
      borderWidth={2}
      borderColor="rgb(237, 237, 237)"
      className="h-[260px] w-[260px] bg-[#000] text-[#fff] text-center">
      {/* your text (or html) here */}
    </Polygon>
  );
};

export default Poly;
