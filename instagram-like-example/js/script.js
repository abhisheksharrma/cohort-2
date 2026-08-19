

// code start here

// reels data
const reels = [
  {
    id: 1,
    username: "jane_smith",
    profileImage: "https://images.pexels.com/photos/15851478/pexels-photo-15851478.jpeg",
    video: "https://cdn.pixabay.com/video/2021/01/28/63229-506616446_large.mp4",
    caption: "Beautiful evening 🌅",
    likes: 1200,
    comments: 85,
    shares: 32,
    liked: false,
    follow: true
  },
  {
    id: 2,
    username: "john_doe",
    profileImage: "https://images.pexels.com/photos/3778602/pexels-photo-3778602.jpeg",
    video: "https://cdn.pixabay.com/video/2021/01/28/63229-506616446_large.mp4",
    caption: "Weekend vibes ✨",
    likes: 2500,
    comments: 120,
    shares: 65,
    liked: false,
    follow: false
  },
  {
    id: 3,
    username: "travel_world",
    profileImage: "https://images.pexels.com/photos/3837268/pexels-photo-3837268.jpeg",
    video: "https://cdn.pixabay.com/video/2021/01/28/63229-506616446_large.mp4",
    caption: "Exploring new places 🌍",
    likes: 5400,
    comments: 230,
    shares: 120,
    liked: false,
    follow: true
  },
  {
    id: 4,
    username: "alex_walker",
    profileImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    video: "https://www.pexels.com/download/video/32848584/",
    caption: "Chasing sunsets 🌇",
    likes: 3200,
    comments: 145,
    shares: 78,
    liked: false,
    follow: false
  },
  {
    id: 5,
    username: "sarah_jones",
    profileImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    video: "https://www.pexels.com/download/video/4974760/",
    caption: "Little moments, big memories 💫",
    likes: 4100,
    comments: 190,
    shares: 95,
    liked: false,
    follow: true
  },
  {
    id: 6,
    username: "nature_lover",
    profileImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    video: "https://www.pexels.com/download/video/27440764/",
    caption: "Lost in nature 🌿",
    likes: 6800,
    comments: 310,
    shares: 156,
    liked: false,
    follow: true
  },
  {
    id: 7,
    username: "mike_adventures",
    profileImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    video: "https://www.pexels.com/download/video/38810431/",
    caption: "Adventure awaits 🚀",
    likes: 2750,
    comments: 98,
    shares: 54,
    liked: false,
    follow: false
  },
  {
    id: 8,
    username: "emily_rose",
    profileImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    video: "https://www.pexels.com/download/video/36072910/",
    caption: "Good vibes only ☀️",
    likes: 3600,
    comments: 175,
    shares: 82,
    liked: false,
    follow: false
  },
  {
    id: 9,
    username: "city_lights",
    profileImage: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    video: "https://www.pexels.com/download/video/38026716/",
    caption: "City nights hit different 🌃",
    likes: 5900,
    comments: 260,
    shares: 135,
    liked: false,
    follow: true
  },
  {
    id: 10,
    username: "lifestyle_daily",
    profileImage: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    video: "https://www.pexels.com/download/video/38730823/",
    caption: "Making every day count ❤️",
    likes: 4700,
    comments: 205,
    shares: 110,
    liked: false,
    follow: true
  }
];
// all variables
const reelsContainer = document.querySelector(".reels");

reels.forEach((reel) => {
    const singleReel = document.createElement("div");
    singleReel.classList.add("reel");
    singleReel.innerHTML = `
        <div class="video_wrapper">
            <video src="${reel.video}" class="reel_video" loop muted playsinline ></video>
        </div>
        <div class="overlay">
            <button class="sound_btn">
                <svg class="unmute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                    <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                </svg>
                <svg class="mute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
                </svg>

            </button>
            <div class="user_info">
                <div class="user">
                    <img src="${reel.profileImage}" alt="" />
                    <div class="user_name">@${reel.username}</div>
                    <button class="follow_btn">Follow</button>
                </div>
                <p>${reel.caption}</p>
            </div>
            <div class="actions">
                <button class="like_btn">
                    <svg class="like-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"  />
                    </svg>
                    <div class="count">${reel.likes}</div>
                </button>
                <button class="comment_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                        <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clip-rule="evenodd" />
                    </svg>
                    <div class="count">${reel.comments}</div>
                </button>
                <button class="share_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                        <path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd" />
                    </svg>
                    <div class="count">${reel.shares}</div>
                </button>
            </div>
        </div>
        <div class="big_heart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                <path d="M12 21s-7.5-4.35-9.5-9.1C.7 7.6 3.1 3 7.3 3c2.1 0 3.7 1.2 4.7 2.7C13 4.2 14.6 3 16.7 3c4.2 0 6.6 4.6 4.8 8.9C19.5 16.65 12 21 12 21Z" />
            </svg>
        </div>
    `;
    reelsContainer.append(singleReel);


    const soundButton = singleReel.querySelector(".sound_btn");
    const reelVideo = singleReel.querySelector(".reel_video");
    soundButton.addEventListener("click", (event) => {
        event.stopPropagation();
        if(reelVideo.muted) {
            reelVideo.muted = false;
            soundButton.classList.add("mute");
        } else {
            reelVideo.muted = true;
            soundButton.classList.remove("mute");
        }
    });
    singleReel.addEventListener("click", (event) => {
        if(event.target.closest(".actions") || event.target.closest(".user_info")) {
            return
        }
        const reelVideo = singleReel.querySelector(".reel_video");
        if (reelVideo.paused) {
            reelVideo.play();
        } else {
            reelVideo.pause();
        }
    });


});

const likeButtons = document.querySelectorAll(".like_btn");
likeButtons.forEach((button, index) => {
    // console.log(reels[index])
    const count = button.querySelector(".count");
    button.addEventListener("click", () => {
        reels[index].liked = !reels[index].liked;
        if (reels[index].liked) {
            reels[index].likes++;
            button.classList.add("active");
        } else {
            reels[index].likes--;
            button.classList.remove("active");
        }
        count.textContent = reels[index].likes;
    })
});


const userInfo = document.querySelectorAll(".user_info");
userInfo.forEach((user, index) => {
    const followBtn = user.querySelector(".follow_btn");
    followBtn.addEventListener("click", () => {
        // followBtn.classList.contains("active")
        if (!followBtn.classList.contains("active")) {
            followBtn.classList.add("active");
            followBtn.textContent = "Following";
        } else {
            followBtn.classList.remove("active");
            followBtn.textContent = "Follow";
        }
        
    })
});
