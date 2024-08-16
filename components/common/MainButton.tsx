/* eslint-disable react/prop-types */
import { Loader2 } from 'lucide-react';
import { forwardRef, ReactElement } from 'react';
import { Button } from '../ui/button';
import * as React from 'react';

type MainButtonProps = {
  text: string;
  form?: string;
  isLoading?: boolean;
  action?: () => void;
  isSubmitable?: boolean;
  disabled?: boolean;
  width?: 'full_width';
  dataLoadingText?: string;
  variant?: 'primary' | 'secondary';
  classes?: string;
  iconRoute?: string;
  rightIconRoute?: string;
  rightIconClass?: string;
  iconComponent?: ReactElement;
  size?: 'small' | 'normal' | 'large';
};

const getPropWidth = (width: string | undefined): string => {
  if (width === 'full_width') {
    return 'w-full';
  } else if (width) {
    return width;
  } else {
    return 'w-[245px]';
  }
};

const getSizeHeight = (size: 'small' | 'normal' | 'large'): string => {
  if (size === 'normal') {
    return 'h-[71px]';
  } else if (size === 'large') {
    return 'h-[74px]';
  } else {
    return 'h-[71px]';
  }
};

const getVariantHover = (variant: 'primary' | 'secondary'): string => {
  return variant === 'primary'
    ? 'hover:bg-custom-primary'
    : 'hover:bg-secondary';
};

const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(
  (
    {
      text,
      isLoading = false,
      form,
      action,
      disabled = false,
      isSubmitable,
      width,
      dataLoadingText = 'Please wait ...',
      variant = 'primary',
      classes,
      iconRoute,
      rightIconRoute,
      rightIconClass = 'w-[24px] h-[24px]',
      iconComponent,
      size = 'normal',
    },
    ref
  ) => {
    const propWidth = getPropWidth(width);
    const isSecondaryVariant = variant !== 'primary';
    const size_height = getSizeHeight(size);
    const variant_hover = getVariantHover(variant);

    return !isLoading ? (
      <Button
        form={form}
        className={`${
          isSecondaryVariant ? ' text-white  bg-secondary' : 'bg-custom-primary'
        } text-white shadow-xl ${propWidth} md:${propWidth}  select-none rounded-[0px] hover:opacity-90 ${variant_hover} ${size_height} ${classes}`}
        onClick={!disabled ? action : () => undefined}
        type={isSubmitable ? 'submit' : 'button'}
        ref={ref}
        disabled={disabled}
      >
        {iconRoute && (
          <img
            src={iconRoute}
            alt="left button icon"
            className="w-[24px] h-[24px]"
          />
        )}
        {iconRoute && <span>&nbsp;</span>}
        {iconComponent}
        {iconComponent && <span>&nbsp;</span>}
        {text}
        {rightIconRoute && <span>&nbsp;</span>}
        {rightIconRoute && (
          <img
            src={rightIconRoute}
            alt="right button icon"
            className={rightIconClass}
          />
        )}
      </Button>
    ) : (
      <Button
        className={`bg-custom-primary text-white ${propWidth} md:${propWidth} select-none rounded-[0px] cursor-not-allowed ${size_height} ${
          classes ? classes : ''
        }`}
        ref={ref}
        disabled
      >
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        {dataLoadingText}
      </Button>
    );
  }
);

// Assigned display name
MainButton.displayName = 'MainButton';

export default MainButton;
