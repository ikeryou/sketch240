import { MyDisplay } from "../core/myDisplay";
import { Util } from "../libs/util";
import { Item } from "./item";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _tg:HTMLSelectElement;
  private _item:Array<Item> = [];

  constructor(opt:any) {
    super(opt)

    this._tg = document.createElement('select');
    document.body.append(this._tg);

    const o = document.createElement('option');
    o.innerHTML = '↓↓↓ABOUT↓↓↓'
    this._tg.append(o);

    let txt = ' devdev Incはインタラクティブなデジタルコンテンツの開発をする会社です。'
    let arr = Array.from(txt)
    const num = txt.length;
    const num2 = 1;
    let res:Array<string> = [];

    for(let i = 0; i < num; i++) {
      res[i] = ''
      for(let l = 0; l < num2; l++) {
        const key = ((i * num2) + l);
        if(key <= arr.length - 1) {
          res[i] += arr[key];
        }
      }
      const opt = document.createElement('option');
      opt.innerHTML = res[i]
      this._tg.append(opt);
    }

    this._resize();
  }


  protected _update(): void {
    super._update();
  }
}