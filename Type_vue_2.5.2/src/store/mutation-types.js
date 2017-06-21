
/**
 * @description 采用字符串格式来写mutations的函数名，好处是便于多人协作开发，
 *              其他开发者可以更好的获取mutations里面有哪些函数
 *                 tips: 在调用上，使用[type.xxx](state,outerData){}来写实际的函数逻辑
 *                     函数逻辑写在实际的mutations中
 */
export const ADD_TO_CART = 'ADD_TO_CART'
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
