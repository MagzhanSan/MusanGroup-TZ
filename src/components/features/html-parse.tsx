import parse from "html-react-parser";
import { FunctionComponent } from "react";

const HtmlParse: FunctionComponent<{ html: string }> = ({ html }) => {
  return (
    <div className="scrollbar-hide text-2xs leading-2xs h-[70px] overflow-auto py-2 font-normal">
      {html && parse(html)}
    </div>
  );
};

export { HtmlParse };
