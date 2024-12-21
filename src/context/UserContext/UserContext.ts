import { createContext } from "react";
import { Context } from "../../types/type";
import { DefaultContext } from "../../utility/context";

export const AppContext = createContext<Context>(DefaultContext);
