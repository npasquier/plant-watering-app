export default function UserProfile() {
  // userProfile object with new fields
  const userProfile = {
    name: "John Doe",
    bio: "Web Developer | Tech Enthusiast",
    profileImageUrl: "/florist.svg",
    email: "johndoe@example.com",
    city: "New York",
    numberOfPlants: 15,
    weatherMaster: "Moderate",
    cardsPushed: 8,
    favoritePlants: ["Rose", "Tulip", "Orchid"],
    gardeningTipsShared: 5,
    communityContributions: 12,
    achievements: ["Green Thumb", "Plant Whisperer"],
    plantWishlist: ["Lavender", "Sunflower"],
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  };

  return (
    <main className="overflow-hidden">
      <div className="flex flex-col items-center mt-20">
        <div className="container mx-auto p-4">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <div className="text-center mb-6">
              <img
                src={userProfile.profileImageUrl}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto border-4 border-green-500"
              />
              <h1 className="text-3xl font-bold my-2">{userProfile.name}</h1>
              <p className="text-gray-600">{userProfile.bio}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              <ProfileCard
                title="Contact"
                content={`Email: ${userProfile.email}`}
              />
              <ProfileCard
                title="Location"
                content={`City: ${userProfile.city}`}
              />
              <ProfileCard
                title="Plants Owned"
                content={`${userProfile.numberOfPlants} Plants`}
              />
              <ProfileCard
                title="Weather Mastery Level"
                content={userProfile.weatherMaster}
              />
              <ProfileCard
                title="PlantExchange"
                content={`${userProfile.cardsPushed} Cards Pushed`}
              />
              <ProfileCard
                title="Favorite Plants"
                content={userProfile.favoritePlants.join(", ")}
              />
              <ProfileCard
                title="Gardening Tips"
                content={`${userProfile.gardeningTipsShared} Shared`}
              />
              <ProfileCard
                title="Community Contributions"
                content={`${userProfile.communityContributions} Contributions`}
              />
              <ProfileCard
                title="Achievements"
                content={userProfile.achievements.join(", ")}
              />
              <ProfileCard
                title="Plant Wishlist"
                content={userProfile.plantWishlist.join(", ")}
              />
            </div>
            <div className="flex justify-center gap-4 mt-6">
              {/* Social Media Links */}
              {userProfile.social.twitter && (
                <a
                  href={userProfile.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              )}
              {userProfile.social.linkedin && (
                <a
                  href={userProfile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ProfileCard({ title, content }: any) {
  return (
    <div className="bg-slate-50 shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
