
/**
 * @description 采用字符串格式来写mutations的函数名，好处是便于多人协作开发，
 *              其他开发者可以更好的获取mutations里面有哪些函数
 *                 tips: 在调用上，使用[type.xxx](state,outerData){}来写实际的函数逻辑
 *                     函数逻辑写在实际的mutations中
 */
export const GET_SERVICE_LIST = 'GET_SERVICE_LIST'
export const GET_INFO_LIST = 'GET_INFO_LIST'
export const GET_ABOUT_LIST = 'GET_ABOUT_LIST'
/**
 * [description] get cart list
 */
export const GET_CART_LIST = 'GET_CART_LIST'
/**
 * [description] select shop checkbox
 */
export const ON_CHECK_SHOP = 'ON_CHECK_SHOP'
/**
 * [description] unselect shop checkbox
 */
export const UN_CHECK_SHOP = 'UN_CHECK_SHOP'
/**
 * [description] select one of checkbox
 */
export const ON_CHECK_ITEMS = 'ON_CHECK_ITEMS'
/**
 * [description] unselect one of checkbox
 */
export const UN_CHECK_ITEMS = 'UN_CHECK_ITEMS'
