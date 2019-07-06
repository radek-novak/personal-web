import { pathToStr } from "../utils/helpers";
import filesize from "filesize";

const pathSize = ({ path, size }) =>
  `${pathToStr(path)} - ${filesize(size || 0, {
    base: 10
  })}`;

export default pathSize;
