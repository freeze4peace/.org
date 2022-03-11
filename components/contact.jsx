import Cta from "./cta.jsx";
import TelegramLogo from "../images/telegram_logo.png";
import DiscordLogo from "../images/discord_logo.png";
import GithubLogo from "../images/github_logo.png";
import DriveLogo from "../images/drive_logo.png";

export default function Contact() {
  return (
    <main className="px-12 mx-auto py-14 lg:py-0 lg:flex lg:relative max-w-7xl recursive-font">
      {/* <div className="flex items-center justify-between w-full px-4 mx-auto lg:w-1/2"> */}
      <div className="flex items-center mx-auto lg:w-2/3">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <div className="text-3xl ">We will sticker it to the man!</div>
            <div className="text-3xl text-blue-500 ">
              Collective, global, decentralised
            </div>
          </h1>
          <div className="pt-6 space-y-4">
            <p>
              Feel free to join our groups and of cause download and print our
              stickers. Quickly get them in front of as many eyeballs as
              possible.
            </p>
            <p>
              If you cannot find the right sticker, webpage or a social media
              channel in your local language or have a good idea on how to
              improve something, take the initiative. Depending on your skills
              and time, just edit the files, translate something, fix a bug or
              launch a channel.
            </p>
            <p>
              Do not ask for permission, just get in touch to align with the
              collective, to avoid working on the same things in parallel, keep
              a high standard and a cohesive as well as factually true message.
              Let’s not waste any more time and start spread the message to
              “freeze for peace”.
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 space-y-8 lg:py-0 lg:w-1/3">
        <Cta icon={TelegramLogo} texts={["Chat", "Share", "Update"]} />
        <Cta icon={DiscordLogo} texts={["Plan", "Organise", "Communicate"]} />
        <Cta icon={GithubLogo} texts={["Improve", "Extend", "Translate"]} />
        <Cta icon={DriveLogo} texts={["Store", "Download", "Collaborate"]} />
      </div>
      {/* </div> */}
    </main>
  );
}
