import robotarm from './images/robotarm.mp4';
import phrases from './images/phrases.jpg';
import storyboard from './images/storyboard.jpg';

const data = [
  {
    text: "Story Board, capstone project for CS5610. A web-scale search engine for news, using the News API to present content from a variety of sources. Enables users to create accounts and save articles to view later. Built the UI with React + Redux, and the server and database using Elixir + Phoenix.",
    media: storyboard,
    type: "img",
  },
  {
    text: "Project for EECE 2160. Wrote C++ code to make a robotic arm pick up bottles and throw them at other bottles. Setup required the team to wire the arm to the Zedboard where the code was, and create scripts to fully synchronize the hardware and software.",
    media: robotarm,
    type: "video",
  },
  {
    text: "Phrases with Phriends, project for CS5610. Created an online scrabble board application with support for up to four players. Built the UI with React + Redux, and ran the server using Elixir + Phoenix.",
    media: phrases,
    type: "img",
  }
]

export default data;