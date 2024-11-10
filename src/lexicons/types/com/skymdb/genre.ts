/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import { lexicons } from "../../../lexicons";
import { isObj, hasProp } from "../../../util";
import { CID } from "multiformats/cid";

export interface Record {
  /** Name of the genre */
  name: string;
  /** Date and time of creation */
  createdAt: string;
  [k: string]: unknown;
}

export function isRecord(v: unknown): v is Record {
  return (
    isObj(v) &&
    hasProp(v, "$type") &&
    (v.$type === "com.skymdb.genre#main" || v.$type === "com.skymdb.genre")
  );
}

export function validateRecord(v: unknown): ValidationResult {
  return lexicons.validate("com.skymdb.genre#main", v);
}
