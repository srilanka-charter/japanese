import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { sendOwnerNotification, sendCustomerAutoReply } from "./mailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  travelers: z.string().optional(),
  days: z.string().optional(),
  plan: z.string().optional(),
  message: z.string().optional(),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    send: publicProcedure
      .input(contactSchema)
      .mutation(async ({ input }) => {
        try {
          // 運営者への通知と顧客への自動返信を並行送信
          await Promise.all([
            sendOwnerNotification(input),
            sendCustomerAutoReply(input),
          ]);
          return { success: true };
        } catch (error) {
          console.error("[Contact] Failed to send email:", error);
          throw new Error("メールの送信に失敗しました。しばらくしてから再度お試しください。");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
