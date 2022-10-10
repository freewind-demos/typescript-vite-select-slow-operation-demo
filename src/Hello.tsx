import React, {FC} from 'react';
import './Hello.pcss';

type Props = {};


export const Hello: FC<Props> = ({}) => {
  async function slowOperation() {
    console.log("### 111")
    await new Promise<void>((resolve) => {
      const start = new Date().getTime();
      while (true) {
        if (new Date().getTime() - start > 3000) {
          resolve()
          return;
        }
      }
    })
    console.log("### 222")
  }

  return <div className={'Hello'}>
    <select onChange={() => slowOperation()}>
      <option value={111}>111</option>
      <option value={222}>222</option>
      <option value={333}>333</option>
    </select>
  </div>;
}
