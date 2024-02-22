"use client";

import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function UserProfile() {

    
const { data: session } = useSession();
  

  const searchParams = useSearchParams();
    
    // Placeholder data - you can replace this with real data
    const userProfile = {
      name: session!.user!.name,
      bio: "Web Developer | Tech Enthusiast",
      profileImageUrl: "/florist.svg", // replace with actual image path
      email: "johndoe@example.com",
      social: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
        // Add other social links if needed
      }
    };

    
  
    return (
      <main className="overflow-hidden">
        <div className="flex flex-col items-center mt-20">
          <div className="container mx-auto p-8">
            <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
              <div className="text-center">
                <img
                  src={userProfile.profileImageUrl}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mx-auto"
                />
                <h1 className="text-3xl font-bold mb-2">{userProfile.name}</h1>
                <p className="text-gray-600 mb-4">{userProfile.bio}</p>
                <p className="text-gray-600 mb-4">Email: {userProfile.email}</p>
                <div className="flex justify-center gap-4">
                  {/* Social Media Links */}
                  {userProfile.social.twitter && (
                    <a href={userProfile.social.twitter} target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  )}
                  {userProfile.social.linkedin && (
                    <a href={userProfile.social.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  )}
                  {/* Add more social icons as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }