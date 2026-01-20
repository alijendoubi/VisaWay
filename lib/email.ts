import sgMail from "@sendgrid/mail";

const apiKey = process.env.SENDGRID_API_KEY;
const fromEmail = process.env.SENDGRID_FROM_EMAIL;

if (!apiKey || !fromEmail) {
  throw new Error("Missing SENDGRID_API_KEY or SENDGRID_FROM_EMAIL");
}

sgMail.setApiKey(apiKey);

export type EmailTemplate = "confirmation" | "reminder" | "followup";

const templateMap: Record<EmailTemplate, string | undefined> = {
  confirmation: process.env.SENDGRID_CONFIRM_TEMPLATE_ID,
  reminder: process.env.SENDGRID_REMINDER_TEMPLATE_ID,
  followup: process.env.SENDGRID_FOLLOWUP_TEMPLATE_ID
};

export const sendTemplateEmail = async ({
  to,
  template,
  data
}: {
  to: string;
  template: EmailTemplate;
  data: Record<string, string>;
}) => {
  const templateId = templateMap[template];
  if (!templateId) {
    throw new Error(`Missing template ID for ${template}`);
  }

  await sgMail.send({
    to,
    from: fromEmail,
    templateId,
    dynamicTemplateData: data
  });
};
