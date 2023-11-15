import Menu from '../src/Model/Menu';
import { MENU } from '../src/constants';

const mockMenu = {
  해산물파스타: 2,
  레드와인: 1,
  초코케이크: 1,
};
const detail = {
  해산물파스타: {
    cost: MENU.해산물파스타.cost,
    quantity: 2,
    type: MENU.해산물파스타.type,
  },
  레드와인: {
    cost: MENU.레드와인.cost,
    quantity: 1,
    type: MENU.레드와인.type,
  },
  초코케이크: {
    cost: MENU.초코케이크.cost,
    quantity: 1,
    type: MENU.초코케이크.type,
  },
};

describe('Menu 클래스 테스트', () => {
  const menu = new Menu();

  test('입력받은 메뉴들의 갯수 배열을 반환한다.', () => {
    const result = menu.getOrderMenuQuantity(mockMenu);

    expect(result).toEqual([2, 1, 1]);
  });

  test('입력받은 메뉴의 상세정보를 반환한다.', () => {
    const result = menu.getOrderDetail(mockMenu);
    const expected = {
      해산물파스타: {
        cost: MENU.해산물파스타.cost,
        quantity: 2,
        type: MENU.해산물파스타.type,
      },
      레드와인: {
        cost: MENU.레드와인.cost,
        quantity: 1,
        type: MENU.레드와인.type,
      },
      초코케이크: {
        cost: MENU.초코케이크.cost,
        quantity: 1,
        type: MENU.초코케이크.type,
      },
    };

    expect(result).toEqual(expected);
  });

  test('입력받은 메뉴의 총 금액을 반환한다.', () => {
    const result = menu.getTotalCost(mockMenu);
    let expected = 0;

    for (const key in mockMenu) {
      expected += MENU[key].cost * mockMenu[key];
    }

    expect(result).toEqual(expected);
  });
});
