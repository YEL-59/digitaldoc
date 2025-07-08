import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MapPin, Instagram, Youtube, Share2 } from "lucide-react";

export default function TrainerProfile() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <Card className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6 p-4">
            <div className="flex flex-col items-center p-4">
              <img
                src="/trainer-profile.jpg"
                alt="Trainer"
                width={160}
                height={160}
                className="rounded-xl object-cover shadow-md"
              />
              <h2 className="text-xl font-semibold mt-4">Liam Dewhurst</h2>
              <p className="text-gray-500">Tunbridge Wells, Kent</p>
              <Button className="mt-4">Contact Me</Button>
            </div>

            <div className="grid gap-4 flex-1 p-4">
              <CardContent className="bg-muted rounded-xl p-4">
                <h3 className="font-semibold text-lg mb-1">Trainer Bio</h3>
                <p className="text-sm text-muted-foreground">
                  This information will be added by the PT soon
                </p>
              </CardContent>

              <CardContent className="bg-muted rounded-xl p-4">
                <h3 className="font-semibold text-lg mb-1">
                  Educational Timeline
                </h3>
                <p className="text-sm text-muted-foreground">
                  This information will be added by the PT soon
                </p>
              </CardContent>

              <CardContent className="bg-muted rounded-xl p-4">
                <h3 className="font-semibold text-lg mb-1">Trainer Gallery</h3>
                <p className="text-sm text-muted-foreground">
                  This information will be added by the PT soon
                </p>
              </CardContent>

              <CardContent className="bg-muted rounded-xl flex items-center gap-3 p-4">
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
              </CardContent>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="grid md:grid-cols-2 gap-4 p-4">
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
              {/* Replace this with real map embed if needed */}
              <iframe
                className="w-full h-full"
                frameBorder="0"
                src="https://maps.google.com/maps?q=PureGym%20Tunbridge%20Wells&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6 p-4">
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
          </div>
        </Card>
      </div>
    </div>
  );
}
