import nodemailer from "nodemailer";
import { ENV } from "./_core/env";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  travelers?: string;
  days?: string;
  plan?: string;
  message?: string;
}

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

/**
 * 運営者（srilanka.41032@gmail.com）への通知メール
 */
export async function sendOwnerNotification(data: ContactFormData): Promise<void> {
  const transporter = createTransporter();

  const body = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
お名前：${data.name}
メールアドレス：${data.email}
電話番号：${data.phone || "未入力"}
旅行人数：${data.travelers || "未入力"}
旅行日数：${data.days || "未入力"}
ご希望プラン：${data.plan || "未入力"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【お問い合わせ内容】
${data.message || "（内容なし）"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `.trim();

  await transporter.sendMail({
    from: `"SLTCS お問い合わせ" <${process.env.GMAIL_USER}>`,
    to: "srilanka.41032@gmail.com",
    replyTo: data.email,
    subject: `【SLTCS】お問い合わせありがとうございます`,
    text: body,
  });
}

/**
 * お客様への自動返信メール
 */
export async function sendCustomerAutoReply(data: ContactFormData): Promise<void> {
  const transporter = createTransporter();

  const body = `
${data.name}様

この度はスリランカタクシーチャーターサービスにお問い合わせいただき、誠にありがとうございます。

弊社では、すべてのお問い合わせに対し 24時間以内に必ずご返信いたします。

現在いただいた内容を確認し、担当者より改めてご案内いたしますので、今しばらくお待ちくださいませ。

SLTCS カスタマーサポート
  `.trim();

  await transporter.sendMail({
    from: `"SLTCS カスタマーサポート" <${process.env.GMAIL_USER}>`,
    to: data.email,
    subject: "【SLTCS】お問い合わせを受け付けました",
    text: body,
  });
}
