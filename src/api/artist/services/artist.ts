/**
 * artist service
 */

import { factories } from "@strapi/strapi";

import { findAndPopulate } from "../../../common/utils/findAndPopulate";

findAndPopulate("api.artist.artist", ["photos", "tracks"]);

export default factories.createCoreService(
  "api::artist.artist",
  findAndPopulate("api::artist.artist", ["photos", "tracks"])
);
