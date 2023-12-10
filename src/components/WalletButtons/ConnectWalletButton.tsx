import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type connectWalletParam = {
  msg: string;
};

export default function ConnectWalletButton({ msg }: connectWalletParam) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("THis is from the dashboard of Campaign");

  //   if (isConnected && isClicked) {
  //     navigate("/dashboard");
  //   } else {
  //     navigate("/");
  //     setIsClicked(false);
  //   }
  // }, [isConnected]);

  return (
    <div>
      <button
        className=" border-2 border-gray-800 bg-gray-950  hover:border-gray-850 hover:bg-gray-800 text-white px-2 py-2 rounded-lg text-lg font-semibold tracking-wide "
        onClick={async () => {
          setIsClicked(true);
          open();
        }}
      >
        {msg}
      </button>
    </div>
  );
}
