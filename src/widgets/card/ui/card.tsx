import { cn } from '@/shared/lib/utils';
import { MenuIcon } from '@/shared/icons/MenuIcon';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface CardProps {
  title: string;
  img?: string | StaticImport;
  imgPosition?: 'left' | 'top' | 'bottom' | undefined;
  counter?: number | string;
}

export const Card = ({ title, img, imgPosition, counter }: CardProps) => {
  const textEndRef = useRef(null);
  const countRef = useRef(null);
  const [overlayText, setOverlayText] = useState(false);

  useEffect(() => {
    const textElement = textEndRef.current;
    const countElement = countRef.current;
    if (textElement && countElement) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const rectText = textElement.getBoundingClientRect();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const rectCount = countElement.getBoundingClientRect();

      if (
        rectText.x + 10 >= rectCount.x &&
        counter &&
        getImgPosition() !== 'bottom' &&
        (getImgPosition() !== 'left' ||
          (getImgPosition() === 'left' && title.length > 40))
      ) {
        setOverlayText(true);
      } else {
        setOverlayText(false);
      }
    }
  }, [title, counter, imgPosition]);

  const getImgPosition = useCallback(():
    | 'left'
    | 'top'
    | 'bottom'
    | undefined => {
    if (imgPosition) {
      return imgPosition;
    }
    return undefined;
  }, [imgPosition]);

  return (
    <div
      className={cn(
        'relative',
        'w-[345px] min-h-[68px] p-4 overflow-hidden',
        'shadow-[0_0_8px_#0000001A] rounded-[25px]',
        'flex gap-2',
        !getImgPosition() && 'flex-row items-center',
        getImgPosition() === 'left' && 'flex-row items-center',
        getImgPosition() === 'top' && 'flex-col',
        getImgPosition() === 'bottom' && 'flex-col-reverse',
      )}
    >
      {img && imgPosition && (
        <div
          className={cn(
            (getImgPosition() === 'top' || getImgPosition() === 'bottom') &&
              'h-[calc(180px-16px)]',
          )}
        >
          <div
            className={cn(
              'overflow-hidden',
              getImgPosition() === 'left' &&
                'w-[58px] h-full min-h-[58px] relative',
              getImgPosition() === 'top' &&
                'w-full h-[180px] absolute top-0 left-0 p-px',
              getImgPosition() === 'bottom' &&
                'w-full h-[calc(180px-16px)] absolute bottom-0 left-0 p-px',
            )}
          >
            <div
              className={cn(
                'overflow-hidden',
                getImgPosition() === 'left' &&
                  'min-w-[58px] w-[58px] h-[58px] rounded-[13px] top-0',
                getImgPosition() === 'top' &&
                  'w-full h-full rounded-b-[5px] rounded-t-[24px]',
                getImgPosition() === 'bottom' &&
                  'w-full h-full rounded-b-[24px] rounded-t-[5px]',
              )}
            >
              <Image
                src={img}
                alt={'123'}
                width={1000}
                height={1000}
                quality={90}
                className={cn('object-cover')}
              />
            </div>
          </div>
        </div>
      )}
      <div
        className={
          'flex-1 break-all text-[#3B4552] font-[Urbanist] tracking-[0px] font-normal text-[14px] leading-[140%]'
        }
      >
        {title ? (
          <span>{title}</span>
        ) : (
          <span className={'text-gray-400'}>Some text</span>
        )}

        {counter && (
          <>
            <span ref={textEndRef} className={'opacity-0 w-[100px]'}>
              1
            </span>
            <span className={'opacity-0 px-3'}>
              {overlayText ? counter : ''}
            </span>
          </>
        )}
      </div>
      <div
        className={cn(
          'flex flex-col items-center',
          'absolute right-4 top-0 h-full w-5',
          'pb-[10px]',
        )}
      >
        <div
          className={cn(
            'py-2 cursor-pointer relative',
            getImgPosition() === 'top' &&
              'bg-[#8585854D] py-[10px] px-[6px] rounded-[11px] w-[28px] h-[26px] my-3 backdrop-blur-sm',
          )}
        >
          <MenuIcon fill={getImgPosition() === 'top' ? '#FFFFFF' : '#B4B4B4'} />
        </div>

        <div className={'flex-1'} />

        {counter && counter != '0' && (
          <div
            ref={countRef}
            className={cn(
              'absolute bottom-[10px] right-0',
              'w-fit min-w-[22px] h-[22px] pointer-events-none',
              'flex items-center justify-center',
              'text-[#B4B4B4] text-[12px] font-[Urbanist]',
              `${counter}`.length > 1 && 'px-[8px]',
              getImgPosition() === 'bottom' &&
                'bg-[#3F3F3F66] border-none backdrop-blur-md text-white',
              typeof counter === 'number' &&
                'border-[0.5px] border-[#B4B4B488] rounded-full',
              typeof counter === 'string' &&
                cn(
                  'border-none rounded-full text-white',
                  'bg-linear-to-tr from-[#068DFB] to-[#3FCCFF] bg-liner-[90]',
                  'drop-shadow-[0_0_5px_#149DFF36]',
                ),
            )}
          >
            {counter}
          </div>
        )}
      </div>
    </div>
  );
};
