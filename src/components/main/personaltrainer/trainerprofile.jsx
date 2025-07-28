import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useLocation } from "react-router";

export default function TrainerProfile() {
  const location = useLocation();
  const trainer = location.state?.trainer;
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <div className="container flex gap-5  mx-auto">
        <Card className="p-6 flex-1/3">
          <div className="flex flex-col md:flex-row items-center gap-6 p-4">
            <div className="flex flex-col items-center p-4">
              <img
                src="/trainer-profile.jpg"
                alt="Trainer"
                width={160}
                height={160}
                className="rounded-xl object-cover shadow-md"
              />
              <h2 className="text-xl font-semibold mt-4">{trainer.name}</h2>
              <p className="text-gray-500">Tunbridge Wells, Kent</p>
              <Button className="mt-4">Contact Me</Button>
            </div>

            <div className="grid gap-4 flex-1 p-4">
              <CardContent className="bg-muted rounded-xl p-4">
                <h3 className="font-semibold text-lg mb-1">
                  What Can I Do For You?
                </h3>
                <p className="text-sm text-muted-foreground">
                  This information will be added by the PT soon
                </p>
              </CardContent>

              <CardContent className="bg-muted rounded-xl p-4">
                <h3 className="font-semibold text-lg mb-1">
                  What Are My Qualifications?
                </h3>
                <p className="text-sm text-muted-foreground">
                  This information will be added by the PT soon
                </p>
              </CardContent>

              <CardContent className="bg-muted rounded-xl p-4">
                <h3 className="font-semibold text-lg mb-1">
                  What Training Do I Specialise In?
                </h3>
                <p className="text-sm text-muted-foreground">
                  This information will be added by the PT soon
                </p>
              </CardContent>
              <CardContent className="bg-muted rounded-xl p-4">
                <h3 className="font-semibold text-lg mb-1">
                  What Are My Charges?
                </h3>
                <p className="text-sm text-muted-foreground">
                  This information will be added by the PT soon
                </p>
              </CardContent>

              {/* <CardContent className="bg-muted rounded-xl flex items-center gap-3 p-4">
                <Instagram className="text-pink-500" />
                <span className="text-sm text-muted-foreground">
                  This information will be added by the PT soon
                </span>
              </CardContent>

              <CardContent className="bg-muted rounded-xl flex items-center gap-3 p-4">
                <Youtube className="text-red-500" />
                <span className="text-sm text-muted-foreground">
                  This information will be added by the PT soon
                </span>
              </CardContent> */}
            </div>
          </div>

          {/* <Separator className="my-6" /> */}

          {/* <div className="grid md:grid-cols-2 gap-4 p-4">
            <CardContent className="bg-muted rounded-xl p-4">
              <h3 className="font-semibold text-lg mb-1">Location</h3>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-1" />
                <span>
                  PureGym Tunbridge Wells
                  <br />
                  Market Square, Royal Victoria Place
                  <br />
                  Tunbridge Wells, Kent TN1 2SW
                  <br />
                  United Kingdom
                </span>
              </div>
            </CardContent>

            <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden">
           
              <iframe
                className="w-full h-full"
                frameBorder="0"
                src="https://maps.google.com/maps?q=PureGym%20Tunbridge%20Wells&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div> */}

          {/* <div className="grid md:grid-cols-3 gap-4 mt-6 p-4">
            <CardContent className="bg-muted rounded-xl p-4">
              <h3 className="font-semibold text-lg mb-1">Google Reviews</h3>
              <p className="text-sm text-muted-foreground">
                This information will be added by the PT soon
              </p>
            </CardContent>

            <CardContent className="bg-muted rounded-xl p-4">
              <h3 className="font-semibold text-lg mb-1">Get Social</h3>
              <p className="text-sm text-muted-foreground">
                This information will be added by the PT soon
              </p>
            </CardContent>

            <CardContent className="bg-muted rounded-xl flex items-center justify-between p-4">
              <h3 className="font-semibold text-lg">Share</h3>
              <Share2 className="text-blue-500" />
            </CardContent>
          </div> */}
        </Card>
        <Card className="p-6 flex-1">
          <div className="flex flex-col md:flex-row items-center gap-6 p-4">
            <div className="flex-1">
              {/* <h2 className="text-xl font-semibold mb-4">Contact Form</h2> */}
              <form className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <Input type="text" placeholder="Your Name" className="w-full" />
                <label className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="w-full"
                />
                <label className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <Input
                  as="textarea"
                  placeholder="Your Message"
                  className="w-full h-32"
                />
                <label className="block text-sm font-medium text-gray-700">
                  Your Telephone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Your Telephone Number"
                  className="w-full"
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
