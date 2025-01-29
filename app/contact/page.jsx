import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <div className="mx-20 px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="">

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              You can also reach us using the following details:
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex gap-5">
              <MapPin className="text-muted-foreground" />
              <p>
                205, parinee I, shah industrial estate, near Ghanshyam
                industrial estate, Andheri West, Mumbai 400053
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Mail className="text-muted-foreground" />
              <Link href={"https://mail.google.com/mail/?view=cm&fs=1&to=amit.shukla@iaza.in"}>amit.shukla@iaza.in</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
