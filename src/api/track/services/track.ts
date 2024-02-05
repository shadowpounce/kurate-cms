/**
 * track service
 */

import { factories } from "@strapi/strapi";

import { findAndPopulate } from "../../../common/utils/findAndPopulate";

findAndPopulate("api.track.track", ["cover", "audio", "genres", "artists"]);

export default factories.createCoreService(
  "api::track.track",
  findAndPopulate("api::track.track", ["cover", "audio", "genres", "artists"])
);
