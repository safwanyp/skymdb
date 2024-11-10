/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { LexiconDoc, Lexicons } from "@atproto/lexicon";

export const schemaDict = {
  ComSkymdbGenre: {
    lexicon: 1,
    id: "com.skymdb.genre",
    description: "Entity referring to a genre",
    defs: {
      main: {
        type: "record",
        key: "tid",
        record: {
          type: "object",
          required: ["name", "createdAt"],
          properties: {
            name: {
              type: "string",
              description: "Name of the genre",
            },
            createdAt: {
              type: "string",
              format: "datetime",
              description: "Date and time of creation",
            },
          },
        },
      },
    },
  },
  ComSkymdbMovie: {
    lexicon: 1,
    id: "com.skymdb.movie",
    description: "Entity referring to a movie",
    defs: {
      main: {
        type: "record",
        key: "tid",
        record: {
          type: "object",
          required: [
            "adult",
            "poster",
            "originalLanguage",
            "originalTitle",
            "releaseDate",
            "description",
            "cast",
            "director",
            "writer",
            "genre",
            "createdAt",
          ],
          properties: {
            adult: {
              type: "boolean",
              description: "Indicates if the movie is rated for adult content",
            },
            poster: {
              type: "blob",
              description: "Poster of the movie",
              accept: ["image/png", "image/jpeg"],
              maxSize: 1048576,
            },
            originalLanguage: {
              type: "string",
              description:
                "Original language of the movie in i18n locale format (e.g. en-US)",
              minLength: 5,
              maxLength: 5,
            },
            originalTitle: {
              type: "string",
              description: "Original title of the movie",
            },
            releaseDate: {
              type: "string",
              description: "Release date of the movie",
              format: "datetime",
            },
            description: {
              type: "string",
              description: "Description of the movie",
            },
            cast: {
              type: "array",
              description: "List of actors in the movie",
              items: {
                type: "string",
                format: "tid",
              },
            },
            director: {
              type: "string",
              description: "Director of the movie",
              format: "tid",
            },
            writer: {
              type: "string",
              description: "Writer of the movie",
              format: "tid",
            },
            genre: {
              type: "array",
              description: "List of genres of the movie",
              items: {
                type: "string",
                format: "tid",
              },
            },
            contentRef: {
              type: "string",
              description:
                "Key used for extension of the movie - currently this is set to the movie's key (tid)",
              format: "tid",
            },
            createdAt: {
              type: "string",
              description:
                "Date and time when the movie was added to the database",
              format: "datetime",
            },
          },
        },
      },
    },
  },
  ComSkymdbPerson: {
    lexicon: 1,
    id: "com.skymdb.person",
    description: "Entity referring to a person",
    defs: {
      main: {
        type: "record",
        key: "tid",
        record: {
          type: "object",
          required: [
            "name",
            "birthDate",
            "birthPlace",
            "biography",
            "createdAt",
          ],
          properties: {
            name: {
              type: "string",
              description: "Name of the person",
            },
            birthDate: {
              type: "string",
              description: "Birth date of the person",
              format: "datetime",
            },
            birthPlace: {
              type: "string",
              description: "Birth place of the person",
            },
            biography: {
              type: "string",
              description: "Biography of the person",
            },
            createdAt: {
              type: "string",
              description: "Creation date of the record",
              format: "datetime",
            },
          },
        },
      },
    },
  },
};
export const schemas: LexiconDoc[] = Object.values(schemaDict) as LexiconDoc[];
export const lexicons: Lexicons = new Lexicons(schemas);
export const ids = {
  ComSkymdbGenre: "com.skymdb.genre",
  ComSkymdbMovie: "com.skymdb.movie",
  ComSkymdbPerson: "com.skymdb.person",
};
