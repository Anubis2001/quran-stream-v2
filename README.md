Quran Stream V2

A Node.js-based Quran streaming platform that dynamically serves audio streams from organized reciter directories. The server automatically scans for reciter folders containing M3U8 playlist files and provides a clean web interface for streaming.
📖 Overview

This platform provides a seamless way to stream Quran recitations using HLS (HTTP Live Streaming) technology. The server recursively scans the /quran directory for subfolders, each representing a reciter, and expects a stream.m3u8 file within each folder. The web interface automatically populates with available reciters and uses hls.js for cross-browser HLS playback.
🚀 Features

    Automatic Reciter Detection – Recursively scans the /quran directory for reciter subfolders

    M3U8 Streaming – Streams audio from .m3u8 playlist files

    Clean Web Interface – Responsive player with dynamic reciter selection

    HLS Support – Uses hls.js for reliable playback across modern browsers

    TypeScript Ready – Built with TypeScript for better maintainability

    Zero Database – File-system based organization for simple management


Important Notes:

    Create a /quran folder in the project root

    Each reciter MUST have their own subfolder inside /quran

    Each subfolder MUST contain a file named stream.m3u8

    Reciter names appear in the interface as the folder names (use proper naming conventions)

🛠️ Installation
Prerequisites

    Node.js (v14 or higher)

    npm or yarn

Setup

    Clone the repository:

bash

git clone https://github.com/Anubis2001/quran-stream-v2.git
cd quran-stream-v2

    Install dependencies:

bash

npm install

    Create the reciter folders and add M3U8 files:

bash

mkdir quran
mkdir quran/reciter-name
# Add your stream.m3u8 file to the reciter folder

    Start the server:

bash

npm start

    Access the platform at http://localhost:3000

Development Mode

For development with auto-restart:
bash

npm run dev

🎯 Usage
Adding a New Reciter

    Navigate to the /quran directory

    Create a new folder named after the reciter (e.g., mishary-rashid)

    Place an M3U8 playlist file named stream.m3u8 inside the folder

    Refresh the platform – the new reciter will appear automatically in the dropdown

M3U8 File Format Example
m3u8

#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:10
#EXT-X-MEDIA-SEQUENCE:0
http://your-streaming-server.com/streams/reciter-name/segment1.ts
http://your-streaming-server.com/streams/reciter-name/segment2.ts
#EXT-X-ENDLIST

🔧 Configuration
Server Configuration

Edit server.js to modify:
javascript

const PORT = 3000;              // Server port
const QURAN_DIR = './quran';    // Path to reciter folders

Adding CORS Headers (if needed)

If your M3U8 files reference external streaming servers, uncomment the CORS middleware in server.js:
javascript

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

📡 Supported Streaming Sources

The platform supports M3U8 files from:

    Local streaming servers (NGINX RTMP, Wowza)

    Cloud CDN services (CloudFront, Akamai)

    External HLS streams

    Any valid HLS audio stream

🐛 Troubleshooting
Reciter Not Showing

    Verify folder exists in /quran

    Confirm stream.m3u8 file is present

    Check folder permissions (readable by Node.js process)

    Restart the server after adding new reciters

Player Not Loading

    Ensure M3U8 URL is accessible from the client

    Check browser console for CORS errors

    Verify hls.js is loaded (check Network tab)

    Test with a different browser

Audio Not Playing

    Confirm M3U8 file contains valid segment URLs

    Test M3U8 file with a standalone HLS player (e.g., VLC)

    Check if the streaming server supports range requests

    Verify the M3U8 file is served with correct MIME type (application/vnd.apple.mpegurl)

Server Errors

    Ensure no other process is using port 3000

    Check Node.js version (v14+ required)

    Run npm install again to verify dependencies

🏗️ Technology Stack

    Backend: Node.js, Express

    Frontend: HTML5, CSS3, JavaScript

    Video Player: hls.js (for HLS playback)

    Language: Nodejs (backend)

    Build Tools: npm
    

📝 License

This project is open source. See the LICENSE file for details (if not present, contact the repository owner).
🤝 Contributing

وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا وَقَالَ إِنَّنِي مِنَ الْمُسْلِمِينَ

Contributions are welcome! To contribute:

    Fork the repository

    Create a feature branch (git checkout -b feature/amazing-feature)

    Commit your changes (git commit -m 'Add some amazing feature')

    Push to the branch (git push origin feature/amazing-feature)

    Open a Pull Request

📧 Contact

For issues or questions:

    Open an issue on GitHub

    Contact repository owner: Anubis2001
