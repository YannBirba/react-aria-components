import { useEffect, useState } from "react";
import { type ButtonRenderProps } from "react-aria-components";
import { BrandButton } from "./components/BrandButton";
import { BrandTextField } from "./components/BrandTextField";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [time, setTime] = useState(0);
  const [info, setInfo] = useState<string | undefined>(undefined);
  const [rootFontSize, setRootFontSize] = useState("1em");
  const [showTest, setShowTest] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--root-font-size",
      rootFontSize
    );
  }, [rootFontSize]);

  const fakeLoading = (e: any) => {
    setIsLoading(true);
    const time = setTimeout(() => {
      setIsLoading(false);
      setInfo("Loaded ✅");
      setTimeout(() => {
        setInfo(undefined);
      }, 1000);
    }, 1500);
    setTime(time);
  };

  const cancelLoading = (e: any) => {
    clearTimeout(time);
    setIsLoading(false);
    setInfo("Cancelled ❎");
    setTimeout(() => {
      setInfo(undefined);
    }, 1000);
  };

  const renderChildren = (props: ButtonRenderProps) => {
    console.log(props);
    if (props.isDisabled) return "Disabled";
    if (props.isPressed) return "Pressed";
    if (props.isHovered) return "Hovered";
    if (props.isFocused) return "Focused";
    if (props.isFocusVisible) return "Focus visible";
    return (
      <>
        Default <span>😊</span>
      </>
    );
  };

  return (
    <div className="App">
      <BrandTextField
        label="Font size"
        name="font-size"
        type="text"
        value={rootFontSize}
        onChange={(e) => setRootFontSize(e.target.value)}
      />
      <div className="buttons">
        <BrandButton
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          onPress={fakeLoading}
          info={info || undefined}
          children={renderChildren}
          style={{ minWidth: "5.25em" }}
        />
        <BrandButton
          className="muted"
          isDisabled={!isLoading}
          onPress={cancelLoading}
          style={{ minWidth: "4em" }}
        >
          Cancel
        </BrandButton>
      </div>
    </div>
  );
}

export default App;
