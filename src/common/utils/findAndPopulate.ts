import { dataRequest } from "./data-request";

export const findAndPopulate = (uid: string, populate: string[]) => ({
 findOne(slugOrId) {
        return strapi.db.query(uid).findOne({
            where: {
                $or: [{ slug: slugOrId }, { id: slugOrId }],
            },
            populate,
        });
  },
  find(): any {
        return dataRequest(uid, {
            _condition: {
                populate,
            },
        });
  },
});
