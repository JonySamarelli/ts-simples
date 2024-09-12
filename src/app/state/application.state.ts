import { Store } from "@ngrx/store";
import { ApplicationResponse } from "../models/applicationResponse";

export const selectApplication = (state: ApplicationResponse) => state;
