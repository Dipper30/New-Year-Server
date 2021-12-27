export enum region {
  NORTH_EAST = 'North East Region',
  SOUTH_EAST = 'South East Region',
  WEST = 'West Region',
  MIDDLE = 'Middle Region',
  MARS = 'Mars Region',
}

export enum state {
  PENNSYLVANIA = 'Pennsylvania',
  NEW_YORK = 'New York',
  OHIO = 'Ohio',
  VIRGINIA = 'Virginia',
  NORTH_CAROLINA = 'North Carolina',
  SOUTH_CAROLINA = 'South Carolina',
  GEORGIA = 'Georgia',
  FLORIDA = 'Florida',
  WASHINGTON = 'Washington',
  OREGON = 'Oregon',
  CALIFORNIA = 'California',
  ARIZONA = 'Arizona',
  TEXAS = 'Texas',
  KANSAS = 'Kansas',
  COLORADO = 'Colorado',
  MINNESOTA = 'Minnesota',
  MARSI = 'Mars I',
  MARSII = 'Mars II',
}

export const statesInRegion = {
  [region.NORTH_EAST]: [
    state.PENNSYLVANIA,
    state.NEW_YORK,
    state.OHIO,
    state.VIRGINIA,
  ],
  [region.SOUTH_EAST]: [
    state.NORTH_CAROLINA,
    state.SOUTH_CAROLINA,
    state.GEORGIA,
    state.FLORIDA,
  ],
  [region.WEST]: [
    state.WASHINGTON,
    state.OREGON,
    state.CALIFORNIA,
    state.ARIZONA,
  ],
  [region.MIDDLE]: [
    state.TEXAS,
    state.KANSAS,
    state.COLORADO,
    state.MINNESOTA,
  ],
  [region.MARS]: [
    state.MARSI,
    state.MARSII,
  ]
}
