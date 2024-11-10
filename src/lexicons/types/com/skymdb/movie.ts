/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import { lexicons } from "../../../lexicons";
import { isObj, hasProp } from "../../../util";
import { CID } from "multiformats/cid";

export interface Record {
  /** Indicates if the movie is rated for adult content */
  adult: boolean;
  /** Poster of the movie */
  poster: BlobRef;
  /** Original language of the movie in i18n locale format (e.g. en-US) */
  originalLanguage: string;
  /** Original title of the movie */
  originalTitle: string;
  /** Release date of the movie */
  releaseDate: string;
  /** Description of the movie */
  description: string;
  /** List of actors in the movie */
  cast: string[];
  /** Director of the movie */
  director: string;
  /** Writer of the movie */
  writer: string;
  /** List of genres of the movie */
  genre: string[];
  /** Key used for extension of the movie - currently this is set to the movie's key (tid) */
  contentRef?: string;
  /** Date and time when the movie was added to the database */
  createdAt: string;
  [k: string]: unknown;
}

export function isRecord(v: unknown): v is Record {
  return (
    isObj(v) &&
    hasProp(v, "$type") &&
    (v.$type === "com.skymdb.movie#main" || v.$type === "com.skymdb.movie")
  );
}

export function validateRecord(v: unknown): ValidationResult {
  return lexicons.validate("com.skymdb.movie#main", v);
}
