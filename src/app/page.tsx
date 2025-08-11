'use client';

import { Card } from '@/widgets/card';
import { ChangeEvent, useState } from 'react';

export default function Home() {
  const [text, setText] = useState('Some text');
  const [counter, setCounter] = useState<number | string>('');

  const handleInputText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleInputCounter = (event: ChangeEvent<HTMLInputElement>) => {
    if (
      Number(event.target.value) &&
      event.target.value.length > 0 &&
      event.target.value[0] != '+'
    ) {
      setCounter(Number(event.target.value));
    } else {
      setCounter(event.target.value);
    }
  };

  return (
    <div className={'flex flex-col items-center gap-10 p-10'}>
      <div className={'flex flex-col gap-10 w-fit'}>
        <div className={'flex flex-row gap-4'}>
          <input
            value={text}
            onChange={handleInputText}
            placeholder={'Some text'}
            className={'shadow h-[48px] p-4 rounded-2xl flex-1'}
          />

          <input
            value={counter}
            onChange={handleInputCounter}
            placeholder={'Counter'}
            className={'shadow h-[48px] p-4 rounded-2xl'}
          />
        </div>

        <div className={'flex flex-row gap-10 w-fit'}>
          <div className={'flex flex-col gap-4'}>
            <Card title={text} counter={counter} />
            <Card
              title={"Drinking water isn't just about quenching "}
              counter={1}
            />
            <Card
              title={
                "Drinking water isn't just about quenching your thirst. It plays a crucial role in about quenching bbbbbb "
              }
              counter={100}
            />
            <Card
              title={
                "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your "
              }
              counter={'+10'}
            />
            <Card
              title={
                "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your body, and staying properly hydrated is vital "
              }
            />
          </div>

          <div className={'flex flex-col gap-4'}>
            <Card
              title={text}
              img={'./img1.jpg'}
              imgPosition={'left'}
              counter={counter}
            />

            <Card
              title={'quenching your thirst. It plays a cru'}
              img={'./img1.jpg'}
              imgPosition={'left'}
              counter={10}
            />
            <Card
              title={
                "Drinking water isn't just about quenching your thirst. It plays a cru bbb"
              }
              img={'./img1.jpg'}
              imgPosition={'left'}
              counter={10}
            />
            <Card
              title={
                "Drinking water isn't just about quenching your thirst. It plays a crucial role in  in maintaining the a bbbbbbbbb"
              }
              img={'./img1.jpg'}
              imgPosition={'left'}
              counter={10}
            />
            <Card
              title={
                "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your body a bbbbbbbbb"
              }
              img={'./img1.jpg'}
              imgPosition={'left'}
              counter={10}
            />
          </div>

          <div className={'flex flex-col gap-4'}>
            <Card
              title={text}
              img={'./img2.jpg'}
              imgPosition={'top'}
              counter={counter}
            />
            <Card
              title={text}
              img={'./img3.jpg'}
              imgPosition={'bottom'}
              counter={counter}
            />
            <Card
              title={"Drinking water isn't just about quenching aaa bbbb"}
              img={'./img2.jpg'}
              imgPosition={'top'}
              counter={10}
            />
            <Card
              title={"Drinking water isn't just about quenching aaa bbbb"}
              img={'./img3.jpg'}
              imgPosition={'bottom'}
              counter={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
