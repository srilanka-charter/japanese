import { describe, expect, it, vi, beforeEach } from "vitest";

// nodemailerをモック
vi.mock("nodemailer", () => {
  const sendMailMock = vi.fn().mockResolvedValue({ messageId: "test-id" });
  const createTransportMock = vi.fn().mockReturnValue({
    sendMail: sendMailMock,
  });
  return {
    default: {
      createTransport: createTransportMock,
    },
    __sendMailMock: sendMailMock,
    __createTransportMock: createTransportMock,
  };
});

import nodemailer from "nodemailer";
import { sendOwnerNotification, sendCustomerAutoReply } from "./mailer";

const mockTransporter = {
  sendMail: vi.fn().mockResolvedValue({ messageId: "test-id" }),
};

beforeEach(() => {
  vi.mocked(nodemailer.createTransport).mockReturnValue(mockTransporter as any);
  mockTransporter.sendMail.mockClear();
  process.env.GMAIL_USER = "test@gmail.com";
  process.env.GMAIL_APP_PASSWORD = "test-password";
});

describe("sendOwnerNotification", () => {
  it("運営者へのメールを送信する", async () => {
    await sendOwnerNotification({
      name: "テスト太郎",
      email: "test@example.com",
      phone: "090-1234-5678",
      travelers: "大人2名・子供0名",
      days: "2025-10-01 〜 2025-10-05",
      plan: "セダン（〜3名）",
      message: "シーギリヤに行きたいです",
    });

    expect(mockTransporter.sendMail).toHaveBeenCalledOnce();
    const callArgs = mockTransporter.sendMail.mock.calls[0][0];
    expect(callArgs.to).toBe("srilanka.41032@gmail.com, contact@gohellolanka.com");
    expect(callArgs.subject).toContain("テスト太郎");
    expect(callArgs.text).toContain("テスト太郎");
    expect(callArgs.text).toContain("test@example.com");
  });
});

describe("sendCustomerAutoReply", () => {
  it("顧客への自動返信メールを送信する", async () => {
    await sendCustomerAutoReply({
      name: "テスト太郎",
      email: "customer@example.com",
    });

    expect(mockTransporter.sendMail).toHaveBeenCalledOnce();
    const callArgs = mockTransporter.sendMail.mock.calls[0][0];
    expect(callArgs.to).toBe("customer@example.com");
    expect(callArgs.text).toContain("テスト太郎");
    expect(callArgs.text).toContain("24時間以内");
    expect(callArgs.text).toContain("SLTCS カスタマーサポート");
  });
});
