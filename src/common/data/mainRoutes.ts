import { mainRouteType } from "@common/@types";

import Continents from "@views/Continents";
import ContinentDetail from "@views/Continents/pages/ContinentDetail";
import Countries from "@views/Countries";
import CountryDetail from "@views/Countries/pages/CountryDetail";
import Home from "@views/Home";
import NotFound from "@views/NotFound";


export const mainRoutes: mainRouteType[] = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/continents",
    exact: true,
    component: Continents
  },
  {
    path: "/continent/:id",
    exact: true,
    component: ContinentDetail
  },
  {
    path: "/countries",
    exact: true,
    component: Countries
  },
  {
    path: "/country/:id",
    exact: true,
    component: CountryDetail
  },
  {
    path: undefined,
    exact: undefined,
    component: NotFound
  }
];