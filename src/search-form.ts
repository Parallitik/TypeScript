import { renderBlock } from './lib.js'

export function renderSearchFormBlock(CheckInDate: string = '', CheckOutDate: string = '') {
  const getToday = () => {
    let today = new Date();
    let yearOut = today.getFullYear();
    let monthOut = today.getMonth() + 1;
    let dayOut = today.getDate();
    return `${yearOut}-${monthOut}-${dayOut}`
  }

  const getDefaultCheckInDate = () => {
    let today = new Date();
    let tommorow = today.setDate(today.getDate() + 1);
    let yearOut = new Date(tommorow).getFullYear();
    let monthOut = new Date(tommorow).getMonth();
    let dayOut = new Date(tommorow).getDate(); 
    return `${yearOut}-${monthOut}-${dayOut}`
  }
  

  const getDefaultCheckOutDate = () => {
    let [year, month, day] = getDefaultCheckInDate().split('-');
    let lastDate = new Date(+year, +month, +day);
    let checkOutDay = lastDate.setDate(lastDate.getDate() + 2);
    let checkOutDate = new Date(checkOutDay)
    let yearOut = new Date(checkOutDate).getFullYear();
    let monthOut = new Date(checkOutDate).getMonth()
    let dayOut = new Date(checkOutDate).getDate(); 
    return `${yearOut}-${monthOut}-${dayOut}`
  }

  const getLastDayOfNextMonth = () => {
    let today = new Date();
    let nextMonth = today.setMonth(today.getMonth() + 2);
    let getMonth = new Date(nextMonth).getMonth()
    
    let lastDay = new Date(today.getFullYear(), getMonth, 0)

    let yearOut = new Date(lastDay).getFullYear();
    let monthOut = new Date(lastDay).getMonth() + 1;
    let dayOut = new Date(lastDay).getDate();

    return `${yearOut}-${monthOut}-${dayOut}`
  }

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${CheckInDate ? CheckInDate : getDefaultCheckInDate()}" min="${getToday()}" max="${getLastDayOfNextMonth()}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${CheckOutDate ? CheckOutDate : getDefaultCheckOutDate()}" min="${getToday()}" max="${getLastDayOfNextMonth()}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
