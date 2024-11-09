# Skymdb

Skymdb is a community-maintained database of movies on the Authentication Transfer Protocol (aka AT Proto). Essentially, IMDb or TMDB on AT Proto.

## What kind of records are supported?

A "type" of record is called a [Lexicon]('https://atproto.com/specs/lexicon') on AT Proto. Currently, the following Lexicons are supported (definitions can be found in the source code). Keep in mind this list on exhaustive, and will be updated to support more Lexicons in the future.

- Movie
- Person (e.g. actor, artist, producer, director, etc.)
- Genre

## What kind of records are planned?

- Series (essentially a TV Show)
- Episode
- Review
- User

The `User` type will use AT Proto's [Data Repositories](https://atproto.com/specs/repository). This will not be the exact same as a user on Bluesky, but similiarities will be present.

## Tech Stack

- TypeScript
- Hono
- Node.js
- `pnpm` is the only package manager supported
- Ports and Adapters pattern

I'm usually a sucker for JavaScript + JSDoc annotations + `.d.ts` files, but a clear majority of the web development community prefers TS and this app will not have any complex types, so I decided to go with TS.

The Ports and Adapters pattern is really nothing more than a way of structuring code that makes it easy to add/remove technology-specific adapters (e.g. migrate from using `node-cache` to using a Redis store) which I've come to appreciate.

## Contributing

Community contributions are highly encouraged! I'm just one dude working on this project in my free time (3-4 hours on a good week). Code specific changes are something I don't mind completely handling, but the database will be community-maintained.

## What does "community-maintained" mean?

There is simply no way for me to create a comprehensive database of all TV shows and movies by myself. I will be exploring techniques to approach this problem, but for now (and the foreseeable future), this app relies heavily on community contributions. I understand this might be a turn-off to many, but it is unfortunately how it is.

I aim to make it as low friction as possible to add these records!
