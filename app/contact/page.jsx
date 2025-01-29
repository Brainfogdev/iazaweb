"use client";
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
import { LocationMap } from "@/components/LocationMap";

export default function ContactUsPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const contact = []
    contact.push(data)

    localStorage.setItem("contact", JSON.stringify(contact));
  };

  return (
    <div className="mx-20 px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Contact Us</h1>
      <div className="flex gap-10">
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input name="name" id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  name="message"
                  id="message"
                  placeholder="Your message"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              You can also reach us using the following details:
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div>
              <LocationMap />
            </div>
            <div className="flex gap-5">
              <MapPin className="text-muted-foreground" />
              <p>
                205, parinee I, shah industrial estate, near Ghanshyam
                industrial estate, Andheri West, Mumbai 400053
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Mail className="text-muted-foreground" />
              <Link
                href={
                  "https://mail.google.com/mail/?view=cm&fs=1&to=amit.shukla@iaza.in"
                }
              >
                amit.shukla@iaza.in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
