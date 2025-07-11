export interface Cast {
  id: number;
  name: string;
  character: string;
  avatar: string;
}

export interface MovieCastResponse {
  cast: MovieCast[];
}

export interface MovieCast {
  id: number;
  name: string;
  character?: string;
  profile_path?: string;
}

// export interface Cassssssss {
//   cast: Cast[];
//   crew: Cast[];
//   id:   number;
// }

// export interface Cast {
//   adult:                boolean;
//   cast_id?:             number;
//   character?:           string;
//   credit_id:            string;
//   gender:               number;
//   id:                   number;
//   known_for_department: string;
//   name:                 string;
//   order?:               number;
//   original_name:        string;
//   popularity:           number;
//   profile_path:         null | string;
//   department?:          string;
//   job?:                 string;
// }
