import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center pt-10 pb-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Yann-ship-it/CSTips"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={25}
            height={25}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://discordapp.com/users/283666199274061824"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/discord.svg"
            alt="Discord icon"
            width={25}
            height={25}
          />
          Discord
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://store.steampowered.com/app/730/CounterStrike_2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/steam.svg"
            alt="Steam icon"
            width={25}
            height={25}
          />
          Steam
        </a>
      </footer>
  )
}

export default Footer