import { motion, AnimatePresence } from "framer-motion";
import { useId } from "react-aria";
import { Button, ButtonProps } from "react-aria-components";

type BrandButtonProps = {
  isLoading?: boolean;
  setIsLoading?: (isLoading: boolean) => void;
  info?: string;
} & ButtonProps;

export const BrandButton = ({
  isLoading,
  setIsLoading,
  info,
  children,
  isDisabled,
  ...props
}: BrandButtonProps) => {
  /* select the current element in the dom and store his id in a state */

  const id = useId(props.id);

  return (
    <Button
      {...props}
      isDisabled={isDisabled || isLoading}
      data-loading={isLoading || undefined}
      data-info={info || undefined}
      className={`react-aria-Button${
        props.className ? " " + props.className : ""
      }`}
      id={id}
    >
      {(renderProps) => (
        <AnimatePresence>
          {isLoading && !info && (
            <motion.svg
              width="16"
              height="17"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="spinner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={id + "-spinner"}
            >
              <path
                d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
                stroke="#333"
              />
            </motion.svg>
          )}
          {!isLoading && info && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="info"
              key={id + "-info"}
            >
              {info}
            </motion.span>
          )}
          <span className="label">
            {typeof children === "function"
              ? children(renderProps)
              : renderProps.isDisabled
              ? "Disabled"
              : children}
          </span>
        </AnimatePresence>
      )}
    </Button>
  );
};
