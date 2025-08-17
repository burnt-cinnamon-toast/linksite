const PROFILE = {
  avatar: "https://avatars.githubusercontent.com/u/1039731610?v=4", // Your avatar image
  name: "Burnt Cinnamon Toast",                                     // Display name
  bio: "Web developer & coffee enthusiast.",                        // Subtext/bio
  links: [
    { title: "GitHub", url: "https://github.com/burnt-cinnamon-toast", emoji: "🐙" },
    { title: "Twitter", url: "https://twitter.com/", emoji: "🐦" },
    { title: "Personal Site", url: "https://yourwebsite.com", emoji: "🌐" },
    { title: "Blog", url: "https://blog.yourwebsite.com", emoji: "📝" }
  ]
};

function renderHTML(profile) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>${profile.name} | Links</title>
  <style>
    body {
      background: linear-gradient(135deg, #f7ca72 0%, #f7a072 100%);
      font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
      margin: 0; padding: 0;
      min-height: 100vh;
      display: flex; flex-direction: column; align-items: center;
    }
    .container { max-width: 400px; width: 90%; margin: 40px auto; text-align: center; }
    .avatar {
      width: 120px; height: 120px; border-radius: 50%; object-fit: cover;
      border: 3px solid #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      margin-bottom: 20px;
    }
    h1 { font-size: 2em; margin: 0 0 10px 0; font-weight: 700; color: #5a3d1c;}
    .bio { color: #6c4f2d; font-size: 1.1em; margin-bottom: 28px; }
    .links { display: flex; flex-direction: column; gap: 16px; }
    .link {
      display: flex; align-items: center; justify-content: center;
      background: #fff; color: #5a3d1c; text-decoration: none;
      font-size: 1.1em; font-weight: 500; padding: 14px 0;
      border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.1s, box-shadow 0.1s;
    }
    .link:hover {
      transform: translateY(-2px) scale(1.03);
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      background: #f7ca72;
    }
    .emoji { margin-right: 10px; font-size: 1.25em; }
    @media (max-width: 500px) {
      .container { max-width: 99vw; }
      .avatar { width: 90px; height: 90px;}
    }
  </style>
</head>
<body>
  <div class="container">
    <img class="avatar" src="${profile.avatar}" alt="${profile.name}'s avatar"/>
    <h1>${profile.name}</h1>
    <div class="bio">${profile.bio}</div>
    <div class="links">
      ${profile.links.map(link => `
        <a class="link" href="${link.url}" target="_blank" rel="noopener">
          <span class="emoji">${link.emoji || ""}</span> ${link.title}
        </a>
      `).join("")}
    </div>
  </div>
</body>
</html>
  `;
}

export default {
  async fetch(request) {
    return new Response(renderHTML(PROFILE), {
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
};
