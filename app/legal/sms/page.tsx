import type { Metadata } from "next";
import LegalDocumentPage from "@/components/legal/legal-document-page";
import { getLegalDocument } from "@/lib/legal-documents";

const document = getLegalDocument("sms-messaging");

export const metadata: Metadata = {
  title: `${document.title} | The Mechanical Vision Corporation`,
  description: document.summary,
};

export default function SmsPage() {
  return <LegalDocumentPage slug="sms-messaging" />;
}
