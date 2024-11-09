/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import { lexicons } from "../../../lexicons";
import { isObj, hasProp } from "../../../util";
import { CID } from "multiformats/cid";

export interface Record {
  /** Name of the person */
  name: string;
  /** Birth date of the person */
  birthDate: string;
  /** Birth place of the person */
  birthPlace: string;
  /** Biography of the person */
  biography: string;
  /** Creation date of the record */
  createdAt: string;
  [k: string]: unknown;
}

export function isRecord(v: unknown): v is Record {
  return (
    isObj(v) &&
    hasProp(v, "$type") &&
    (v.$type === "com.skymdb.person#main" || v.$type === "com.skymdb.person")
  );
}

export function validateRecord(v: unknown): ValidationResult {
  return lexicons.validate("com.skymdb.person#main", v);
}
