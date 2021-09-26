export interface mainRouteType {
  path: string | undefined;
  exact: boolean | undefined;
  component: React.FC;
}

export interface StateDataType {
  code?: string;
  name?: string;
  country?: CountryDataType;
}

export interface LanguageDataType {
  code?: number;
  name?: string;
  native?: string;
  rtl?: boolean;
}

export interface CountryDataType {
  code?: number;
  name?: string;
  native?: string;
  phone?: string;
  continent?: ContinentDataType;
  capital?: string;
  currency?: string;
  languages?: LanguageDataType[];
  emoji?: string;
  emojiU?: string;
  states?: StateDataType[];
}

export interface ContinentDataType {
  code?: number;
  name?: string;
  countries: CountryDataType[]
}


export interface ContinentsReducerState {
  continents: ContinentDataType[]
}

export interface FilterReducerState {
  searchType: string;
  searchQuery: string;
}