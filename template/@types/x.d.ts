/* eslint-disable no-unused-vars */
/*
 * @Author: arvin
 * @Date: 2020-09-16 13:35:48
 * @Last Modified by: Arvin
 * @Last Modified time: 2021-01-19 18:05:37
 * @Desc 声明文件
 */

/** yes or no */
declare const enum YN {
    NO,
    YES
}

/** ajax请求类型 */
type Method = 'GET' | 'POST'

/** ajax返回类型 */
type AjaxRes = XMLHttpRequestResponseType

/** 参数类型 */
type Params = { [key: string]: string | number | unknown }

/** 事件捕获/事件冒泡 */
type Capture = boolean | { once?: boolean; passive?: boolean }

