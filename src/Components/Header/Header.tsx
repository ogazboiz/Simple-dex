import { HeaderStyle, LogoStyle } from "../../Styles/Header";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      {/* <ConnectButton /> */}
      <ConnectButton
        accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
        }}
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
      />
    </HeaderStyle>
  );
};

export const Logo = () => {
  return (
    <LogoStyle>
      <div className="img">
        <img src="/uniswap.svg" alt="uniswap logo" className="" />
      </div>
      <h3>Uniswap</h3>
    </LogoStyle>
  );
};

// export const ConnectButton = () => {
//   return <ConnectButtonStyle>Connect</ConnectButtonStyle>;
// };
