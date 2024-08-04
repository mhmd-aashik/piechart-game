import { Cherry } from "lucide-react";
import Image from "next/image";
import React from "react";

const Players = () => {
  return (
    <>
      <div className="p-5">
        <h3 className="text-l font-bold uppercase">Players</h3>
      </div>
      <div className="flex flex-col gap-2">
        {/* <Player />
        <PlayerB />
        <PlayerB />
        <PlayerB />
        <PlayerB /> */}
      </div>
    </>
  );
};

function Player() {
  return (
    <div className="flex items-center justify-between rounded-md bg-blue-500 p-2 px-5">
      <Image
        alt="player"
        src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
        width={50}
        height={50}
        className="rounded-full"
      />
      <h3>Ranga</h3>
      <div className="flex flex-col items-end justify-end">
        <h4 className="text-l font-bold">45%</h4>
        <h4 className="flex items-center gap-1">
          <Cherry className="h-6 w-6 text-red-600" />
          0.09
        </h4>
      </div>
    </div>
  );
}

function PlayerB() {
  return (
    <div className="flex items-center justify-between rounded-md bg-slate-500 p-2 px-5">
      <Image
        alt="player"
        src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
        width={50}
        height={50}
        className="rounded-full"
      />
      <h3>Ranga</h3>
      <div className="flex flex-col items-end justify-end">
        <h4 className="text-l font-bold">45%</h4>
        <h4 className="flex items-center gap-1">
          <Cherry className="h-4 w-4 text-red-600" />
          0.09
        </h4>
      </div>
    </div>
  );
}

export default Players;
