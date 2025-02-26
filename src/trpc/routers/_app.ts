import { createTRPCRouter } from "../init";
import { studioRouter } from "@/modules/studio/server/procedure";
import { videosRouter } from "@/modules/videos/server/procedure";
import { categoriesRouter } from "@/modules/categories/server/procedure";
import { videoViewRouter } from "@/modules/video-views/server/procedure";
import { videoReactionsRouter } from "@/modules/video-reactions/server/procedure";
import { subscriptionsRouter } from "@/modules/subscriptions/server/procedure";
import { commentsRouter } from "@/modules/comments/server/procedure";
export const appRouter = createTRPCRouter({
  studio: studioRouter,
  categories: categoriesRouter,
  videos: videosRouter,
  videoViews: videoViewRouter,
  videoReactions: videoReactionsRouter,
  subscriptions: subscriptionsRouter,
  comments: commentsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
