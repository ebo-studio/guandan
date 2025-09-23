import { Enum } from 'cc';
import { utils } from '../../common/utils';

export module PokerLogic {

  let JOKER_RED_POINT: number = 15;

  let MAX_SAME_POINT: number = 15;

  let MAX_LIAN_XU: number = 13;

  let t_sort_suit: number[] = [0, 1, 2, 3];

  let t_laizi: number[] = [];

  let hand_laizis: number[] = [];

  let point_sameple_count: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  let t_point_link_values: object[] = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  let DISCARD_CHAI_COUNT: number = 4

  let src_cards_data: number[] = [];

  //牌类型
  export enum TYPE {
    dan_zhang,                       //单张
    yi_dui,                          //一对
    san_zhang,                       //三张
    san_dai_dui,                     //三带一对
    san_lian_dui,                    //三连对
    san_lian_zhang,                  //三连张
    shun_zi,                         //顺子
    bomb_4,                          //四炸
    bomb_5,                          //五炸
    tong_hua_shun,                   //同花顺
    bomb_6,                          //六炸
    bomb_7,                          //七炸
    bomb_8,                          //八炸
    bomb_9,                          //九炸
    bomb_10,                         //十炸                 
    king_bomb,                       //天王炸
  }

  export const comb_type_name: string[] = [
    "单张",
    "一对",
    "三张",
    "三带对",
    "三连对",
    "钢板",
    "顺子",
    "四炸",
    "五炸",
    "同花顺",
    "六炸",
    "七炸",
    "八炸",
    "九炸",
    "十炸",
    "天王炸"
  ];

  //牌面值大小排序 根据级牌变动调整
  let t_sort_card_value: number[] = [0, 2, 3, 3 + 1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 14, 15];

  //逻辑配置表
  let logic_cofig_table: object[] = [
    //单张
    {
      type: TYPE.dan_zhang,
      min_count: 1,
      max_count: 1,
      min: 1,
      max: 15,
      increase: 0,
      step_len: 0,
      sameple_count: 1
    },

    //一对
    {
      type: TYPE.yi_dui,
      min_count: 2,
      max_count: 2,
      min: 1,
      max: 13,
      increase: 0,
      step_len: 0,
      sameple_count: 2
    },

    //三张
    {
      type: TYPE.san_zhang,
      min_count: 3,
      max_count: 3,
      min: 1,
      max: 13,
      increase: 0,
      step_len: 0,
      sameple_count: 3
    },

    //三带一对
    {
      type: TYPE.san_dai_dui,
      min_count: 5,
      max_count: 5,
      min: 1,
      max: 13,
      increase: 0,
      step_len: 0,
      sameple_count: 3,
      add: { type: TYPE.yi_dui, type_count: 1 }
    },

    //三连对
    {
      type: TYPE.san_lian_dui,
      min_count: 6,
      max_count: 6,
      min: 1,
      max: 13,
      increase: 1,
      step_len: 2,
      sameple_count: 2
    },

    //三连张
    {
      type: TYPE.san_lian_zhang,
      min_count: 6,
      max_count: 6,
      min: 1,
      max: 13,
      increase: 1,
      step_len: 3,
      sameple_count: 3
    },

    //顺子
    {
      type: TYPE.shun_zi,
      min_count: 5,
      max_count: 5,
      min: 1,
      max: 13,
      increase: 1,
      step_len: 1,
      sameple_count: 1
    },

    //四炸
    {
      type: TYPE.bomb_4,
      min_count: 4,
      max_count: 4,
      min: 1,
      max: 13,
      increase: 0,
      step_len: 0,
      sameple_count: 4
    },

    //五炸
    {
      type: TYPE.bomb_5,
      min_count: 5,
      max_count: 5,
      min: 1,
      max: 13,
      increase: 0,
      step_len: 0,
      sameple_count: 5
    },

    //同花顺
    {
      type: TYPE.tong_hua_shun,
      min_count: 5,
      max_count: 5,
      min: 1,
      max: 13,
      increase: 1,
      step_len: 1,
      sameple_count: 1,
      suit_sample: true
    },

    //六炸
    {
      type: TYPE.bomb_6,
      min_count: 6,
      max_count: 6,
      min: 1,
      max: 13,
      increase: 0,
      step_len: 0,
      sameple_count: 6
    },

    //七炸
    {
      type: TYPE.bomb_7,
      min_count: 7,
      max_count: 7,
      min: 1,
      max: 13,
      increase: 0,
      step_len: 0,
      sameple_count: 7
    },

    //八炸
    {
      type: TYPE.bomb_8,
      min_count: 8,
      max_count: 8,
      min: 1,
      max: 13,
      increase: 0,
      step_len: 0,
      sameple_count: 8
    },


    //九炸
    {
      type: TYPE.bomb_9,
      min_count: 9,
      max_count: 9,
      min: 1,
      max: 13,
      increase: 0,
      step_len: 0,
      sameple_count: 9
    },

    //十炸
    {
      type: TYPE.bomb_10,
      min_count: 10,
      max_count: 10,
      min: 1,
      max: 13,
      increase: 0,
      step_len: 0,
      sameple_count: 10
    },

    //天王炸
    {
      type: TYPE.king_bomb,
      min_count: 4,
      max_count: 4,
      min: 0,
      max: 0,
      increase: 0,
      step_len: 0,
      sameple_count: 2,
      special: [0x4E, 0x4F, 0x4E, 0x4F]
    }
  ];

  export function set_laizi(data: number[]) {
    t_laizi = data;
  }

  export function get_reverse_table(t: number[]) {
    let t_reverse = {}
    t.forEach((v, idx, array) => {
      t_reverse[v + ""] = idx;
    });
    return t_reverse
  }

  let t_reverse_sort_card_value: object = get_reverse_table(t_sort_card_value)

  export function init(jipai: number) {
    t_laizi = [jipai];
  }

  export function get_point(card_value: number) {
    return card_value % 16;
  }

  export function get_suit(card_value: number) {
    return Math.floor(card_value / 16);
  }

  export function check_is_laizi(card_value: number) {
    let len = t_laizi.length
    if (t_laizi.length == 0) {
      return false;
    }
    let i: number;
    for (i = 0; i < len; i++) {
      if (card_value == t_laizi[i]) {
        return true;
      }
    }
    return false;
  }

  export function get_laizi(card_datas: number[]) {
    hand_laizis = [];
    card_datas.forEach((v, idx, array) => {
      if (check_is_laizi(v)) {
        hand_laizis.push(v);
      }
    });
  }


  export function get_tonghua_shun(card_datas: number[], len: number = 5) {
    let sample_suit_t: number[][] = [[], [], [], [], []];
    let lai_zi_cards: number[] = [];

    card_datas.forEach((v, idx, array) => {
      if (!check_is_laizi(v)) {
        let suit = Math.floor(v / 16);
        sample_suit_t[suit].push(v);
      } else {
        lai_zi_cards.push(v);
      }
    });

    let comb_list: object[] = [];

    for (let i: number = 0; i < 4; i++) {
      for (let j: number = 0; j < lai_zi_cards.length; j++) {
        sample_suit_t[i].push(lai_zi_cards[j]);
      }

      if (sample_suit_t[i].length >= len) {
        get_poker_analysis_data(sample_suit_t[i]);
        let comb = get_cardcombs_by_type(TYPE.shun_zi, 0, len);
        if (comb && comb.length > 0) {
          for (let k: number = 0; k < comb.length; k++) {
            comb[k]["type"] = TYPE.tong_hua_shun;
            comb_list.push(comb[k]);
          }
        }
      }
    }

    return comb_list;
  }


  export function get_point_sameple_count_table(card_datas: number[]) {
    point_sameple_count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    if (card_datas === undefined) {
      return false;
    }

    if (card_datas.length == 0) {
      return false;
    }

    card_datas.forEach((v, idx, array) => {
      if (check_is_laizi(v) == false) {
        let point: number = get_point(v);
        point_sameple_count[point] = point_sameple_count[point] + 1;
      }
    });
  }

  export function get_point_link_cardvalue_map(card_datas: number[]) {
    t_point_link_values = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    card_datas.forEach((v, idx, array) => {
      if (check_is_laizi(v) == false) {
        let point: number = get_point(v);
        if ("values" in t_point_link_values[point] == false) {
          t_point_link_values[point]["values"] = [];
        }
        if ("idx" in t_point_link_values[point] == false) {
          t_point_link_values[point]["idx"] = 0;
        }
        t_point_link_values[point]["values"].push(v);
      }
    });
  }


  export function sort_list(t: object[]) {
    t.sort((a, b) => {
      if (a["need_laizi"] == b["need_laizi"]) {
        if (a["chai_pai"] == b["chai_pai"]) {
          return t_reverse_sort_card_value[a["point"]] - t_reverse_sort_card_value[b["point"]];
        } else {
          return a["chai_pai"] - b["chai_pai"];
        }
      }
      return a["need_laizi"] - b["need_laizi"];
    });
  }

  export function sort_combs(comb_list: object[]) {
    comb_list.sort((a, b) => {
      return t_reverse_sort_card_value[b["key"]] - t_reverse_sort_card_value[a["key"]];
    })
  }


  export function chai_pai_count(n: number, point: number, need_laizi: number) {
    if (need_laizi > 0) {
      return 0;
    }

    return point_sameple_count[point] - n;
  }

  export function get_same_count_list(n: number, laizi_use_once: boolean, key: number = 0) {
    let count_laizi: number = 0;
    count_laizi = hand_laizis.length;

    let same_count_list: object[] = [];
    let max_point: number = MAX_SAME_POINT;

    //单张可以跑到大王
    if (n == 1) {
      max_point = JOKER_RED_POINT;
    }

    let i: number;
    for (i = 1; i <= max_point; i++) {
      if (t_reverse_sort_card_value[i] > t_reverse_sort_card_value[key]) {
        if (point_sameple_count[i] >= n) {
          let chai_pai: number = chai_pai_count(n, i, 0)
          //拆炸弹 直接放弃
          if ((chai_pai > 0 && point_sameple_count[i] == DISCARD_CHAI_COUNT) == false) {
            same_count_list.push({
              point: i,
              need_laizi: 0,
              chai_pai: chai_pai_count(n, i, 0)
            });
          }
        } else {
          let need_laizi: number = n - point_sameple_count[i];
          if (need_laizi <= count_laizi) {
            same_count_list.push({
              point: i,
              need_laizi: need_laizi,
              chai_pai: chai_pai_count(n, i, need_laizi)
            });
          }

          if (laizi_use_once) {
            count_laizi = count_laizi - need_laizi;
          }
        }
      }
    }

    sort_list(same_count_list);

    return same_count_list
  }


  export function get_lianxu_by_sameple_count_no_laizi(n: number, key: number) {
    let t_lianxu: object[] = [];
    let lianxu_stack: object[] = [];

    let i: number;
    for (i = 1; i <= MAX_LIAN_XU; i++) {
      let point: number = t_sort_card_value[i];
      if (t_reverse_sort_card_value[point] > t_reverse_sort_card_value[key]) {
        let same_count: number = point_sameple_count[point];
        if (same_count >= n) {
          lianxu_stack.push({
            point: point,
            need_laizi: 0,
            chai_pai: 0
          })
        }

        if (same_count < n || i == MAX_LIAN_XU) {
          let len: number = lianxu_stack.length;
          if (len >= 2) {
            let clone_lianxu_stack: object[] = utils.deepCopy(lianxu_stack);
            t_lianxu.push(clone_lianxu_stack);
          }

          lianxu_stack = [];
        }
      }
    }

    //需要排序
    //sort_list(t_lianxu)

    return t_lianxu;
  }


  export function get_lianxu_by_sameple_count_has_laizi(n: number, key: number) {
    let t_lianxu: object[] = [];
    let lianxu_stack: object[] = [];

    let user_laizi_start_idx: number = -1;

    let count_laizi: number = hand_laizis.length;
    let tmp_laizi_count: number = count_laizi;

    let i: number = 1;

    while (i <= MAX_LIAN_XU) {
      let point: number = t_sort_card_value[i];
      if (t_reverse_sort_card_value[point] > t_reverse_sort_card_value[key]) {
        let sameple_count: number = point_sameple_count[point];
        let need_laizi: number = n - sameple_count;
        if (need_laizi <= 0) {
          lianxu_stack.push({
            point: point,
            need_laizi: 0,
          })
          if (i == MAX_LIAN_XU) {
            let len: number = lianxu_stack.length;
            if (len >= 2) {
              let clone_lianxu_stack: object[] = utils.deepCopy(lianxu_stack)
              t_lianxu.push(clone_lianxu_stack);
            }
            lianxu_stack = [];
            count_laizi = tmp_laizi_count;
          }

          i = i + 1;
        } else {
          if (count_laizi >= need_laizi) {
            count_laizi = count_laizi - need_laizi;

            lianxu_stack.push({
              point: point,
              need_laizi: need_laizi,
            })

            if (i == MAX_LIAN_XU) {
              let len: number = lianxu_stack.length;
              if (len >= 2) {
                let clone_lianxu_stack: object[] = utils.deepCopy(lianxu_stack)
                t_lianxu.push(clone_lianxu_stack);
              }

              lianxu_stack = [];
              count_laizi = tmp_laizi_count;
            }

            if (user_laizi_start_idx == -1) {
              user_laizi_start_idx = i;
            }

            i = i + 1;
          } else {
            let len: number = lianxu_stack.length;
            if (len >= 2) {
              let clone_lianxu_stack: object[] = utils.deepCopy(lianxu_stack)
              t_lianxu.push(clone_lianxu_stack);
            }

            lianxu_stack = [];
            count_laizi = tmp_laizi_count;

            if (user_laizi_start_idx != -1) {
              i = user_laizi_start_idx + 1
            } else {
              i = i + 1
            }

            user_laizi_start_idx = -1;
          }
        }
      } else {
        i = i + 1;
      }
    }

    //sort_list(t_lianxu);

    return t_lianxu;
  }


  export function get_lianxu_by_sameple_count(n: number, key: number = 0) {
    let count_laizi: number = hand_laizis.length;
    if (count_laizi == 0) {
      return get_lianxu_by_sameple_count_no_laizi(n, key)
    } else {
      return get_lianxu_by_sameple_count_has_laizi(n, key)
    }

  }


  export function handle_data_to_card_values(data: object, cards: number[], laizi_value_idx: object[], sameple_count: number) {
    let point: number = data["point"];
    let need_laizi: number = data["need_laizi"];

    let count = sameple_count - need_laizi;
    let tmp_count = point_sameple_count[point];
    point_sameple_count[point] = tmp_count - count;

    if (count > 0) {
      let link_values: object = t_point_link_values[point];
      let link_idx: number = link_values["idx"];
      let i: number;
      for (i = link_idx; i <= link_idx + count - 1; i++) {
        cards.push(link_values["values"][i]);
      }
      t_point_link_values[point]["idx"] = link_idx + count;
    }

    let i: number;
    for (i = 0; i < need_laizi; i++) {
      let value: number = hand_laizis.pop();
      cards.push(value);
      laizi_value_idx.push({
        replace_point: point,
        idx: cards.length - 1
      });
    }
  }


  export function handle_futi(add_type: TYPE, add_type_count: number, cards: number[], laizi_value_idx: object[]) {
    let logic_config_futi: object = logic_cofig_table[add_type];
    let sameple_count_futi: number = logic_config_futi["sameple_count"];

    let same_list_futi = get_same_count_list(sameple_count_futi, true)
    if (add_type_count <= same_list_futi.length) {
      let i: number;
      for (i = 0; i < add_type_count; i++) {
        handle_data_to_card_values(same_list_futi[i], cards, laizi_value_idx, sameple_count_futi)
      }

      return true
    }

    return false;
  }

  export function resert_handle_data(t_laizi_copy: number[]) {
    hand_laizis = t_laizi_copy;
    t_point_link_values.forEach((v, point, array) => {
      if (v && v["idx"] != 0) {
        let tmp_count: number = point_sameple_count[point];
        point_sameple_count[point] = tmp_count + v["idx"] - 1;
      }
    });

    t_point_link_values.forEach((v, point, array) => {
      if (v["idx"] !== undefined) {
        v["idx"] = 0;
      }
    });
  }


  export function get_fupai_count(add_type: TYPE, add_type_count: number) {
    let logic_config_futi: object = logic_cofig_table[add_type];
    let sameple_count_futi: number = logic_config_futi["sameple_count"];
    let futi_card_count: number = sameple_count_futi * add_type_count;

    return futi_card_count
  }


  export function get_no_increase_card_combs(comb_type: TYPE, key: number) {
    let logic_config: object = logic_cofig_table[comb_type];
    let min_count: number = logic_config["min_count"];
    let sameple_count: number = logic_config["sameple_count"];
    let add: object = logic_config["add"];

    let add_type: TYPE;
    let add_type_count: number;
    if (add !== undefined) {
      add_type = add["type"];
      add_type_count = add["type_count"];
    }

    let card_comb_list: object[] = [];
    let same_count_list = get_same_count_list(sameple_count, false, key);

    same_count_list.forEach((v, ii, array) => {
      let t_laizi_copy: number[] = utils.deepCopy(hand_laizis);

      let cards: number[] = [];
      let laizi_value_idx: object[] = [];
      handle_data_to_card_values(v, cards, laizi_value_idx, sameple_count);

      if (add !== undefined) {
        handle_futi(add_type, add_type_count, cards, laizi_value_idx);
      }

      if (min_count == cards.length) {
        let point = get_point(cards[0]);

        if (check_is_laizi(cards[0]) && cards.length != laizi_value_idx.length) {
          point = laizi_value_idx[0]["replace_point"];
        }

        card_comb_list.push({
          type: comb_type,
          key: point,
          cards: cards,
          step_len: 0,
          laizi_value_idx: laizi_value_idx,
        })
      }

      resert_handle_data(t_laizi_copy);
    });

    return card_comb_list;
  }

  export function is_exist_comb(key: number, comb_list: object[]) {
    comb_list.forEach((comb, idx, array) => {
      if (key == comb["key"]) {
        return true
      }
    });

    return false;
  }


  export function get_increase_card_combs(comb_type: TYPE, key: number, lianxu_len: number) {
    let logic_config: object = logic_cofig_table[comb_type];
    let min_count: number = logic_config["min_count"];
    let sameple_count: number = logic_config["sameple_count"];
    let add: object = logic_config["add"];

    let add_type: TYPE;
    let add_type_count: number;
    if (add !== undefined) {
      add_type = add["type"];
      add_type_count = add["type_count"];
    }

    let card_comb_list: object[] = [];

    let lianxu_list: object[] = get_lianxu_by_sameple_count(sameple_count, key);
    lianxu_list.forEach((v, idx, array) => {
      let len: number = (<object[]>v).length;
      if (len >= lianxu_len) {
        let i: number;
        for (i = 0; i < len - lianxu_len + 1; i++) {
          let t_laizi_copy: number[] = utils.deepCopy(hand_laizis);
          let cards: number[] = [];
          let laizi_value_idx: object[] = [];

          let j: number;
          for (j = i; j <= i + lianxu_len - 1; j++) {
            handle_data_to_card_values(v[j], cards, laizi_value_idx, sameple_count);
          }

          if (add !== undefined) {
            handle_futi(add_type, lianxu_len, cards, laizi_value_idx);
          }

          let futi_card_count: number = 0;
          if (add !== undefined) {
            futi_card_count = get_fupai_count(add_type, lianxu_len);
          }

          let need_len = lianxu_len * sameple_count + futi_card_count;
          if (need_len == cards.length) {
            let comb_key: number = get_point(cards[0]);
            if (check_is_laizi(cards[0]) && cards.length != laizi_value_idx.length) {
              comb_key = laizi_value_idx[0]["replace_point"];
            }

            if (is_exist_comb(comb_key, card_comb_list) == false) {
              card_comb_list.push({
                type: comb_type,
                key: comb_key,
                cards: cards,
                step_len: lianxu_len,
                laizi_value_idx: laizi_value_idx //癞子牌的原始值，以其在牌中对应的位置
              });
            }
          }

          resert_handle_data(t_laizi_copy);
        }
      }
    });

    return card_comb_list;
  }


  export function get_increase_no_len_limit_card_combs(comb_type: TYPE, key: number) {
    let logic_config: object = logic_cofig_table[comb_type];
    let min_count: number = logic_config["min_count"];
    let sameple_count: number = logic_config["sameple_count"];
    let step_len: number = logic_config["step_len"];
    let add: object = logic_config["add"];

    let add_type: TYPE;
    let add_type_count: number;
    if (add !== undefined) {
      add_type = add["type"];
      add_type_count = add["type_count"];
    }

    let card_comb_list: object[] = [];

    let lianxu_list: object[] = get_lianxu_by_sameple_count(sameple_count, key);
    lianxu_list.forEach((v, idx, array) => {
      let len: number = (<object[]>v).length;
      if (len >= step_len) {
        let t_laizi_copy: number[] = utils.deepCopy(hand_laizis);
        let cards: number[] = [];
        let laizi_value_idx: object[] = [];

        let i: number;
        for (i = 0; i < len; i++) {
          handle_data_to_card_values(v[i], cards, laizi_value_idx, sameple_count);
        }

        let futi_has_find: boolean = false;
        if (add !== undefined) {
          futi_has_find = handle_futi(add_type, len, cards, laizi_value_idx);
        }

        //生成牌组合数据
        let futi_card_count: number = 0;
        if (add !== undefined) {
          futi_card_count = get_fupai_count(add_type, len);
        }

        if ((add === undefined) || (add !== undefined && futi_has_find == true)) {
          let comb_key: number = get_point(cards[0]);


          if (check_is_laizi(cards[0]) && cards.length != laizi_value_idx.length) {
            comb_key = laizi_value_idx[0]["replace_point"];
          }

          card_comb_list.push({
            type: comb_type,
            key: comb_key,
            cards: cards,
            step_len: len,
            laizi_value_idx: laizi_value_idx
          });

        }

        resert_handle_data(t_laizi_copy);
      }
    });

    return card_comb_list;
  }


  export function is_exist_cards(data: number[]) {
    let has_cards: boolean = true;
    data.forEach((v, idx, array) => {
      let has_this_card: boolean = false;
      src_cards_data.forEach((value, ii, array) => {
        if (v == value) {
          has_this_card = true;
        }
      });
      if (has_this_card == false) {
        has_cards = false;
      }
    });

    return has_cards;
  }

  export function get_special_card_combs(comb_type: TYPE, data: number[]) {
    let card_comb_list: object[] = [];
    let has_special_comb: boolean = is_exist_cards(data);

    if (has_special_comb) {
      let comb_key: number = get_point(data[1]);
      card_comb_list.push({
        type: comb_type,
        key: comb_key,
        cards: data,
        step_len: 0
      });
    }

    return card_comb_list;
  }


  export function get_jion_special_card_card_combs(comb_type: TYPE, data: number[], key: number) {
    let logic_config: object = logic_cofig_table[comb_type];
    let min_count: number = logic_config["min_count"];
    let sameple_count: number = logic_config["sameple_count"];

    let card_comb_list: object[] = [];
    let same_count_list: object[] = get_same_count_list(sameple_count, false, key);
    same_count_list.forEach((v, idx, array) => {

      let t_laizi_copy: number[] = utils.deepCopy(hand_laizis);
      let cards: number[] = [];
      let laizi_value_idx: object[] = [];
      handle_data_to_card_values(v, cards, laizi_value_idx, sameple_count);

      if (is_exist_cards(data)) {
        data.forEach((value, idx, array) => {
          cards.push(value);
        });
      }

      if (min_count == cards.length && laizi_value_idx.length == 0) {
        let point: number = get_point(cards[0]);
        if (check_is_laizi(cards[0]) && cards.length != laizi_value_idx.length) {
          point = laizi_value_idx[0]["replace_point"];
        }

        card_comb_list.push({
          type: comb_type,
          key: point,
          cards: cards,
          step_len: 0,
          laizi_value_idx: laizi_value_idx
        })
      }

      resert_handle_data(t_laizi_copy);
    });

    return card_comb_list;
  }

  export function get_cardcombs_by_type(comb_type: TYPE, key: number = 0, lianxu_len: number = 0) {
    let logic_config: object = logic_cofig_table[comb_type];
    let increase: number = logic_config["increase"];
    let special: number[] = logic_config["special"];
    let add_values: number[] = logic_config["add_values"];

    if (special !== undefined) {
      return get_special_card_combs(comb_type, special);
    } else {
      if (increase == 0) {
        if (add_values !== undefined) {
          return get_jion_special_card_card_combs(comb_type, add_values, key);
        } else {
          return get_no_increase_card_combs(comb_type, key);
        }
      }

      if (logic_config["min_count"] == logic_config["max_count"]) {
        lianxu_len = logic_config["min_count"] / logic_config["sameple_count"];
      }

      if (lianxu_len != 0) {
        if (comb_type == TYPE.tong_hua_shun) {
          return get_tonghua_shun(utils.deepCopy(src_cards_data));
        } else {
          return get_increase_card_combs(comb_type, key, lianxu_len);
        }
      } else {
        return get_increase_no_len_limit_card_combs(comb_type, key);
      }
    }

    return [];
  }

  export function get_poker_analysis_data(card_datas: number[]) {
    src_cards_data = card_datas;
    get_laizi(card_datas);
    get_point_sameple_count_table(card_datas);
    get_point_link_cardvalue_map(card_datas);
  }


  export function get_card_type(card_datas: number[], type: TYPE = undefined) {
    if (type === undefined) {
      let t_comb: object[] = [];
      logic_cofig_table.forEach((config, comb_type, array) => {
        get_poker_analysis_data(utils.deepCopy(card_datas));
        let comb_list: object[] = get_cardcombs_by_type(comb_type);

        comb_list.forEach((v, ii, array) => {
          if ((<number[]>v["cards"]).length == card_datas.length) {
            t_comb.push(v);
          }
        });
      });


      return t_comb;
    } else {
      get_poker_analysis_data(utils.deepCopy(card_datas));
      let comb_list: object[] = get_cardcombs_by_type(type);
      return comb_list;

    }
  }
}
